import React from 'react';

const RegisterComponent: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-white flex flex-col justify-between p-16">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-green-500 text-white text-xl font-bold p-2 rounded">T</span>
            <span className="text-2xl font-bold">TaniMaju</span>
          </div>
          <div className="mt-24">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">Teknologi AI untuk Petani Indonesia yang Lebih Maju</h1>
            <p className="text-gray-600 mt-6 text-lg">
              Platform AI TaniMaju membantu petani meningkatkan produktivitas dengan diagnosis tanaman, prediksi panen, optimasi pupuk, dan wawasan berbasis data satelit. Bergabunglah dengan revolusi pertanian digital.
            </p>
            <div className="mt-12 space-y-4">
              <button className="w-full bg-green-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition">Mulai Gratis Sekarang</button>
              <button className="w-full border border-gray-300 text-gray-700 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">Pelajari Lebih Lanjut</button>
            </div>
          </div>
        </div>
        <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full font-bold">
          N
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-gray-50 p-16">
        <div className="w-full max-w-md bg-white p-12 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">Daftar ke TaniMaju</h2>
          <form className="mt-8 space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700" htmlFor="name">Nama</label>
              <input className="mt-1 block w-full px-4 py-3 border border-green-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500" id="name" name="name" placeholder="Masukkan nama lengkap" type="text"/>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500" id="email" name="email" placeholder="Masukkan alamat email" type="email"/>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700" htmlFor="username">Username</label>
              <input className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500" id="username" name="username" placeholder="Pilih username unik" type="text"/>
            </div>
            <div className="relative">
              <label className="text-sm font-medium text-gray-700" htmlFor="password">Password</label>
              <input className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500" id="password" name="password" placeholder="Buat password yang kuat" type="password"/>
              <span className="material-icons absolute inset-y-0 right-0 top-7 flex items-center pr-3 text-gray-400 cursor-pointer">visibility</span>
            </div>
            <button className="w-full bg-green-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition" type="submit">Daftar</button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Sudah punya akun? <a className="font-semibold text-green-500 hover:text-green-600" href="#">Masuk sekarang</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;