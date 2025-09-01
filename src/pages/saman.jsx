import React from 'react';
import Navbar from '../components/Navbar.jsx';
import PiePagina from '../components/piePagina.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';

const samanImages = [
  '/src/assets/SAMAN/DSCN0184.JPG',
  '/src/assets/SAMAN/DSCN0180.JPG',
  '/src/assets/SAMAN/DSCN0056.JPG',
  '/src/assets/SAMAN/DSCN0055.JPG',
  '/src/assets/SAMAN/DSCN0054.JPG',
  '/src/assets/SAMAN/DSCN0045.JPG',
  '/src/assets/SAMAN/DSCN0044.JPG',
  '/src/assets/SAMAN/DSCN0011.JPG',
];

export default function SamanPage() {
  return (
    <div>
      <Navbar />

      <section className="bg-[#f3e9e6] py-16">
        <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="tracking-[0.35em] text-red-800 font-semibold mb-3">CAMPANA</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#032b27] mb-6">SAMAN</h1>
            <div className="space-y-5 text-gray-700 leading-8">
              <p>
                El programa SAMAN se enfoca en asegurar alimentos nutritivos a familias vulnerables, with
                acompañamiento integral de Cáritas San Cristóbal y aliados.
              </p>
              <p>
                Promovemos la seguridad alimentaria a través de donaciones, jornadas y educación para una
                nutrición digna y sostenible.
              </p>
            </div>
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImageCarousel images={samanImages} altPrefix="SAMAN" />
            </div>
          </div>
        </div>
      </section>

      <PiePagina />
    </div>
  );
}

