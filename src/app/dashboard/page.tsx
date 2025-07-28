import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard - TaniMaju",
    description: "Dashboard for TaniMaju",
};

const DashboardPage = () => {
    return (
        <div className="flex-1 p-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="mt-2 text-gray-700">Selamat datang kembali, Pak Budi. Berikut adalah ringkasan aktivitas pertanian Anda.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-start">
                        <p className="text-sm text-gray-700">Total Lahan</p>
                        <span className="material-icons text-gray-500">landscape</span>
                    </div>
                    <p className="text-3xl font-bold mt-2">2.5 Ha</p>
                    <p className="text-xs text-gray-600 mt-1">+0.5 Ha dari bulan lalu</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-start">
                        <p className="text-sm text-gray-700">Tanaman Aktif</p>
                        <span className="material-icons text-gray-500">eco</span>
                    </div>
                    <p className="text-3xl font-bold mt-2">3</p>
                    <p className="text-xs text-gray-600 mt-1">Padi, Jagung, Cabai</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-start">
                        <p className="text-sm text-gray-700">Perkiraan Panen</p>
                        <span className="material-icons text-gray-500">event</span>
                    </div>
                    <p className="text-3xl font-bold mt-2">45 Hari</p>
                    <p className="text-xs text-gray-600 mt-1">Padi varietas IR64</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-start">
                        <p className="text-sm text-gray-700">Cuaca Hari Ini</p>
                        <span className="material-icons text-gray-500">wb_sunny</span>
                    </div>
                    <p className="text-3xl font-bold mt-2">28°C</p>
                    <p className="text-xs text-gray-600 mt-1">Berawan, 70% kelembaban</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center">
                            <div className="p-3 bg-green-100 rounded-lg">
                                <span className="material-icons text-green-600">medical_services</span>
                            </div>
                            <h2 className="text-lg font-semibold ml-4">Dokter Tani</h2>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">12</span>
                    </div>
                    <p className="mt-4 text-gray-700 text-sm">Digital Plant Pathology Expert - Upload photos for instant plant disease diagnosis</p>
                    <p className="mt-2 text-xs text-gray-600">Deteksi Hari Ini: 12</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <span className="material-icons text-blue-600">cloud</span>
                            </div>
                            <h2 className="text-lg font-semibold ml-4">Weather Prediction</h2>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">94%</span>
                    </div>
                    <p className="mt-4 text-gray-700 text-sm">Real-time weather forecasts and yield predictions for optimal planting schedules</p>
                    <p className="mt-2 text-xs text-gray-600">Akurasi Prediksi: 94%</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center">
                            <div className="p-3 bg-orange-100 rounded-lg">
                                <span className="material-icons text-orange-600">calculate</span>
                            </div>
                            <h2 className="text-lg font-semibold ml-4">Planting Calculator</h2>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">28</span>
                    </div>
                    <p className="mt-4 text-gray-700 text-sm">Complete input planning calculator for full-cycle farming cost estimation</p>
                    <p className="mt-2 text-xs text-gray-600">Kalkulasi Bulan Ini: 28</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center">
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <span className="material-icons text-purple-600">groups</span>
                            </div>
                            <h2 className="text-lg font-semibold ml-4">Komunitani</h2>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">1,247</span>
                    </div>
                    <p className="mt-4 text-gray-700 text-sm">Connect with fellow farmers, share experiences, and get community support</p>
                    <p className="mt-2 text-xs text-gray-600">Anggota Aktif: 1,247</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;