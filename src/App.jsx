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
import BancosParaBarModernos from './pages/sillas/BancosParaBarModernos';
import CocinaMesasDeAceroInoxidable from './pages/sillas/CocinaMesasDeAceroInoxidable';
import SillonesDeRestaurante from './pages/sillas/SillonesDeRestaurante';
import BancosParaBarraDeCantina from './pages/sillas/BancosParaBarraDeCantina';
import CocinasConMesadaDeAceroInoxidable from './pages/sillas/CocinasConMesadaDeAceroInoxidable';
import BancosParaBarraDeMaderaModernos from './pages/sillas/BancosParaBarraDeMaderaModernos';
import BancosYMesasParaBar from './pages/sillas/BancosYMesasParaBar';
import ComprarMesasYSillasParaBar from './pages/sillas/ComprarMesasYSillasParaBar';
import ComprarSillasBar from './pages/sillas/ComprarSillasBar';
import DisenoDeMesasParaRestaurante from './pages/sillas/DisenoDeMesasParaRestaurante';
import Mesa4SillasParaRestaurante from './pages/sillas/Mesa4SillasParaRestaurante';
import MesaCocinaInox from './pages/sillas/MesaCocinaInox';
import MesadaAceroInoxidableCocina from './pages/sillas/MesadaAceroInoxidableCocina';
import MesadaAceroInoxidableUsada from './pages/sillas/MesadaAceroInoxidableUsada';
import MesadaDeAceroInoxidablePrecio from './pages/sillas/MesadaDeAceroInoxidablePrecio';
import MesaMetalicaCocina from './pages/sillas/MesaMetalicaCocina';
import MesaParaRestaurante4Sillas from './pages/sillas/MesaParaRestaurante4Sillas';
import MesasAceroInoxidableHosteleria from './pages/sillas/MesasAceroInoxidableHosteleria';
import MesasConSombrillaParaRestaurante from './pages/sillas/MesasConSombrillaParaRestaurante';
import MesasDeAceroInoxidableParaCocinaUsadas from './pages/sillas/MesasDeAceroInoxidableParaCocinaUsadas';
import MesasDeAceroInoxidableParaGastronomia from './pages/sillas/MesasDeAceroInoxidableParaGastronomia';
import MesasDeComedorParaRestaurantes from './pages/sillas/MesasDeComedorParaRestaurantes';
import MesasDeEstibasParaRestaurante from './pages/sillas/MesasDeEstibasParaRestaurante';
import MesasDePlasticoParaNegocio from './pages/sillas/MesasDePlasticoParaNegocio';
import MesasDeSegundaParaRestaurante from './pages/sillas/MesasDeSegundaParaRestaurante';
import MesasDeTrabajoDeAceroInoxidableParaCocina from './pages/sillas/MesasDeTrabajoDeAceroInoxidableParaCocina';
import MesasPara4PersonasRestaurante from './pages/sillas/MesasPara4PersonasRestaurante';
import MesasParaBarExterior from './pages/sillas/MesasParaBarExterior';
import MesasParaRestauranteBar from './pages/sillas/MesasParaRestauranteBar';
import MesasParaRestauranteVintage from './pages/sillas/MesasParaRestauranteVintage';
import MesasParaRestobar from './pages/sillas/MesasParaRestobar';
import MesasYSillasAltasParaBar from './pages/sillas/MesasYSillasAltasParaBar';
import MesasYSillasCocteleras from './pages/sillas/MesasYSillasCocteleras';
import MesasYSillasDeAceroInoxidableParaRestaurante from './pages/sillas/MesasYSillasDeAceroInoxidableParaRestaurante';
import MesasYSillasDeMaderaParaBar from './pages/sillas/MesasYSillasDeMaderaParaBar';
import MesasYSillasDePlasticoParaNegocio from './pages/sillas/MesasYSillasDePlasticoParaNegocio';
import MesasYSillasDeRestaurante from './pages/sillas/MesasYSillasDeRestaurante';
import MesasYSillasMetalicasParaRestaurante from './pages/sillas/MesasYSillasMetalicasParaRestaurante';
import MesasYSillasParaAsaderoDePollos from './pages/sillas/MesasYSillasParaAsaderoDePollos';
import MesasYSillasParaCevicheria from './pages/sillas/MesasYSillasParaCevicheria';
import MesasYSillasParaNegocio from './pages/sillas/MesasYSillasParaNegocio';
import MesasYSillasParaNegocioDeComidasRapidas from './pages/sillas/MesasYSillasParaNegocioDeComidasRapidas';
import MesasYSillasParaPasteleria from './pages/sillas/MesasYSillasParaPasteleria';
import MesasYSillasParaPolleria from './pages/sillas/MesasYSillasParaPolleria';
import MesasYSillasParaRestauranteDeMadera from './pages/sillas/MesasYSillasParaRestauranteDeMadera';
import MesasYSillasParaRestauranteDePlastico from './pages/sillas/MesasYSillasParaRestauranteDePlastico';
import MesasYSillasParaRestauranteMexicano from './pages/sillas/MesasYSillasParaRestauranteMexicano';
import MesasYSillasParaRestoBar from './pages/sillas/MesasYSillasParaRestoBar';
import MesasYSillasParaTaqueria from './pages/sillas/MesasYSillasParaTaqueria';
import MesasYSillasParaTaquerias from './pages/sillas/MesasYSillasParaTaquerias';
import MesasYSillasParaTerrazaDeRestaurante from './pages/sillas/MesasYSillasParaTerrazaDeRestaurante';
import MesasYSillasPlegablesParaBar from './pages/sillas/MesasYSillasPlegablesParaBar';
import MesasYSillasRusticasParaBar from './pages/sillas/MesasYSillasRusticasParaBar';
import MesasYSillasRusticasParaRestaurante from './pages/sillas/MesasYSillasRusticasParaRestaurante';
import MesasYSillasVintageParaCafeteria from './pages/sillas/MesasYSillasVintageParaCafeteria';
import MesaTrabajoCocinaAceroInoxidable from './pages/sillas/MesaTrabajoCocinaAceroInoxidable';
import MuebleDeCocinaConMesadaDeAceroInoxidable from './pages/sillas/MuebleDeCocinaConMesadaDeAceroInoxidable';
import NegocioDeSillasYMesas from './pages/sillas/NegocioDeSillasYMesas';
import SillaBar from './pages/sillas/SillaBar';
import SillaDeBares from './pages/sillas/SillaDeBares';
import SillasAltasParaBarra from './pages/sillas/SillasAltasParaBarra';
import SillasBarMueblesYAccesorios from './pages/sillas/SillasBarMueblesYAccesorios';
import SillasBarraCocina from './pages/sillas/SillasBarraCocina';
import SillasCafeteriaVintage from './pages/sillas/SillasCafeteriaVintage';
import SillasDeAceroInoxidableParaComedor from './pages/sillas/SillasDeAceroInoxidableParaComedor';
import SillasDeAluminioDeBar from './pages/sillas/SillasDeAluminioDeBar';
import SillasDeBar from './pages/sillas/SillasDeBar';
import SillasDeBarDeMaderaModernas from './pages/sillas/SillasDeBarDeMaderaModernas';
import SillasDeBarEnHierroForjado from './pages/sillas/SillasDeBarEnHierroForjado';
import SillasDeMetalParaRestaurante from './pages/sillas/SillasDeMetalParaRestaurante';
import SillasDePlasticoParaRestaurante from './pages/sillas/SillasDePlasticoParaRestaurante';
import SillasDeTaqueria from './pages/sillas/SillasDeTaqueria';
import SillasMexicanasParaRestaurante from './pages/sillas/SillasMexicanasParaRestaurante';
import SillasModernasParaBar from './pages/sillas/SillasModernasParaBar';
import SillasModernasParaBarras from './pages/sillas/SillasModernasParaBarras';
import SillasParaBares from './pages/sillas/SillasParaBares';
import SillasParaBaresYConfiterias from './pages/sillas/SillasParaBaresYConfiterias';
import SillasParaBarraVintage from './pages/sillas/SillasParaBarraVintage';
import SillasParaBarTapizadas from './pages/sillas/SillasParaBarTapizadas';
import SillasParaNegocioComidasRapidas from './pages/sillas/SillasParaNegocioComidasRapidas';
import SillasParaRestauranteExterior from './pages/sillas/SillasParaRestauranteExterior';
import SillasPuffParaBar from './pages/sillas/SillasPuffParaBar';
import SillasRestaurant from './pages/sillas/SillasRestaurant';
import SillasTailandesas from './pages/sillas/SillasTailandesas';
import SillasTerrazaCafeteria from './pages/sillas/SillasTerrazaCafeteria';
import SillasTerrazaRestaurante from './pages/sillas/SillasTerrazaRestaurante';
import SillasTipoBar from './pages/sillas/SillasTipoBar';
import SillasTipoLounge from './pages/sillas/SillasTipoLounge';
import SillasYMesasDeMaderaParaNegocio from './pages/sillas/SillasYMesasDeMaderaParaNegocio';
import SillasYMesasEnMaderaParaRestaurante from './pages/sillas/SillasYMesasEnMaderaParaRestaurante';
import SillasYMesasHosteleria from './pages/sillas/SillasYMesasHosteleria';
import SillasYMesasTerrazaBar from './pages/sillas/SillasYMesasTerrazaBar';
import SilleteriaParaPanaderia from './pages/sillas/SilleteriaParaPanaderia';
import SillonesParaBar from './pages/sillas/SillonesParaBar';
import VentaDeMesasDeMaderaParaRestaurante from './pages/sillas/VentaDeMesasDeMaderaParaRestaurante';
import SillonesParaBarModernos from './pages/sillas/SillonesParaBarModernos';
import VentaDeSillasParaBar from './pages/sillas/VentaDeSillasParaBar';
import SillonesParaCafeteria from './pages/sillas/SillonesParaCafeteria';
import VentaMesasYSillasParaRestaurante from './pages/sillas/VentaMesasYSillasParaRestaurante';
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
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Navigate to="/" replace />} />
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
          <Route path="/bancos-para-bar-modernos" element={<BancosParaBarModernos />} />
          <Route path="/cocina-mesas-de-acero-inoxidable" element={<CocinaMesasDeAceroInoxidable />} />
          <Route path="/sillones-de-restaurante" element={<SillonesDeRestaurante />} />
          <Route path="/bancos-para-barra-de-cantina" element={<BancosParaBarraDeCantina />} />
          <Route path="/cocinas-con-mesada-de-acero-inoxidable" element={<CocinasConMesadaDeAceroInoxidable />} />
          <Route path="/bancos-para-barra-de-madera-modernos" element={<BancosParaBarraDeMaderaModernos />} />
          <Route path="/bancos-y-mesas-para-bar" element={<BancosYMesasParaBar />} />
          <Route path="/comprar-mesas-y-sillas-para-bar" element={<ComprarMesasYSillasParaBar />} />
          <Route path="/comprar-sillas-bar" element={<ComprarSillasBar />} />
          <Route path="/diseno-de-mesas-para-restaurante" element={<DisenoDeMesasParaRestaurante />} />
          <Route path="/mesa-4-sillas-para-restaurante" element={<Mesa4SillasParaRestaurante />} />
          <Route path="/mesa-cocina-inox" element={<MesaCocinaInox />} />
          <Route path="/mesada-acero-inoxidable-cocina" element={<MesadaAceroInoxidableCocina />} />
          <Route path="/mesada-acero-inoxidable-usada" element={<MesadaAceroInoxidableUsada />} />
          <Route path="/mesada-de-acero-inoxidable-precio" element={<MesadaDeAceroInoxidablePrecio />} />
          <Route path="/mesa-metalica-cocina" element={<MesaMetalicaCocina />} />
          <Route path="/mesa-para-restaurante-4-sillas" element={<MesaParaRestaurante4Sillas />} />
          <Route path="/mesas-acero-inoxidable-hosteleria" element={<MesasAceroInoxidableHosteleria />} />
          <Route path="/mesas-con-sombrilla-para-restaurante" element={<MesasConSombrillaParaRestaurante />} />
          <Route path="/mesas-de-acero-inoxidable-para-cocina-usadas" element={<MesasDeAceroInoxidableParaCocinaUsadas />} />
          <Route path="/mesas-de-acero-inoxidable-para-gastronomia" element={<MesasDeAceroInoxidableParaGastronomia />} />
          <Route path="/mesas-de-comedor-para-restaurantes" element={<MesasDeComedorParaRestaurantes />} />
          <Route path="/mesas-de-estibas-para-restaurante" element={<MesasDeEstibasParaRestaurante />} />
          <Route path="/mesas-de-plastico-para-negocio" element={<MesasDePlasticoParaNegocio />} />
          <Route path="/mesas-de-segunda-para-restaurante" element={<MesasDeSegundaParaRestaurante />} />
          <Route path="/mesas-de-trabajo-de-acero-inoxidable-para-cocina" element={<MesasDeTrabajoDeAceroInoxidableParaCocina />} />
          <Route path="/mesas-para-4-personas-restaurante" element={<MesasPara4PersonasRestaurante />} />
          <Route path="/mesas-para-bar-exterior" element={<MesasParaBarExterior />} />
          <Route path="/mesas-para-restaurante-bar" element={<MesasParaRestauranteBar />} />
          <Route path="/mesas-para-restaurante-vintage" element={<MesasParaRestauranteVintage />} />
          <Route path="/mesas-para-restobar" element={<MesasParaRestobar />} />
          <Route path="/mesas-y-sillas-altas-para-bar" element={<MesasYSillasAltasParaBar />} />
          <Route path="/mesas-y-sillas-cocteleras" element={<MesasYSillasCocteleras />} />
          <Route path="/mesas-y-sillas-de-acero-inoxidable-para-restaurante" element={<MesasYSillasDeAceroInoxidableParaRestaurante />} />
          <Route path="/mesas-y-sillas-de-madera-para-bar" element={<MesasYSillasDeMaderaParaBar />} />
          <Route path="/mesas-y-sillas-de-plastico-para-negocio" element={<MesasYSillasDePlasticoParaNegocio />} />
          <Route path="/mesas-y-sillas-de-restaurante" element={<MesasYSillasDeRestaurante />} />
          <Route path="/mesas-y-sillas-metalicas-para-restaurante" element={<MesasYSillasMetalicasParaRestaurante />} />
          <Route path="/mesas-y-sillas-para-asadero-de-pollos" element={<MesasYSillasParaAsaderoDePollos />} />
          <Route path="/mesas-y-sillas-para-cevicheria" element={<MesasYSillasParaCevicheria />} />
          <Route path="/mesas-y-sillas-para-negocio" element={<MesasYSillasParaNegocio />} />
          <Route path="/mesas-y-sillas-para-negocio-de-comidas-rapidas" element={<MesasYSillasParaNegocioDeComidasRapidas />} />
          <Route path="/mesas-y-sillas-para-pasteleria" element={<MesasYSillasParaPasteleria />} />
          <Route path="/mesas-y-sillas-para-polleria" element={<MesasYSillasParaPolleria />} />
          <Route path="/mesas-y-sillas-para-restaurante-de-madera" element={<MesasYSillasParaRestauranteDeMadera />} />
          <Route path="/mesas-y-sillas-para-restaurante-de-plastico" element={<MesasYSillasParaRestauranteDePlastico />} />
          <Route path="/mesas-y-sillas-para-restaurante-mexicano" element={<MesasYSillasParaRestauranteMexicano />} />
          <Route path="/mesas-y-sillas-para-resto-bar" element={<MesasYSillasParaRestoBar />} />
          <Route path="/mesas-y-sillas-para-taqueria" element={<MesasYSillasParaTaqueria />} />
          <Route path="/mesas-y-sillas-para-taquerias" element={<MesasYSillasParaTaquerias />} />
          <Route path="/mesas-y-sillas-para-terraza-de-restaurante" element={<MesasYSillasParaTerrazaDeRestaurante />} />
          <Route path="/mesas-y-sillas-plegables-para-bar" element={<MesasYSillasPlegablesParaBar />} />
          <Route path="/mesas-y-sillas-rusticas-para-bar" element={<MesasYSillasRusticasParaBar />} />
          <Route path="/mesas-y-sillas-rusticas-para-restaurante" element={<MesasYSillasRusticasParaRestaurante />} />
          <Route path="/mesas-y-sillas-vintage-para-cafeteria" element={<MesasYSillasVintageParaCafeteria />} />
          <Route path="/mesa-trabajo-cocina-acero-inoxidable" element={<MesaTrabajoCocinaAceroInoxidable />} />
          <Route path="/mueble-de-cocina-con-mesada-de-acero-inoxidable" element={<MuebleDeCocinaConMesadaDeAceroInoxidable />} />
          <Route path="/negocio-de-sillas-y-mesas" element={<NegocioDeSillasYMesas />} />
          <Route path="/silla-bar" element={<SillaBar />} />
          <Route path="/silla-de-bares" element={<SillaDeBares />} />
          <Route path="/sillas-altas-para-barra" element={<SillasAltasParaBarra />} />
          <Route path="/sillas-bar-muebles-y-accesorios" element={<SillasBarMueblesYAccesorios />} />
          <Route path="/sillas-barra-cocina" element={<SillasBarraCocina />} />
          <Route path="/sillas-cafeteria-vintage" element={<SillasCafeteriaVintage />} />
          <Route path="/sillas-de-acero-inoxidable-para-comedor" element={<SillasDeAceroInoxidableParaComedor />} />
          <Route path="/sillas-de-aluminio-de-bar" element={<SillasDeAluminioDeBar />} />
          <Route path="/sillas-de-bar" element={<SillasDeBar />} />
          <Route path="/sillas-de-bar-de-madera-modernas" element={<SillasDeBarDeMaderaModernas />} />
          <Route path="/sillas-de-bar-en-hierro-forjado" element={<SillasDeBarEnHierroForjado />} />
          <Route path="/sillas-de-metal-para-restaurante" element={<SillasDeMetalParaRestaurante />} />
          <Route path="/sillas-de-plastico-para-restaurante" element={<SillasDePlasticoParaRestaurante />} />
          <Route path="/sillas-de-taqueria" element={<SillasDeTaqueria />} />
          <Route path="/sillas-mexicanas-para-restaurante" element={<SillasMexicanasParaRestaurante />} />
          <Route path="/sillas-modernas-para-bar" element={<SillasModernasParaBar />} />
          <Route path="/sillas-modernas-para-barras" element={<SillasModernasParaBarras />} />
          <Route path="/sillas-para-bares" element={<SillasParaBares />} />
          <Route path="/sillas-para-bares-y-confiterias" element={<SillasParaBaresYConfiterias />} />
          <Route path="/sillas-para-barra-vintage" element={<SillasParaBarraVintage />} />
          <Route path="/sillas-para-bar-tapizadas" element={<SillasParaBarTapizadas />} />
          <Route path="/sillas-para-negocio-comidas-rapidas" element={<SillasParaNegocioComidasRapidas />} />
          <Route path="/sillas-para-restaurante-exterior" element={<SillasParaRestauranteExterior />} />
          <Route path="/sillas-puff-para-bar" element={<SillasPuffParaBar />} />
          <Route path="/sillas-restaurant" element={<SillasRestaurant />} />
          <Route path="/sillas-tailandesas" element={<SillasTailandesas />} />
          <Route path="/sillas-terraza-cafeteria" element={<SillasTerrazaCafeteria />} />
          <Route path="/sillas-terraza-restaurante" element={<SillasTerrazaRestaurante />} />
          <Route path="/sillas-tipo-bar" element={<SillasTipoBar />} />
          <Route path="/sillas-tipo-lounge" element={<SillasTipoLounge />} />
          <Route path="/sillas-y-mesas-de-madera-para-negocio" element={<SillasYMesasDeMaderaParaNegocio />} />
          <Route path="/sillas-y-mesas-en-madera-para-restaurante" element={<SillasYMesasEnMaderaParaRestaurante />} />
          <Route path="/sillas-y-mesas-hosteleria" element={<SillasYMesasHosteleria />} />
          <Route path="/sillas-y-mesas-terraza-bar" element={<SillasYMesasTerrazaBar />} />
          <Route path="/silleteria-para-panaderia" element={<SilleteriaParaPanaderia />} />
          <Route path="/sillones-para-bar" element={<SillonesParaBar />} />
          <Route path="/venta-de-mesas-de-madera-para-restaurante" element={<VentaDeMesasDeMaderaParaRestaurante />} />
          <Route path="/sillones-para-bar-modernos" element={<SillonesParaBarModernos />} />
          <Route path="/venta-de-sillas-para-bar" element={<VentaDeSillasParaBar />} />
          <Route path="/sillones-para-cafeteria" element={<SillonesParaCafeteria />} />
          <Route path="/venta-mesas-y-sillas-para-restaurante" element={<VentaMesasYSillasParaRestaurante />} />
          {/* Ruta catch-all para URLs inexistentes - redirige a la página principal */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;