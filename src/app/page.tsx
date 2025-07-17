import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="flex justify-between items-center mb-16">
        <div className="flex items-center">
          <div className="bg-green-600 text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-md mr-3">
            T
          </div>
          <span className="text-2xl font-bold text-gray-800">TaniMaju</span>
        </div>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="pr-8">
          <div className="inline-flex items-center bg-white border border-gray-200 rounded-full py-1 px-1 mb-6">
            <span className="bg-green-100 text-green-700 text-sm font-semibold rounded-full px-3 py-1">
              Platform Baru
            </span>
            <span className="text-gray-600 text-sm ml-3">
              AI untuk Pertanian v2.0
            </span>
            <svg
              className="h-5 w-5 text-gray-400 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Teknologi AI untuk Petani Indonesia yang Lebih Maju
          </h1>
          <p className="text-gray-600 text-lg mb-10">
            Platform AI TaniMaju membantu petani meningkatkan produktivitas
            dengan diagnosis tanaman, prediksi panen, optimasi pupuk, dan
            wawasan berbasis data satelit. Bergabunglah dengan revolusi
            pertanian digital.
          </p>
          <div className="flex items-center">
            <a
              className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
              href="#"
            >
              Mulai Gratis Sekarang
            </a>
            <a
              className="text-gray-800 font-semibold ml-6 flex items-center"
              href="#"
            >
              Pelajari Lebih Lanjut
              <svg
                className="h-5 w-5 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="bg-green-600 text-white font-bold text-lg w-8 h-8 flex items-center justify-center rounded-md mr-3">
                T
              </div>
              <span className="text-lg font-semibold text-gray-800">
                Dashboard TaniMaju
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-600">Online</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">Tanaman Sehat</p>
              <p className="text-2xl font-bold text-gray-900">94%</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-sm text-gray-600">Prediksi Panen</p>
              <p className="text-2xl font-bold text-gray-900">15 Hari</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-sm text-gray-600">Efisiensi Pupuk</p>
              <p className="text-2xl font-bold text-gray-900">+23%</p>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Analisis Tanaman AI</h3>
              <span className="text-sm text-gray-500">Real-time</span>
            </div>
            <div className="flex items-end h-32 space-x-2">
              <div
                className="w-full bg-green-500 rounded-t-md"
                style={{ height: "40%" }}
              ></div>
              <div
                className="w-full bg-green-500 rounded-t-md"
                style={{ height: "60%" }}
              ></div>
              <div
                className="w-full bg-green-300 rounded-t-md"
                style={{ height: "50%" }}
              ></div>
              <div
                className="w-full bg-green-500 rounded-t-md"
                style={{ height: "70%" }}
              ></div>
              <div
                className="w-full bg-green-300 rounded-t-md"
                style={{ height: "45%" }}
              ></div>
              <div
                className="w-full bg-green-500 rounded-t-md"
                style={{ height: "75%" }}
              ></div>
              <div
                className="w-full bg-green-300 rounded-t-md"
                style={{ height: "55%" }}
              ></div>
              <div
                className="w-full bg-green-500 rounded-t-md"
                style={{ height: "85%" }}
              ></div>
              <div
                className="w-full bg-green-300 rounded-t-md"
                style={{ height: "65%" }}
              ></div>
              <div
                className="w-full bg-green-500 rounded-t-md"
                style={{ height: "90%" }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Kesehatan tanaman dalam 30 hari terakhir
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">
              Diagnosis Tanaman Terbaru
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <Image
                    alt="Rice plant icon"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAovzCWQQn8IYZYvwEwhnDL7owzLntM3PZZniebkdJppTRUMe793L6EymmCCndKW6Zrh1h23aaIsw88dr0NZukt2_kDnPz-xCQxnXN-gW-AoysrJOJLeOtQt0xFD4kfHPD0ATIxbepOAWgv-LQfNZ8OlgNSmji7POFdyyl-3v_ORByLXQy3CFMLb22CDHiH2KTpGfuQVOSuTd0hHCxT9Szvy-nCGH9i7s9qYI2rhIGAwEwkmgVkjAGqrY0SKdj1QVCaW4MXbVHMDJo"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Padi - Sektor A</p>
                  <p className="text-sm text-gray-500">
                    Status: Sehat, Rekomendasi pupuk tersedia
                  </p>
                </div>
              </div>
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
