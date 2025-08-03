'use client';

import { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// -- LEAFLET CSS --
import 'leaflet/dist/leaflet.css';

// --- DATA INTERFACES ---
interface WeatherData {
    location: { name: string; region: string; country: string; lat: number; lon: number };
    current: { temp: number; weather: { main: string; description: string; icon: string }; humidity: number; wind_speed: number };
    daily: { dt: number; temp: { day: number; night: number }; weather: { icon: string } }[];
}

// --- DYNAMIC MAP COMPONENT ---
const Map = dynamic(() => import('../../components/WeatherMap'), { 
    ssr: false,
    loading: () => <div className="h-full bg-gray-200 animate-pulse"></div>
});

// --- WEATHER ICON COMPONENT ---
const WeatherIcon = ({ icon, size }: { icon: string; size: number }) => (
    <Image 
        src={icon}
        alt="weather icon"
        width={size}
        height={size}
        unoptimized
    />
);

// --- MAIN PAGE COMPONENT ---
const WeatherPredictionPage = () => {
    const [city, setCity] = useState('Jakarta');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const mapPosition = useMemo(() => {
        if (weatherData) {
            return [weatherData.location.lat, weatherData.location.lon];
        }
        return [ -6.20, 106.81 ]; // Default to Jakarta
    }, [weatherData]);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!city.trim()) return;

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/weather?city=${city}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Tidak dapat menemukan lokasi');
            }
            setWeatherData(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex h-full bg-gray-100">
            {/* Left Panel: Weather Details */}
            <div className="w-full md:w-1/3 h-full overflow-y-auto p-6 bg-white shadow-lg">
                <div className="flex items-start mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <span className="material-icons text-blue-600" style={{ fontSize: '28px' }}>travel_explore</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">Prakiraan Cuaca</h1>
                        <p className="text-gray-600">Cari lokasi untuk melihat cuaca dan peta.</p>
                    </div>
                </div>

                <form onSubmit={handleSearch} className="flex items-center mb-6">
                    <input 
                        type="text" 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Masukkan nama kota..."
                        className="w-full border border-gray-300 rounded-l-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-900"
                    />
                    <button 
                        type="submit"
                        className="bg-blue-500 text-white p-3 rounded-r-lg hover:bg-blue-600 disabled:bg-blue-300 flex items-center justify-center h-full"
                        style={{height: '50px'}}
                        disabled={isLoading}
                    >
                        {isLoading ? <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span> : <span className="material-icons">search</span>}
                    </button>
                </form>

                {error && <p className="text-red-500 text-center p-4 bg-red-50 rounded-lg">Error: {error}</p>}

                {weatherData ? (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">{weatherData.location.name}</h2>
                            <p className="text-gray-600">{weatherData.location.region}, {weatherData.location.country}</p>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                            <WeatherIcon icon={weatherData.current.weather.icon} size={80} />
                            <p className="text-5xl font-bold text-gray-900">{Math.round(weatherData.current.temp)}°C</p>
                            <p className="text-gray-600 capitalize">{weatherData.current.weather.description}</p>
                            <div className="flex justify-around mt-4 text-sm">
                                <p><strong>Kelembapan:</strong> {weatherData.current.humidity}%</p>
                                <p><strong>Angin:</strong> {weatherData.current.wind_speed} m/s</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Prakiraan 5 Hari</h3>
                            <div className="space-y-2">
                                {weatherData.daily.slice(1, 6).map((day) => (
                                    <div key={day.dt} className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
                                        <p className="font-semibold w-1/3">{new Date(day.dt * 1000).toLocaleDateString('id-ID', { weekday: 'long' })}</p>
                                        <WeatherIcon icon={day.weather.icon} size={40} />
                                        <p className="w-1/4 text-right">{Math.round(day.temp.day)}° / {Math.round(day.temp.night)}°</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-gray-500 pt-10">
                        <p>Silakan cari lokasi untuk memulai.</p>
                    </div>
                )}
            </div>

            {/* Right Panel: Map */}
            <div className="hidden md:block md:w-2/3 h-full">
                 {isClient ? <Map position={mapPosition as [number, number]} /> : <div className="h-full bg-gray-200 animate-pulse"></div>}
            </div>
        </div>
    );
};

export default WeatherPredictionPage;
