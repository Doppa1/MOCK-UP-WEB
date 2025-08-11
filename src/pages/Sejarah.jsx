import React from "react";
import logo from "../assets/logo.jpg";

const Sejarah = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#6f9900] text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Sejarah Desa Rasau Jaya Tiga</h1>
          <p className="mt-2 text-[#FFD700] tracking-wide font-medium">
            Menelusuri Jejak Transmigrasi dan Harapan Masa Depan
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-4 left-4 text-sm text-white/80">
          <p>
            <span className="font-semibold">Beranda</span> / Profil Desa / Sejarah
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white px-6 py-10 text-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Konten Sejarah */}
          <div className="md:col-span-2 space-y-8">
            {/* Media */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img src={logo} alt="Logo Desa" className="w-40 h-40 object-contain" />
              </div>
              <div className="flex justify-center">
                <img
                  src="/sejarah.jpg"
                  alt="Sejarah Desa"
                  className="rounded-2xl shadow-lg w-full max-w-md"
                />
              </div>
            </div>

            {/* Teks Sejarah */}
            <div className="p-6 bg-green-50 border-l-4 border-[#006241] shadow-md rounded-xl leading-relaxed text-justify text-gray-700">
              <p className="mb-4">
                <strong>Desa Rasau Jaya Tiga</strong> merupakan wilayah transmigrasi pada zaman Presiden Soeharto, yang masuk ke Kalimantan Barat pada tahun 1976. Mayoritas warga yang transmigrasi di Desa Rasau Jaya Tiga adalah suku Jawa, dan sebagian kecil lainnya adalah Sunda dan Madura.
              </p>
              <p className="mb-4">
                Bentuk kepedulian dan perhatian pemerintah saat itu sangatlah banyak. Setiap kepala keluarga diberikan perumahan sederhana, bahan pangan pokok selama dua tahun, sejumlah pakaian, kelengkapan alat-alat pertanian, bibit tanaman, sapi dua ekor setiap kepala keluarga dan lahan seluas dua hektar setiap kepala keluarga.
              </p>
              <p className="mb-4">
                Beberapa masalah yang mereka hadapi dalam mengelola lahan adalah perbedaan lahan yang ada di Jawa dan di Kalimantan yaitu lahan gambut. Tidak jarang dari beberapa transmigran merasa tidak betah dan mengeluhkan kesejahteraan hidup mereka sehingga memutuskan kembali ke asal atau berpindah ke tempat lain. Akan tetapi, seiring berjalannya waktu, permasalahan itu mulai teratasi dengan pengalaman para transmigran dalam bercocok tanam serta pengolahan lahan. Dari latar belakang itulah maka warga Desa Rasau Jaya Tiga berprofesi sebagai petani.
              </p>
              <p className="mb-4">
                Pada mulanya, sebelum dinamai dengan Desa Rasau Jaya Tiga, wilayah tersebut dinamai dengan sebutan <em>UPT Sungai Rasau 3</em>. Penamaan itu dilatarbelakangi karena adanya sungai alam yang berada di desa ini yang tumbuh dengan subur tanaman yang dikenal dengan tumbuhan rasau. Kala itu unit permukiman transmigrasi dikepalai oleh Abdul Rasman sejak tahun 1976–1982.
              </p>
              <p>
                Pada tahun 1983, nama Sungai Rasau diubah oleh kepala desa yang menjabat saat itu yaitu Bobby Dacosta menjadi <strong>Desa Rasau Jaya Tiga</strong>. Sampai saat ini nama itu masih tetap digunakan. Pergantian nama ini memiliki makna yang amat dalam yaitu sebuah harapan kelak desa Rasau ini akan menuai kejayaan dalam segala hal. Oleh karena itu, harapan ini melekat pada penamaan Desa Rasau Jaya Tiga.
              </p>
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

export default Sejarah;
