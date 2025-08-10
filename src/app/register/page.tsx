
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import supabase from '../../config/supabaseClient';
import { useNotification } from '../components/NotificationContext';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { showNotification } = useNotification();

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            showNotification('Password dan konfirmasi password tidak cocok!', 'error');
            return;
        }
        try {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        full_name: name,
                        username: username,
                    }
                }
            });
            if (error) throw error;
            showNotification('Pendaftaran berhasil! Silakan cek email Anda untuk memverifikasi akun Anda.', 'success');
            // Redirect user or update UI
        } catch (error: any) {
            showNotification(error.message, 'error');
        }
    };

    return (
        <div className="bg-gray-50">
            <div className="flex h-screen">
                <div className="w-1/2 bg-white flex flex-col justify-between p-16">
                    <div>
                        <div className="flex items-center space-x-2">
                            <span className="bg-green-500 text-white text-xl font-bold p-2 rounded">T</span>
                            <span className="text-2xl font-bold">TaniMaju</span>
                        </div>
                        <div className="mt-24">
                            <h1 className="text-5xl font-bold text-gray-800 leading-tight">Teknologi AI untuk Petani Indonesia yang Lebih Maju</h1>
                            <p className="text-gray-600 mt-6 text-lg">
                                Platform AI TaniMaju membantu petani meningkatkan produktivitas dengan diagnosis tanaman, prediksi panen, optimasi pupuk, dan wawasan berbasis data satelit. Bergabunglah dengan revolusi pertanian digital.
                            </p>
                            <div className="mt-12 space-y-4">
                                <button className="w-full bg-green-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition">Mulai Gratis Sekarang</button>
                                <button className="w-full border border-gray-300 text-gray-700 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">Pelajari Lebih Lanjut</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="w-1/2 flex items-center justify-center bg-gray-50 p-16">
                    <div className="w-full max-w-md bg-white p-12 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold text-center text-gray-800">Daftar ke TaniMaju</h2>
                        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
                            <div>
                                <label className="text-sm font-medium text-gray-700" htmlFor="name">Nama</label>
                                <input className="mt-1 block w-full px-4 py-3 border border-green-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-black" id="name" name="name" placeholder="Masukkan nama lengkap" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                                <input className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-black" id="email" name="email" placeholder="Masukkan alamat email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700" htmlFor="username">Username</label>
                                <input className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-black" id="username" name="username" placeholder="Pilih username unik" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="relative">
                                <label className="text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                                <input className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-black" id="password" name="password" placeholder="Buat password yang kuat" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="relative">
                                <label className="text-sm font-medium text-gray-700" htmlFor="confirmPassword">Konfirmasi Password</label>
                                <input className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-black" id="confirmPassword" name="confirmPassword" placeholder="Konfirmasi password Anda" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            
                            <button className="w-full bg-green-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition" type="submit">Daftar</button>
                        </form>
                        <p className="mt-6 text-center text-sm text-gray-600">
                            Sudah punya akun? <Link className="font-semibold text-green-500 hover:text-green-600" href="/login">Masuk sekarang</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
