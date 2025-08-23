import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Inicio from './pages/inicio/Inicio';
import Services from './pages/services/Servicios';
import Productos from './pages/productos/Productos';
import ProductoEspecifico from './pages/productos/ProductoEspecifico';
import Contactanos from './pages/contacto/contactanos';
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
import LavavazosIndustrial from './pages/blog/LavavazosIndustrial';
import LavavasosBar from './pages/blog/LavavasosBar';
import LavavasosHosteleria from './pages/blog/LavavasosHosteleria';
import CocinaIndustrial from './pages/blog/CocinaIndustrial';
import CocinaDeGasHorno from './pages/blog/CocinaDeGasHorno';
import HornoRational from './pages/blog/HornoRational';
import PlanchasDeCocina from './pages/blog/PlanchasDeCocina';
import PlanchasElectricas from './pages/blog/PlanchasElectricas';
import PlanchasDeAsarDeGas from './pages/blog/PlanchasDeAsarDeGas';
import FreidoraDobleIndustrial from './pages/blog/FreidoraDobleIndustrial';
import FreidoraGrandeIndustrial from './pages/blog/FreidoraGrandeIndustrial';
import FreidoraIndustrialHosteleria from './pages/blog/FreidoraIndustrialHosteleria';
import FreidoraCincoLitros from './pages/blog/FreidoraCincoLitros';
import ReparacionLavavajillasPalma from './pages/blog/ReparacionLavavajillasPalma';
import ReparacionLavavajillasIndustriales from './pages/blog/ReparaciónLavavajillasIndustriales';
import TecnicosDeLavavajillas from './pages/blog/TécnicosDeLavavajillas';
import ReparacionFreidorasIndustriales from './pages/blog/ReparacionFreidorasIndustriales';
import RepararFreidoraPalmaDeMallorca from './pages/blog/RepararFreidoraPalmaDeMallorca';
import ReparacionCocinaIndustrial from './pages/blog/ReparacionCocinaIndustrial';
import ReparacionDeCampanasExtractoras from './pages/blog/ReparacionDeCampanasExtractoras';
import ReparacionDeEquiposCocina from './pages/blog/ReparacionDeEquiposCocina';
import ReparacionDePlanchas from './pages/blog/ReparacionDePlanchas';
import ReparacionDeVitrinas from './pages/blog/ReparacionDeVitrinas';
import ReparacionDeCongeladores from './pages/blog/ReparacionDeCongeladores';
import ReparacionDeMaquinariasHosteleria from './pages/blog/ReparacionDeMaquinariasHosteleria';
import TecnicoFreidorasIndustriales from './pages/blog/TecnicoFreidorasIndustriales';
import Barcos from './pages/barcos/Barcos';
import Mantenimiento from './pages/barcos/Mantenimiento';
import Limpieza from './pages/barcos/Limpieza';
import CostoManutencionYate from './pages/barcos/CostoManutencionYate';
import CostoManutencionYate30M from './pages/barcos/CostoManutencionYate30M';
import CostoManutencionYateLujo from './pages/barcos/CostoManutencionYateLujo';
import CuartosFrios from './pages/cuartosfrios/CuartosFrios';
import CamaraRefrigeracionSegundaMano from './pages/cuartosfrios/CamaraRefrigeracionSegundaMano';
import CamarasFrigorificasIndustriales from './pages/cuartosfrios/CamarasFrigorificasIndustriales';
import CamarasFrigorificasPrecio from './pages/cuartosfrios/CamarasFrigorificasPrecio';
import CamarasFrigorificasSegundaMano from './pages/cuartosfrios/CamarasFrigorificasSegundaMano';
import CamarasFrioSegundaMano from './pages/cuartosfrios/CamarasFrioSegundaMano';
import CuartosFriosUsadosVenta from './pages/cuartosfrios/CuartosFriosUsadosVenta';
import EquipoFrioIndustrialSegundaMano from './pages/cuartosfrios/EquipoFrioIndustrialSegundaMano';
import PanelesFrigorificosSegundaMano from './pages/cuartosfrios/PanelesFrigorificosSegundaMano';
import PrecioCamarasDeFrio from './pages/cuartosfrios/PrecioCamarasDeFrio';
import PuertaCamaraFrigorificas from './pages/cuartosfrios/PuertaCamaraFrigorificas';
import VentaCamarasFrigorificas from './pages/cuartosfrios/VentaCamarasFrigorificas';

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
          <Route path="/servicio-mantenimiento-limpieza-yates-barcos-palma-mallorca" element={<Barcos />} />
                            <Route path="/cuartos-frios" element={<CuartosFrios />} />
                  <Route path="/camara-refrigeracion-segunda-mano" element={<CamaraRefrigeracionSegundaMano />} />
                  <Route path="/camaras-frigorificas-industriales" element={<CamarasFrigorificasIndustriales />} />
                  <Route path="/camaras-frigorificas-precio" element={<CamarasFrigorificasPrecio />} />
                  <Route path="/camaras-frigorificas-segunda-mano" element={<CamarasFrigorificasSegundaMano />} />
                  <Route path="/camaras-frio-segunda-mano" element={<CamarasFrioSegundaMano />} />
                  <Route path="/cuartos-frios-usados-venta" element={<CuartosFriosUsadosVenta />} />
                  <Route path="/equipo-frio-industrial-segunda-mano" element={<EquipoFrioIndustrialSegundaMano />} />
                  <Route path="/paneles-frigorificos-segunda-mano" element={<PanelesFrigorificosSegundaMano />} />
                  <Route path="/precio-camaras-de-frio" element={<PrecioCamarasDeFrio />} />
                  <Route path="/puerta-camara-frigorificas" element={<PuertaCamaraFrigorificas />} />
                  <Route path="/venta-camaras-frigorificas" element={<VentaCamarasFrigorificas />} />
          <Route path="/mantenimiento-de-barcos-yates-mallorca" element={<Mantenimiento />} />
          <Route path="/limpieza-de-barcos-yates-mallorca" element={<Limpieza />} />
          <Route path="/costos-mantenimiento-yates-mallorca" element={<CostoManutencionYate />} />
          <Route path="/costos-mantenimiento-yates-30m-mallorca" element={<CostoManutencionYate30M />} />
          <Route path="/costos-mantenimiento-yates-lujo-mallorca" element={<CostoManutencionYateLujo />} />
          <Route path="/producto/:slug" element={<ProductoEspecifico />} />
          <Route path="/contacto" element={<Contactanos />} />
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
          <Route path="/blog/lavavasos-industrial" element={<LavavazosIndustrial />} />
          <Route path="/blog/lavavasos-bar" element={<LavavasosBar />} />
          <Route path="/blog/lavavasos-hosteleria" element={<LavavasosHosteleria />} />
          <Route path="/blog/cocina-industrial" element={<CocinaIndustrial />} />
          <Route path="/blog/cocina-gas-horno" element={<CocinaDeGasHorno />} />
          <Route path="/blog/horno-rational" element={<HornoRational />} />
          <Route path="/blog/planchas-cocina" element={<PlanchasDeCocina />} />
          <Route path="/blog/planchas-electricas" element={<PlanchasElectricas />} />
          <Route path="/blog/planchas-asar-gas" element={<PlanchasDeAsarDeGas />} />
          <Route path="/blog/freidora-doble-industrial" element={<FreidoraDobleIndustrial />} />
          <Route path="/blog/freidora-grande-industrial" element={<FreidoraGrandeIndustrial />} />
          <Route path="/blog/freidora-industrial-hosteleria" element={<FreidoraIndustrialHosteleria />} />
          <Route path="/blog/freidora-cinco-litros" element={<FreidoraCincoLitros />} />
          <Route path="/blog/reparacion-lavavajillas-palma" element={<ReparacionLavavajillasPalma />} />
          <Route path="/blog/reparacion-lavavajillas-industriales" element={<ReparacionLavavajillasIndustriales />} />
          <Route path="/blog/tecnicos-lavavajillas" element={<TecnicosDeLavavajillas />} />
          <Route path="/blog/reparacion-freidoras-industriales" element={<ReparacionFreidorasIndustriales />} />
          <Route path="/blog/reparar-freidora-palma" element={<RepararFreidoraPalmaDeMallorca />} />
          <Route path="/blog/reparacion-cocina-industrial" element={<ReparacionCocinaIndustrial />} />
          <Route path="/blog/reparacion-campanas-extractoras" element={<ReparacionDeCampanasExtractoras />} />
          <Route path="/blog/reparacion-equipos-cocina" element={<ReparacionDeEquiposCocina />} />
          <Route path="/blog/reparacion-planchas" element={<ReparacionDePlanchas />} />
          <Route path="/blog/reparacion-vitrinas" element={<ReparacionDeVitrinas />} />
          <Route path="/blog/reparacion-congeladores" element={<ReparacionDeCongeladores />} />
          <Route path="/blog/reparacion-maquinaria-hosteleria" element={<ReparacionDeMaquinariasHosteleria />} />
          <Route path="/blog/tecnico-freidoras-industriales" element={<TecnicoFreidorasIndustriales />} />
          {/* Ruta catch-all para URLs inexistentes - redirige a la página principal */}
          <Route path="*" element={<Navigate to="/inicio" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;