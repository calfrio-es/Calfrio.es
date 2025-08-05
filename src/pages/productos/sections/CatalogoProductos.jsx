import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductsByCategory, getCategories } from '../../../data/products';
import hero1 from '../../../assets/img/hero1.webp';
import hero2 from '../../../assets/img/hero2.webp';
import hero3 from '../../../assets/img/hero3.webp';
import hero4 from '../../../assets/img/hero4.webp';
import hero5 from '../../../assets/img/hero5.webp';

// Importar todas las imágenes de productos
import cesta15platos from '../../../assets/img/products/accesorios-lavado/cesta15platos.webp';
import cestadevajilladiversa from '../../../assets/img/products/accesorios-lavado/cestadevajilladiversa.webp';
import cestade8bandejas from '../../../assets/img/products/accesorios-lavado/cestade8bandejas.webp';
import cuberterogrande from '../../../assets/img/products/accesorios-lavado/cuberterogrande.webp';
import cuberteropequeño from '../../../assets/img/products/accesorios-lavado/cuberteropequeño.webp';
import insertador16platos from '../../../assets/img/products/accesorios-lavado/insertador16platos.webp';
import insertador12platos from '../../../assets/img/products/accesorios-lavado/insertador12platos.webp';
import mesaaceroinoxidable from '../../../assets/img/products/accesorios-lavado/mesaaceroinoxidable.webp';
import mesaaceroprelavado from '../../../assets/img/products/accesorios-lavado/mesaaceroprelavado.webp';

// Abrillantadoras
import secadorabrillantadora3000ud from '../../../assets/img/products/abrillantadoras-cubiertos/secadorabrillantadora3000ud.webp';
import secadorabrillantadora3500ud from '../../../assets/img/products/abrillantadoras-cubiertos/secadorabrillantadora3500ud.webp';
import secadorabrillantadora7000ud from '../../../assets/img/products/abrillantadoras-cubiertos/secadorabrillantadora7000ud.webp';

// Lavavajillas
import lavaobjetos445cm from '../../../assets/img/products/lavavajillas/lavaobjetos445cm.webp';
import lavaobjetos84cm from '../../../assets/img/products/lavavajillas/lavaobjetos84cm.webp';
import lavavajillastipocapota from '../../../assets/img/products/lavavajillas/lavavajillastipocapota.webp';
import lavavajillasindustrialcesta4040 from '../../../assets/img/products/lavavajillas/lavavajillasindustrialcesta4040.webp';
import lavavajillasindustrialcesta4040versobia from '../../../assets/img/products/lavavajillas/lavavajillasindustrialcesta4040versobia.webp';
import lavavajillasindustrialcesta5050monofasico from '../../../assets/img/products/lavavajillas/lavavajillasindustrialcesta5050monofasico.webp';
import lavavajillasindustrialcesta4040bombadesague from '../../../assets/img/products/lavavajillas/lavavajillasindustrialcesta4040bombadesague.webp';
import lavavajillasindustrialbombaabrillantador from '../../../assets/img/products/lavavajillas/lavavajillasindustrialbombaabrillantador.webp';
import lavavajillasindustrialbombaabrillantador5050 from '../../../assets/img/products/lavavajillas/lavavajillasindustrialbombaabrillantador5050.webp';
import lavavajillasindustrialcesta3939 from '../../../assets/img/products/lavavajillas/lavavajillasindustrialcesta3939.webp';
import lavavajillasindustrialbombaabrillantadordesaguecesta4040 from '../../../assets/img/products/lavavajillas/lavavajillasindustrialbombaabrillantadordesaguecesta4040.webp';
import lavavasosindustrialcesta3535 from '../../../assets/img/products/lavavajillas/lavavasosindustrialcesta3535.webp';
import lavavasosindustrialcontroldigital3535 from '../../../assets/img/products/lavavajillas/lavavasosindustrialcontroldigital3535.webp';

