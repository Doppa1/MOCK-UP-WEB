import React from 'react';

const StrukturOrganisasi = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#6f9900] text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Struktur Organisasi Desa</h1>
          <p className="mt-2 text-[#FFD700] tracking-wide font-medium">
            DESA RASAU JAYA TIGA - KECAMATAN RASAU JAYA
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-4 left-4 text-sm text-white/80">
          <p><span className="font-semibold">Beranda</span> / Profil Desa / Struktur Organisasi</p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="bg-white px-6 py-10 text-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {/* KONTEN UTAMA */}
          <div className="md:col-span-2 space-y-8">
            {/* Deskripsi */}
            <div className="p-6 bg-green-50 border-l-4 border-[#006241] shadow-md rounded-xl">
              <h2 className="text-2xl font-bold text-[#006241] mb-4">
                Struktur Organisasi Desa Rasau Jaya Tiga
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Struktur organisasi Desa Rasau Jaya Tiga disusun untuk mendukung kelancaran penyelenggaraan pemerintahan desa secara efektif dan efisien. Struktur ini mencerminkan pembagian tugas dan tanggung jawab dalam berbagai bidang pemerintahan desa.
              </p>
            </div>

            {/* Tabel */}
            <div className="overflow-x-auto bg-white border border-green-200 shadow-md rounded-xl">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-[#006241] text-white">
                  <tr>
                    <th className="px-4 py-3">Jabatan</th>
                    <th className="px-4 py-3">Nama</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-200">
                  {[
                    ['Kepala Desa', 'Nama Kepala Desa'],
                    ['Sekretaris Desa', 'Nama Sekretaris'],
                    ['Kasi Pemerintahan', 'Nama'],
                    ['Kasi Pelayanan', 'Nama'],
                    ['Kaur Keuangan', 'Nama'],
                    ['Kaur Umum', 'Nama'],
                    ['Kadus I - VI', 'Nama-nama Kadus']
                  ].map(([jabatan, nama], i) => (
                    <tr key={i} className="hover:bg-green-100 transition">
                      <td className="px-4 py-3">{jabatan}</td>
                      <td className="px-4 py-3">{nama}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SIDEBAR */}
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
                <li>Pembangunan Jembatan Dusun Suka Damai</li>
                <li>Pelatihan Digitalisasi UMKM</li>
                <li>Posyandu Bulanan Ibu & Anak</li>
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

export default StrukturOrganisasi;
