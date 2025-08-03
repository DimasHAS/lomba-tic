'use client';

import { useState, useMemo } from 'react';
import { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: "Kalkulator Kebutuhan Pupuk - TaniMaju",
//     description: "Hitung kebutuhan pupuk untuk tanaman Anda",
// };

// Data dosis pupuk per hektar (dalam kg)
const fertilizerData: Record<string, { urea: number; sp36: number; kcl: number }> = {
    padi: { urea: 250, sp36: 100, kcl: 100 },
    jagung: { urea: 350, sp36: 150, kcl: 100 },
    kedelai: { urea: 50, sp36: 100, kcl: 50 },
    cabai: { urea: 200, sp36: 150, kcl: 200 },
    bawang_merah: { urea: 150, sp36: 150, kcl: 150 },
};

const formatNumber = (num: number) => {
    return new Intl.NumberFormat('id-ID').format(num);
};

const CalculatorPage = () => {
    const [landArea, setLandArea] = useState<string>('1');
    const [cropType, setCropType] = useState<string>('padi');

    const calculatedNeeds = useMemo(() => {
        const area = parseFloat(landArea);
        if (isNaN(area) || area <= 0 || !cropType) {
            return { urea: 0, sp36: 0, kcl: 0 };
        }

        const dosage = fertilizerData[cropType];
        if (!dosage) {
            return { urea: 0, sp36: 0, kcl: 0 };
        }

        return {
            urea: area * dosage.urea,
            sp36: area * dosage.sp36,
            kcl: area * dosage.kcl,
        };
    }, [landArea, cropType]);

    return (
        <div className="p-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-4xl mx-auto">
                <div className="flex items-start mb-8">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                        <span className="material-icons text-green-600" style={{ fontSize: '28px' }}>calculate</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">Kalkulator Kebutuhan Pupuk</h1>
                        <p className="text-gray-600">Rencanakan kebutuhan pupuk Anda dengan akurat.</p>
                    </div>
                </div>

                {/* Input Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-8 p-6 bg-gray-50 rounded-lg">
                    <div>
                        <label className="block text-sm font-medium text-gray-800 mb-2" htmlFor="land-area">
                            Luas Lahan (hektar)
                        </label>
                        <input 
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition text-gray-900"
                            id="land-area" 
                            placeholder="Contoh: 1.5"
                            type="number"
                            value={landArea}
                            onChange={(e) => setLandArea(e.target.value)}
                            min="0"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-800 mb-2" htmlFor="crop-type">
                            Jenis Tanaman
                        </label>
                        <div className="relative">
                            <select 
                                className="w-full border border-gray-300 rounded-lg p-3 appearance-none pr-8 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition bg-white text-gray-900"
                                id="crop-type"
                                value={cropType}
                                onChange={(e) => setCropType(e.target.value)}
                            >
                                <option value="padi">Padi</option>
                                <option value="jagung">Jagung</option>
                                <option value="kedelai">Kedelai</option>
                                <option value="cabai">Cabai</option>
                                <option value="bawang_merah">Bawang Merah</option>
                            </select>
                            <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">expand_more</span>
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center mb-4">
                        <span className="material-icons text-green-500 mr-2">inventory_2</span>
                        Hasil Perhitungan Kebutuhan Pupuk
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b border-gray-200">
                                    <th className="py-3 px-4 text-sm font-medium text-gray-600">Jenis Pupuk</th>
                                    <th className="py-3 px-4 text-sm font-medium text-gray-600 text-right">Jumlah Kebutuhan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 px-4 flex items-center text-gray-800">
                                        <span className="material-icons text-blue-500 mr-3">grain</span>Urea
                                    </td>
                                    <td className="py-4 px-4 text-gray-800 font-semibold text-right">{formatNumber(calculatedNeeds.urea)} kg</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 px-4 flex items-center text-gray-800">
                                        <span className="material-icons text-orange-500 mr-3">grain</span>SP-36
                                    </td>
                                    <td className="py-4 px-4 text-gray-800 font-semibold text-right">{formatNumber(calculatedNeeds.sp36)} kg</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 px-4 flex items-center text-gray-800">
                                        <span className="material-icons text-red-500 mr-3">grain</span>KCl
                                    </td>
                                    <td className="py-4 px-4 text-gray-800 font-semibold text-right">{formatNumber(calculatedNeeds.kcl)} kg</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8 text-sm text-gray-500">
                    <p><strong>Catatan:</strong> Perhitungan ini adalah estimasi berdasarkan dosis umum. Kebutuhan pupuk sebenarnya dapat bervariasi tergantung pada kondisi tanah, iklim, dan varietas tanaman. Selalu lakukan uji tanah untuk rekomendasi yang lebih akurat.</p>
                </div>
            </div>
        </div>
    );
};

export default CalculatorPage;
