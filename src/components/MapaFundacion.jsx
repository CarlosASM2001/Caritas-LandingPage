import React from 'react'
import { MapPin } from 'lucide-react'

function MapaFundacion() {
  // Replace the q= query with your exact address if needed
  const mapSrc = "https://www.google.com/maps?q=Calle%205%20entre%20carreras%203%20y%204%20San%20Cristobal%20Venezuela&output=embed";

  return (
    <section className="bg-[#f9f5f0] py-12" id="contacto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2b1b1b] mb-6 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
          Dónde estamos
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="md:col-span-1 bg-white rounded-xl shadow p-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-red-800 mt-1" />
              <div>
                <p className="font-semibold text-[#2b1b1b]">Dirección</p>
                <p className="text-sm text-gray-700">Calle 5 entre carreras 3 y 4, casa Nro 3-20.</p>
                <p className="text-sm text-gray-700">San Cristóbal, Táchira - Venezuela</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 rounded-xl overflow-hidden shadow">
            <iframe
              title="Ubicación Cáritas San Cristóbal"
              src={mapSrc}
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapaFundacion

