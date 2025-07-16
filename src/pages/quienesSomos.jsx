import React from "react";
import banner from "../assets/banner1.jpg"; 
import Navbar from '../components/Navbar.jsx'

export default function QuienesSomos() {
  return (
    
    <>
    <Navbar/>
    <div className="bg-[#f9f5f0] text-[#2b2b2b] font-sans px-6 lg:px-32 py-10">
      <h1 className="text-4xl font-bold mb-6 text-left">Quiénes Somos</h1>
      <p className="text-lg text-left mb-10 ">
        Somos una organización de la Iglesia Católica en Venezuela, comprometida con la promoción
        de la dignidad humana, la justicia social y el desarrollo integral de las personas y comunidades
        más necesitadas. Trabajamos en acciones de promoción de los derechos humanos, construcción de paz,
        la asistencia a poblaciones vulnerables y la gestión del riesgo de desastres.
      </p>

      <div className="flex flex-col lg:flex-row items-center gap-6 mb-12">
        <img
          src={banner}
          alt="Caritas"
          className="rounded-xl w-full lg:w-1/2 object-cover"
        />
        <p className="text-md text-justify">
          Apoyar a las comunidades afectadas por la crisis nacional es nuestra misión.
          Nos dedicamos a servir con compasión, fe y responsabilidad.
        </p>
      </div>

   
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Misión y Visión</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Misión</h3>
            <p>
              Acercar la caridad a las comunidades en situación de pobreza o exclusión,
              con respeto, justicia y dignidad, bajo los principios de la Doctrina Social de la Iglesia.
            </p>
            <img src="https://placehold.co/400x200" alt="Misión" className="mt-4 rounded-xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Visión</h3>
            <p>
              Ser una organización líder en la promoción del desarrollo humano integral y
              solidario de las personas más vulnerables, comprometidos con los valores cristianos.
            </p>
            <img src="https://placehold.co/400x200" alt="Visión" className="mt-4 rounded-xl" />
          </div>
        </div>
      </section>

      <section className="bg-[#dfb6b2] rounded-xl p-8 mb-16 text-center">
        <h2 className="text-xl font-semibold mb-4">Principios</h2>
        <div className="bg-white p-6 rounded-lg text-gray-800 shadow-md max-w-2xl mx-auto">
          <h3 className="text-lg font-medium">Caridad</h3>
          <p>Fundamentamos nuestra acción en la acogida y acompañamiento a las personas vulnerables y excluidas.</p>
        </div>
      </section>


      <section className="mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Valores</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Paz", "Solidaridad", "Justicia", "Opciones preferenciales por los pobres"].map((valor, index) => (
            <button
              key={index}
              className="bg-white text-red-800 border border-red-800 px-4 py-2 rounded-full hover:bg-red-800 hover:text-white transition"
            >
              {valor}
            </button>
          ))}
        </div>
      </section>

     
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Equipo Directivo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <img src="https://placehold.co/200x200" alt="Ricardo" className="rounded-full mx-auto mb-2" />
            <h3 className="font-semibold">Dr. Ricardo Corelli</h3>
            <p className="text-sm">Director Ejecutivo</p>
          </div>
          <div>
            <img src="https://placehold.co/200x200" alt="Sofía" className="rounded-full mx-auto mb-2" />
            <h3 className="font-semibold">Dra. Sofía Ramírez</h3>
            <p className="text-sm">Coordinadora de Proyectos</p>
          </div>
          <div>
            <img src="https://placehold.co/200x200" alt="Alejandro" className="rounded-full mx-auto mb-2" />
            <h3 className="font-semibold">Sr. Alejandro Vargas</h3>
            <p className="text-sm">Responsable de Comunicaciones</p>
          </div>
        </div>
      </section>
    
    </div>
    </>
  );
}
