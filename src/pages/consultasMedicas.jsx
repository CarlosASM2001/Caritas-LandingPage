import React from 'react';
import Navbar from '../components/Navbar.jsx';
import PiePagina from '../components/piePagina.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';

const consultasImages = [
  '/src/assets/consultasmedicas/DSCN0185.JPG',
  '/src/assets/consultasmedicas/DSCN0173.JPG',
  '/src/assets/consultasmedicas/DSCN0161.JPG',
  '/src/assets/consultasmedicas/DSCN0156.JPG',
  '/src/assets/consultasmedicas/DSCN0155.JPG',
  '/src/assets/consultasmedicas/DSCN0136.JPG',
  '/src/assets/consultasmedicas/DSCN0128.JPG',
  '/src/assets/consultasmedicas/DSCN0068.JPG',
];

export default function ConsultasMedicasPage() {
  return (
    <div>
      <Navbar />

      <section className="bg-[#f3e9e6] py-16">
        <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="tracking-[0.35em] text-red-800 font-semibold mb-3">CAMPANA</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#032b27] mb-6">Consultas Médicas</h1>
            <div className="space-y-5 text-gray-700 leading-8">
              <p>
                Brindamos jornadas de atención médica general y especializada para comunidades
                con acceso limitado a servicios de salud.
              </p>
              <p>
                Gracias a profesionales voluntarios y donantes, acercamos evaluaciones, orientación
                y entrega de tratamientos esenciales.
              </p>
            </div>
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImageCarousel images={consultasImages} altPrefix="Consultas Médicas" />
            </div>
          </div>
        </div>
      </section>

      <PiePagina />
    </div>
  );
}

