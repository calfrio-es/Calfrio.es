import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.webp';

const Header = () => {
  return (
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
            <Link to="/productos" className="text-black !text-black hover:text-cyan-400 font-medium text-sm transition-colors duration-300 no-underline">
              Productos
            </Link>
            <Link to="/services" className="text-black !text-black hover:text-cyan-400 font-medium text-sm transition-colors duration-300 no-underline">
              Servicios
            </Link>
            <Link to="/blog/horno-pizza" className="text-black !text-black hover:text-cyan-400 font-medium text-sm transition-colors duration-300 no-underline">
              Blog
            </Link>
            <a href="#contacto" className="text-black !text-black hover:text-cyan-400 font-medium text-sm transition-colors duration-300 no-underline">
              Contacto
            </a>
          </nav>

          {/* Teléfono */}
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-black font-medium text-sm">871 05 55 28</span>
          </div>

          {/* Menú móvil */}
          <div className="md:hidden">
            <button className="text-black hover:text-cyan-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
