
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dokter Tani - TaniMaju",
    description: "Dokter Tani for TaniMaju",
};

const DokterTaniPage = () => {
    return (
        <div className="flex-1 p-6">
            <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                <div className="p-4 border-b flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="material-icons text-green-500" style={{ fontSize: '32px' }}>psychology</span>
                    </div>
                    <div className="ml-4">
                        <h2 className="text-lg font-semibold text-gray-800">Dokter Tani AI</h2>
                        <p className="text-sm text-gray-500">Chatbot Diagnosa Penyakit Tanaman</p>
                    </div>
                </div>
                <div className="flex-1 p-6 overflow-y-auto">
                    <div className="flex items-start mb-4">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="material-icons text-green-500 text-lg">psychology</span>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-3 max-w-lg">
                            <p className="text-sm text-gray-700">Halo! Saya adalah Dokter Tani AI, asisten digital untuk diagnosa penyakit tanaman. Silakan upload foto tanaman Anda atau tanyakan masalah pertanian yang Anda alami.</p>
                            <p className="text-right text-xs text-gray-400 mt-2">18.41</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 border-t">
                    <div className="relative">
                        <input className="w-full pl-10 pr-12 py-3 border rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Ketik pesan atau upload foto tanaman..." type="text" />
                        <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">attach_file</span>
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
                            <span className="material-icons">send</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DokterTaniPage;
