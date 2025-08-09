'use client';

import { useEffect, useState } from 'react';
import { Metadata } from "next";
import Link from 'next/link';
import supabase from '../../config/supabaseClient';

// export const metadata: Metadata = {
//     title: "Dashboard - TaniMaju",
//     description: "Dashboard for TaniMaju",
// };

interface WeatherData {
    current: {
        temp: number;
        weather: {
            description: string;
        };
        humidity: number;
    };
}

const DashboardPage = () => {
    const [userName, setUserName] = useState<string>('TaniMaju User');
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [komunitaniCount, setKomunitaniCount] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const [landArea, setLandArea] = useState<number | null>(null);
    const [activePlants, setActivePlants] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            // Fetch user and profile data
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const username = user.user_metadata?.username || user.email?.split('@')[0] || 'TaniMaju User';
                setUserName(username);

                const { data: profile } = await supabase.from('profiles').select('land_area').eq('id', user.id).single();
                if (profile && profile.land_area) {
                    const area = profile.land_area;
                    setLandArea(area);
                    // Calculate active plants: 1 Ha = 10,000 m^2. Density = 20 plants/m^2
                    const calculatedPlants = area * 10000 * 20;
                    setActivePlants(calculatedPlants);
                } else {
                    setLandArea(0);
                    setActivePlants(0);
                }
            }

            // Fetch weather
            try {
                const weatherRes = await fetch('/api/weather?city=Jakarta');
                if (weatherRes.ok) {
                    const weatherData = await weatherRes.json();
                    setWeather(weatherData);
                }
            } catch (error) {
                console.error("Failed to fetch weather data", error);
            }

            // Fetch Komunitani data
            try {
                const komunitaniRes = await fetch('/api/harga-pangan');
                if (komunitaniRes.ok) {
                    const komunitaniData = await komunitaniRes.json();
                    setKomunitaniCount(komunitaniData.length);
                }
            } catch (error) {
                console.error("Failed to fetch komunitani data", error);
            }

            setLoading(false);
        };

        fetchData();
    }, []);


    return (
        <div className="flex-1 p-8 bg-gray-50">
            <h1 className="text-4xl font-bold text-gray-800">Selamat Datang, {userName}!</h1>
            <p className="mt-2 text-lg text-gray-600">Senang melihat Anda kembali. Mari kita lihat ringkasan aktivitas pertanian Anda hari ini.</p>
            
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-between items-start">
                        <p className="text-md font-semibold text-gray-700">Total Lahan</p>
                        <span className="material-icons text-green-500 text-3xl">landscape</span>
                    </div>
                    <p className="text-4xl font-bold mt-2 text-gray-800">{loading ? '...' : `${landArea || 0} Ha`}</p>
                    <p className="text-sm text-gray-600 mt-1">{landArea ? 'Data dari pengaturan profil' : 'Atur di pengaturan'}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-between items-start">
                        <p className="text-md font-semibold text-gray-700">Tanaman Aktif (Padi)</p>
                        <span className="material-icons text-yellow-500 text-3xl">eco</span>
                    </div>
                    <p className="text-4xl font-bold mt-2 text-gray-800">{loading ? '...' : activePlants.toLocaleString('id-ID')}</p>
                    <p className="text-sm text-gray-600 mt-1">Estimasi (20 tanaman/m²)</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-between items-start">
                        <p className="text-md font-semibold text-gray-700">Perkiraan Panen</p>
                        <span className="material-icons text-blue-500 text-3xl">event</span>
                    </div>
                    <p className="text-4xl font-bold mt-2 text-gray-800">45 Hari</p>
                    <p className="text-sm text-gray-600 mt-1">Padi varietas IR64</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-between items-start">
                        <p className="text-md font-semibold text-gray-700">Cuaca Hari Ini</p>
                        <span className="material-icons text-red-500 text-3xl">wb_sunny</span>
                    </div>
                    {loading ? <p className="text-4xl font-bold mt-2 text-gray-800">...</p> : (
                        weather ? <>
                            <p className="text-4xl font-bold mt-2 text-gray-800">{Math.round(weather.current.temp)}°C</p>
                            <p className="text-sm text-gray-600 mt-1 capitalize">{weather.current.weather.description}, {weather.current.humidity}% kelembaban</p>
                        </> : <p className="text-sm text-gray-600 mt-1">Data tidak tersedia</p>
                    )}
                </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <Link href="/dashboard/dokter-tani">
                    <div className="bg-white p-6 rounded-xl shadow-md h-full hover:shadow-lg transition-shadow duration-300">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center">
                                <div className="p-4 bg-green-100 rounded-xl">
                                    <span className="material-icons text-green-600 text-3xl">medical_services</span>
                                </div>
                                <h2 className="text-xl font-bold ml-4 text-gray-800">Dokter Tani</h2>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600 text-md">Digital Plant Pathology Expert - Upload photos for instant plant disease diagnosis</p>
                    </div>
                </Link>
                <Link href="/dashboard/weather-prediction">
                    <div className="bg-white p-6 rounded-xl shadow-md h-full hover:shadow-lg transition-shadow duration-300">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center">
                                <div className="p-4 bg-blue-100 rounded-xl">
                                    <span className="material-icons text-blue-600 text-3xl">cloud</span>
                                </div>
                                <h2 className="text-xl font-bold ml-4 text-gray-800">Weather Prediction</h2>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600 text-md">Real-time weather forecasts and yield predictions for optimal planting schedules</p>
                    </div>
                </Link>
                <Link href="/dashboard/calculator">
                    <div className="bg-white p-6 rounded-xl shadow-md h-full hover:shadow-lg transition-shadow duration-300">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center">
                                <div className="p-4 bg-orange-100 rounded-xl">
                                    <span className="material-icons text-orange-600 text-3xl">calculate</span>
                                </div>
                                <h2 className="text-xl font-bold ml-4 text-gray-800">Planting Calculator</h2>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600 text-md">Complete input planning calculator for full-cycle farming cost estimation</p>
                    </div>
                </Link>
                <Link href="/dashboard/komunitani">
                    <div className="bg-white p-6 rounded-xl shadow-md h-full hover:shadow-lg transition-shadow duration-300">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center">
                                <div className="p-4 bg-purple-100 rounded-xl">
                                    <span className="material-icons text-purple-600 text-3xl">groups</span>
                                </div>
                                <h2 className="text-xl font-bold ml-4 text-gray-800">Komunitani</h2>
                            </div>
                            <span className="text-lg font-bold text-purple-600">{loading ? '...' : komunitaniCount}</span>
                        </div>
                        <p className="mt-4 text-gray-600 text-md">Connect with fellow farmers, share experiences, and get community support</p>
                        <p className="mt-2 text-sm text-gray-500">Total Komoditas: {loading ? '...' : komunitaniCount}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default DashboardPage;