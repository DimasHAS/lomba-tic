'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import supabase from '../../../config/supabaseClient';
import { useRouter } from 'next/navigation';

const SettingsPage = () => {
    const [activeSection, setActiveSection] = useState('profile');

    return (
        <div className="flex-1 p-8 bg-gray-50">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Pengaturan</h1>
            <div className="flex space-x-8">
                {/* Settings Navigation */}
                <aside className="w-1/4">
                    <nav className="space-y-2">
                        <a href="#" onClick={() => setActiveSection('profile')} className={`flex items-center px-4 py-3 rounded-lg ${activeSection === 'profile' ? 'bg-green-100 text-green-700 font-bold' : 'text-gray-600 hover:bg-gray-100'}`}>
                            <span className="material-icons mr-3">person</span>
                            Profil
                        </a>
                        <a href="#" onClick={() => setActiveSection('security')} className={`flex items-center px-4 py-3 rounded-lg ${activeSection === 'security' ? 'bg-green-100 text-green-700 font-bold' : 'text-gray-600 hover:bg-gray-100'}`}>
                            <span className="material-icons mr-3">lock</span>
                            Keamanan
                        </a>
                        <a href="#" onClick={() => setActiveSection('notifications')} className={`flex items-center px-4 py-3 rounded-lg ${activeSection === 'notifications' ? 'bg-green-100 text-green-700 font-bold' : 'text-gray-600 hover:bg-gray-100'}`}>
                            <span className="material-icons mr-3">notifications</span>
                            Notifikasi
                        </a>
                    </nav>
                </aside>

                {/* Settings Content */}
                <main className="w-3/4">
                    {activeSection === 'profile' && <ProfileSection />}
                    {activeSection === 'security' && <SecuritySection />}
                    {activeSection === 'notifications' && <NotificationsSection />}
                </main>
            </div>
        </div>
    );
};

