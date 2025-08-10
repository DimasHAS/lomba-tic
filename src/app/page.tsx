'use client';

import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Helper component for animations that trigger on scroll
const AnimatedSection = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
};

// Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const testimonials = [
  {
    type: "full",
    quote: "Fitur monitoring cuaca sangat membantu. Saya jadi tahu kapan waktu terbaik untuk tanam dan panen. Kerugian karena cuaca buruk berkurang drastis.",
    name: "Bu Sri Wahyuni",
    role: "Petani Sayuran, Jawa Tengah",
    avatar: "https://via.placeholder.com/48x48.png?text=Avatar",
    verified: true,
  },
  {
    type: "full",
    quote: "TaniMaju membantu saya kelola hama dengan lebih efektif. Penggunaan pestisida berkurang 30% tapi hasil tetap maksimal. Biaya operasional lebih hemat.",
    name: "Pak Ahmad Hidayat",
    role: "Petani Jagung, Jawa Timur",
    avatar: "https://via.placeholder.com/48x48.png?text=Avatar",
    verified: true,
  },
  {
    type: "full",
    quote: "Sebelum pakai TaniMaju, saya sering bingung kapan waktu yang tepat untuk panen. Sekarang dengan sistem rekomendasi, hasil panen lebih berkualitas.",
    name: "Bu Siti Nurhaliza",
    role: "Petani Cabai, Sumatera Utara",
    avatar: "https://via.placeholder.com/48x48.png?text=Avatar",
    verified: true,
  },
];

const compactTestimonials = [
    {
    type: "compact",
    quote: "\"Sistem peringatan dini untuk penyakit tanaman sangat akurat. Saya bisa ambil tindakan pencegahan sebelum penyakit menyebar luas.\"",
    name: "Bu Indra Kusuma",
    role: "Petani Kedelai, Yogyakarta",
    avatar: "https://via.placeholder.com/48x48.png?text=Avatar",
  },
  {
    type: "compact",
    quote: "\"TaniMaju membantu saya merencanakan jadwal tanam yang optimal. Dengan rotasi tanaman yang tepat, tanah tetap subur dan produksi stabil sepanjang tahun.\"",
    name: "Pak Agus Salim",
    role: "Petani Palawija, Sulawesi Selatan",
    avatar: "https://via.placeholder.com/48x48.png?text=Avatar",
  },
  {
    type: "compact",
    quote: "\"Sejak menggunakan TaniMaju, kualitas buah-buahan saya jauh lebih baik. Pembeli di pasar selalu mencari produk saya karena kualitasnya konsisten.\"",
    name: "Bu Dewi Lestari",
    role: "Petani Buah, Malang",
    avatar: "https://via.placeholder.com/48x48.png?text=Avatar",
  },
  {
    type: "compact",
    quote: "\"Panduan budidaya yang diberikan sangat detail dan mudah diikuti. Bahkan untuk tanaman baru yang belum pernah saya tanam sebelumnya.\"",
    name: "Pak Hario Susilo",
    role: "Petani Hortikultura, Bandung",
    avatar: "https://via.placeholder.com/48x48.png?text=Avatar",
  },
];


