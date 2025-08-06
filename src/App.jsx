import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Inicio from './pages/inicio/Inicio';
import Services from './pages/services/Servicios';
import Productos from './pages/productos/Productos';
import ProductoEspecifico from './pages/productos/ProductoEspecifico';
import HornoParaPizza from './pages/blog/HornoParaPizza';
import FogonesDeGas from './pages/blog/FogonesDeGas';
import CocinasAGas from './pages/blog/CocinasAGas';
import CocinaDeGasButano from './pages/blog/CocinaDeGasButano';
import HornoDeGas from './pages/blog/HornoDeGas';
import LavavajillasIndustriales from './pages/blog/LavavajillasIndustriales';
import LavavajillasSmeg from './pages/blog/LavavajillasSmeg';
import LavavajillasHosteleria from './pages/blog/LavavajillasHosteleria';
import LavavajillasCopasHosteleria from './pages/blog/LavavajillasCopasHosteleria';
import LavavajillasDeBar from './pages/blog/LavavajillasDeBar';
import TiposLavavajillasHosteleria from './pages/blog/TiposLavavajillasHosteleria';
import ReparacionMaquinariaHosteleria from './pages/blog/reparacionmaquinariahosteleria';

// Componente para manejar el scroll automático
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App w-full min-h-screen">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" replace />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:slug" element={<ProductoEspecifico />} />
          <Route path="/blog/horno-pizza" element={<HornoParaPizza />} />
          <Route path="/blog/fogones-gas" element={<FogonesDeGas />} />
          <Route path="/blog/cocinas-gas" element={<CocinasAGas />} />
          <Route path="/blog/cocina-gas-butano" element={<CocinaDeGasButano />} />
          <Route path="/blog/horno-gas" element={<HornoDeGas />} />
          <Route path="/blog/lavavajillas-industriales" element={<LavavajillasIndustriales />} />
          <Route path="/blog/lavavajillas-smeg" element={<LavavajillasSmeg />} />
          <Route path="/blog/lavavajillas-hosteleria" element={<LavavajillasHosteleria />} />
          <Route path="/blog/lavavajillas-copas-hosteleria" element={<LavavajillasCopasHosteleria />} />
          <Route path="/blog/lavavajillas-de-bar" element={<LavavajillasDeBar />} />
          <Route path="/blog/tipos-lavavajillas-hosteleria" element={<TiposLavavajillasHosteleria />} />
          <Route path="/blog/reparacion-maquinaria-hosteleria" element={<ReparacionMaquinariaHosteleria />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;