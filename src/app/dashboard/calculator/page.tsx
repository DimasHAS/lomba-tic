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
        <div className="p-8 bg-gray-50">
            <div className="bg-white border border-gray-200 rounded-xl shadow-md max-w-4xl mx-auto">
                <div className="flex items-center p-6 bg-green-600 text-white rounded-t-xl">
                    <div className="bg-white p-3 rounded-full mr-4">
                        <span className="material-icons text-green-600" style={{ fontSize: '32px' }}>calculate</span>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Kalkulator Kebutuhan Pupuk</h1>
                        <p className="text-green-100">Rencanakan kebutuhan pupuk Anda dengan akurat.</p>
                    </div>
                </div>

                {/* Input Section */}
                <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-8 p-6 bg-gray-100 rounded-lg">
                        <div>
                            <label className="block text-md font-medium text-gray-800 mb-2" htmlFor="land-area">
                                Luas Lahan (hektar)
                            </label>
                            <input 
                                className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition text-gray-900 text-lg"
                                id="land-area" 
                                placeholder="Contoh: 1.5"
                                type="number"
                                value={landArea}
                                onChange={(e) => setLandArea(e.target.value)}
                                min="0"
                            />
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-800 mb-2" htmlFor="crop-type">
                                Jenis Tanaman
                            </label>
                            <div className="relative">
                                <select 
                                    className="w-full border border-gray-300 rounded-lg p-4 appearance-none pr-10 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition bg-white text-gray-900 text-lg"
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
                                <span className="material-icons absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">expand_more</span>
                            </div>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-4">
                            <span className="material-icons text-green-500 mr-3">inventory_2</span>
                            Hasil Perhitungan
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div className="bg-blue-100 p-6 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-blue-800">Urea</h3>
                                <p className="text-4xl font-bold text-blue-900 mt-2">{formatNumber(calculatedNeeds.urea)}</p>
                                <p className="text-md text-blue-700">kg</p>
                            </div>
                            <div className="bg-orange-100 p-6 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-orange-800">SP-36</h3>
                                <p className="text-4xl font-bold text-orange-900 mt-2">{formatNumber(calculatedNeeds.sp36)}</p>
                                <p className="text-md text-orange-700">kg</p>
                            </div>
                            <div className="bg-red-100 p-6 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-red-800">KCl</h3>
                                <p className="text-4xl font-bold text-red-900 mt-2">{formatNumber(calculatedNeeds.kcl)}</p>
                                <p className="text-md text-red-700">kg</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-sm text-gray-600 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                        <p><strong><span className="material-icons text-yellow-600 mr-2" style={{fontSize: '18px', verticalAlign: 'bottom'}}>info</span>Catatan:</strong> Perhitungan ini adalah estimasi berdasarkan dosis umum. Kebutuhan pupuk sebenarnya dapat bervariasi tergantung pada kondisi tanah, iklim, dan varietas tanaman. Selalu lakukan uji tanah untuk rekomendasi yang lebih akurat.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalculatorPage;
