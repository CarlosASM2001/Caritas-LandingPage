import React from 'react'
import { MapPin } from 'lucide-react'

function MapaFundacion() {
  // Replace the q= query with your exact address if needed
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2276373739005!2d-72.23770522551165!3d7.765667607484447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666ca746581f8b%3A0x1738e8780208a00d!2sCaritas!5e0!3m2!1ses-419!2sve!4v1756252167812!5m2!1ses-419!2sve";

  return (
    <section className="bg-[#f9f5f0] py-12" id="contacto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2b1b1b] mb-6 text-center">
          Dónde estamos
        </h2>
        <div className="max-w-5xl mx-auto md:grid-cols-3 gap-6 items-stretch">
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
