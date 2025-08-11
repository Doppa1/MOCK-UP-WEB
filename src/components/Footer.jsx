import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
        
        {/* Tentang Desa */}
        <div className="md:col-span-2">
          <h4 className="text-xl font-bold mb-2">DESA RASAU JAYA TIGA</h4>
          <p className="text-sm text-text-200">
            RASAU JAYA – KUBU RAYA – KALIMANTAN BARAT
            <br />
            <br />
            Website desa dibangun dengan tujuan sebagai media pelayanan publik
            resmi desa. Dengan memanfaatkan website, penyelenggaraan pelayanan
            publik dapat dilakukan secara cepat dan mudah.
          </p>
          <a
            href="#"
            className="inline-block mt-4 text-accent-200 hover:underline"
          >
            Selengkapnya
          </a>
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="bg-[#2c2c2c] p-2 rounded-full hover:bg-accent-200"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="bg-[#2c2c2c] p-2 rounded-full hover:bg-accent-200"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="bg-[#2c2c2c] p-2 rounded-full hover:bg-accent-200"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="bg-[#2c2c2c] p-2 rounded-full hover:bg-accent-200"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Tautan */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Tautan</h4>
          <ul className="text-text-200 space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-accent-200">
                Pemkab Kubu Raya
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent-200">
                Kecamatan Rasau Jaya
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent-200">
                Siskuedes Kubu Raya
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent-200">
                Dinas Pemdes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent-200">
                SID Kemendesa
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Kontak Pemerintahan</h4>
          <p className="text-text-200 text-sm leading-relaxed">
            Jalan Bhakti Nomor 001
            <br />
            Kode Pos 78382
            <br />
            <br />
            <strong>Telepon:</strong> -
            <br />
            <strong>Email:</strong> rasaujayatiga@desakkr.id
          </p>
        </div>

        {/* Maps */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Lokasi Desa</h4>
          <div className="rounded overflow-hidden">
            <iframe
              className="w-full h-40 rounded-md"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15945.698920706705!2d109.2420534!3d-0.130748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59636ccfbc5f%3A0x1265a589acb90be4!2sRasau%20Jaya%20Tiga%2C%20Rasau%20Jaya%2C%20Kubu%20Raya%2C%20Kalimantan%20Barat!5e0!3m2!1sid!2sid!4v1690141125807!5m2!1sid!2sid"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Desa"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Statistik */}
      <div className="max-w-7xl mx-auto mt-8 px-4">
        <div className="bg-gray-800 text-white rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-sm text-text-200">
            <div className="flex items-center gap-2">
              <span className="w-48 font-medium">Total Visitor Hari Ini</span>
              <span className="font-bold text-white">23 Visitor</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-48 font-medium">
                Total Sepanjang Waktu
              </span>
              <span className="font-bold text-white">1.286 Visitor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Credit */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-text-200">
        <p>
          KKN-PPM UGM PERIODE 2 TAHUN 2025 KALIMANTAN BARAT
          <br />
          WebsiteDesa 2.0
        </p>
      </div>
    </footer>
  );
};

export default Footer;
