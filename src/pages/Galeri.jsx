import React from "react";

const fotoGaleri = [
  {
    id: 1,
    src: "https://source.unsplash.com/600x400/?village,activity",
    judul: "Kegiatan Posyandu",
  },
  {
    id: 2,
    src: "https://source.unsplash.com/600x400/?community,cleaning",
    judul: "Gotong Royong",
  },
  {
    id: 3,
    src: "https://source.unsplash.com/600x400/?digital,training",
    judul: "Pelatihan Digital",
  },
  {
    id: 4,
    src: "https://source.unsplash.com/600x400/?culture,event",
    judul: "Festival Budaya",
  },
  {
    id: 5,
    src: "https://source.unsplash.com/600x400/?agriculture,farm",
    judul: "Panen Raya",
  },
  {
    id: 6,
    src: "https://source.unsplash.com/600x400/?children,education",
    judul: "Kelas Literasi",
  },
];

const GaleriDesaSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#6f9900] text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Galeri Kegiatan Desa</h1>
          <p className="mt-2 text-[#FFD700] tracking-wide font-medium">
            Dokumentasi Momen Penting & Aktivitas Warga
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-4 left-4 text-sm text-white/80">
          <p>
            <span className="font-semibold">Beranda</span> / Profil Desa / Galeri
          </p>
        </div>
      </section>

      {/* Galeri Grid */}
      <section className="bg-white px-6 py-12 text-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#006241] mb-8 border-b-4 border-[#FFD700] inline-block pb-2">
            Galeri Kegiatan
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {fotoGaleri.map((foto) => (
              <div
                key={foto.id}
                className="relative overflow-hidden rounded-xl shadow-md group transform transition duration-300 hover:scale-105"
              >
                <img
                  src={foto.src}
                  alt={foto.judul}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-2">
                  <h3 className="text-lg font-semibold text-white">{foto.judul}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GaleriDesaSection;
