import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import PiePagina from "../components/piePagina.jsx";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function Contacto() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-[#b71c1c] via-[#d32f2f] to-[#f44336] py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative container mx-auto px-4 text-center">
          <nav className="text-white/80 text-sm mb-4">
            <span>Home</span> <span className="mx-2">/</span> <span className="text-white">Contáctanos</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold tracking-wide text-white mb-6 drop-shadow-lg"
          >
            Contactános
          </motion.h1>
        </div>
      </section>

      {/* Canales de comunicación */}
      <section className="py-16 bg-white text-[#2b2b2b]">
        <div className="container mx-auto px-6 lg:px-20 text-center mb-12">
          <h2 className="text-3xl font-bold text-red-800 mb-4">
            Canales de comunicación
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Estamos aquí para ti. En esta sección encontrarás toda la información que necesitas para comunicarte con nosotros. 
            Ponemos a tu disposición canales de comunicación para que puedas contactarnos de manera fácil y rápida.
          </p>
        </div>

        <div className="container mx-auto px-6 lg:px-32 grid gap-8 md:grid-cols-3 text-left">
          {/* Dirección */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-4 p-6 bg-[#fff5f5] rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="bg-red-100 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-red-700" />
            </div>
            <div>
              <h4 className="font-semibold text-red-800">Dirección</h4>
              <p className="text-gray-700">
                {siteConfig.ubicacion}
              </p>
            </div>
          </motion.div>

          {/* Teléfono */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-start gap-4 p-6 bg-[#fff5f5] rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="bg-red-100 p-3 rounded-full">
              <Phone className="w-6 h-6 text-red-700" />
            </div>
            <div>
              <h4 className="font-semibold text-red-800">Teléfono</h4>
              <p className="text-gray-700">{siteConfig.contacto.telefono}</p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-start gap-4 p-6 bg-[#fff5f5] rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="bg-red-100 p-3 rounded-full">
              <Mail className="w-6 h-6 text-red-700" />
            </div>
            <div>
              <h4 className="font-semibold text-red-800">Email</h4>
              <p className="text-gray-700">{siteConfig.contacto.email}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <PiePagina />
    </>
  );
}
