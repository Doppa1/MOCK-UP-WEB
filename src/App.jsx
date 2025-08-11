import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Beranda from './Pages/Beranda';
import Sejarah from './Pages/Sejarah';
import VisiMisi from './Pages/Visi-misi';
import Geografis from './Pages/Geografis';
import Layanan from './Pages/Layanan';
import Berita from './Pages/Berita';
import Galeri from './Pages/Galeri';
import Kontak from './Pages/Kontak';
import StrukturOrganisasi from './Pages/Struktuk Desa';

function App() {
  return (
    <Router>
      <div className="fixed top-4 right-4 z-40">
        <div id="google_translate_element"></div>
      </div>
      <Header />
      <div className="pt-16"> {/* Padding top agar tidak tertutup header fixed */}
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/sejarah" element={<Sejarah />} />
          <Route path="/visi-misi" element={<VisiMisi />} />
          <Route path="/geografis" element={<Geografis />} />
          <Route path="/struktur-desa" element={<StrukturOrganisasi />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
