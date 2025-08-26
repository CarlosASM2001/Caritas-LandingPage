import React from 'react'
import { Link } from 'react-router-dom'

function AcercaNosotros() {
  return (
    <section className="bg-[#f3e9e6] py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="tracking-[0.35em] text-red-800 font-semibold mb-3">ACERCA DE</p>
          <h2 className="text-5xl font-extrabold text-[#032b27] mb-6">NOSOTROS</h2>
          <div className="space-y-5 text-gray-700 leading-8">
            <p>
              Somos el Secretariado Nacional de Pastoral Social /Cáritas Colombiana, un organismo eclesial, sin ánimo de lucro, dependiente de la Conferencia Episcopal que busca la verdad, la reconciliación, la justicia y la caridad en las relaciones y estructuras básicas de nuestra sociedad.
            </p>
            <p>
              Nuestro actuar y trabajo siempre son iluminados por el Evangelio y por la doctrina social de la Iglesia Católica.
            </p>
            <p>
              Así consolidamos una labor eficiente y justa en pro de distintas comunidades de las Jurisdicciones Eclesiásticas de todo el territorio nacional.
            </p>
          </div>

          <div className="mt-8">
            <Link
              to="/quienes-somos"
              className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Leer más
            </Link>
          </div>
        </div>

        <div className="w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              src="/src/assets/video_conocenos.mp4"
              controls
              poster="/src/assets/banner7.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcercaNosotros

