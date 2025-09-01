import React from 'react'

const MetricCard = ({ title, value }) => (
  <div className="bg-[#f1e8e5] rounded-xl p-6 shadow-sm text-center">
    <h3 className="text-lg font-semibold text-[#2b1b1b] mb-2">{title}</h3>
    <p className="text-[#2b1b1b] text-lg font-bold">{value}</p>
  </div>
)

function Impacto() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
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
