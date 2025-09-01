import React from 'react';
import { Link } from 'react-router-dom';

function CampanasDestacadas() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-56 h-40 bg-[#e9d9d4] rounded-xl" />
          <img
            src="/src/assets/SAMAN/banner2.jpg"
            alt="SAMAN"
            className="relative rounded-2xl shadow-xl object-cover w-full h-72 lg:h-96"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 -mt-10 lg:mt-0">
          <p className="tracking-[0.35em] text-gray-600 font-semibold mb-2">CAMPANAS</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#032b27] mb-4">
            SAMAN y Consultas Médicas
          </h2>
          <p className="text-gray-600 leading-7 mb-6">
            Conoce nuestras iniciativas principales: el programa de seguridad alimentaria SAMAN y las
            jornadas de atención en salud. Descubre cómo impactan y cómo apoyar.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/campanas/saman" className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-xl">
              Ver SAMAN
            </Link>
            <Link to="/campanas/consultas-medicas" className="border border-red-700 text-red-800 hover:bg-red-50 font-semibold px-6 py-3 rounded-xl">
              Ver Consultas Médicas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampanasDestacadas;

