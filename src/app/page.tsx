'use client';

import Image from "next/image";
import { motion } from "framer-motion";



export default function Home() {
  return (
    <div className="container mx-auto px-8 py-6">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center mb-16"
      >
        <div className="flex items-center">
          <div className="bg-green-600 text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-md mr-3">
            T
          </div>
          <span className="text-2xl font-bold text-gray-800">TaniMaju</span>
        </div>
      </motion.header>
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
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
              href="/login"
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
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full bg-gray-200 rounded-2xl"></div>
          <div className="relative bg-white rounded-2xl shadow-xl p-6">
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
        </div>
      </motion.main>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="py-16 mt-16"
      >
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
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="py-16"
      >
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
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Jelajahi Lebih Lanjut
          </h2>
          <p className="text-gray-600">
            Temukan bagaimana TaniMaju menghadirkan solusi inovatif untuk
            setiap aspek pertanian modern
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                alt="Smart Irrigation System thumbnail"
                className="w-full h-48 object-cover"
                width={500}
                height={300}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkOYugb-5Uswy2KDdbNgXa47D4xKN553mFQTvRZ0kKVUFFAyFQ6rhtu831pt01vVsppfkRHP5xjgwJ-zt08jUF77DP8gp-y-VsU4xmjIZTBCYeNKYjXsTUUsdwTJgcYbntGXWoudieP_rybQeTPVml1b1oF4h7kdE1t5TXaKj8VkLzPiwXZ0DYVitWdiQ9Sqk8C9FdX5YF8Sh25IV6_c29GI7KpAmUJCQXhkiCYrXSHJ6UT1MmhErf29s6IWin2prYY-6ftWBVfMc"
              />
              <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Baru
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                3:45
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>Teknologi</span>
                <span className="mx-2">•</span>
                <span>12.5k</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Smart Irrigation System
              </h3>
              <p className="text-gray-700 text-sm">
                Lihat bagaimana teknologi irigasi pintar TaniMaju menghemat air
                hingga 40% sambil meningkatkan hasil panen.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                alt="Success Story: Pak Budi thumbnail"
                className="w-full h-48 object-cover"
                width={500}
                height={300}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ7jMTHQ-QXXcyLk0fXZRkDq4iKCfp6iMccaHTkAJhPa5JTnj6Bsa5dm0vz7igYcc0YRBysiWQNDWOn8gLV4BEK2TS2aGX-MhMCeKIoYFwrxFxFGfYh0xqqBd6Q7RKJXzptX1suHiktEfQ0rTrrYm9SY4_lsZpACTbJEy2STk7RTPhDhLAjf1b2yOOgiOR6OSovhowzMIiN1hqDU2E6CCH_fZE8UOzRzZaOsgFErouHXPNWlDvVJtrRiJBqEsfBQ-m-cM4tomDuKE"
              />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                5:20
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>Success Story</span>
                <span className="mx-2">•</span>
                <span>8.3k</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Success Story: Pak Budi
              </h3>
              <p className="text-gray-700 text-sm">
                Petani jagung dari Jawa Tengah meningkatkan produktivitas 65%
                dengan platform TaniMaju.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                alt="Market Analytics Dashboard thumbnail"
                className="w-full h-48 object-cover"
                width={500}
                height={300}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa9IJrpDbV-Bl6-FqQ0hrkzb5nHIqrmPHv5DKiwCfH_ysEa-lK1c2U7lgnRsnzBqX_3KZlerbtznDg8VAM41SDyIMiLKzo7255FMwq91RL6SHvOvJAlNTZ0_f_VUEWK6kOBIP3FR9ovx9qzackwb-6RRUIPgwAuqLjOlSJ7lf1OSlG9XXrloAIsSgIbJsZUkIpLYwbVPPcruwW_gUGWuLIesRc28tykFkuKcedJDJcqM1GeaFftjJrrjOXVUzifpFD--qobub_YMg"
              />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                4:15
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>Platform</span>
                <span className="mx-2">•</span>
                <span>15.2k</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Market Analytics Dashboard
              </h3>
              <p className="text-gray-700 text-sm">
                Analisis pasar real-time membantu petani mendapat harga terbaik
                untuk hasil panen mereka.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="py-12"
      >
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full">
            <span
              className="material-symbols-outlined text-sm align-middle mr-1"
              style={{ fontSize: "16px" }}
            >
              circle
            </span>
            Testimoni
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            TaniMaju telah membantu ribuan petani Indonesia meningkatkan
            produktivitas dan hasil panen mereka.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <span
              className="material-symbols-outlined text-gray-300 absolute top-4 left-4"
              style={{ fontSize: "36px" }}
            >
              format_quote
            </span>
            <p className="text-gray-600 mt-8 mb-6">
              Fitur monitoring cuaca sangat membantu. Saya jadi tahu kapan waktu
              terbaik untuk tanam dan panen. Kerugian karena cuaca buruk
              berkurang drastis.
            </p>
            <div className="flex items-center">
              <Image
                alt="Bu Sri Wahyuni"
                className="w-12 h-12 rounded-full mr-4"
                width={48}
                height={48}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkRS-h98CsdFvdFG-BfWlH6fY-xfmNGfkH8yentCGqkYDq4Zam0nmBtZ7kvhMIkfjjWnPcQXR4LcNpKSZIQx9aKaQ-ZH-4jWtSMas4hdVd0zAwJBDI104xGLGkqQaIS-svP-G4vu7124hsPiy9qgIHsQ6z9SMKnOzyzhn1a5yfT4ILgxmb6hPnMkkbuyY2WwXQ0VcQkVqNqomp0SEW-0PABxn7VBQvIVgn__Ijy1UO8C0nFOWP663_qMmLOftdvyqiwRPSQ2HYiYTZ"
              />
              <div>
                <p className="font-semibold text-gray-800">Bu Sri Wahyuni</p>
                <p className="text-sm text-gray-500">
                  Petani Sayuran, Jawa Tengah
                </p>
                <div className="flex items-center text-green-500 text-xs mt-1">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "14px" }}
                  >
                    verified
                  </span>
                  <span className="ml-1">Verified</span>
                </div>
              </div>
            </div>
            <span
              className="material-symbols-outlined text-gray-300 absolute top-4 right-4"
              style={{ fontSize: "36px" }}
            >
              format_quote
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <span
              className="material-symbols-outlined text-gray-300 absolute top-4 left-4"
              style={{ fontSize: "36px" }}
            >
              format_quote
            </span>
            <p className="text-gray-600 mt-8 mb-6">
              TaniMaju membantu saya kelola hama dengan lebih efektif.
              Penggunaan pestisida berkurang 30% tapi hasil tetap maksimal.
              Biaya operasional lebih hemat.
            </p>
            <div className="flex items-center">
              <Image
                alt="Pak Ahmad Hidayat"
                className="w-12 h-12 rounded-full mr-4"
                width={48}
                height={48}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPzWS6ojkfYf3-CQiVt6fdpTgXb6likaaM3g1JDpQYvgHyQXD_aBZNAdE9QOYWd1-EtYlWSBW_CMy9F7ozK6kcGG8oZ3TQ3B3Jv4rRQTHRzWGnDj3L2rNX6iEkAQlSt3lIAQXhmC-9t95CTqyG0aJyrtlj4q7Wa1QxtVICxWbh7J7mhMX5m2Y0zczH3M3rQl27HwAMysqYAZXr5M1uvj0mwOeYi-8RkkjSClqX2UaB8whiSPaE9OpY97H7VOdILX3KZI6k-Xvtr8mh"
              />
              <div>
                <p className="font-semibold text-gray-800">Pak Ahmad Hidayat</p>
                <p className="text-sm text-gray-500">
                  Petani Jagung, Jawa Timur
                </p>
                <div className="flex items-center text-green-500 text-xs mt-1">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "14px" }}
                  >
                    verified
                  </span>
                  <span className="ml-1">Verified</span>
                </div>
              </div>
            </div>
            <span
              className="material-symbols-outlined text-gray-300 absolute top-4 right-4"
              style={{ fontSize: "36px" }}
            >
              format_quote
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <span
              className="material-symbols-outlined text-gray-300 absolute top-4 left-4"
              style={{ fontSize: "36px" }}
            >
              format_quote
            </span>
            <p className="text-gray-600 mt-8 mb-6">
              Sebelum pakai TaniMaju, saya sering bingung kapan waktu yang
              tepat untuk panen. Sekarang dengan sistem rekomendasi, hasil
              panen lebih berkualitas.
            </p>
            <div className="flex items-center">
              <Image
                alt="Bu Siti Nurhaliza"
                className="w-12 h-12 rounded-full mr-4"
                width={48}
                height={48}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwdZqkIgCxQdzDGjNMXrVzkMjQIOMEjUC22_UF5Tq11vSXB_peM5jsPYYvMVpYG5fkhVG2XbbZ9hwcJxIKL4OxNkyiDgre5xRJigOBfuzksvUNdqLGL-cvPmcWq0tmVV1PyuqyVRQOCUhT3ONReV6KHHyGO7sEwXXu4jSmkGzccVt-498qsbhjniLB3LAXjeKrn4jzLAOGGC9Ha_19MiCeKw8gktVM3cy3QMXdAzv1-_U2Iwd9iVxTd4huE5ooKf7Qaa1HmKPXb6IP"
              />
              <div>
                <p className="font-semibold text-gray-800">Bu Siti Nurhaliza</p>
                <p className="text-sm text-gray-500">
                  Petani Cabai, Sumatera Utara
                </p>
                <div className="flex items-center text-green-500 text-xs mt-1">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "14px" }}
                  >
                    verified
                  </span>
                  <span className="ml-1">Verified</span>
                </div>
              </div>
            </div>
            <span
              className="material-symbols-outlined text-gray-300 absolute top-4 right-4"
              style={{ fontSize: "36px" }}
            >
              format_quote
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <span
              className="material-symbols-outlined text-gray-300 absolute top-4 left-4"
              style={{ fontSize: "36px" }}
            >
              format_quote
            </span>
            <p className="text-gray-600 mt-8 mb-6">
              Aplikasi ini sangat mudah digunakan. Bahkan petani seperti saya
              yang gaptek bisa pakai dengan lancar. Produktivitas naik hampir
              40%!
            </p>
            <div className="flex items-center">
              <Image
                alt="Pak Joko Widodo"
                className="w-12 h-12 rounded-full mr-4"
                width={48}
                height={48}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDXigm-cgXIs21pX3MAi9V6fQFW-5dBkaSVdf8NQgjY5BZRlxBfDF2ch8nlCjjdNbEv9C0wx0zt2IrzW_F4RmaHZ_qHO88YgRz-gQFJi95ZQlxk9t1MtEmTA2TFnC9S5y0LdJB6k4SivnTBBM2tnVnUlYor2m-B_PZbygwvw2p4n-OrvnPEqM4-C2ehPaxMtF6FHU04SX5CyK85zbgU_xIl8kbJfHTnRhbrxpCymqKxrcKFvsBWtoScCi7wzTQwF-Ya51immCUrUnk"
              />
              <div>
                <p className="font-semibold text-gray-800">Pak Joko Widodo</p>
                <p className="text-sm text-gray-500">Petani Tomat, Bali</p>
                <div className="flex items-center text-green-500 text-xs mt-1">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "14px" }}
                  >
                    verified
                  </span>
                  <span className="ml-1">Verified</span>
                </div>
              </div>
            </div>
            <span
              className="material-symbols-outlined text-gray-300 absolute top-4 right-4"
              style={{ fontSize: "36px" }}
            >
              format_quote
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <span
              className="material-symbols-outlined text-gray-300 absolute top-4 left-4"
              style={{ fontSize: "36px" }}
            >
              format_quote
            </span>
            <p className="text-gray-600 mt-8 mb-6">
              Fitur analisis tanah membantu saya memilih pupuk yang tepat.
              Tanaman lebih sehat, biaya pupuk jadi lebih efisien. Untung
              bersih meningkat signifikan.
            </p>
            <div className="flex items-center">
              <Image
                alt="Bu Ratna Sari"
                className="w-12 h-12 rounded-full mr-4"
                width={48}
                height={48}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi0Fpkdl4oKpqefxvERU8Oo-cc795WxTAx20tXZTGLJEfru4N5ZL0UZ7mkRq1ZXiy7UHFW7xOfXRw19R3VdM-bdEIoJSd3rqXfiskPZkWwDkv2eksRLKYkHHzWl3WsqhxNAywQ8kN1lOiAnuJUHJEQMuOpy92xM4D6La60sFNYEKw5gFaxB4cj-LNaqXycfzSGLpdQEFHPVVqgLIy287mEMskbseQdLL_FdcJap7EReR6qPjSXGjGYvx0LdLIqZGH7KblkHLyjXEy1"
              />
              <div>
                <p className="font-semibold text-gray-800">Bu Ratna Sari</p>
                <p className="text-sm text-gray-500">
                  Petani Kentang, Jawa Barat
                </p>
                <div className="flex items-center text-green-500 text-xs mt-1">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "14px" }}
                  >
                    verified
                  </span>
                  <span className="ml-1">Verified</span>
                </div>
              </div>
            </div>
            <span
              className="material-symbols-outlined text-gray-300 absolute top-4 right-4"
              style={{ fontSize: "36px" }}
            >
              format_quote
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <span
              className="material-symbols-outlined text-gray-300 absolute top-4 left-4"
              style={{ fontSize: "36px" }}
            >
              format_quote
            </span>
            <p className="text-gray-600 mt-8 mb-6">
              Dengan monitoring real-time, saya bisa deteksi masalah di sawah
              lebih awal. Tidak perlu sering bolak-balik ke sawah, hemat
              waktu dan tenaga.
            </p>
            <div className="flex items-center">
              <Image
                alt="Pak Bambang Sutrisno"
                className="w-12 h-12 rounded-full mr-4"
                width={48}
                height={48}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeZrSQv8HQ_yFMmb3iLaTt13SqQLkB2cx1OJzY4lBeXqC2JgW6PTPP4AsALvXgtxbprvN0X5i7Hi00vBwXOh4Lh62JR7JOF0N11slcqE5aOk93OB_yY6hRmXuaBh9gcenbn1roLcc_ReG4GhJgLf2TnldssP7QhTHiNouBG7c_3sRf8ba1A9DSN9vj0Y1WKZ1v_bPPLDM7okqCJJkyhyyTNtLENyQlyII3F7IyIOaEx55NiFsVDej62kiZe576bl8C3RIEEiv8y1PM"
              />
              <div>
                <p className="font-semibold text-gray-800">
                  Pak Bambang Sutrisno
                </p>
                <p className="text-sm text-gray-500">Petani Padi, Lampung</p>
                <div className="flex items-center text-green-500 text-xs mt-1">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "14px" }}
                  >
                    verified
                  </span>
                  <span className="ml-1">Verified</span>
                </div>
              </div>
            </div>
            <span
              className="material-symbols-outlined text-gray-300 absolute top-4 right-4"
              style={{ fontSize: "36px" }}
            >
              format_quote
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
            <Image
              alt="Bu Indra Kusuma"
              className="w-12 h-12 rounded-full mr-4"
              width={48}
              height={48}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhGe8ICgmyU-bj0tuL3VlPMfAAT5vQTxlCxwEHVNg2He46qIQlrHMIvE5I-NRH6_zh9VfuJLsbM32hgqhY6NorbgYnnWr9gf7bzWV3HPsA1HT3WuDN66-i0NqAKA3-yPfaSJQoLnXX9DzdnzFlHLANJhtLN3aaCtWTZmceNUqGHdlyihmGWSRkAGz3vCys91jF3gRAbrT0W1_3-rBUcw_gNKhezsWzNqOgg1jY3ApUnpSMkeN4jl_tt4fwv_V0nNkjQ47fnplDbl4P"
            />
            <div className="flex-1">
              <p className="text-gray-600 mb-4">
                "Sistem peringatan dini untuk penyakit tanaman sangat akurat.
                Saya bisa ambil tindakan pencegahan sebelum penyakit menyebar
                luas."
              </p>
              <p className="font-semibold text-gray-800">Bu Indra Kusuma</p>
              <p className="text-sm text-gray-500">
                Petani Kedelai, Yogyakarta
              </p>
            </div>
            <span className="material-symbols-outlined text-gray-400">
              more_horiz
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
            <Image
              alt="Pak Agus Salim"
              className="w-12 h-12 rounded-full mr-4"
              width={48}
              height={48}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqvdl63HvqztZXFUP8rif-YNsMlbjfhHul0dAkEaPE1kjj3LawtwWcuejFbuTfBVN0NfQ6_c7OvPW08PUXlssM547HbjJ6eqPdaKogRz41cG0RG3v731jSCIJxlmyGyBgHhss9M4m0e-RVe3jyQQ4vyXZVqQXv4TGwKflXv6RZGAiZwwZGMSErvC2OGpwzNBFSXRZMy75pYYuX8uB4pBPyYZSSxa2C6nHxOielJ2U0t1HPGtboVI-IzV8JRslK2_npILVenqcWDRIi"
            />
            <div className="flex-1">
              <p className="text-gray-600 mb-4">
                "TaniMaju membantu saya merencanakan jadwal tanam yang
                optimal. Dengan rotasi tanaman yang tepat, tanah tetap subur dan
                produksi stabil sepanjang tahun."
              </p>
              <p className="font-semibold text-gray-800">Pak Agus Salim</p>
              <p className="text-sm text-gray-500">
                Petani Palawija, Sulawesi Selatan
              </p>
            </div>
            <span className="material-symbols-outlined text-gray-400">
              more_horiz
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
            <Image
              alt="Bu Dewi Lestari"
              className="w-12 h-12 rounded-full mr-4"
              width={48}
              height={48}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCziDvEZdUcLDMiFMxFwFs5vg32-lb3aPWvTQyxmUWJSNQ2CDmP9GpmxywPCw2LoJjicC_I0j1iYFSGKmzFmJYn4M0-T8lR6PF7tEZ_IQLj3JiDqi1-aJjy1v3UnibAOf3fH6nzx6iROLiqiQ6RUmb5un7w6IqAYQwj9tA7wc_2AfQgY8wHvoe89Qs-T3Pl_newT1yCq0emGU2cCYbWRYcdBgsm_1OpV_KeWG_n5jKlieVrVs7k4EXNhI6r8BXmwJ4lXYMrwQFvAliP"
            />
            <div className="flex-1">
              <p className="text-gray-600 mb-4">
                "Sejak menggunakan TaniMaju, kualitas buah-buahan saya jauh
                lebih baik. Pembeli di pasar selalu mencari produk saya karena
                kualitasnya konsisten."
              </p>
              <p className="font-semibold text-gray-800">Bu Dewi Lestari</p>
              <p className="text-sm text-gray-500">Petani Buah, Malang</p>
            </div>
            <span className="material-symbols-outlined text-gray-400">
              more_horiz
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
            <Image
              alt="Pak Hario Susilo"
              className="w-12 h-12 rounded-full mr-4"
              width={48}
              height={48}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2ZcRjbrc6J68Adj6ZjtaIIV0JYChlZUike_6tF7MTN550P7IssiWBLS1E7YoveYUpy2LBdSXubNngYJaX-fQOduCs6RsCrgsqzFR-u8hU0vXxXhaK5V4ktbkMSrxciAYTFT2zDQaZKbwFjUIoVEe1Fpb1y5N-w7XY75nlZGmBTjx2P7UDP6Bz20FE3_xPY2qiP6x_uulcf8gg1JLmZIxbkoHw3DHnG6xjOFUq4zEoTh-FVOfHkrkP7h4IVoZ_8bv-JJWsiNdWmaJ_"
            />
            <div className="flex-1">
              <p className="text-gray-600 mb-4">
                "Panduan budidaya yang diberikan sangat detail dan mudah
                diikuti. Bahkan untuk tanaman baru yang belum pernah saya tanam
                sebelumnya."
              </p>
              <p className="font-semibold text-gray-800">Pak Hario Susilo</p>
              <p className="text-sm text-gray-500">
                Petani Hortikultura, Bandung
              </p>
            </div>
            <span className="material-symbols-outlined text-gray-400">
              more_horiz
            </span>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="py-12"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center mb-6">
            <h1 className="text-2xl font-bold text-black">TaniMaju</h1>
            <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-md ml-2">
              AI
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            Platform AI terdepan untuk petani Indonesia. Meningkatkan
            produktivitas pertanian dengan teknologi terkini dan solusi yang
            mudah digunakan.
          </p>
          <p className="text-gray-600 mb-4">
            Dikembangkan oleh{" "}
            <a className="text-green-600 hover:underline" href="#">
              TaniMaju
            </a>
          </p>
          <p className="text-gray-600 mb-8">
            Memberdayakan petani Indonesia sejak 2024
          </p>
          <h2 className="text-lg font-semibold text-black mb-3">
            Dapatkan tips pertanian AI mingguan
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Email Anda"
              type="email"
            />
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300">
              Berlangganan
            </button>
          </div>
        </div>
        <hr className="border-gray-200" />
      </motion.section>
      
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-black mb-4">Produk</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a className="hover:text-green-600" href="#">
                    Plant Doctor
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-600" href="#">
                    Harvest Prediction
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-600" href="#">
                    Fertilizer Optimizer
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-600" href="#">
                    Weather Analytics
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-4">Dukungan</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a className="hover:text-green-600" href="#">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-600" href="#">
                    Tutorial
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-600" href="#">
                    Panduan Pengguna
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-600" href="#">
                    Hubungi Kami
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-600" href="#">
                    Komunitas Petani
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a className="hover:text-green-600" href="#">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-600" href="#">
                    Karir
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-600" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-600" href="#">
                    Mitra
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-600" href="#">
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4 text-gray-500 mb-6">
                <a className="hover:text-green-600" href="#">
                  <Image
                    alt="Facebook icon"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDefkjt3D-Dlk3O3zmeCL8JQxxP4F5IuKVmJaSra5OOtQNJy2ErHOCo0tCzfArZNiNDe9hvvdX-0pb4O1iY4qPckzORI9inYOMFyRUWlNUp1DXvGQEnLJvkoBbkRROSf8C_oNfCeHf7hu6_bVF9vk3Hd1XjAUXWUhkmDLqdY4GS_XLDiL3D4Daku_TCbErxZcQ-rulpmUx8asLbnp4Q0TiZKFRs49oqhtFGHDN3X6mexRdAv0ZREtO1iGf995juDEnXLZoK_hJ5X3WQ"
                  />
                </a>
                <a className="hover:text-green-600" href="#">
                  <Image
                    alt="Instagram icon"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCzcW0dgUv8zGY2G-nK9IJNsJpvIOyKv4mhP7v8yrZKHcASBHOrUr2ud6pdTJE4OS2uz6Ta_rO-4Rnl0vc-5eTEDMJOVTbM-PvZZh9Q48tKetOkHRuwcN3WwI-SKU97xHpJehcGY43TI1kNP7oOwEWa31UeT7ZgpjIIkvMgyRvNgHDf32zO7EOk9K8IwcOXHxtLMFKcb9PRnAjrUNR_tv6fxmmwbEaXQVwONFAIW23pdkfPbh0l07VhSaFNmKMo1q3VRofVkpM7rVm"
                  />
                </a>
                <a className="hover:text-green-600" href="#">
                  <Image
                    alt="Twitter icon"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJBm4j2V1fpSFxPKE-7OOw9d877zwGULpfEHP20yaMYHhx_DudZmsebi40c-v0Mj7dfr5u_BhjP-Vxn6cRyvK_KZzC9DJORzT_LSJfSPrtc5iuqbfa44jMa2piQK2VtUuuj5zu2YDeBMraF68BgwTxLhkTZUpin2zdJGFufIWq5YhTXq9NZIseso5Je3At7-6UTUglWr66iVRwtSdaUo3J2HN8oTWWXPDSYm84QFiNLQsEzjvxDwfUof3cjegZw8eNNL6ozBFtbxQY"
                  />
                </a>
                <a className="hover:text-green-600" href="#">
                  <Image
                    alt="YouTube icon"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq0HxLdmFWJnqCiAMQbz0witmOEBtiBlpAiae_PjpPvqS8JOOWxXIxElIcP0oK_9VNOVUDVb1cLPFM0WUDUdstWSJ87kznCS_y5-RkkCjDhcxwLelFHwUCqCBm9JXBaIVuVtUU6Rw4En-O5MdVhBEP7An9EWi1mKzrXcm9ugKG7n1aNeqxN5tVj5NKHc5HdaDfXOI65_8h0pl2Mb4WSK-LmR_44UHZz9rQ48gepjj9RupHLjG4x168nUMgRcoRqo9yg9hoHDBeHnqW"
                  />
                </a>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a className="hover:text-green-600" href="#">
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-600" href="#">
                    Syarat &amp; Ketentuan
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-600" href="#">
                    Kebijakan Cookie
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>© 2025 TaniMaju. Semua Hak Dilindungi.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}