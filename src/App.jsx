import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio/Inicio';
import Services from './pages/services/Servicios';
import Productos from './pages/productos/Productos';

function App() {
  return (
    <Router>
      <div className="App w-full min-h-screen">
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;