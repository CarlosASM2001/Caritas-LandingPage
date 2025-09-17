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

      {/* HERO */}
      <section className="relative bg-gradient-to-r from-[#6e0b14] via-[#5c0a0a] to-[#4b0e0e] py-20 overflow-hidden">
        {/* velo sutil */}
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
        {/* patrón sobrio */}
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,.25) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4 text-center">
          <nav className="text-white/80 text-sm mb-4">
            <span className="hover:text-white transition-colors">Home</span>
            <span className="mx-2">/</span>
            <span className="text-white">Contáctanos</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 drop-shadow-sm"
          >
            Contáctanos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="text-base md:text-lg text-white/90 max-w-2xl mx-auto"
          >
            Estamos para ayudarte. Elige el canal que prefieras y conversemos.
          </motion.p>
        </div>
      </section>

      {/* CANALES */}
      <section className="py-16 bg-[#faf7f7] text-[#2b2b2b]">
        <div className="container mx-auto px-6 lg:px-20 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5c0a0a] mb-3">
            Canales de comunicación
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Ponemos a tu disposición distintas vías para que puedas contactarnos
            de forma fácil y rápida.
          </p>
        </div>

        <div className="container mx-auto px-6 lg:px-20 grid gap-6 md:grid-cols-3 text-left">
          {/* Dirección */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full ring-2 ring-yellow-300/60 -m-1" aria-hidden="true" />
              <div className="bg-[#f8d7da] p-3 rounded-full">
                <MapPin className="w-6 h-6 text-[#7a1212]" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[#5c0a0a]">Dirección</h4>
              <p className="text-gray-700">{siteConfig.ubicacion}</p>
            </div>
          </motion.div>

          {/* Teléfono */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full ring-2 ring-yellow-300/60 -m-1" aria-hidden="true" />
              <div className="bg-[#f8d7da] p-3 rounded-full">
                <Phone className="w-6 h-6 text-[#7a1212]" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[#5c0a0a]">Teléfono</h4>
              <p className="text-gray-700">{siteConfig.contacto.telefono}</p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full ring-2 ring-yellow-300/60 -m-1" aria-hidden="true" />
              <div className="bg-[#f8d7da] p-3 rounded-full">
                <Mail className="w-6 h-6 text-[#7a1212]" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[#5c0a0a]">Email</h4>
              <p className="text-gray-700">{siteConfig.contacto.email}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <PiePagina />
    </>
  );
}
