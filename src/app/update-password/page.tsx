'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useNotification } from '../components/NotificationContext';

export default function UpdatePassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();
  const { showNotification } = useNotification();

  const handleUpdatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.length < 6) {
      showNotification('Password harus lebih dari 6 karakter.', 'error');
      return;
    }
    if (password !== confirmPassword) {
      showNotification('Password tidak cocok!', 'error');
      return;
    }
    setLoading(true);

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      showNotification(`Error: ${error.message}`, 'error');
    } else {
      showNotification('Password Anda berhasil diperbarui. Anda akan dialihkan ke halaman login.', 'success');
      setTimeout(() => {
        router.push('/login');
      }, 3000);
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
                <h1 className="text-4xl font-bold text-gray-800 mt-24 leading-tight">Atur Ulang Password Anda</h1>
                <p className="text-gray-600 mt-6 text-lg">Keamanan akun Anda adalah prioritas kami. Silakan buat password baru yang kuat.</p>
            </div>
            <p className="text-sm text-gray-500">© 2025 TaniMaju. Semua Hak Dilindungi.</p>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
            <div className="w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Buat Password Baru</h2>
                <form className="space-y-6" onSubmit={handleUpdatePassword}>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700 sr-only"
                    >
                      Password Baru
                    </label>
                    <div className="relative">
                      <svg className="absolute w-5 h-5 text-gray-400 top-1/2 left-4 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition text-gray-900"
                        placeholder="Masukkan password baru"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="text-sm font-medium text-gray-700 sr-only"
                    >
                      Konfirmasi Password Baru
                    </label>
                    <div className="relative">
                      <svg className="absolute w-5 h-5 text-gray-400 top-1/2 left-4 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                      <input
                        id="confirm-password"
                        name="confirm-password"
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition text-gray-900"
                        placeholder="Konfirmasi password baru"
                      />
                    </div>
                  </div>

                  

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-4 py-3 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-70 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {loading ? 'Memperbarui...' : 'Update Password'}
                    </button>
                  </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}
