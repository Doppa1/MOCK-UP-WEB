import React from "react";
import videoDesa from "../assets/Video/video-desa.MP4";
import pegawai from "../assets/pegawai.png";
const MainContent = () => {
  return (
    <main className="mt-0">
      {/* 🎥 Background Video */}
      <section className="relative w-full h-screen overflow-hidden ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoDesa} type="video/mp4" />
          Browser Anda tidak mendukung video.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Selamat Datang di Website Resmi <br /> Desa Rasau Jaya Tiga
          </h1>
          <p className="text-[#e0e0e0] text-lg md:text-xl mb-6">
            Rasau Jaya – Kubu Raya, Kalimantan Barat
          </p>
          <a
            href="#profil"
            className="bg-[#8DB600] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#6f9900] transition"
          >
            Lihat Profil Desa
          </a>
        </div>
      </section>


      {/* 💼 Layanan */}
      <section className="bg-[#000000] py-16 px-4" id="layanan">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF]">
            Layanan Warga
          </h2>
          <p className="text-[#e0e0e0] mt-2">
            Berbagai layanan yang tersedia untuk masyarakat Desa Rasau Jaya Tiga
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              emoji: "📄",
              title: "Layanan Surat",
              desc: "Permohonan surat domisili, usaha, dan lainnya secara online."
            },
            {
              emoji: "📦",
              title: "Potensi Desa",
              desc: "Informasi potensi lokal seperti UMKM, pertanian, dan pariwisata."
            },
            {
              emoji: "🏗️",
              title: "Pembangunan",
              desc: "Rencana dan laporan proyek pembangunan desa secara transparan."
            },
            {
              emoji: "💰",
              title: "Keuangan Desa",
              desc: "Anggaran dan realisasi keuangan desa yang bisa diakses warga."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#8DB600] text-white rounded-xl shadow-md p-6 hover:scale-105 transition transform duration-300"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[#FFFFFF]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📰 Informasi Terbaru dan Agenda */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informasi Terbaru */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-lime-600 pb-2">
              Informasi Terbaru
            </h2>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/600x300"
                alt="Pelatihan Digitalisasi"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-lime-700 mb-2">
                  Pelatihan Digitalisasi
                </h3>
                <p className="text-gray-700 mb-2">
                  Kegiatan pelatihan website desa berlangsung sukses pada 25 Juli 2025 di Balai Desa Rasau Jaya Tiga.
                </p>
                <span className="text-sm text-gray-500">
                  Dipublikasikan pada: 26 Juli 2025
                </span>
              </div>
            </div>
          </div>

          {/* Agenda & Pengumuman */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-lime-600 pb-2">
              Agenda & Pengumuman
            </h2>

            <div className="bg-white p-5 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-lime-600 mb-2">Agenda Mingguan</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>01 Agustus 2025 - Gotong Royong Bersama</li>
                <li>03 Agustus 2025 - Sosialisasi UMKM Digital</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-lime-600 mb-2">Pengumuman</h4>
              <p className="text-gray-700">
                Pendaftaran pelatihan komputer dasar dibuka hingga 10 Agustus 2025. Hubungi Kepala Dusun untuk info lebih lanjut.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* 🧑‍⚖️ Sambutan Kepala Desa */}
      <section className="bg-white py-16 px-4" id="sambutan">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <img
            src={pegawai}
            alt="Kepala Desa"
            className="w-64 h-64 object-cover rounded-full shadow-xl transition-transform hover:scale-105"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Sambutan Kepala Desa
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Assalamu'alaikum Warahmatullahi Wabarakatuh, <br />
              Dengan rasa syukur, kami menyambut Anda di website Desa Rasau Jaya Tiga. Semoga media ini dapat menjadi jembatan informasi, transparansi, dan komunikasi antara pemerintah desa dan masyarakat.
              Mari kita bersama-sama membangun desa yang lebih maju, mandiri, dan sejahtera.
              <br /><br />
              Hormat kami, <br />
              <strong>Nama Kepala Desa</strong>
            </p>
          </div>
        </div>
      </section>

    {/* 🧑‍💼 Profil Pegawai Kantor Desa */}
      <section className="bg-[#000000] py-16 px-4" id="pegawai">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Profil Pegawai Kantor Desa
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              { foto: pegawai, nama: "Anonim", jabatan: "Sekretaris Desa" },
              { foto: pegawai, nama: "Anonim", jabatan: "Kaur Keuangan" },
              { foto: pegawai, nama: "Anonim", jabatan: "Kasi Pemerintahan" },
              { foto: pegawai, nama: "Anonim", jabatan: "Kasi Pelayanan" },
            ].map((pegawai, index) => (
              <div
                key={index}
                className="bg-[#8DB600] text-white rounded-xl shadow-lg overflow-hidden text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
              >
                <img
                  src={pegawai.foto}
                  alt={pegawai.nama}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-200">
                    {pegawai.nama}
                  </h3>
                  <p className="text-sm text-text-100">{pegawai.jabatan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🗺️ Peta Fasilitas Umum */}
      <div className="min-h-screen bg-bg-200 text-text200 p-6 md:p-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 border-b-4 border-primary inline-block pb-2">
            Peta Fasilitas Umum
          </h1>

          <p className="text-lg mb-6 text-text">
            Berikut adalah peta interaktif yang menunjukkan berbagai fasilitas umum di wilayah sekitar.
            Anda dapat memperbesar, memperkecil, atau mengklik pada ikon untuk informasi lebih lanjut.
          </p>

          <div className="w-full h-[500px] bg-bg-300 rounded-xl overflow-hidden shadow-xl border border-primary">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1V47pvvL00ANMficxzt5pKxtwRKcNcnI"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-none"
              title="Peta Fasilitas Umum"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
