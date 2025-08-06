import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.webp';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isBlogExpanded, setIsBlogExpanded] = useState(false);

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 300);
    }
  };

  const closeMobileMenu = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 300);
  };

  const toggleBlogExpansion = () => {
    setIsBlogExpanded(!isBlogExpanded);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo y nombre */}
            <div className="flex items-center space-x-3">
              <Link to="/inicio" className="flex items-center space-x-3">
                <img src={logo} alt="Calfrio Logo" className="w-10 h-10 object-cover rounded-lg" />
                <span className="text-2xl font-bold text-gray-800">Calfrio</span>
              </Link>
            </div>

            {/* Navegación central */}
            <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <Link to="/inicio" className="text-black !text-black hover:text-cyan-400 font-medium text-sm transition-colors duration-300 no-underline">
                Inicio
              </Link>
              <Link to="/services" className="text-black !text-black hover:text-cyan-400 font-medium text-sm transition-colors duration-300 no-underline">
                Servicios
              </Link>
              <Link to="/productos" className="text-black !text-black hover:text-cyan-400 font-medium text-sm transition-colors duration-300 no-underline">
                Productos
              </Link>
              <Link to="/blog/horno-pizza" className="text-black !text-black hover:text-cyan-400 font-medium text-sm transition-colors duration-300 no-underline">
                Blog
              </Link>
              <Link to="/contacto" className="text-black !text-black hover:text-cyan-400 font-medium text-sm transition-colors duration-300 no-underline">
                Contacto
              </Link>
            </nav>

            {/* Teléfono - oculto en móvil */}
            <div className="hidden md:flex items-center space-x-2">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-black font-medium text-sm">+34 632 075 370</span>
            </div>

            {/* Icono de hamburguesa - solo el icono sin envolver */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-black hover:text-cyan-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Sheet móvil */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay para cerrar al tocar fuera */}
          <div 
            className={`fixed inset-0 transition-opacity duration-300 z-40 md:hidden ${
              isAnimating ? 'bg-opacity-30' : 'bg-opacity-0'
            }`}
            onClick={closeMobileMenu}
          />
          
          {/* Sheet */}
          <div 
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden ${
              isAnimating ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
                         <div className="flex flex-col h-full">
               {/* Header del sheet - fijo */}
               <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
                 <div className="flex items-center space-x-3">
                   <img src={logo} alt="Calfrio Logo" className="w-8 h-8 object-cover rounded-lg" />
                   <span className="text-xl font-bold text-gray-800">Calfrio</span>
                 </div>
                 <button 
                   onClick={closeMobileMenu}
                   className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                 >
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                   </svg>
                 </button>
               </div>

               {/* Navegación móvil - con scroll */}
               <nav className="flex-1 overflow-y-auto p-6">
                 <div className="space-y-6">
                   <Link 
                     to="/inicio" 
                     onClick={closeMobileMenu}
                     className="block text-lg font-medium text-gray-800 hover:text-cyan-400 transition-colors duration-300"
                   >
                     Inicio
                   </Link>
                   <Link 
                     to="/services" 
                     onClick={closeMobileMenu}
                     className="block text-lg font-medium text-gray-800 hover:text-cyan-400 transition-colors duration-300"
                   >
                     Servicios
                   </Link>
                   <Link 
                     to="/productos" 
                     onClick={closeMobileMenu}
                     className="block text-lg font-medium text-gray-800 hover:text-cyan-400 transition-colors duration-300"
                   >
                     Productos
                   </Link>
                   
                   {/* Acordeón Blog para móvil */}
                   <div className="space-y-2">
                     <button 
                       onClick={toggleBlogExpansion}
                       className="flex items-center justify-between w-full text-lg font-medium text-gray-800 hover:text-cyan-400 transition-colors duration-300"
                     >
                       <span>Blog</span>
                       <svg 
                         className={`w-5 h-5 transition-transform duration-300 ${isBlogExpanded ? 'rotate-180' : ''}`} 
                         fill="none" 
                         stroke="currentColor" 
                         viewBox="0 0 24 24"
                       >
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                       </svg>
                     </button>
                     
                     {isBlogExpanded && (
                       <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                         <Link 
                           to="/blog/horno-pizza" 
                           onClick={closeMobileMenu}
                           className="block text-sm text-gray-700 hover:text-cyan-400 transition-colors duration-300"
                         >
                           Los Hornos para Pizza
                         </Link>
                         <Link 
                           to="/blog/fogones-gas" 
                           onClick={closeMobileMenu}
                           className="block text-sm text-gray-700 hover:text-cyan-400 transition-colors duration-300"
                         >
                           Los Fogones de Gas
                         </Link>
                         <Link 
                           to="/blog/cocinas-gas" 
                           onClick={closeMobileMenu}
                           className="block text-sm text-gray-700 hover:text-cyan-400 transition-colors duration-300"
                         >
                           Cocinas de Gas Profesionales
                         </Link>
                         <Link 
                           to="/blog/cocina-gas-butano" 
                           onClick={closeMobileMenu}
                           className="block text-sm text-gray-700 hover:text-cyan-400 transition-colors duration-300"
                         >
                           Cocina de Gas Butano
                         </Link>
                         <Link 
                           to="/blog/horno-gas" 
                           onClick={closeMobileMenu}
                           className="block text-sm text-gray-700 hover:text-cyan-400 transition-colors duration-300"
                         >
                           El Horno de Gas
                         </Link>
                         <Link 
                           to="/blog/lavavajillas-industriales" 
                           onClick={closeMobileMenu}
                           className="block text-sm text-gray-700 hover:text-cyan-400 transition-colors duration-300"
                         >
                           Lavavajillas Industriales
                         </Link>
                         <Link 
                           to="/blog/lavavajillas-smeg" 
                           onClick={closeMobileMenu}
                           className="block text-sm text-gray-700 hover:text-cyan-400 transition-colors duration-300"
                         >
                           Lavavajillas SMEG
                         </Link>
                         <Link 
                           to="/blog/lavavajillas-hosteleria" 
                           onClick={closeMobileMenu}
                           className="block text-sm text-gray-700 hover:text-cyan-400 transition-colors duration-300"
                         >
                           Lavavajillas para Hostelería
                         </Link>
                         <Link 
                           to="/blog/lavavajillas-copas-hosteleria" 
                           onClick={closeMobileMenu}
                           className="block text-sm text-gray-700 hover:text-cyan-400 transition-colors duration-300"
                         >
                           Lavavajillas de Copas para Hostelería
                         </Link>
                         <Link 
                           to="/blog/lavavajillas-de-bar" 
                           onClick={closeMobileMenu}
                           className="block text-sm text-gray-700 hover:text-cyan-400 transition-colors duration-300"
                         >
                           Lavavajillas de Bar
                         </Link>
                         <Link 
                           to="/blog/tipos-lavavajillas-hosteleria" 
                           onClick={closeMobileMenu}
                           className="block text-sm text-gray-700 hover:text-cyan-400 transition-colors duration-300"
                         >
                           Tipos de Lavavajillas de Hostelería
                         </Link>
                         <Link 
                           to="/blog/reparacion-maquinaria-hosteleria" 
                           onClick={closeMobileMenu}
                           className="block text-sm text-gray-700 hover:text-cyan-400 transition-colors duration-300"
                         >
                           Reparación de Maquinaria de Hostelería
                         </Link>
                       </div>
                     )}
                   </div>
                   
                   <Link 
                     to="/contacto" 
                     onClick={closeMobileMenu}
                     className="block text-lg font-medium text-gray-800 hover:text-cyan-400 transition-colors duration-300"
                   >
                     Contacto
                   </Link>
                 </div>
               </nav>

               {/* Footer del sheet con teléfono - fijo */}
               <div className="p-6 border-t border-gray-200 flex-shrink-0">
                 <div className="flex items-center space-x-3">
                   <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                   <span className="text-gray-800 font-medium">+34 632 075 370</span>
                 </div>
               </div>
             </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
