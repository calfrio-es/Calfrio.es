import React from 'react';
import whatsappImg from '../../assets/img/whatspimg.png';

const ButtonWhatsap = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+573144083153';
    const message = 'Hola, me gustaría obtener más información sobre sus productos y servicios.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <img 
      src={whatsappImg} 
      alt="WhatsApp" 
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 cursor-pointer"
    />
  );
};

export default ButtonWhatsap;
