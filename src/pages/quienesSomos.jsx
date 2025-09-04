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
const [currentPrincipioIndex, setCurrentPrincipioIndex] = useState(0);
const [currentValorIndex, setCurrentValorIndex] = useState(0);
const [currentDirectivoIndex, setCurrentDirectivoIndex] = useState(0);
const [isAutoPlaying, setIsAutoPlaying] = useState(true);
const [itemsPerView, setItemsPerView] = useState(3);

const maxDirectivoIndex = Math.max(0, directivosData.length - itemsPerView);


  const handlePrevPrincipio = () => {
    setIsAutoPlaying(false);
    setCurrentPrincipioIndex((prev) =>
      prev === 0 ? principiosData.length - 1 : prev - 1
    );
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  const handleNextPrincipio = () => {
    setIsAutoPlaying(false);
    setCurrentPrincipioIndex((prev) =>
      prev === principiosData.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handlePrevValor = () => {
    setIsAutoPlaying(false);
    setCurrentValorIndex((prev) =>
      prev === 0 ? valoresData.length - 1 : prev - 1
    );
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  const handleNextValor = () => {
    setIsAutoPlaying(false);
    setCurrentValorIndex((prev) =>
      prev === valoresData.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };


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
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

useEffect(() => {
  if (isAutoPlaying) {
    const interval = setInterval(() => {
      setCurrentDirectivoIndex((prev) =>
        prev >= maxDirectivoIndex ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }
}, [isAutoPlaying, maxDirectivoIndex]);

const handlePrevDirectivo = () => {
  setIsAutoPlaying(false);
  setCurrentDirectivoIndex((prev) =>
    prev <= 0 ? maxDirectivoIndex : prev - 1
  );
  setTimeout(() => setIsAutoPlaying(true), 5000);
};

const handleNextDirectivo = () => {
  setIsAutoPlaying(false);
  setCurrentDirectivoIndex((prev) =>
    prev >= maxDirectivoIndex ? 0 : prev + 1
  );
  setTimeout(() => setIsAutoPlaying(true), 5000);
};



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

  // ✅ Autoplay Valores
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

  
  useEffect(() => {
    const maxIndex = Math.max(0, directivosData.length - itemsPerView);
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentDirectivoIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, itemsPerView, directivosData.length]);

  // Responsive
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

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-[#b71c1c] via-[#d32f2f] to-[#f44336] py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative container mx-auto px-4 text-center">
          <nav className="text-white/80 text-sm mb-4">
            <span>Home</span> <span className="mx-2">/</span>{" "}
            <span className="text-white">Quienes Somos</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold tracking-wide text-white mb-6 drop-shadow-lg"
          >
            Quienes Somos
          </motion.h1>
        </div>
      </section>

      {/* Introducción */}
      <div className="bg-[#fff5f5] text-[#2b2b2b] font-sans px-6 lg:px-32 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row items-center gap-8 mb-12"
        >
          <img
            src={introduccion.imagen}
            alt="Caritas"
            className="rounded-2xl shadow-lg w-full lg:w-1/2 object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-red-800 mb-4">
              {introduccion.titulo2}
            </h2>
            <p className="text-lg text-justify leading-relaxed">
              {introduccion.parrafo}
            </p>
          </div>
        </motion.div>

        {/* Misión y Visión */}
        <section className="relative py-16 bg-[#fff5f5]">
          <div className="absolute inset-0 bg-red-900 opacity-20 rounded-xl mx-4 lg:mx-24" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-35">
            {misionVisionData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-10 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="mb-4 flex justify-center">
                  <img src={item.icono} alt={item.titulo} className="h-16" />
                </div>
                <h3 className="text-2xl font-bold text-red-800 mb-2">
                  {item.titulo}
                </h3>
                <p className="text-gray-700 text-md">{item.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Principios */}
      <section className="py-16 bg-[#fff5f5] text-center">
        <h2 className="text-3xl font-bold text-red-800 mb-8">
          Conoce Nuestros Principios
        </h2>
        <div className="flex justify-center items-center gap-6">
          <button
            onClick={handlePrevPrincipio}
            className="p-2 rounded-full border border-red-800 text-red-800 hover:bg-red-100 hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>
          <motion.div
            key={currentPrincipioIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col lg:flex-row items-center gap-6 max-w-4xl"
          >
            <img
              src={principiosData[currentPrincipioIndex].imagen}
              alt={principiosData[currentPrincipioIndex].titulo}
              className="h-48 object-contain rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-red-700 mb-2">
                {principiosData[currentPrincipioIndex].titulo}
              </h3>
              <p className="text-gray-700 text-md leading-relaxed">
                {principiosData[currentPrincipioIndex].descripcion}
              </p>
            </div>
          </motion.div>
          <button
            onClick={handleNextPrincipio}
            className="p-2 rounded-full border border-red-800 text-red-800 hover:bg-red-100 hover:scale-110 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* Valores */}
      <section className="w-full py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-red-800 mb-8">
          Conoce Nuestros Valores en Cáritas
        </h2>
        <div className="flex justify-center items-center gap-6">
          <button
            onClick={handlePrevValor}
            className="p-2 rounded-full border border-red-800 text-red-800 hover:bg-red-100 hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>
          <motion.div
            key={currentValorIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="border border-red-300 p-8 rounded-2xl max-w-lg min-h-[400px] flex flex-col justify-between shadow-md hover:shadow-2xl"
          >
            <div>
              <div className="mb-4 flex justify-center">
                <img
                  src={valoresData[currentValorIndex].icono}
                  alt={valoresData[currentValorIndex].titulo}
                  className="h-16"
                />
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-2">
                {valoresData[currentValorIndex].titulo}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {valoresData[currentValorIndex].descripcion}
              </p>
            </div>
          </motion.div>
          <button
            onClick={handleNextValor}
            className="p-2 rounded-full border border-red-800 text-red-800 hover:bg-red-100 hover:scale-110 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* Imagen con mensaje */}
      <section
        className="relative w-full h-[400px] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${francisco})`, // ✅ usa la variable importada
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Texto */}
        <div className="relative z-10 text-center px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            “Cáritas es la caricia de la Iglesia a su pueblo, la caricia de la
            Madre Iglesia a sus hijos, la ternura y la cercanía.”
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mt-4">
            Papa Francisco
          </p>
        </div>
      </section>

       {/* Directivos */}
<section className="w-full py-16 bg-[#fdecea] text-red-800 text-center px-4">
  <h2 className="text-3xl font-bold mb-8 leading-tight">Miembros Directivos</h2>
  <div className="relative max-w-6xl mx-auto">
    {/* Botón Izquierda */}
    <button
      onClick={handlePrevDirectivo}
      disabled={currentDirectivoIndex === 0}
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-red-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
    >
      <ChevronLeft className="w-6 h-6 text-red-800 group-hover:text-red-900" />
    </button>

    {/* Botón Derecha */}
    <button
      onClick={handleNextDirectivo}
      disabled={currentDirectivoIndex >= maxDirectivoIndex}
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-red-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
    >
      <ChevronRight className="w-6 h-6 text-red-800 group-hover:text-red-900" />
    </button>

    {/* Carrusel */}
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentDirectivoIndex * (100 / itemsPerView)}%)` }}
      >
        {directivosData.map((persona, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
          >
            <div className="bg-white text-[#2b2b2b] rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition">
              <img
                src={persona.imagen}
                alt={persona.nombre}
                className="h-48 w-48 object-cover rounded-xl mb-4 shadow-md"
              />
              <h3 className="font-bold text-lg text-center text-red-800">{persona.nombre}</h3>
              <p className="text-sm text-center text-gray-700 mt-2">{persona.cargo}</p>
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
