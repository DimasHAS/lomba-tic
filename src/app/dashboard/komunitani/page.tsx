import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Komunitani - TaniMaju",
    description: "Komunitani for TaniMaju",
};

const KomunitaniPage = () => {
    return (
        <main className="flex-1 overflow-y-auto bg-white p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-800 flex items-center">
                    <span className="material-icons mr-2">bar_chart</span> Monitor Harga Pangan Nasional
                </h1>
                <button className="px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md flex items-center">
                    <span className="material-icons text-green-500 text-base mr-2">fiber_manual_record</span> Live Update
                </button>
            </div>
            <div className="grid grid-cols-4 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Total Komoditas</p>
                    <p className="text-3xl font-bold text-gray-800">6</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Harga Naik</p>
                    <p className="text-3xl font-bold text-green-500">3</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Harga Turun</p>
                    <p className="text-3xl font-bold text-orange-500">2</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Rata-rata</p>
                    <p className="text-xl font-bold text-red-500 flex items-center">
                        +1.1%
                    </p>
                </div>
            </div>
            <div className="flex mb-6 border border-gray-200 rounded-lg p-1">
                <button className="w-1/3 py-2 text-center text-sm font-semibold text-gray-800 bg-white rounded-md shadow-sm">Overview</button>
                <button className="w-1/3 py-2 text-center text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md">Trend</button>
                <button className="w-1/3 py-2 text-center text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md">Analisis</button>
            </div>
            <div className="flex justify-between items-center mb-4">
                <div className="relative w-1/3">
                    <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">search</span>
                    <input className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Cari Komoditas..." type="text" />
                </div>
                <div className="flex items-center space-x-4">
                    <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Semua</option>
                    </select>
                    <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Jakarta</option>
                    </select>
                </div>
            </div>
            <div className="bg-white rounded-lg relative">
                <div className="overflow-y-auto" style={{ height: 'calc(100vh - 430px)' }}>
                    <div className="divide-y divide-gray-200">
                        <div className="flex items-center justify-between p-4 hover:bg-gray-50">
                            <div className="flex items-center">
                                <div>
                                    <p className="font-semibold text-gray-800">Beras Premium <span className="text-sm font-normal text-gray-600">Beras</span></p>
                                    <div className="flex items-center text-xs text-gray-600 mt-1">
                                        <span className="material-icons text-sm mr-1">location_on</span>
                                        <span>Jakarta</span>
                                        <span className="mx-2">•</span>
                                        <span>2 jam lalu</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-gray-800">Rp 12.500 <span className="text-sm font-normal text-gray-600">/kg</span></p>
                                <div className="flex items-center justify-end text-sm text-red-500">
                                    <span className="material-icons text-base">arrow_upward</span>
                                    <span>+4.2%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 hover:bg-gray-50">
                            <div>
                                <p className="font-semibold text-gray-800">Ayam Broiler <span className="text-sm font-normal text-gray-600">Daging</span></p>
                                <div className="flex items-center text-xs text-gray-600 mt-1">
                                    <span className="material-icons text-sm mr-1">location_on</span>
                                    <span>Jakarta</span>
                                    <span className="mx-2">•</span>
                                    <span>1 jam lalu</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-gray-800">Rp 32.000 <span className="text-sm font-normal text-gray-600">/kg</span></p>
                                <div className="flex items-center justify-end text-sm text-green-500">
                                    <span className="material-icons text-base">arrow_downward</span>
                                    <span>-5.8%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 hover:bg-gray-50">
                            <div>
                                <p className="font-semibold text-gray-800">Telur Ayam <span className="text-sm font-normal text-gray-600">Telur</span></p>
                                <div className="flex items-center text-xs text-gray-600 mt-1">
                                    <span className="material-icons text-sm mr-1">location_on</span>
                                    <span>Jakarta</span>
                                    <span className="mx-2">•</span>
                                    <span>3 jam lalu</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-gray-800">Rp 28.000 <span className="text-sm font-normal text-gray-600">/kg</span></p>
                                <div className="flex items-center justify-end text-sm text-red-500">
                                    <span className="material-icons text-base">arrow_upward</span>
                                    <span>+1.8%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 hover:bg-gray-50">
                            <div>
                                <p className="font-semibold text-gray-800">Minyak Goreng <span className="text-sm font-normal text-gray-600">Minyak</span></p>
                                <div className="flex items-center text-xs text-gray-600 mt-1">
                                    <span className="material-icons text-sm mr-1">location_on</span>
                                    <span>Jakarta</span>
                                    <span className="mx-2">•</span>
                                    <span>1 jam lalu</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-gray-800">Rp 16.000 <span className="text-sm font-normal text-gray-600">/liter</span></p>
                                <div className="flex items-center justify-end text-sm text-green-500">
                                    <span className="material-icons text-base">arrow_downward</span>
                                    <span>-3.0%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 hover:bg-gray-50">
                            <div>
                                <p className="font-semibold text-gray-800">Gula Pasir <span className="text-sm font-normal text-gray-600">Gula</span></p>
                                <div className="flex items-center text-xs text-gray-600 mt-1">
                                    <span className="material-icons text-sm mr-1">location_on</span>
                                    <span>Jakarta</span>
                                    <span className="mx-2">•</span>
                                    <span>4 jam lalu</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-gray-800">Rp 14.000 <span className="text-sm font-normal text-gray-600">/kg</span></p>
                                <div className="flex items-center justify-end text-sm text-gray-600">
                                    <span className="material-icons text-base">trending_flat</span>
                                    <span>0.0%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 h-full w-2">
                    <div className="bg-gray-300 rounded-full w-1.5 h-1/2 mx-auto"></div>
                </div>
            </div>
        </main>
    );
};

export default KomunitaniPage;