'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const supabase = createClientComponentClient();

  const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    });

    if (error) {
      setError(`Error: ${error.message}`);
    } else {
      setMessage('Jika email Anda terdaftar, Anda akan menerima link untuk reset password.');
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-50">
      <div className="flex min-h-screen">
        <div className="w-1/2 bg-gradient-to-br from-green-100 to-green-200 p-12 flex-col justify-between hidden lg:flex">
            <div>
                <div className="flex items-center gap-3">
                    <div className="bg-green-500 text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-md">T</div>
                    <span className="text-xl font-bold text-gray-800">TaniMaju</span>
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mt-24 leading-tight">Lupa Password Anda?</h1>
                <p className="text-gray-600 mt-6 text-lg">Jangan khawatir. Masukkan email Anda dan kami akan kirimkan instruksi untuk mengatur ulang password.</p>
            </div>
            <p className="text-sm text-gray-500">© 2025 TaniMaju. Semua Hak Dilindungi.</p>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
            <div className="w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Reset Password</h2>
                <form className="space-y-6" onSubmit={handlePasswordReset}>
                  <div className="relative">
                    <label htmlFor="email" className="sr-only">
                      Alamat Email
                    </label>
                    <svg className="absolute w-5 h-5 text-gray-400 top-1/2 left-4 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      placeholder="contoh@email.com"
                    />
                  </div>

                  {message && <p className="text-sm font-medium text-center text-green-600 bg-green-50 p-3 rounded-lg">{message}</p>}
                  {error && <p className="text-sm font-medium text-center text-red-600 bg-red-50 p-3 rounded-lg">{error}</p>}

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-4 py-3 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-70 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {loading ? 'Mengirim...' : 'Kirim Link Reset'}
                    </button>
                  </div>
                </form>
                <div className="text-sm text-center text-gray-600 mt-6">
                  <Link href="/login" className="font-medium text-green-600 hover:underline">
                    Kembali ke Halaman Login
                  </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}