// Abatidores
import abatidor10bandejas from '../../../assets/img/products/abatidores/abatidor-de-temperatura-mixto-10-bandejas-gn2-1-y-600x400-mm-de-1270-x1090-x1800h-mm-cordoba-cr-102-600x600.webp';
import abatidor16bandejas from '../../../assets/img/products/abatidores/abatidor-de-temperatura-mixto-16-bandejas-gn1-1-y-600x400-mm-de-790-x800-x1950h-mm-cordoba-cr-161-600x600.webp';
import abatidor5bandejas from '../../../assets/img/products/abatidores/abatidor-de-temperatura-mixto-5-bandejas-gn1-1-de-790-x700-x850h-mm-cordoba-cr05eco-600x600.webp';
import abatidor8bandejas from '../../../assets/img/products/abatidores/abatidor-de-temperatura-mixto-8-bandejas-gn1-1-y-600x400-mm-de-790-x800-x1290h-mm-cordoba-cr-081-600x600.webp';
import celulasabatimiento from '../../../assets/img/products/abatidores/celulas-de-abatimiento-de-20-bandejas-gn2-1-de-1700-x1320-x2220h-mm-cordoba-cr-202-600x600.webp';

// Armarios refrigeradores
import armariogn21inoxidable from '../../../assets/img/products/armarios-refrigeradores/armario-gn2-1-inoxidable-con-12-cajones-600.webp';
import armariogn21lacado from '../../../assets/img/products/armarios-refrigeradores/armario-gn2-1-lacado-blanco-600-litros-puerta-de-cristal.webp';
import armariorefrigerado200inoxidable from '../../../assets/img/products/armarios-refrigeradores/armario-refrigerado-200-litros-acero-inoxidable.webp';
import armariorefrigerado200blanco from '../../../assets/img/products/armarios-refrigeradores/armario-refrigerado-200-litros-chapa-lacada-blanca.webp';
import armariorefrigeradogn21vidrio from '../../../assets/img/products/armarios-refrigeradores/armario-refrigerado-gn21-600-litros-1-puerta-de-vidrio-de-775x750.webp';
import armariorefrigeradosnackinoxidable from '../../../assets/img/products/armarios-refrigeradores/armario-refrigerado-snack-acero-inoxidable-1-puerta-500-litros.webp';
import armariosnackcongelados from '../../../assets/img/products/armarios-refrigeradores/armario-snack-congelados-350-litros-1-puerta-lacado-blanco.webp';
import armariosnackrefrigerados from '../../../assets/img/products/armarios-refrigeradores/armario-snack-rerigerados-350-litros-1-puerta-lacado-blanco-de-600-x650.webp';

