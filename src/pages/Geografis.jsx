import React from "react";

const Geografi = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#6f9900] text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Kondisi Geografis Desa</h1>
          <p className="mt-2 text-[#FFD700] tracking-wide font-medium">
            DESA RASAU JAYA TIGA - KECAMATAN RASAU JAYA
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-4 left-4 text-sm text-white/80">
          <p><span className="font-semibold">Beranda</span> / Profil Desa / Geografi</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white px-6 py-10 text-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Konten Utama */}
          <div className="md:col-span-2 space-y-6 text-justify">
            <p>
              Desa Rasau Jaya Tiga merupakan salah satu dari 24 desa di Kecamatan Rasau Jaya,
              Kabupaten Kubu Raya, Kalimantan Barat. Letaknya strategis di jalur antar desa dan
              kecamatan, menjadikannya berpotensi dalam agenda pembangunan.
            </p>

            <div className="bg-green-50 border-l-4 border-[#006241] shadow-md rounded-xl p-6">
              <h2 className="text-xl font-bold text-[#006241] mb-2">Letak & Batas Wilayah</h2>
              <p>Wilayah ini beriklim tropis dengan luas wilayah 3.586 ha (11,57 km²), berbatasan dengan:</p>
              <ul className="list-disc list-inside mt-2 ml-4 text-gray-700">
                <li>Sebelah Utara: Desa Rasau Jaya Umum</li>
                <li>Sebelah Selatan: Sungai Punggur Besar</li>
                <li>Sebelah Barat: Primer Bintang Mas 1</li>
                <li>Sebelah Timur: Primer Rasau Jaya Satu</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-[#FFB100] shadow-md rounded-xl p-6">
              <h2 className="text-xl font-bold text-[#FFB100] mb-2">Pembagian Dusun</h2>
              <p>Desa ini terdiri dari 6 dusun, yaitu:</p>
              <ol className="list-decimal list-inside ml-4 mt-2 text-gray-700 space-y-1">
                <li>Dusun I Sangkar Mas</li>
                <li>Dusun II Sumber Makmur</li>
                <li>Dusun III Manunggal Karso</li>
                <li>Dusun IV Maju Jaya</li>
                <li>Dusun V Margo Sari</li>
                <li>Dusun VI Suka Damai</li>
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Cari Berita */}
            <div className="p-4 bg-white border shadow-md rounded-lg">
              <h3 className="text-lg font-semibold text-[#006241] mb-2">Cari Berita</h3>
              <input
                type="text"
                placeholder="Cari judul atau topik..."
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#006241]"
              />
            </div>

            {/* Berita Terbaru */}
            <div className="p-4 bg-green-50 border-l-4 border-[#006241] shadow rounded-lg">
              <h3 className="text-lg font-semibold text-[#006241] mb-2">Berita Terbaru</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Pembangunan Jalan Usaha Tani</li>
                <li>Pembagian Bantuan Sosial</li>
                <li>Sosialisasi Kesehatan Lingkungan</li>
              </ul>
            </div>

            {/* Data Desa */}
            <div className="p-4 bg-yellow-50 border-l-4 border-[#FFB100] shadow rounded-lg">
              <h3 className="text-lg font-semibold text-[#FFB100] mb-2">Data Desa</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Kode Desa:</strong> 6112072004</p>
                <p><strong>Tahun Pembentukan:</strong> 1976</p>
                <p><strong>Tipologi:</strong> Persawahan</p>
                <p><strong>Klasifikasi:</strong> Swakarya</p>
                <p><strong>Kategori:</strong> Madya</p>
                <p><strong>Luas Wilayah:</strong> 3586 Ha</p>
                <p><strong>Batas Utara:</strong> Desa Limbung</p>
                <p><strong>Batas Selatan:</strong> Sungai Punggur Besar</p>
                <p><strong>Batas Timur:</strong> Primer Rasau Jaya Satu</p>
                <p><strong>Batas Barat:</strong> Primer Bintang Mas</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Geografi;
