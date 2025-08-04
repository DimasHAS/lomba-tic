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
        <div className="flex h-full bg-gray-50">
            {/* Left Panel: Weather Details */}
            <div className="w-full md:w-1/3 h-full overflow-y-auto p-8 bg-white shadow-lg">
                <div className="flex items-center mb-8">
                    <div className="bg-blue-500 p-4 rounded-full mr-4">
                        <span className="material-icons text-white" style={{ fontSize: '32px' }}>travel_explore</span>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Prakiraan Cuaca</h1>
                        <p className="text-gray-600">Cari lokasi untuk melihat cuaca dan peta.</p>
                    </div>
                </div>

                <form onSubmit={handleSearch} className="flex items-center mb-8">
                    <input 
                        type="text" 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Masukkan nama kota..."
                        className="w-full border border-gray-300 rounded-l-full p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-900 text-lg"
                    />
                    <button 
                        type="submit"
                        className="bg-blue-500 text-white p-4 rounded-r-full hover:bg-blue-600 disabled:bg-blue-300 flex items-center justify-center h-full transition-colors duration-300"
                        style={{height: '60px'}}
                        disabled={isLoading}
                    >
                        {isLoading ? <span className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></span> : <span className="material-icons">search</span>}
                    </button>
                </form>

                {error && <p className="text-red-600 text-center p-4 bg-red-100 rounded-lg shadow-md">Error: {error}</p>}

                {weatherData ? (
                    <div className="space-y-8 animate-fade-in">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-gray-900">{weatherData.location.name}</h2>
                            <p className="text-lg text-gray-600">{weatherData.location.region}, {weatherData.location.country}</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
                            <WeatherIcon icon={weatherData.current.weather.icon} size={100} />
                            <p className="text-7xl font-bold">{Math.round(weatherData.current.temp)}°C</p>
                            <p className="text-xl capitalize">{weatherData.current.weather.description}</p>
                            <div className="flex justify-around mt-6 text-md">
                                <p><strong>Kelembapan:</strong> {weatherData.current.humidity}%</p>
                                <p><strong>Angin:</strong> {weatherData.current.wind_speed} m/s</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Prakiraan 5 Hari</h3>
                            <div className="space-y-3">
                                {weatherData.daily.slice(1, 6).map((day, index) => (
                                    <div key={day.dt} className={`flex items-center justify-between bg-white rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md animate-slide-up-delay-${index}`}>
                                        <p className="font-bold text-lg w-1/3 text-gray-700">{new Date(day.dt * 1000).toLocaleDateString('id-ID', { weekday: 'long' })}</p>
                                        <WeatherIcon icon={day.weather.icon} size={50} />
                                        <p className="w-1/4 text-right text-lg text-gray-800">{Math.round(day.temp.day)}° / {Math.round(day.temp.night)}°</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-gray-500 pt-16">
                        <span className="material-icons text-6xl text-gray-300">location_on</span>
                        <p className="mt-4 text-lg">Silakan cari lokasi untuk memulai.</p>
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
