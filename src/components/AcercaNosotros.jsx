import React from 'react'
import { Link } from 'react-router-dom'
import video_conocenos from '../assets/video_conocenos.mp4'

function AcercaNosotros() {
  return (
    <section className="bg-[#f3e9e6] py-20">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Texto */}
        <div>
          <p className="tracking-[0.35em] text-red-800 font-semibold mb-3 uppercase">
            ACERCA DE
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#032b27] mb-6 leading-tight">
            NOSOTROS
          </h2>
          <div className="space-y-5 text-gray-700 leading-8">
            <p>
              En Cáritas San Cristóbal, nuestra misión principal es ayudar y brindar esperanza 
              a quienes más lo necesitan, uniendo las voluntades de diversas organizaciones y comunidades parroquiales.
            </p>
            <p>
              Nos dedicamos a ofrecer espacios seguros donde las personas en movilidad y otras poblaciones 
              vulnerables encuentran protección, respeto, dignidad y apoyo humano en los momentos más difíciles.
            </p>
            <p>
              Nuestro compromiso es garantizar un trato digno y humano hacia todos los beneficiarios.
            </p>
          </div>

          <div className="mt-8">
            <Link
              to="/quienes-somos"
              className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              Leer más
            </Link>
          </div>
        </div>

        {/* Video */}
        <div className="w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
            <video
              className="w-full h-full object-cover"
              src={video_conocenos}
              controls
              autoPlay
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default AcercaNosotros
