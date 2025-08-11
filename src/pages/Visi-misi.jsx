import React from 'react';

const VisionMissionSection = () => {
  return (
    <>

      {/* Hero */}
      <section className="relative bg-[#6f9900] text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Visi Misi Desa</h1>
          <p className="mt-2 text-[#FFD700] tracking-wide font-medium">
            DESA RASAU JAYA TIGA - KECAMATAN RASAU JAYA
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-4 left-4 text-sm text-white/80">
          <p><span className="font-semibold">Beranda</span> / Profil Desa / Visi Misi</p>
        </div>
      </section>

      {/* Main Section */}
      <section className="bg-white px-6 py-10 text-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {/* VISI & MISI */}
          <div className="md:col-span-2 space-y-8">
            {/* VISI */}
            <div className="p-6 bg-green-50 border-l-4 border-[#006241] shadow-md rounded-xl">
              <h2 className="text-2xl font-bold text-[#006241] mb-2">Visi</h2>
              <p className="text-justify text-gray-700 leading-relaxed">
                Visi adalah suatu gambaran yang menantang tentang keadaan masa depan yang diinginkan
                dengan melihat potensi dan kebutuhan desa. Penyusunan Visi Desa Rasau Jaya Tiga
                dilakukan dengan pendekatan partisipatif, melibatkan pihak-pihak yang berkepentingan
                di Desa Rasau Jaya Tiga seperti pemerintah Desa, BPD, Tokoh Masyarakat, tokoh agama,
                lembaga masyarakat desa dan masyarakat desa pada umumnya. Pertimbangan kondisi
                eksternal di desa seperti satuan kerja wilayah pembangunan di Kecamatan. Maka
                berdasarkan pertimbangan di atas Visi Desa Rasau Jaya Tiga adalah:
              </p>
              <p className="mt-4 italic text-center text-lg text-[#FFB100] font-semibold">
                “MEWUJUDKAN DESA RASAU JAYA TIGA MANDIRI, BERMARTABAT, BERKUALITAS DAN RELIGIUS”
              </p>
            </div>

            {/* MISI */}
            <div className="p-6 bg-yellow-50 border-l-4 border-[#FFB100] shadow-md rounded-xl">
              <h2 className="text-2xl font-bold text-[#FFB100] mb-2">Misi</h2>
              <p className="text-justify text-gray-700 mb-4">
                Selain Penyusunan Visi juga telah ditetapkan misi-misi yang memuat sesuatu pernyataan
                yang harus dilaksanakan oleh Desa agar tercapainya visi desa tersebut. Sebagaimana
                penyusunan Visi, misipun menggunakan pendekatan partisipatif dan pertimbangan potensi
                dan kebutuhan Desa Rasau Jaya Tiga. Maka misi Desa Rasau Jaya Tiga adalah:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Meningkatkan peran serta masyarakat dalam pembangunan kesehatan, pendidikan, seni budaya, pemuda, olahraga dan infrastruktur skala prioritas.</li>
                <li>Meningkatkan kualitas dan kuantitas sarana dan prasarana infrastruktur desa serta pengelolaan sarana dan prasarana desa berbasis kemampuan lokal desa.</li>
                <li>Meningkatkan budaya kerja dan tata kelola pemerintahan yang bersih dan berwibawa (good and clean governance).</li>
                <li>Meningkatkan kualitas dan akses pelayanan dasar menuju kualitas hidup masyarakat yang lebih baik.</li>
                <li>Mengembangkan Sumber Daya Manusia dan pemberdayaan ekonomi masyarakat guna meningkatkan ekonomi kerakyatan berbasis agribisnis.</li>
                <li>Meningkatkan penguatan aktivitas dan kelembagaan bernuansa religius serta peran perempuan dalam kemandirian ekonomi.</li>
                <li>Meningkatkan penguatan otonomi desa dalam pembangunan yang berkeadilan berdasarkan nilai-nilai kearifan lokal.</li>
                <li>Meningkatkan aktivitas kepemudaan yang kreatif, inovatif, dan berprestasi.</li>
              </ol>
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

export default VisionMissionSection;
