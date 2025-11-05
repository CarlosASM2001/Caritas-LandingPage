import React from 'react';
import Navbar from '../components/Navbar.jsx';
import PiePagina from '../components/piePagina.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';

const consultasImages = [
  new URL('../assets/consultasmedicas/DSCN0185.JPG', import.meta.url).href,
  new URL('../assets/consultasmedicas/DSCN0173.JPG', import.meta.url).href,
  new URL('../assets/consultasmedicas/DSCN0161.JPG', import.meta.url).href,
  new URL('../assets/consultasmedicas/DSCN0156.JPG', import.meta.url).href,
  new URL('../assets/consultasmedicas/DSCN0155.JPG', import.meta.url).href,
  new URL('../assets/consultasmedicas/DSCN0136.JPG', import.meta.url).href,
  new URL('../assets/consultasmedicas/DSCN0128.JPG', import.meta.url).href,
  new URL('../assets/consultasmedicas/DSCN0068.JPG', import.meta.url).href,
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
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-[#032b27] mb-3">Especialidades disponibles:</h2>
                <ul className="list-disc list-inside mb-4">
                  <li>Pediatría</li>
                  <li>Dermatología</li>
                  <li>Psicología</li>
                  <li>Medicina Familiar</li>
                  <li>Medicina Interna</li>
                </ul>
                <p>
                  Las consultas se ofrecen a costos solidarios, excepto las consultas de Pediatría, que son totalmente gratuitas.
                  Todas deben agendarse previamente a través de nuestro WhatsApp Institucional<span className="font-semibold text-red-800">+58 276-3447809</span> o completando el formulario en línea. Cuando haya disponibilidad del médico, se les informa la fecha y hora para evitar esperas innecesarias.
                </p>
                <div className="mt-6 bg-white border border-red-100 rounded-2xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-[#032b27] mb-2">Agenda tu consulta médica en línea</h3>
                  <p className="text-gray-700 mb-4">
                    Completa el formulario con tus datos y la especialidad que necesitas. Nuestro equipo te contactará para confirmar la fecha y hora disponibles.
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfV8_xUmNps8ji5xviwjFTFwhxuNuR1ONX2RYiQtbpGYmf2lQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-red-700 text-white font-semibold rounded-full shadow hover:bg-red-800 transition-colors"
                  >
                    Ir al formulario de agendamiento
                  </a>
                </div>
                <p className="mt-4">
                  Disponemos de un pequeño banco de medicamentos. Solo debes enviar tu récipe médico y, si el medicamento se encuentra disponible, te lo entregamos como donación.
                </p>
              </div>
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
