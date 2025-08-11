import { useState } from "react";
import { Link } from "react-router-dom"; // tambahkan ini
import logokab from "../assets/logokab.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#161616] fixed w-full z-50 shadow-md">
  <div className="container mx-auto px-4 py-3 flex justify-between items-center">
    {/* LOGO + TEKS */}
    <div className="flex items-center space-x-2 text-[#8DB600] font-bold text-lg">
      <img src={logokab} alt="Logo Desa" className="h-8 w-8 object-contain" />
      <span>Rasau Jaya Tiga</span>
    </div>

       
        {/* DESKTOP NAV */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="nav-link">Beranda</Link>

          <div className="relative group">
            <span className="nav-link cursor-pointer">Profil Desa</span>
            <div className="dropdown-content py-2">
              <Link to="/sejarah" className="block px-4 py-2 nav-link">Sejarah</Link>
              <Link to="/visi-misi" className="block px-4 py-2 nav-link">Visi & Misi</Link>
              <Link to="/geografis" className="block px-4 py-2 nav-link">Geografis</Link>
            </div>
          </div>

          <div className="relative group">
            <span className="nav-link cursor-pointer">Pemerintahan</span>
            <div className="dropdown-content py-2 w-52">
              <Link to="/struktur-desa" className="block px-4 py-2 nav-link">Struktur Organisasi</Link>
              <Link to="/struktur-desa" className="block px-4 py-2 nav-link">Perangkat Desa</Link>
            </div>
          </div>

          <Link to="/layanan" className="nav-link">Layanan</Link>
          <Link to="/berita" className="nav-link">Berita</Link>
          <Link to="/galeri" className="nav-link">Galeri</Link>
          <Link to="/kontak" className="nav-link">Kontak</Link>
        </nav>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {menuOpen && (
        <div className="md:hidden bg-[#161616] px-4 pb-4">
          <Link to="/" className="block nav-link">Beranda</Link>
          <div>
            <span className="block nav-link">Profil Desa</span>
            <div className="pl-4">
              <Link to="/sejarah" className="block nav-link">Sejarah</Link>
              <Link to="/visi-misi" className="block nav-link">Visi & Misi</Link>
              <Link to="/geografis" className="block nav-link">Geografis</Link>
            </div>
          </div>
          <div>
            <span className="block nav-link">Pemerintahan</span>
            <div className="pl-4">
              <Link to="/struktur-desa" className="block nav-link">Struktur Organisasi</Link>
              <Link to="/struktur-desa" className="block nav-link">Perangkat Desa</Link>
            </div>
          </div>
          <Link to="/layanan" className="block nav-link">Layanan</Link>
          <Link to="/berita" className="block nav-link">Berita</Link>
          <Link to="/galeri" className="block nav-link">Galeri</Link>
          <Link to="/kontak" className="block nav-link">Kontak</Link>
        </div>
      )}
    </header>
  );
};

export default Header;