
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
            <aside className="w-64 bg-white border-r">
                <div className="flex items-center justify-center h-16 border-b">
                    <img alt="AgriDash Logo" className="h-8 w-8 mr-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCY9rKIS19VENyCVSMsHykbvcDJEzTdyq__ElH9fAkIPdVQkF144bZMSmDi4nleQiDMAT2kj1c4dKbZZAaDgI8SUSawvd_xyTOq6yhv3VjIZz-RQP5Na3GcDDvJxxuCHieBX_k3NCSF8t3JjmujoswA5GlVoTrvVcwIf9sitRIrAd16IlPLbqc7QNYW2ZsSCftcqdgmZf449Lbd9DJnQccYnIJZrh4h9FZ7X8D8P7uBBLUSrG_cWwRb9ROOXbomJ_T9oeX-U9ZKg" />
                    <span className="text-xl font-bold">AgriDash</span>
                </div>
                <nav className="mt-6">
                    <h3 className="px-6 mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">Navigation</h3>
                    <ul>
                        <li>
                            <Link href="/dashboard" className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 ${pathname === '/dashboard' ? 'bg-gray-100 font-semibold' : ''}`}>
                                <span className="material-icons mr-3">dashboard</span>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/dokter-tani" className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 ${pathname === '/dashboard/dokter-tani' ? 'bg-gray-100 font-semibold' : ''}`}>
                                <span className="material-icons mr-3">medical_services</span>
                                Dokter Tani
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/weather-prediction" className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 ${pathname === '/dashboard/weather-prediction' ? 'bg-gray-100 font-semibold' : ''}`}>
                                <span className="material-icons mr-3">cloud</span>
                                Weather Prediction
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/calculator" className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 ${pathname === '/dashboard/calculator' ? 'bg-gray-100 font-semibold' : ''}`}>
                                <span className="material-icons mr-3">calculate</span>
                                Calculator
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/komunitani" className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 ${pathname === '/dashboard/komunitani' ? 'bg-gray-100 font-semibold' : ''}`}>
                                <span className="material-icons mr-3">groups</span>
                                Komunitani
                            </Link>
                        </li>
                    </ul>
                    <h3 className="px-6 mt-6 mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">Tools</h3>
                    <ul>
                        <li>
                            <a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#">
                                <span className="material-icons mr-3">analytics</span>
                                Analytics
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#">
                                <span className="material-icons mr-3">settings</span>
                                Settings
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="flex-1 flex flex-col">
                <header className="flex items-center justify-between h-16 px-6 bg-white border-b">
                    <div></div>
                    <div className="flex items-center">
                        <button className="p-2 rounded-full hover:bg-gray-100">
                            <span className="material-icons text-gray-600">notifications_none</span>
                        </button>
                        <div className="ml-4 flex items-center">
                            <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center font-bold text-blue-800">PB</div>
                            <div className="ml-2">
                                <p className="font-semibold text-sm">{userEmail}</p>
                                
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
