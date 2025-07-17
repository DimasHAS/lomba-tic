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
      <section className="py-16 mt-16">
        <div className="text-left mb-12">
          <p className="text-lg text-gray-600">Teknologi Pertanian Cerdas</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Fitur TaniMaju untuk
            <br />
            Optimalisasi Pertanian
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <span className="material-icons text-green-600">photo_camera</span>
              </div>
              <div className="w-10 h-3 bg-green-200 rounded-full"></div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Plant Doctor AI
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              Identifikasi penyakit tanaman secara instan menggunakan AI. Cukup
              foto daun atau bagian tanaman yang bermasalah untuk mendapat
              diagnosis akurat dan rekomendasi penanganan.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Real-time analysis
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <span className="material-icons text-green-600">trending_up</span>
              </div>
              <span className="material-icons text-green-600 text-3xl">
                signal_cellular_alt
              </span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Prediksi Panen Cerdas
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              Prediksi hasil panen berdasarkan data cuaca, kondisi tanah, dan
              pola pertumbuhan. Rencanakan strategi pemasaran dengan proyeksi
              yield yang akurat.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              ML-powered predictions
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <span className="material-icons text-green-600">eco</span>
              </div>
              <div className="w-10 h-3 bg-gradient-to-r from-yellow-200 to-green-200 rounded-full"></div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Optimasi Pupuk Satelit
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              Analisis citra satelit untuk menentukan kebutuhan pupuk spesifik
              setiap area lahan secara presisi.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Satellite imagery
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <span className="material-icons text-green-600">bug_report</span>
              </div>
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Deteksi Hama Dini
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              Sistem peringatan dini untuk deteksi hama dan penyakit tanaman
              dengan sensor IoT dan AI imaging.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              IoT sensors
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <span className="material-icons text-green-600">donut_small</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-4 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-1 bg-gray-400 rounded-full"></div>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Wawasan AI Holistik
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              Integrasi semua data pertanian dalam satu dashboard untuk
              pengambilan keputusan yang lebih cerdas.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
              AI-driven insights
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <span className="material-icons text-green-600">bar_chart</span>
              </div>
              <span className="material-icons text-gray-500">drag_handle</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Smart Analytics
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              Dapatkan laporan komprehensif dan insights actionable dari
              seluruh aktivitas pertanian Anda.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-blue-800 rounded-full mr-2"></span>
              Advanced analytics
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">TaniMaju dalam Aksi</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Saksikan bagaimana platform TaniMaju membantu petani di seluruh
            Indonesia meningkatkan produktivitas, mengoptimalkan sumber daya, dan
            meraih kesuksesan berkelanjutan.
          </p>
        </div>
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              className="relative bg-green-200"
              style={{ paddingBottom: "56.25%" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-10 h-10 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <Image
                alt="TaniMaju Platform Demo logo"
                className="absolute top-4 left-4 h-6 object-contain"
                width={100}
                height={24}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz0-ZNiJ_3SXbWuyLi_GB8BZOlunj333q4h5BE21xfumn8lqxlamAQBzi3m_r7noL6zEUEzZbA4iif1nFDCVjfLshOKRHIYlRl8tjIlWju77IQF3JtibhIuRrRetoHQxdRwZa1AZlrV822Kwph1QeHI8OY3_sNVw5FZKdXERK5b6JjQFH-_DLkHIdg_CwqZ2uEsy-VgdKef1Zcs0MsWU7P2iaVoEY2wPQzKeTQtN4RtJiIvKSROcIkcNHuLbv0sMAmQKOMDSEP5TVH"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">
                Platform Overview: Transformasi Digital Pertanian
              </h2>
              <p className="mt-2 text-gray-600">
                Demo lengkap fitur-fitur unggulan TaniMaju • 8:30
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
