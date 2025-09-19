import React from 'react'

const MetricCard = ({ title, value }) => (
  <div className="bg-gradient-to-br from-[#fdf6f6] to-[#f3e9e6] rounded-2xl p-8 shadow-md text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
    <h3 className="text-lg font-semibold text-[#5c0a0a] mb-3">{title}</h3>
    <p className="text-3xl font-extrabold text-[#d4af37]">{value}</p>
  </div>
)

function Impacto() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-[#2b1b1b] mb-12">
          Nuestros Logros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <MetricCard title="Comunidades Beneficiadas" value="+50" />
          <MetricCard title="Personas Atendidas en consultas médicas" value="+200" />
          <MetricCard title="Proyectos Implementados" value="+15" />
        </div>
      </div>
    </section>
  )
}

export default Impacto