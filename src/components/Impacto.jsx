import React from 'react'
import francisco from "../assets/francisco.jpg";


function Impacto() {
  return (
    <section className="relative w-full" aria-label="Cita Papa Francisco">
      <div
        className="h-[420px] bg-center bg-cover"
        style={{ backgroundImage: `url(${francisco})` }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <span className="inline-block text-sm uppercase tracking-widest text-white/80 mb-3">
            Palabras que inspiran
          </span>
          <h2 className="text-2xl md:text-4xl font-bold leading-snug">
            “Cáritas es la caricia de la Iglesia a su pueblo, la caricia de la
            Madre Iglesia a sus hijos, la ternura y la cercanía.”
          </h2>
          <p className="mt-4 text-white/80">— Papa Francisco</p>
        </div>
      </div>
    </section>
  )
}

export default Impacto