import React from 'react'
import francisco from "../assets/francisco.jpg";

const MetricCard = ({ title, value }) => (
  <div className="bg-[#f1e8e5] rounded-xl p-6 shadow-sm text-center">
    <h3 className="text-lg font-semibold text-[#2b1b1b] mb-2">{title}</h3>
    <p className="text-[#2b1b1b] text-lg font-bold">{value}</p>
  </div>
)

function Impacto() {
  return (
    <section >


      {/* Imagen con mensaje */}
      <section
        className="relative w-full h-[300px] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${francisco})`, // ✅ usa la variable importada
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Texto */}
        <div className="relative z-10 text-center px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            “Cáritas es la caricia de la Iglesia a su pueblo, la caricia de la
            Madre Iglesia a sus hijos, la ternura y la cercanía.”
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mt-4">
            Papa Francisco
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-extrabold text-center text-[#2b1b1b] mb-6">
          Nuestros Logros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <MetricCard title="Comunidades Beneficiadas" value="+50" />
          <MetricCard title="Personas Atendidas en consultas medicas" value="+200" />
          <MetricCard title="Proyectos Implementados" value="+15" />
        </div>
      </div>
    </section>
  )
}

export default Impacto
