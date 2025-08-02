import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './pages/inicio/Inicio';
import Services from './pages/services/Servicios';
import Productos from './pages/productos/Productos';
import HornoParaPizza from './pages/blog/HornoParaPizza';
import FogonesDeGas from './pages/blog/FogonesDeGas';
import CocinasAGas from './pages/blog/CocinasAGas';
import CocinaDeGasButano from './pages/blog/CocinaDeGasButano';
import HornoDeGas from './pages/blog/HornoDeGas';

function App() {
  return (
    <Router>
      <div className="App w-full min-h-screen">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" replace />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/blog/horno-pizza" element={<HornoParaPizza />} />
          <Route path="/blog/fogones-gas" element={<FogonesDeGas />} />
          <Route path="/blog/cocinas-gas" element={<CocinasAGas />} />
          <Route path="/blog/cocina-gas-butano" element={<CocinaDeGasButano />} />
          <Route path="/blog/horno-gas" element={<HornoDeGas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;