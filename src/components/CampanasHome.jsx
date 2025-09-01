import React from 'react';
import { Link } from 'react-router-dom';
import { getCampanas } from '../data/campanasData.js';

const CampanasHome = () => {
  const campanas = getCampanas();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestras Campañas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras campañas activas y cómo puedes unirte para transformar vidas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {campanas.map((campana) => (
            <article key={campana.id} className="group bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={campana.portada}
                  alt={campana.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{campana.titulo}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{campana.resumen}</p>
                <div className="mt-auto">
                  <Link
                    to={`/campanas/${campana.id}`}
                    className="inline-block text-red-800 font-semibold hover:text-red-900"
                  >
                    Conocer más
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampanasHome;

