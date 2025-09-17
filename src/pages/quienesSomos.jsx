import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import {
  introduccion,
  misionVisionData,
  principiosData,
  valoresData,
  directivosData,
} from "../data/quienesomosData";
import PiePagina from "../components/piePagina.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import francisco from "../assets/francisco.jpg";

export default function QuienesSomos() {
  // Estados
  const [currentPrincipioIndex, setCurrentPrincipioIndex] = useState(0);
  const [currentValorIndex, setCurrentValorIndex] = useState(0);
  const [currentDirectivoIndex, setCurrentDirectivoIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);

  const maxDirectivoIndex = Math.max(0, directivosData.length - itemsPerView);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) setIsAutoPlaying(false);
    const handler = () =>
      setIsAutoPlaying(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    media.addEventListener?.("change", handler);
    return () => media.removeEventListener?.("change", handler);
  }, []);

  // Autoplay Directivos
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentDirectivoIndex((prev) => (prev >= maxDirectivoIndex ? 0 : prev + 1));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, maxDirectivoIndex]);

  // Autoplay Principios
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentPrincipioIndex((prev) =>
          prev === principiosData.length - 1 ? 0 : prev + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  // Autoplay Valores
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentValorIndex((prev) =>
          prev === valoresData.length - 1 ? 0 : prev + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  // Handlers
  const handlePrevPrincipio = () => {
    setIsAutoPlaying(false);
    setCurrentPrincipioIndex((prev) => (prev === 0 ? principiosData.length - 1 : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  const handleNextPrincipio = () => {
    setIsAutoPlaying(false);
    setCurrentPrincipioIndex((prev) => (prev === principiosData.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  const handlePrevValor = () => {
    setIsAutoPlaying(false);
    setCurrentValorIndex((prev) => (prev === 0 ? valoresData.length - 1 : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  const handleNextValor = () => {
    setIsAutoPlaying(false);
    setCurrentValorIndex((prev) => (prev === valoresData.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  const handlePrevDirectivo = () => {
    setIsAutoPlaying(false);
    setCurrentDirectivoIndex((prev) => (prev <= 0 ? maxDirectivoIndex : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  const handleNextDirectivo = () => {
    setIsAutoPlaying(false);
    setCurrentDirectivoIndex((prev) => (prev >= maxDirectivoIndex ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Fondo imagen */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${francisco})` }}
          aria-hidden="true"
        />
       
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/50 to-black/30" />
        {/* Patrón sutil */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-6 py-24 md:py-32 text-center text-white">
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/80 text-sm mb-6"
            aria-label="Breadcrumb"
          >
            <span>Home</span> <span className="mx-2">/</span>
            <span className="text-white">Quiénes Somos</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md"
          >
            Servimos con <span className="text-red-300">caridad</span> y{" "}
            <span className="text-red-200">esperanza</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 md:mt-6 max-w-3xl mx-auto text-base md:text-lg text-white/90"
          >
            Cáritas San Cristóbal acompaña a las comunidades más vulnerables, promoviendo
            dignidad, solidaridad y bien común.
          </motion.p>
        </div>
        {/* Onda separadora */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,96L1440,0L1440,120L0,120Z" className="fill-white"></path>
        </svg>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="bg-[#fff7f7] text-[#2b2b2b] font-sans px-6 lg:px-20 py-16">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.img
            src={introduccion.imagen}
            alt="Cáritas en acción"
            className="rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] w-full object-cover"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-[#5c0a0a] mb-4"
            >
              {introduccion.titulo2}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg leading-relaxed text-justify"
            >
              {introduccion.parrafo}
            </motion.p>
          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#5c0a0a] text-center mb-10"
          >
            Misión y Visión
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {misionVisionData.map((item, idx) => (
              <motion.div
                key={item.titulo || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white/70 backdrop-blur-sm border border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-2xl p-8 hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition"
              >
                <div className="mb-4 flex justify-center">
                  <img src={item.icono} alt={item.titulo} className="h-14 w-14" loading="lazy" />
                </div>
                <h3 className="text-2xl font-semibold text-[#7a1212] text-center mb-2">
                  {item.titulo}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">{item.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPIOS */}
      <section className="py-16 bg-[#fff7f7]">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5c0a0a] mb-8">
            Nuestros Principios
          </h2>

          <div className="flex justify-center items-center gap-4">
            <button
              onClick={handlePrevPrincipio}
              className="p-2 rounded-full border border-[#7a1212] text-[#7a1212] hover:bg-[#7a1212]/10 transition"
              aria-label="Anterior principio"
            >
              <ChevronLeft />
            </button>

            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 w-full max-w-4xl flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/2">
                <img
                  src={principiosData[currentPrincipioIndex].imagen}
                  alt={principiosData[currentPrincipioIndex].titulo}
                  className="w-full h-56 object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-2xl font-bold text-[#7a1212] mb-2">
                  {principiosData[currentPrincipioIndex].titulo}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {principiosData[currentPrincipioIndex].descripcion}
                </p>
              </div>
            </div>

            <button
              onClick={handleNextPrincipio}
              className="p-2 rounded-full border border-[#7a1212] text-[#7a1212] hover:bg-[#7a1212]/10 transition"
              aria-label="Siguiente principio"
            >
              <ChevronRight />
            </button>
          </div>

          {/* dots indicadores */}
          <div className="mt-6 flex justify-center gap-2">
            {principiosData.map((_, i) => (
              <button
                key={`dot-principio-${i}`}
                onClick={() => setCurrentPrincipioIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === currentPrincipioIndex
                    ? "bg-[#7a1212]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir al principio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* VALORES  */}
<section className="w-full py-16 bg-white">
  <div className="container mx-auto px-6 lg:px-20 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-[#5c0a0a] mb-8">
      Nuestros Valores
    </h2>

    <div className="flex justify-center items-center gap-6">
      <button
        onClick={handlePrevValor}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-[#7a1212] text-[#7a1212] hover:bg-[#7a1212]/10 transition"
        aria-label="Valor anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="relative max-w-lg w-full">
        <div
          className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-red-100 to-transparent"
          aria-hidden="true"
        />
        <div className="border border-red-200 p-8 rounded-2xl min-h-[380px] flex flex-col justify-between bg-white shadow-sm hover:shadow-md transition">
          <div>
            <div className="mb-5 flex justify-center">
              <img
                src={valoresData[currentValorIndex].icono}
                alt={valoresData[currentValorIndex].titulo}
                className="h-16"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#7a1212] mb-2">
              {valoresData[currentValorIndex].titulo}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {valoresData[currentValorIndex].descripcion}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={handleNextValor}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-[#7a1212] text-[#7a1212] hover:bg-[#7a1212]/10 transition"
        aria-label="Siguiente valor"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </div>
</section>


      {/* CITA */}
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

      {/* DIRECTIVOS */}
      <section className="w-full py-16 bg-[#fdecea] text-red-800 text-center px-4">
        <h2 className="text-3xl font-bold mb-8 leading-tight">Miembros Directivos</h2>
        <div className="relative max-w-6xl mx-auto">
     
          <button
            onClick={handlePrevDirectivo}
            disabled={currentDirectivoIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-red-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Directivo anterior"
          >
            <ChevronLeft className="w-6 h-6 text-red-800 group-hover:text-red-900" />
          </button>

        
          <button
            onClick={handleNextDirectivo}
            disabled={currentDirectivoIndex >= maxDirectivoIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-red-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Siguiente directivo"
          >
            <ChevronRight className="w-6 h-6 text-red-800 group-hover:text-red-900" />
          </button>

          {/* Carrusel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentDirectivoIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {directivosData.map((persona, index) => (
                <div
                  key={persona.nombre || index}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white text-[#2b2b2b] rounded-2xl border border-gray-100 shadow-lg p-6 flex flex-col items-center hover:shadow-xl hover:-translate-y-0.5 transition">
                    <img
                      src={persona.imagen}
                      alt={persona.nombre}
                      className="h-44 w-44 object-cover rounded-xl mb-4 shadow-md"
                      loading="lazy"
                    />
                    <h3 className="font-semibold text-lg text-[#7a1212] text-center">
                      {persona.nombre}
                    </h3>
                    <p className="text-sm text-center text-gray-600 mt-1">
                      {persona.cargo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PiePagina />
    </>
  );
}
