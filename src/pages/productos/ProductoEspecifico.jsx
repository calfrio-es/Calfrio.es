import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductBySlug, getProductsByCategory } from '../../data/products';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';

// Importar imágenes por defecto
import hero1 from '../../assets/img/hero1.webp';
import hero2 from '../../assets/img/hero2.webp';
import hero3 from '../../assets/img/hero3.webp';
import hero4 from '../../assets/img/hero4.webp';
import hero5 from '../../assets/img/hero5.webp';

// Importar todas las imágenes de productos
import cesta15platos from '../../assets/img/products/accesorios-lavado/cesta15platos.webp';
import cestadevajilladiversa from '../../assets/img/products/accesorios-lavado/cestadevajilladiversa.webp';
import cestade8bandejas from '../../assets/img/products/accesorios-lavado/cestade8bandejas.webp';
import cuberterogrande from '../../assets/img/products/accesorios-lavado/cuberterogrande.webp';
import cuberteropequeño from '../../assets/img/products/accesorios-lavado/cuberteropequeño.webp';
import insertador16platos from '../../assets/img/products/accesorios-lavado/insertador16platos.webp';
import insertador12platos from '../../assets/img/products/accesorios-lavado/insertador12platos.webp';
import mesaaceroinoxidable from '../../assets/img/products/accesorios-lavado/mesaaceroinoxidable.webp';
import mesaaceroprelavado from '../../assets/img/products/accesorios-lavado/mesaaceroprelavado.webp';

// Abrillantadoras
import secadorabrillantadora3000ud from '../../assets/img/products/abrillantadoras-cubiertos/secadorabrillantadora3000ud.webp';
import secadorabrillantadora3500ud from '../../assets/img/products/abrillantadoras-cubiertos/secadorabrillantadora3500ud.webp';
import secadorabrillantadora7000ud from '../../assets/img/products/abrillantadoras-cubiertos/secadorabrillantadora7000ud.webp';

// Lavavajillas
import lavaobjetos445cm from '../../assets/img/products/lavavajillas/lavaobjetos445cm.webp';
import lavaobjetos84cm from '../../assets/img/products/lavavajillas/lavaobjetos84cm.webp';
import lavavajillastipocapota from '../../assets/img/products/lavavajillas/lavavajillastipocapota.webp';
import lavavajillasindustrialcesta4040 from '../../assets/img/products/lavavajillas/lavavajillasindustrialcesta4040.webp';
import lavavajillasindustrialcesta4040versobia from '../../assets/img/products/lavavajillas/lavavajillasindustrialcesta4040versobia.webp';
import lavavajillasindustrialcesta5050monofasico from '../../assets/img/products/lavavajillas/lavavajillasindustrialcesta5050monofasico.webp';
import lavavajillasindustrialcesta4040bombadesague from '../../assets/img/products/lavavajillas/lavavajillasindustrialcesta4040bombadesague.webp';
import lavavajillasindustrialbombaabrillantador from '../../assets/img/products/lavavajillas/lavavajillasindustrialbombaabrillantador.webp';
import lavavajillasindustrialbombaabrillantador5050 from '../../assets/img/products/lavavajillas/lavavajillasindustrialbombaabrillantador5050.webp';
import lavavajillasindustrialcesta3939 from '../../assets/img/products/lavavajillas/lavavajillasindustrialcesta3939.webp';
import lavavajillasindustrialbombaabrillantadordesaguecesta4040 from '../../assets/img/products/lavavajillas/lavavajillasindustrialbombaabrillantadordesaguecesta4040.webp';
import lavavasosindustrialcesta3535 from '../../assets/img/products/lavavajillas/lavavasosindustrialcesta3535.webp';
import lavavasosindustrialcontroldigital3535 from '../../assets/img/products/lavavajillas/lavavasosindustrialcontroldigital3535.webp';

// Abatidores
import abatidor10bandejas from '../../assets/img/products/abatidores/abatidor-de-temperatura-mixto-10-bandejas-gn2-1-y-600x400-mm-de-1270-x1090-x1800h-mm-cordoba-cr-102-600x600.webp';
import abatidor16bandejas from '../../assets/img/products/abatidores/abatidor-de-temperatura-mixto-16-bandejas-gn1-1-y-600x400-mm-de-790-x800-x1950h-mm-cordoba-cr-161-600x600.webp';
import abatidor5bandejas from '../../assets/img/products/abatidores/abatidor-de-temperatura-mixto-5-bandejas-gn1-1-de-790-x700-x850h-mm-cordoba-cr05eco-600x600.webp';
import abatidor8bandejas from '../../assets/img/products/abatidores/abatidor-de-temperatura-mixto-8-bandejas-gn1-1-y-600x400-mm-de-790-x800-x1290h-mm-cordoba-cr-081-600x600.webp';
import celulasabatimiento from '../../assets/img/products/abatidores/celulas-de-abatimiento-de-20-bandejas-gn2-1-de-1700-x1320-x2220h-mm-cordoba-cr-202-600x600.webp';

// Armarios refrigeradores
import armariogn21inoxidable from '../../assets/img/products/armarios-refrigeradores/armario-gn2-1-inoxidable-con-12-cajones-600.webp';
import armariogn21lacado from '../../assets/img/products/armarios-refrigeradores/armario-gn2-1-lacado-blanco-600-litros-puerta-de-cristal.webp';
import armariorefrigerado200inoxidable from '../../assets/img/products/armarios-refrigeradores/armario-refrigerado-200-litros-acero-inoxidable.webp';
import armariorefrigerado200blanco from '../../assets/img/products/armarios-refrigeradores/armario-refrigerado-200-litros-chapa-lacada-blanca.webp';
import armariorefrigeradogn21vidrio from '../../assets/img/products/armarios-refrigeradores/armario-refrigerado-gn21-600-litros-1-puerta-de-vidrio-de-775x750.webp';
import armariorefrigeradosnackinoxidable from '../../assets/img/products/armarios-refrigeradores/armario-refrigerado-snack-acero-inoxidable-1-puerta-500-litros.webp';
import armariosnackcongelados from '../../assets/img/products/armarios-refrigeradores/armario-snack-congelados-350-litros-1-puerta-lacado-blanco.webp';
import armariosnackrefrigerados from '../../assets/img/products/armarios-refrigeradores/armario-snack-rerigerados-350-litros-1-puerta-lacado-blanco-de-600-x650.webp';

