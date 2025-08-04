'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";

import { usePathname } from 'next/navigation';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [userEmail, setUserEmail] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (data?.user) {
                setUserEmail(data.user.email || null);
            }
        };

        fetchUser();
    }, []);
    return (
        <div className="flex h-screen">
            <aside className="w-64 bg-green-800 text-white border-r border-green-700 h-full flex flex-col">
                <div className="flex items-center justify-center h-20 border-b border-green-700">
                    <img alt="AgriDash Logo" className="h-10 w-10 mr-3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCY9rKIS19VENyCVSMsHykbvcDJEzTdyq__ElH9fAkIPdVQkF144bZMSmDi4nleQiDMAT2kj1c4dKbZZAaDgI8SUSawvd_xyTOq6yhv3VjIZz-RQP5Na3GcDDvJxxuCHieBX_k3NCSF8t3JjmujoswA5GlVoTrvVcwIf9sitRIrAd16IlPLbqc7QNYW2ZsSCftcqdgmZf449Lbd9DJnQccYnIJZrh4h9FZ7X8D8P7uBBLUSrG_cWwRb9ROOXbomJ_T9oeX-U9ZKg" />
                    <span className="text-2xl font-bold">AgriDash</span>
                </div>
                <nav className="mt-6 flex-1 overflow-y-auto">
                    <h3 className="px-6 mb-2 text-xs font-semibold tracking-wider text-green-400 uppercase">Navigation</h3>
                    <ul>
                        <li>
                            <Link href="/dashboard" className={`flex items-center px-6 py-3 text-white hover:bg-green-700 ${pathname === '/dashboard' ? 'bg-green-700 font-bold' : ''}`}>
                                <span className="material-icons mr-3">dashboard</span>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/dokter-tani" className={`flex items-center px-6 py-3 text-white hover:bg-green-700 ${pathname === '/dashboard/dokter-tani' ? 'bg-green-700 font-bold' : ''}`}>
                                <span className="material-icons mr-3">medical_services</span>
                                Dokter Tani
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/weather-prediction" className={`flex items-center px-6 py-3 text-white hover:bg-green-700 ${pathname === '/dashboard/weather-prediction' ? 'bg-green-700 font-bold' : ''}`}>
                                <span className="material-icons mr-3">cloud</span>
                                Weather Prediction
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/calculator" className={`flex items-center px-6 py-3 text-white hover:bg-green-700 ${pathname === '/dashboard/calculator' ? 'bg-green-700 font-bold' : ''}`}>
                                <span className="material-icons mr-3">calculate</span>
                                Calculator
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/komunitani" className={`flex items-center px-6 py-3 text-white hover:bg-green-700 ${pathname === '/dashboard/komunitani' ? 'bg-green-700 font-bold' : ''}`}>
                                <span className="material-icons mr-3">groups</span>
                                Komunitani
                            </Link>
                        </li>
                    </ul>
                    <h3 className="px-6 mt-6 mb-2 text-xs font-semibold tracking-wider text-green-400 uppercase">Tools</h3>
                    <ul>
                        <li>
                            <a className="flex items-center px-6 py-3 text-white hover:bg-green-700" href="#">
                                <span className="material-icons mr-3">analytics</span>
                                Analytics
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center px-6 py-3 text-white hover:bg-green-700" href="#">
                                <span className="material-icons mr-3">settings</span>
                                Settings
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="flex-1 flex flex-col bg-gray-50 overflow-y-auto">
                <header className="flex items-center justify-between h-20 px-6 bg-white border-b">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                    </div>
                    <div className="flex items-center">
                        <button className="p-2 rounded-full hover:bg-gray-100">
                            <span className="material-icons text-gray-600">notifications</span>
                        </button>
                        <div className="ml-4 flex items-center">
                            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center font-bold text-green-800 text-xl">PB</div>
                            <div className="ml-3">
                                <p className="font-semibold text-md text-gray-800">{userEmail}</p>
                            </div>
                        </div>
                    </div>
                </header>
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;