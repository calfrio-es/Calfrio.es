import React from 'react';
import imgMant from '../../../assets/img/servicesbarcos (1).jpg';
import imgLimp from '../../../assets/img/servicesbarcos (3).jpg';
import imgCost from '../../../assets/img/servicesbarcos (4).jpg';

const ServicesBarcos = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bloque 1: Mantenimiento */}
          <div className="flex">
            <img src={imgMant} alt="Mantenimiento de barcos y yates" className="w-1/2 h-56 lg:h-72 object-cover" />
            <div className="w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-black mb-2">Mantenimiento</h3>
              <p className="text-gray-700">
                Revisiones periódicas de motor, electricidad y sistemas a bordo, cambio de aceites y filtros,
                correas, ánodos y chequeos de seguridad. Preparación para temporada e invernaje.
              </p>
            </div>
          </div>

          {/* Bloque 2: Limpieza */}
          <div className="flex">
            <img src={imgLimp} alt="Limpieza náutica" className="w-1/2 h-56 lg:h-72 object-cover" />
            <div className="w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-black mb-2">Limpieza</h3>
              <p className="text-gray-700">
                Limpieza interior y exterior, desinfección de cabinas, lavado de tapicerías, teak care,
                pulido de cascos y cristales. Servicio para amarre o varadero.
              </p>
            </div>
          </div>

          {/* Bloque 3: Costos informativos - ocupa dos columnas */}
          <div className="flex lg:col-span-2">
            <img src={imgCost} alt="Costos informativos de mantenimiento" className="w-1/2 h-64 lg:h-80 object-cover" />
            <div className="w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-black mb-2">Costos informativos de mantenimiento</h3>
              <p className="text-gray-700">
                Rangos orientativos del sector (no son precios nuestros; pueden variar según eslora,
                estado y astillero):
              </p>
              <ul className="mt-3 text-gray-700 list-disc pl-5 space-y-1">
                <li>Mantenimiento anual básico: 800€ – 3.000€.</li>
                <li>Limpieza integral interior/exterior: 150€ – 600€.</li>
                <li>Pulido y protección de casco/superficies: 300€ – 1.200€.</li>
                <li>Antifouling y varada (material y mano de obra): 25€ – 60€ por pie.</li>
              </ul>
              <p className="text-gray-600 mt-3 text-sm">
                Solicita una evaluación para obtener un presupuesto ajustado a tu embarcación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBarcos;


