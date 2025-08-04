import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard - TaniMaju",
    description: "Dashboard for TaniMaju",
};

const DashboardPage = () => {
    return (
        <div className="flex-1 p-8 bg-gray-50">
            <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
            <p className="mt-2 text-gray-600">Selamat datang kembali, Pak Budi. Berikut adalah ringkasan aktivitas pertanian Anda.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-between items-start">
                        <p className="text-md font-semibold text-gray-700">Total Lahan</p>
                        <span className="material-icons text-green-500 text-3xl">landscape</span>
                    </div>
                    <p className="text-4xl font-bold mt-2 text-gray-800">2.5 Ha</p>
                    <p className="text-sm text-green-600 mt-1">+0.5 Ha dari bulan lalu</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-between items-start">
                        <p className="text-md font-semibold text-gray-700">Tanaman Aktif</p>
                        <span className="material-icons text-yellow-500 text-3xl">eco</span>
                    </div>
                    <p className="text-4xl font-bold mt-2 text-gray-800">3</p>
                    <p className="text-sm text-gray-600 mt-1">Padi, Jagung, Cabai</p>
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
                    <p className="text-4xl font-bold mt-2 text-gray-800">28°C</p>
                    <p className="text-sm text-gray-600 mt-1">Berawan, 70% kelembaban</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center">
                            <div className="p-4 bg-green-100 rounded-xl">
                                <span className="material-icons text-green-600 text-3xl">medical_services</span>
                            </div>
                            <h2 className="text-xl font-bold ml-4 text-gray-800">Dokter Tani</h2>
                        </div>
                        <span className="text-lg font-bold text-green-600">12</span>
                    </div>
                    <p className="mt-4 text-gray-600 text-md">Digital Plant Pathology Expert - Upload photos for instant plant disease diagnosis</p>
                    <p className="mt-2 text-sm text-gray-500">Deteksi Hari Ini: 12</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center">
                            <div className="p-4 bg-blue-100 rounded-xl">
                                <span className="material-icons text-blue-600 text-3xl">cloud</span>
                            </div>
                            <h2 className="text-xl font-bold ml-4 text-gray-800">Weather Prediction</h2>
                        </div>
                        <span className="text-lg font-bold text-blue-600">94%</span>
                    </div>
                    <p className="mt-4 text-gray-600 text-md">Real-time weather forecasts and yield predictions for optimal planting schedules</p>
                    <p className="mt-2 text-sm text-gray-500">Akurasi Prediksi: 94%</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center">
                            <div className="p-4 bg-orange-100 rounded-xl">
                                <span className="material-icons text-orange-600 text-3xl">calculate</span>
                            </div>
                            <h2 className="text-xl font-bold ml-4 text-gray-800">Planting Calculator</h2>
                        </div>
                        <span className="text-lg font-bold text-orange-600">28</span>
                    </div>
                    <p className="mt-4 text-gray-600 text-md">Complete input planning calculator for full-cycle farming cost estimation</p>
                    <p className="mt-2 text-sm text-gray-500">Kalkulasi Bulan Ini: 28</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center">
                            <div className="p-4 bg-purple-100 rounded-xl">
                                <span className="material-icons text-purple-600 text-3xl">groups</span>
                            </div>
                            <h2 className="text-xl font-bold ml-4 text-gray-800">Komunitani</h2>
                        </div>
                        <span className="text-lg font-bold text-purple-600">1,247</span>
                    </div>
                    <p className="mt-4 text-gray-600 text-md">Connect with fellow farmers, share experiences, and get community support</p>
                    <p className="mt-2 text-sm text-gray-500">Anggota Aktif: 1,247</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;