export default function Home() {
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const yImage = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const featuresRef = useRef(null);
  const { scrollYProgress: featuresScrollProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"]
  });
  const featuresY = (index: number) => useTransform(featuresScrollProgress, [0, 1], [100, -100 * (index * 0.1 + 1)]);

  const testimonialsRef = useRef(null);
  const { scrollYProgress: testimonialsScrollProgress } = useScroll({
    target: testimonialsRef,
    offset: ["start end", "end start"]
  });
  const testimonialsY1 = useTransform(testimonialsScrollProgress, [0, 1], [0, -150]);
  const testimonialsY2 = useTransform(testimonialsScrollProgress, [0, 1], [0, -80]);

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center py-6 mb-10 md:mb-20"
        >
          <div className="flex items-center">
            <div className="bg-green-600 text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-md mr-3">
              T
            </div>
            <span className="text-2xl font-bold text-gray-900">TaniMaju</span>
          </div>
        </motion.header>

        <main ref={mainRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center min-h-[70vh]">
            <motion.div
              style={{ y: yText, opacity: opacityText }}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center md:text-left"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center bg-white border border-gray-200 rounded-full py-1 px-2 mb-6 shadow-sm">
                <span className="bg-green-100 text-green-700 text-sm font-semibold rounded-full px-3 py-1">
                  Platform Baru
                </span>
                <span className="text-gray-600 text-sm ml-3 mr-1">
                  AI untuk Pertanian v2.0
                </span>
                <svg
                  className="h-5 w-5 text-gray-400"
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
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Teknologi AI untuk Petani Indonesia yang Lebih Maju
              </motion.h1>
              <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-xl mx-auto md:mx-0 mb-10">
                  Platform AI TaniMaju membantu petani meningkatkan produktivitas
                  dengan diagnosis tanaman, prediksi panen, dan komunitani.
                </motion.p>
              <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start">
                <motion.a
                  className="bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                  href="/login"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Mulai Gratis
                </motion.a>
                <motion.a
                  className="text-gray-800 font-semibold ml-6 flex items-center group"
                  href="#"
                  whileHover={{ x: 5 }}
                >
                  <span>Pelajari Lanjut</span>
                  <svg
                    className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1"
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
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div
              style={{ y: yImage, scale: scaleImage }}
              className="relative hidden md:block"
            >
              <div className="absolute -top-4 -left-4 w-full h-full bg-gray-100 rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
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
                    <motion.span 
                      className="w-2 h-2 bg-green-500 rounded-full mr-2"
                      animate={{ scale: [1, 1.2, 1]}}
                      transition={{ duration: 1, repeat: Infinity}}
                    ></motion.span>
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
                    {[40, 60, 50, 70, 45, 75, 55, 85, 65, 90].map((height, i) => (
                      <motion.div
                        key={i}
                        className={`w-full rounded-t-md ${i % 2 === 0 ? 'bg-green-500' : 'bg-green-300'}`}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                      ></motion.div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Kesehatan tanaman dalam 30 hari terakhir
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        <AnimatedSection className="py-20 md:py-28">
          <div ref={featuresRef}>
            <div className="text-center mb-16">
              <p className="text-lg text-green-600 font-semibold">Teknologi Pertanian Cerdas</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                Fitur TaniMaju untuk Optimalisasi
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "photo_camera", title: "Plant Doctor AI", desc: "Identifikasi penyakit tanaman instan menggunakan AI. Cukup foto daun untuk mendapat diagnosis akurat dan rekomendasi penanganan.", tag: "Real-time analysis", tagColor: "green" },
                { icon: "trending_up", title: "Prediksi Panen Cerdas", desc: "Prediksi hasil panen berdasarkan data cuaca, kondisi tanah, dan pola pertumbuhan untuk strategi pemasaran yang lebih baik.", tag: "ML-powered", tagColor: "blue" },
                { icon: "eco", title: "Komunitani", desc: "Kalkulator untuk memperkirakan jumlah pupuk yang diperlukan untuk setiap area lahan secara presisi dan efisien.", tag: "Kalkulator", tagColor: "purple" },
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  style={{ y: featuresY(i) }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <span className="material-icons text-green-600 text-3xl">{feature.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.desc}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className={`w-2 h-2 bg-${feature.tagColor}-500 rounded-full mr-2`}></span>
                    {feature.tag}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 md:py-28 bg-gray-50 rounded-2xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">TaniMaju dalam Aksi</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Saksikan bagaimana platform TaniMaju membantu petani di seluruh
              Indonesia meningkatkan produktivitas dan meraih kesuksesan.
            </p>
          </div>
          <motion.div 
            className="mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden aspect-video">
              <video
                className="w-full h-full object-cover"
                src="/video/demo.mp4"
                controls
                loop
                muted
                autoPlay
                playsInline
              />
            </div>
          </motion.div>
        </AnimatedSection>
        
        <AnimatedSection className="py-20 md:py-28">
          <div ref={testimonialsRef}>
            <div className="text-center mb-16">
              <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full">
                Testimoni
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
                Dipercaya Ribuan Petani Indonesia
              </h2>
            </div>
            <motion.div 
              style={{ y: testimonialsY1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, i) => (
                <motion.div 
                  key={i}
                  className="bg-white rounded-xl shadow-lg p-8 relative border border-gray-100"
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" }}
                >
                  <span
                    className="material-symbols-outlined text-green-200 absolute top-4 left-4"
                    style={{ fontSize: "48px" }}
                  >
                    format_quote
                  </span>
                  <p className="text-gray-600 mt-10 mb-6 z-10 relative">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <Image
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                      width={48}
                      height={48}
                      src={testimonial.avatar}
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              style={{ y: testimonialsY2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
            >
              {compactTestimonials.map((testimonial, i) => (
                <motion.div 
                  key={i}
                  className="bg-gray-50 rounded-xl p-6 flex items-start border border-gray-200"
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.05)" }}
                >
                  <Image
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    width={48}
                    height={48}
                    src={testimonial.avatar}
                  />
                  <div className="flex-1">
                    <p className="text-gray-600">
                      {testimonial.quote}
                    </p>
                    <p className="font-semibold text-gray-900 mt-4">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="pt-0 md:pt-0">
          <div className="bg-green-50 rounded-2xl p-10 md:p-16 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dapatkan Wawasan Pertanian Langsung di Email Anda</h2>
                <p className="text-gray-600 text-lg mb-8">
                  Berlangganan buletin mingguan kami untuk mendapatkan tips, trik, dan berita terbaru seputar teknologi pertanian modern.
                </p>
              </div>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <input
                  className="flex-grow px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
                  placeholder="Masukkan alamat email Anda"
                  type="email"
                />
                <motion.button 
                  className="bg-green-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Berlangganan
                </motion.button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <footer className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 pr-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-md mr-3">
                  T
                </div>
                <span className="text-2xl font-bold text-gray-900">TaniMaju</span>
              </div>
              <p className="text-gray-600">
                Memberdayakan petani Indonesia dengan teknologi AI terdepan.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Produk</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-green-600">Fitur</a></li>
                <li><a href="#" className="hover:text-green-600">Harga</a></li>
                <li><a href="#" className="hover:text-green-600">Studi Kasus</a></li>
                <li><a href="#" className="hover:text-green-600">Integrasi</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-green-600">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-green-600">Karir</a></li>
                <li><a href="#" className="hover:text-green-600">Blog</a></li>
                <li><a href="#" className="hover:text-green-600">Hubungi Kami</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-green-600">Ketentuan Layanan</a></li>
                <li><a href="#" className="hover:text-green-600">Kebijakan Privasi</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>© 2025 TaniMaju. Semua Hak Dilindungi.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}