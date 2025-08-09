'use client';
import { useState, useEffect } from 'react';

const KomunitaniPage = () => {
    const [hargaPangan, setHargaPangan] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('');

    const getCommodityIcon = (commodity: string) => {
        const lowerCaseCommodity = commodity.toLowerCase();
        if (lowerCaseCommodity.includes('beras')) return 'rice_bowl';
        if (lowerCaseCommodity.includes('daging ayam')) return 'kebab_dining';
        if (lowerCaseCommodity.includes('telur ayam')) return 'egg';
        if (lowerCaseCommodity.includes('bawang')) return 'compost';
        if (lowerCaseCommodity.includes('cabai')) return 'local_fire_department';
        if (lowerCaseCommodity.includes('daging sapi')) return 'food_bank';
        if (lowerCaseCommodity.includes('gula')) return 'icecream';
        if (lowerCaseCommodity.includes('minyak goreng')) return 'water_drop';
        return 'local_florist';
    };

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('/api/harga-pangan');
            if (!res.ok) {
                throw new Error('Gagal mengambil data');
            }
            const data = await res.json();
            if (Array.isArray(data)) {
                const validData = data.filter(item => item && typeof item.komoditas === 'string' && typeof item.harga === 'number' && typeof item.perubahan === 'number');
                setHargaPangan(validData);
            } else {
                throw new Error('Format data tidak valid');
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredData = hargaPangan.filter(item =>
        item && typeof item.komoditas === 'string' && item.komoditas.toLowerCase().includes(filter.toLowerCase())
    );

    const totalKomoditas = hargaPangan.length;
    const hargaNaik = hargaPangan.filter(item => item.perubahan > 0).length;
    const hargaTurun = hargaPangan.filter(item => item.perubahan < 0).length;
    const totalPerubahan = hargaPangan.reduce((acc, item) => acc + item.perubahan, 0);
    const rataRataPerubahan = totalKomoditas > 0 ? (totalPerubahan / totalKomoditas) : 0;

    return (
        <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center">
                    <span className="material-icons mr-3 text-green-500">bar_chart</span> Monitor Harga Pangan Nasional
                </h1>
                <button 
                    onClick={fetchData}
                    className="px-5 py-3 text-md font-semibold text-white bg-green-500 rounded-full shadow-md hover:bg-green-600 transition-colors duration-300 flex items-center"
                >
                    <span className={`material-icons text-base mr-2 ${loading ? 'animate-spin' : ''}`}>
                        {loading ? 'refresh' : 'fiber_manual_record'}
                    </span> 
                    {loading ? 'Memuat...' : 'Live Update'}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="text-md font-semibold text-gray-600">Total Wilayah</p>
                    <p className="text-4xl font-bold text-gray-800 mt-2">{totalKomoditas}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="text-md font-semibold text-gray-600">Harga Naik</p>
                    <p className="text-4xl font-bold text-red-500 mt-2">{hargaNaik}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="text-md font-semibold text-gray-600">Harga Turun</p>
                    <p className="text-4xl font-bold text-green-500 mt-2">{hargaTurun}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="text-md font-semibold text-gray-600">Rata-rata Perubahan</p>
                    <p className={`text-2xl font-bold flex items-center mt-2 ${rataRataPerubahan >= 0 ? 'text-red-500' : 'text-green-500'}`}>
                        {rataRataPerubahan >= 0 ? '+' : ''}{rataRataPerubahan.toFixed(1)}%
                    </p>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-md">
                
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <div className="relative w-1/3">
                            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">search</span>
                            <input 
                                className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-md text-gray-900 custom-placeholder" 
                                placeholder="Cari Komoditas..." 
                                type="text"
                                value={filter}
                                onChange={e => setFilter(e.target.value)}
                            />
                        </div>
                        
                    </div>
                    <div className="overflow-y-auto" style={{ height: 'calc(100vh - 500px)' }}>
                        {loading && <p className="text-center text-gray-500">Memuat data...</p>}
                        {error && <p className="text-center text-red-500">Error: {error}</p>}
                        {!loading && !error && (
                            <div className="divide-y divide-gray-100">
                                {filteredData.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-5 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                                        <div className="flex items-center">
                                            <div className={`w-12 h-12 ${item.perubahan > 0 ? 'bg-red-100' : 'bg-green-100'} rounded-full flex items-center justify-center mr-4`}>
                                                <span className={`material-icons ${item.perubahan > 0 ? 'text-red-500' : 'text-green-500'}`}>
                                                    {getCommodityIcon(item.komoditas)}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-lg text-gray-800">{item.komoditas} <span className="text-sm font-normal text-gray-500">/kg</span></p>
                                                <div className="flex items-center text-sm text-gray-500 mt-1">
                                                    <span className="material-icons text-sm mr-1">location_on</span>
                                                    <span>{item.lokasi}</span>
                                                    <span className="mx-2">•</span>
                                                    <span>{item.waktu}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-xl text-gray-800">Rp {item.harga.toLocaleString('id-ID')}</p>
                                            <div className={`flex items-center justify-end text-md font-semibold ${item.perubahan > 0 ? 'text-red-500' : 'text-green-500'}`}>
                                                <span className="material-icons text-lg">{item.perubahan > 0 ? 'arrow_upward' : 'arrow_downward'}</span>
                                                <span>{item.perubahan > 0 ? '+' : ''}{item.perubahan.toFixed(1)}%</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default KomunitaniPage;
