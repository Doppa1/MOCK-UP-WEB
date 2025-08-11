import React from 'react';

const layananList = [
  {
    title: 'Pengantar Nikah',
    excerpt: 'Berikut ini persyaratan yang harus dilengkapi untuk membuat pengantar nikah di desa...',
    date: '2 Agustus 2025',
  },
  {
    title: 'Surat Keterangan',
    excerpt: 'Berikut ini persyaratan yang harus dilengkapi untuk membuat Surat Keterangan...',
    date: '2 Agustus 2025',
  },
  {
    title: 'Surat Keterangan Domisili',
    excerpt: 'Berikut ini persyaratan yang harus dilengkapi untuk membuat Surat Keterangan Domisili...',
    date: '2 Agustus 2025',
  },
  {
    title: 'Surat Keterangan Domisili Instansi',
    excerpt: 'Berikut ini persyaratan untuk membuat Surat Keterangan Domisili Instansi...',
    date: '2 Agustus 2025',
  },
  {
    title: 'Surat Keterangan Kelahiran Baru',
    excerpt: 'Berikut ini persyaratan untuk membuat Surat Keterangan Kelahiran Baru...',
    date: '2 Agustus 2025',
  },
  {
    title: 'Surat Keterangan Kematian',
    excerpt: 'Berikut ini persyaratan untuk membuat Surat Keterangan Kematian...',
    date: '2 Agustus 2025',
  },
  {
    title: 'Surat Keterangan Usaha',
    excerpt: 'Berikut ini persyaratan yang harus dilengkapi untuk membuat Surat Keterangan Usaha...',
    date: '2 Agustus 2025',
  },
  {
    title: 'Surat Pernyataan dan Keterangan Ahli Waris',
    excerpt: 'Berikut ini persyaratan yang harus dilengkapi untuk membuat Surat Ahli Waris...',
    date: '2 Agustus 2025',
  },
];

const Layanan = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#6f9900] text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Layanan Desa</h1>
          <p className="mt-2 text-[#FFD700] tracking-wide font-medium">
            DESA RASAU JAYA TIGA - KECAMATAN RASAU JAYA
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-4 left-4 text-sm text-white/80">
          <p><span className="font-semibold">Beranda</span> / Layanan</p>
        </div>
      </section>

      {/* Konten Layanan */}
      <section className="bg-white px-6 py-10 text-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Daftar Layanan */}
          <div className="md:col-span-2 space-y-6">
            {layananList.map((layanan, index) => (
              <div
                key={index}
                className="p-6 bg-green-50 border-l-4 border-[#6f9900] shadow-md rounded-xl hover:shadow-lg hover:scale-[1.01] transition-transform duration-300"
              >
                <h2 className="text-xl font-bold text-[#6f9900] mb-1">{layanan.title}</h2>
                <p className="text-gray-700 text-sm mb-2">{layanan.excerpt}</p>
                <p className="text-xs text-gray-500 font-semibold">{layanan.date}</p>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Pencarian Layanan */}
            <div className="p-4 bg-white border shadow-md rounded-lg">
              <h3 className="text-lg font-semibold text-[#006241] mb-2">Cari Layanan</h3>
              <input
                type="text"
                placeholder="Cari layanan..."
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#006241]"
              />
            </div>

            {/* Informasi Terkait */}
            <div className="p-4 bg-green-50 border-l-4 border-[#006241] shadow rounded-lg">
              <h3 className="text-lg font-semibold text-[#006241] mb-2">Informasi Terkait</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Pelayanan KTP dan KK</li>
                <li>Jam Operasional Kantor</li>
                <li>Hubungi Kepala Dusun</li>
              </ul>
            </div>

            {/* Bantuan */}
            <div className="p-4 bg-yellow-50 border-l-4 border-[#FFB100] shadow rounded-lg">
              <h3 className="text-lg font-semibold text-[#FFB100] mb-2">Bantuan</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p>Butuh bantuan lebih lanjut?</p>
                <p>Hubungi <strong>Admin Desa</strong> di:</p>
                <p>Email: admin@rasaujayatiga.desa.id</p>
                <p>Telepon: 0812-3456-7890</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Layanan;