const ProfileSection = () => {
    const [loading, setLoading] = useState(true);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [username, setUsername] = useState('');
    const [landArea, setLandArea] = useState<number | string>('');
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true);
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                setUserEmail(user.email || null);
                const { data: profile, error } = await supabase.from('profiles').select('username, avatar_url, land_area').eq('id', user.id).single();
                if (profile) {
                    setUsername(profile.username || '');
                    setAvatarUrl(profile.avatar_url || null);
                    setLandArea(profile.land_area || '');
                }
            }
            setLoading(false);
        };
        fetchProfile();
    }, []);

    const handleProfileUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            const updates = {
                id: user.id,
                username,
                land_area: landArea === '' || landArea === null ? null : parseFloat(String(landArea)),
                updated_at: new Date().toISOString(),
            };

            const { error } = await supabase.from('profiles').upsert(updates);

            if (error) {
                setMessage(`Error: ${error.message}`);
            } else {
                setMessage('Profil berhasil diperbarui!');
            }
        }
        setLoading(false);
    };

    const handleAvatarChange = async (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || event.target.files.length === 0) {
            return;
        }

        const file = event.target.files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        setUploading(true);

        const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);

        if (uploadError) {
            alert(uploadError.message);
            setUploading(false);
            return;
        }

        const { data: { user } } = await supabase.auth.getUser();
        if(user) {
            const { data: publicUrlData } = supabase.storage.from('avatars').getPublicUrl(filePath);
            const publicUrl = publicUrlData.publicUrl;
            const { error: updateError } = await supabase.from('profiles').update({ avatar_url: publicUrl }).eq('id', user.id);
            if (!updateError) {
                setAvatarUrl(publicUrl);
                alert('Avatar updated successfully!');
            } else {
                alert(updateError.message);
            }
        }
        setUploading(false);
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Informasi Profil</h2>
            <div className="flex items-center space-x-6 mb-8">
                <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center font-bold text-green-800 text-4xl overflow-hidden">
                    {avatarUrl ? <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" /> : (username ? username.charAt(0).toUpperCase() : 'U')}
                </div>
                <div>
                    <label htmlFor="avatar-upload" className="cursor-pointer px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                        {uploading ? 'Mengunggah...' : 'Unggah gambar baru'}
                    </label>
                    <input id="avatar-upload" type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" disabled={uploading} />
                    <p className="text-sm text-gray-500 mt-2">Untuk hasil terbaik, gunakan gambar minimal 256x256px dalam format .jpg atau .png.</p>
                </div>
            </div>
            <form onSubmit={handleProfileUpdate}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-md font-medium text-gray-800 mb-2">Nama Pengguna</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3" />
                    </div>
                    <div>
                        <label className="block text-md font-medium text-gray-800 mb-2">Alamat Email</label>
                        <input type="email" value={userEmail || ''} disabled className="w-full border border-gray-300 rounded-lg p-3 bg-gray-100" />
                    </div>
                    <div>
                        <label className="block text-md font-medium text-gray-800 mb-2">Luas Lahan (Hektar)</label>
                        <input type="number" step="any" value={landArea} onChange={(e) => setLandArea(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3" placeholder="Contoh: 2.5" />
                    </div>
                </div>
                {message && <p className={`p-3 rounded-lg my-4 ${message.startsWith('Error') ? 'text-red-600 bg-red-100' : 'text-green-600 bg-green-100'}`}>{message}</p>}
                <div className="mt-8 text-right">
                    <button type="submit" className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700" disabled={loading}>Simpan Perubahan</button>
                </div>
            </form>
        </div>
    );
};

const SecuritySection = () => {
    const router = useRouter();
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleUpdatePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
        setError('');
        if (newPassword.length < 6) {
            setError('Kata sandi minimal 6 karakter.');
            return;
        }
        const { error } = await supabase.auth.updateUser({ password: newPassword });
        if (error) {
            setError(error.message);
        } else {
            setMessage('Kata sandi berhasil diperbarui!');
            setNewPassword('');
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/login');
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Pengaturan Keamanan</h2>
            <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Ubah Kata Sandi</h3>
                <form onSubmit={handleUpdatePassword}>
                    <label className="block text-md font-medium text-gray-800 mb-2">Kata Sandi Baru</label>
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 mb-4" />
                    {message && <p className="text-green-600 bg-green-100 p-3 rounded-lg mb-4">{message}</p>}
                    {error && <p className="text-red-600 bg-red-100 p-3 rounded-lg mb-4">{error}</p>}
                    <button type="submit" className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700">Perbarui Kata Sandi</button>
                </form>
            </div>
            <hr className="my-8" />
            <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Keluar</h3>
                <p className="text-gray-600 mb-4">Keluar dari akun Anda secara instan.</p>
                <button onClick={handleLogout} className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700">Keluar</button>
            </div>
        </div>
    );
};

const NotificationsSection = () => {
    const [prefs, setPrefs] = useState({ email: true, push: false, weekly: true });

    useEffect(() => {
        const fetchPrefs = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { data: profile } = await supabase.from('profiles').select('notification_preferences').eq('id', user.id).single();
                if (profile && profile.notification_preferences) {
                    setPrefs(profile.notification_preferences);
                }
            }
        };
        fetchPrefs();
    }, []);

    const handleNotificationChange = async (key: string, value: boolean) => {
        const newPrefs = { ...prefs, [key]: value };
        setPrefs(newPrefs);
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            await supabase.from('profiles').update({ notification_preferences: newPrefs }).eq('id', user.id);
        }
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Pengaturan Notifikasi</h2>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">Notifikasi Email</h3>
                        <p className="text-gray-500">Menerima notifikasi email untuk pembaruan penting.</p>
                    </div>
                    <label className="switch">
                        <input type="checkbox" checked={prefs.email} onChange={(e) => handleNotificationChange('email', e.target.checked)} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">Notifikasi Push</h3>
                        <p className="text-gray-500">Dapatkan notifikasi push di perangkat Anda.</p>
                    </div>
                    <label className="switch">
                        <input type="checkbox" checked={prefs.push} onChange={(e) => handleNotificationChange('push', e.target.checked)} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">Ringkasan Mingguan</h3>
                        <p className="text-gray-500">Menerima ringkasan mingguan aktivitas pertanian Anda.</p>
                    </div>
                    <label className="switch">
                        <input type="checkbox" checked={prefs.weekly} onChange={(e) => handleNotificationChange('weekly', e.target.checked)} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;