const CatalogoProductos = ({ categoriaSeleccionada }) => {
  const navigate = useNavigate();

  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  // Imágenes por defecto para los productos
  const imagenesPorDefecto = [hero1, hero2, hero3, hero4, hero5];

  // Mapeo de rutas de imágenes a importaciones
  const imagenesMap = {
    '/src/assets/img/products/accesorios-lavado/cesta15platos.webp': cesta15platos,
    '/src/assets/img/products/accesorios-lavado/cestadevajilladiversa.webp': cestadevajilladiversa,
    '/src/assets/img/products/accesorios-lavado/cestade8bandejas.webp': cestade8bandejas,
    '/src/assets/img/products/accesorios-lavado/cuberterogrande.webp': cuberterogrande,
    '/src/assets/img/products/accesorios-lavado/cuberteropequeño.webp': cuberteropequeño,
    '/src/assets/img/products/accesorios-lavado/insertador16platos.webp': insertador16platos,
    '/src/assets/img/products/accesorios-lavado/insertador12platos.webp': insertador12platos,
    '/src/assets/img/products/accesorios-lavado/mesaaceroinoxidable.webp': mesaaceroinoxidable,
    '/src/assets/img/products/accesorios-lavado/mesaaceroprelavado.webp': mesaaceroprelavado,
    
    '/src/assets/img/products/abrillantadoras-cubiertos/secadorabrillantadora3000ud.webp': secadorabrillantadora3000ud,
    '/src/assets/img/products/abrillantadoras-cubiertos/secadorabrillantadora3500ud.webp': secadorabrillantadora3500ud,
    '/src/assets/img/products/abrillantadoras-cubiertos/secadorabrillantadora7000ud.webp': secadorabrillantadora7000ud,
    
    '/src/assets/img/products/lavavajillas/lavaobjetos445cm.webp': lavaobjetos445cm,
    '/src/assets/img/products/lavavajillas/lavaobjetos84cm.webp': lavaobjetos84cm,
    '/src/assets/img/products/lavavajillas/lavavajillastipocapota.webp': lavavajillastipocapota,
    '/src/assets/img/products/lavavajillas/lavavajillasindustrialcesta4040.webp': lavavajillasindustrialcesta4040,
    '/src/assets/img/products/lavavajillas/lavavajillasindustrialcesta4040versobia.webp': lavavajillasindustrialcesta4040versobia,
    '/src/assets/img/products/lavavajillas/lavavajillasindustrialcesta5050monofasico.webp': lavavajillasindustrialcesta5050monofasico,
    '/src/assets/img/products/lavavajillas/lavavajillasindustrialcesta4040bombadesague.webp': lavavajillasindustrialcesta4040bombadesague,
    '/src/assets/img/products/lavavajillas/lavavajillasindustrialbombaabrillantador.webp': lavavajillasindustrialbombaabrillantador,
    '/src/assets/img/products/lavavajillas/lavavajillasindustrialbombaabrillantador5050.webp': lavavajillasindustrialbombaabrillantador5050,
    '/src/assets/img/products/lavavajillas/lavavajillasindustrialcesta3939.webp': lavavajillasindustrialcesta3939,
    '/src/assets/img/products/lavavajillas/lavavajillasindustrialbombaabrillantadordesaguecesta4040.webp': lavavajillasindustrialbombaabrillantadordesaguecesta4040,
    '/src/assets/img/products/lavavajillas/lavavasosindustrialcesta3535.webp': lavavasosindustrialcesta3535,
    '/src/assets/img/products/lavavajillas/lavavasosindustrialcontroldigital3535.webp': lavavasosindustrialcontroldigital3535,
    
    '/src/assets/img/products/abatidores/abatidor-de-temperatura-mixto-10-bandejas-gn2-1-y-600x400-mm-de-1270-x1090-x1800h-mm-cordoba-cr-102-600x600.webp': abatidor10bandejas,
    '/src/assets/img/products/abatidores/abatidor-de-temperatura-mixto-16-bandejas-gn1-1-y-600x400-mm-de-790-x800-x1950h-mm-cordoba-cr-161-600x600.webp': abatidor16bandejas,
    '/src/assets/img/products/abatidores/abatidor-de-temperatura-mixto-5-bandejas-gn1-1-de-790-x700-x850h-mm-cordoba-cr05eco-600x600.webp': abatidor5bandejas,
    '/src/assets/img/products/abatidores/abatidor-de-temperatura-mixto-8-bandejas-gn1-1-y-600x400-mm-de-790-x800-x1290h-mm-cordoba-cr-081-600x600.webp': abatidor8bandejas,
    '/src/assets/img/products/abatidores/celulas-de-abatimiento-de-20-bandejas-gn2-1-de-1700-x1320-x2220h-mm-cordoba-cr-202-600x600.webp': celulasabatimiento,
    
    '/src/assets/img/products/armarios-refrigeradores/armario-gn2-1-inoxidable-con-12-cajones-600.webp': armariogn21inoxidable,
    '/src/assets/img/products/armarios-refrigeradores/armario-gn2-1-lacado-blanco-600-litros-puerta-de-cristal.webp': armariogn21lacado,
    '/src/assets/img/products/armarios-refrigeradores/armario-refrigerado-200-litros-acero-inoxidable.webp': armariorefrigerado200inoxidable,
    '/src/assets/img/products/armarios-refrigeradores/armario-refrigerado-200-litros-chapa-lacada-blanca.webp': armariorefrigerado200blanco,
    '/src/assets/img/products/armarios-refrigeradores/armario-refrigerado-gn21-600-litros-1-puerta-de-vidrio-de-775x750.webp': armariorefrigeradogn21vidrio,
    '/src/assets/img/products/armarios-refrigeradores/armario-refrigerado-snack-acero-inoxidable-1-puerta-500-litros.webp': armariorefrigeradosnackinoxidable,
    '/src/assets/img/products/armarios-refrigeradores/armario-snack-congelados-350-litros-1-puerta-lacado-blanco.webp': armariosnackcongelados,
    '/src/assets/img/products/armarios-refrigeradores/armario-snack-rerigerados-350-litros-1-puerta-lacado-blanco-de-600-x650.webp': armariosnackrefrigerados,
  };

  useEffect(() => {
    if (categoriaSeleccionada && categoriaSeleccionada !== 'todos') {
      const productosCategoria = getProductsByCategory(categoriaSeleccionada);
      const productosConImagenes = productosCategoria.map((producto) => ({
        ...producto,
        imagen: imagenesMap[producto.image] || imagenesPorDefecto[Math.floor(Math.random() * imagenesPorDefecto.length)],
      marca: 'Calfrio',
        medidas: producto.dimensions || 'Medidas a consultar'
      }));
      setProductosFiltrados(productosConImagenes);
    } else {
      // Mostrar todos los productos si no hay categoría seleccionada o si se selecciona "todos"
      const todosLosProductos = getProductsByCategory('accesorios-lavado')
        .concat(getProductsByCategory('abrillantadoras-cubiertos'))
        .concat(getProductsByCategory('lavavajillas'))
        .concat(getProductsByCategory('abatidores'))
        .concat(getProductsByCategory('armarios-refrigeradores'));
      
      const productosConImagenes = todosLosProductos.map((producto) => ({
        ...producto,
        imagen: imagenesMap[producto.image] || imagenesPorDefecto[Math.floor(Math.random() * imagenesPorDefecto.length)],
      marca: 'Calfrio',
        medidas: producto.dimensions || 'Medidas a consultar'
      }));
      setProductosFiltrados(productosConImagenes);
    }
  }, [categoriaSeleccionada]);

  return (
    <section className="py-12 bg-white" data-productos-section>
      <div className="container mx-auto max-w-7xl px-4">
        {/* Título dinámico */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {categoriaSeleccionada && categoriaSeleccionada !== 'todos'
              ? productosFiltrados[0]?.categoryName || 'Productos'
              : 'Todos los productos'
            }
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            {productosFiltrados.length} productos disponibles
          </p>
          </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                                          {/* Productos dinámicos */}
                                           {productosFiltrados.map((producto, index) => (
                        <div 
                          key={producto.id} 
                          className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative min-h-[420px] sm:min-h-[380px] max-h-[480px] sm:max-h-[440px] cursor-pointer group"
                          onClick={() => navigate(`/producto/${producto.slug}`)}
                        >
                          <div className="h-64 sm:h-72 overflow-hidden">
                            <img 
                              src={producto.imagen} 
                              alt={producto.name}
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
             </div>
                          <div className="p-3 flex flex-col h-full">
                            <div className="flex justify-start items-start mb-1">
                 <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">
                                {producto.categoryName}
                 </span>
               </div>
                            <h3 className="text-sm font-semibold text-gray-800 mb-1 group-hover:text-cyan-600 transition-colors">{producto.name}</h3>
                            <p className="text-xs text-gray-600 mb-1">Marca: {producto.marca}</p>
                            <p className="text-xs text-gray-500">Medidas: {producto.medidas}</p>
                            {producto.capacity && (
                              <p className="text-xs text-gray-500">Capacidad: {producto.capacity}</p>
                            )}
             </div>
                          <div className="absolute bottom-3 right-3 bg-cyan-500 text-white p-2 rounded-full shadow-lg hover:bg-cyan-600 transition-colors">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </div>
           </div>
                      ))}
         </div>
       </div>
     </section>
   );
 };

export default CatalogoProductos;
