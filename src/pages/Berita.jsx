import React, { useState } from "react";

const beritaDummy = [
  {
    id: 1,
    judul: "Kegiatan Posyandu Balita Dusun Margo Sari",
    tanggal: "01 Agustus 2025",
    deskripsi: "Kegiatan Posyandu rutin dilakukan untuk menjaga kesehatan balita dan ibu hamil di Dusun Margo Sari.",
  },
  {
    id: 2,
    judul: "Gotong Royong Pembersihan Parit",
    tanggal: "25 Juli 2025",
    deskripsi: "Warga Dusun IV Maju Jaya bergotong royong membersihkan saluran air menjelang musim hujan.",
  },
  {
    id: 3,
    judul: "Pelatihan Digitalisasi untuk Pemuda Desa",
    tanggal: "20 Juli 2025",
    deskripsi: "Pelatihan pemanfaatan teknologi digital untuk mendukung potensi ekonomi dan UMKM desa.",
  },
];

const Berita = () => {
  const [query, setQuery] = useState("");

  const filteredBerita = beritaDummy.filter((item) =>
    item.judul.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="bg-gradient-to-b from-green-50 to-white min-h-screen px-4 md:px-8 py-12 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Berita Desa</h1>
          <input
            type="text"
            placeholder="🔍 Cari berita..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:w-1/2 mx-auto p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-500"
          />
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBerita.length > 0 ? (
            filteredBerita.map((berita) => (
              <div
                key={berita.id}
                className="bg-white border border-green-100 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
              >
                <h2 className="text-xl font-semibold text-green-800 mb-2">{berita.judul}</h2>
                <p className="text-sm text-gray-500 italic mb-2">{berita.tanggal}</p>
                <p className="text-gray-700 leading-relaxed">{berita.deskripsi}</p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-2 text-gray-500">Berita tidak ditemukan.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Berita;
