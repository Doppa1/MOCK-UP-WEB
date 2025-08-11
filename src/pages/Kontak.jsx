import React from "react";

const Kontak = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#6f9900] text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Kontak Kami</h1>
          <p className="mt-2 text-[#FFD700] tracking-wide font-medium">
            DESA RASAU JAYA TIGA - KECAMATAN RASAU JAYA
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-4 left-4 text-sm text-white/80">
          <p><span className="font-semibold">Beranda</span> / Kontak</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white px-6 py-12 text-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Formulir Kontak */}
          <div className="md:col-span-2">
            <form className="space-y-6 bg-green-50 border-l-4 border-[#006241] p-6 shadow-md rounded-xl">
              <h2 className="text-2xl font-bold text-[#006241] mb-4">Formulir Kontak</h2>
              <p className="text-gray-700 mb-6 text-sm">
                Jika Anda memiliki pertanyaan, saran, atau ingin menyampaikan informasi,
                silakan isi formulir di bawah ini.
              </p>

              <div>
                <label htmlFor="nama" className="block font-medium mb-1">Nama</label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006241]"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006241]"
                  placeholder="emailanda@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="pesan" className="block font-medium mb-1">Pesan</label>
                <textarea
                  id="pesan"
                  name="pesan"
                  rows="5"
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006241]"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                className="bg-[#006241] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#004d30] transition"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Info Kontak */}
          <aside className="space-y-6">
            <div className="p-6 bg-yellow-50 border-l-4 border-[#FFB100] shadow-md rounded-xl">
              <h3 className="text-xl font-bold text-[#FFB100] mb-3">Informasi Kontak</h3>
              <div className="text-sm space-y-2 text-gray-700">
                <p><strong>Alamat:</strong> Jl. Desa Harmoni No.123, Kecamatan Makmur, Kabupaten Sejahtera</p>
                <p><strong>Email:</strong> <a href="mailto:desa@example.com" className="text-[#006241] hover:underline">desa@example.com</a></p>
                <p><strong>Telepon:</strong> <a href="tel:+6281234567890" className="text-[#006241] hover:underline">+62 812-3456-7890</a></p>
              </div>
            </div>

            <div className="p-4 bg-white border shadow-md rounded-lg">
              <h3 className="text-lg font-semibold text-[#006241] mb-2">Jam Layanan</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Senin - Jumat: 08.00 - 16.00</li>
                <li>Sabtu - Minggu: Libur</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Kontak;
