import React, { useState, useEffect } from 'react';
import hero1 from '../../../assets/img/hero1.webp';
import hero2 from '../../../assets/img/hero2.webp';
import hero3 from '../../../assets/img/hero3.webp';
import hero4 from '../../../assets/img/hero4.webp';
import hero5 from '../../../assets/img/hero5.webp';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array de imágenes de fondo importadas
  const backgroundImages = [
    hero1,
    hero2, 
    hero3,
    hero4,
    hero5
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-5">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
            Maquinaria de <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">Hostelería</span> Profesional
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 drop-shadow-md">
            Bienvenido a Calfrio, tu aliado en la industria de la hostelería.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
