import React from 'react';

const LoginComponent: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-gradient-to-br from-green-100 to-green-200 p-12 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-green-500 text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-md">T</div>
            <span className="text-xl font-bold text-gray-800">TaniMaju</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mt-24 leading-tight">Teknologi AI untuk Petani Indonesia yang Lebih Maju</h1>
          <p className="text-gray-600 mt-6 text-lg">Platform AI TaniMaju membantu petani meningkatkan produktivitas dengan diagnosis tanaman, prediksi panen, optimasi pupuk, dan wawasan berbasis data satelit. Bergabunglah dengan revolusi pertanian digital.</p>
          <div className="mt-10 flex gap-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 transition">Mulai Gratis Sekarang</button>
            <button className="bg-white text-green-500 px-6 py-3 rounded-lg font-semibold border border-green-500 hover:bg-green-50 transition">Pelajari Lebih Lanjut</button>
          </div>
        </div>
        <div className="w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full font-bold">
          N
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Masuk ke TaniMaju</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email atau Username</label>
              <input className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" id="email" placeholder="Email atau Username" type="text"/>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">Password</label>
              <div className="relative">
                <input className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" id="password" placeholder="Password" type="password"/>
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer">
                  <i className="material-icons">visibility</i>
                </span>
              </div>
            </div>
            <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition shadow" type="submit">Masuk</button>
          </form>
          <div className="text-right mt-4">
            <a className="text-sm text-green-500 hover:underline" href="#">Lupa Password?</a>
          </div>
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-4 text-sm text-gray-400">atau</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          <p className="text-center text-sm text-gray-600">
            Belum punya akun? <a className="font-semibold text-green-500 hover:underline" href="#">Daftar gratis</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;