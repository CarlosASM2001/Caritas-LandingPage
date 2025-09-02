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

      <section className=" py-12">
        <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="tracking-[0.35em] text-red-800 font-semibold mb-3">CAMPANA</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#032b27] mb-6">SAMAN</h1>
            <div className="space-y-5 text-gray-700 leading-8">
              <p>
                A través del monitoreo de su salud, el suministro de alimentos y la formación a familiares sobre prácticas
                adecuadas de alimentación e higiene. Mayormente se atienden a Niños de 0 a 5 años y mujeres embarazadas y madres lactantes.
              </p>
              <p>
                Se instala a través de la elaboración y validación de herramientas de captación de información, de
                diseño de instrumentos de medición y de la estandarización del equipo para la realización de las
                mediciones antropométricas. (Talla, Peso y medida del brazo)
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

      <section className="pb-12">
        <h3 className="text-3xl lg:text-4xl font-extrabold text-[#032b27] text-left ml-8 mt-5 mb-5">Componentes del Programa</h3>
        <div className="container mx-auto px-10 space-y-8">
          <div>
            <h4 className="text-xl font-bold text-red-800 mb-2">Monitoreo</h4>
            <p className="text-gray-700">
              Mediciones de niños de 0-5 años. Se recolectan datos antropométricos. Se realizan entrevistas a madres para conocer condiciones de alimentación de la familia, acceso a agua, saneamiento ambiental y otros que pueden incidir en condiciones de salud.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-red-800 mb-2">Atención en salud</h4>
            <p className="text-gray-700">
              Atención médica en jornadas que se realizan en la comunidad, así como suministro de medicamentos disponibles en los bancos de medicamentos donados a Caritas de Venezuela.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-red-800 mb-2">Fortalecimiento de Valores</h4>
            <p className="text-gray-700">
              En cada jornada se realizan actividades para fortalecer los lazos éticos, de convivencia y acompañamiento espiritual.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-red-800 mb-2">Vivero de recuperación nutricional</h4>
            <p className="text-gray-700">
              Seguimiento nutricional a niños más afectados por la desnutrición. Se proporciona suplementos nutricionales y atención médica durante 6 semanas. Se realiza acompañamiento a la familia, de parte de voluntarios de la parroquia.
            </p>
          </div>
        </div>
      </section>  

      <PiePagina />
    </div>
  );
}

