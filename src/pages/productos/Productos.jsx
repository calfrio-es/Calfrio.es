import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroProductos from './sections/HeroProductos';
import CategoriaProductos from './sections/CategoriaProductos';
import CatalogoProductos from './sections/CatalogoProductos';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';  

const Productos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const handleCategoriaSelect = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };
  return (
    <div className="w-screen min-h-screen">
      <Header />
      <div className="pt-16">
        <HeroProductos />
        <CategoriaProductos 
          onCategoriaSelect={handleCategoriaSelect}
          categoriaSeleccionada={categoriaSeleccionada}
        />
        <CatalogoProductos categoriaSeleccionada={categoriaSeleccionada} />
      </div>
      <Footer />
      <ButtonWhatsap />
    </div>
  );
};

export default Productos;
