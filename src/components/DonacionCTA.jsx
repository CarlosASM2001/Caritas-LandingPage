import React from 'react';
import { Link } from "react-router-dom";

function DonationCTA() {
  return (
    <section className="bg-[white] py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2b1b1b] mb-4">
          Apoya Nuestra Labor
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-6">
          Tu contribución nos permite seguir transformando vidas y construyendo un futuro más justo para todos.
        </p>
        <div className="flex justify-center">
          <Link to="/donaciones" className="bg-red-800 hover:bg-red-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Haz una Donación
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DonationCTA
