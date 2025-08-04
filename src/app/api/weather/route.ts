import { NextRequest, NextResponse } from 'next/server';

// IMPORTANT: Replace with your actual WeatherAPI.com API Key
const API_KEY = process.env.WEATHERAPI_API_KEY || 'YOUR_WEATHERAPI_API_KEY';

if (!API_KEY || API_KEY === 'YOUR_WEATHERAPI_API_KEY') {
  console.warn('WeatherAPI.com API key is not set. Please set the WEATHERAPI_API_KEY environment variable.');
}

// Function to transform the API response to match the frontend's expected structure
function transformWeatherData(data: any) {
    return {
        location: {
            name: data.location.name,
            region: data.location.region,
            country: data.location.country,
            lat: data.location.lat,
            lon: data.location.lon,
        },
        current: {
            temp: data.current.temp_c,
            weather: {
                main: data.current.condition.text,
                description: data.current.condition.text, 
                icon: `https:${data.current.condition.icon}`,
            },
            humidity: data.current.humidity,
            wind_speed: parseFloat((data.current.wind_kph / 3.6).toFixed(2)), // Convert kph to m/s
        },
        daily: data.forecast.forecastday.map((day: any) => ({
            dt: day.date_epoch,
            temp: {
                day: day.day.maxtemp_c,
                night: day.day.mintemp_c,
            },
            weather: {
                main: day.day.condition.text,
                description: day.day.condition.text,
                icon: `https:${day.day.condition.icon}`,
            },
        })),
    };
}

export async function GET(req: NextRequest) {
    if (!API_KEY || API_KEY === 'YOUR_WEATHERAPI_API_KEY') {
        return NextResponse.json({ error: 'WeatherAPI.com API key not configured.' }, { status: 500 });
    }

    const { searchParams } = new URL(req.url);
    const city = searchParams.get('city');

    if (!city) {
        return NextResponse.json({ error: 'City is required' }, { status: 400 });
    }

    const FORECAST_DAYS = 7;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${FORECAST_DAYS}&aqi=no&alerts=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            return NextResponse.json({ error: data.error.message }, { status: 404 });
        }

        const transformedData = transformWeatherData(data);
        return NextResponse.json(transformedData);

    } catch (error) {
        console.error('Error in weather API route:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}