const ProductoEspecifico = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [productosRelacionados, setProductosRelacionados] = useState([]);
  const [loading, setLoading] = useState(true);

  // Imágenes por defecto
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
    if (slug) {
      const productoEncontrado = getProductBySlug(slug);
      if (productoEncontrado) {
        const productoConImagen = {
          ...productoEncontrado,
          imagen: imagenesMap[productoEncontrado.image] || imagenesPorDefecto[Math.floor(Math.random() * imagenesPorDefecto.length)],
          medidas: productoEncontrado.dimensions || 'Medidas a consultar'
        };
        setProducto(productoConImagen);
        
        // Obtener productos relacionados de la misma categoría
        const productosDeLaCategoria = getProductsByCategory(productoEncontrado.category);
        const productosFiltrados = productosDeLaCategoria
          .filter(p => p.slug !== slug); // Excluir el producto actual
        
        const productosConImagenes = productosFiltrados.map(p => ({
          ...p,
          imagen: imagenesMap[p.image] || imagenesPorDefecto[Math.floor(Math.random() * imagenesPorDefecto.length)]
        }));
        
        setProductosRelacionados(productosConImagenes);
      }
      setLoading(false);
    }
  }, [slug]);

  const handleVolver = () => {
    navigate('/productos');
  };

  const handleContactar = () => {
    const mensaje = `Hola, estoy interesado en el producto: ${producto?.name}`;
    const url = `https://wa.me/34600000000?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  const handleProductoClick = (productoSlug) => {
    window.location.href = `/producto/${productoSlug}`;
  };

    if (loading) {
    return (
      <div className="w-screen min-h-screen">
        <Header />
        <div className="pt-16">
          <div className="container mx-auto max-w-7xl px-4 py-12">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
            </div>
          </div>
        </div>
        <Footer />
        <ButtonWhatsap />
      </div>
    );
  }

  if (!producto) {
    return (
      <div className="w-screen min-h-screen">
        <Header />
        <div className="pt-16">
          <div className="container mx-auto max-w-7xl px-4 py-12">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Producto no encontrado</h1>
              <p className="text-gray-600 mb-6">El producto que buscas no existe o ha sido eliminado.</p>
              <button
                onClick={handleVolver}
                className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Volver a Productos
              </button>
            </div>
          </div>
        </div>
        <Footer />
        <ButtonWhatsap />
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen">
      <Header />
      <div className="pt-16">
        <div className="container mx-auto max-w-5xl px-4 py-6">
          {/* Breadcrumb */}
          <div className="mb-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <button
                    onClick={handleVolver}
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-cyan-600"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Productos
                  </button>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{producto.categoryName}</span>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{producto.name}</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Contenido principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Imagen del producto - IZQUIERDA */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                  <img 
                    src={producto.imagen} 
                    alt={producto.name}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Información del producto - DERECHA */}
            <div className="space-y-4">
              {/* Categoría */}
              <div>
                <span className="inline-block bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs font-medium">
                  {producto.categoryName}
                </span>
              </div>

              {/* Título */}
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                  {producto.name}
                </h1>
              </div>

              {/* Descripción */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Descripción</h2>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {producto.description}
                </p>
              </div>

              {/* Especificaciones */}
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-gray-800">Especificaciones</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm">Medidas</h3>
                    <p className="text-gray-700 text-sm">{producto.medidas}</p>
                  </div>
                  
                  {producto.capacity && (
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-1 text-sm">Capacidad</h3>
                      <p className="text-gray-700 text-sm">{producto.capacity}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleContactar}
                  className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors font-semibold flex items-center justify-center text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Solicitar Información
                </button>
                
                <button
                  onClick={handleVolver}
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-sm"
                >
                  Volver a Productos
                </button>
              </div>
            </div>
          </div>
        </div>

                 {/* Productos Relacionados - Fuera del contenedor estrecho */}
         {productosRelacionados.length > 0 && (
           <div className="mt-12 border-t border-gray-200 pt-8">
             <div className="container mx-auto max-w-6xl px-4">
               <div className="text-center mb-8">
                 <h2 className="text-xl font-semibold text-gray-800 mb-2">
                   Otros productos de {producto.categoryName}
                 </h2>
                 <p className="text-gray-600 text-sm">
                   Explora más opciones de la misma categoría
                 </p>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
                 {productosRelacionados.map((productoRel) => (
                   <div 
                     key={productoRel.slug}
                     className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 group w-full max-w-xs"
                     onClick={() => handleProductoClick(productoRel.slug)}
                   >
                     <div className="h-48 overflow-hidden">
                       <img 
                         src={productoRel.imagen} 
                         alt={productoRel.name}
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                       />
                     </div>
                     <div className="p-4">
                       <h3 className="font-semibold text-gray-800 text-sm mb-2 group-hover:text-cyan-600 transition-colors line-clamp-2">
                         {productoRel.name}
                       </h3>
                       <p className="text-gray-600 text-xs">
                         {productoRel.description}
                       </p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>
         )}
      </div>
      <Footer />
      <ButtonWhatsap />
    </div>
  );
};

export default ProductoEspecifico;
