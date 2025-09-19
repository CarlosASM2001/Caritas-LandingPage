import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import PiePagina from "../components/piePagina.jsx";


import donacion1 from "../assets/donacion1.jpg";
import donacion2 from "../assets/donacion2.jpg";
import donacion3 from "../assets/donacion3.jpg";

// Secciones
import francisco from "../assets/francisco.jpg";
import ayuda from "../assets/banner9.jpg";


import alimentos from "../assets/alimentos.jpg";
import ropa from "../assets/ropa.jpg";
import juguetes from "../assets/juguetes.jpg";
import medicinas from "../assets/medicinas.jpg";
import kidHigiene from "../assets/kidHigiene.jpg";

export default function Donaciones() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

 
  const donacionesData = [
    {
      titulo: "Alimentos",
      descripcion:
        "Arroz, granos, pasta, enlatados y otros no perecederos para apoyar a las familias.",
      imagen: alimentos,
    },
    {
      titulo: "Ropa y Calzado",
      descripcion:
        "Ropa en buen estado y calzado cómodo para adultos, jóvenes y niños.",
      imagen: ropa,
    },
    {
      titulo: "Juguetes y útiles",
      descripcion:
        "Juegos, juguetes y útiles escolares que llevan alegría y esperanza.",
      imagen: juguetes,
    },
    {
      titulo: "Medicinas",
      descripcion:
        "Medicamentos esenciales y material médico para atender a los más vulnerables.",
      imagen: medicinas,
    },
    {
      titulo: "Kit de Higiene",
      descripcion:
        "Productos esenciales de aseo personal y del hogar para familias en necesidad.",
      imagen: kidHigiene,
    },
  ];

  const maxIndex = Math.max(0, donacionesData.length - itemsPerView);


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

 
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, maxIndex]);


  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <>
      <Navbar />

      
      <section className="relative w-full overflow-hidden">
       
        <div className="absolute inset-0 grid grid-cols-3">
          <img src={donacion1} alt="Donación 1" className="w-full h-[460px] object-cover" loading="lazy" />
          <img src={donacion2} alt="Donación 2" className="w-full h-[460px] object-cover" loading="lazy" />
          <img src={donacion3} alt="Donación 3" className="w-full h-[460px] object-cover" loading="lazy" />
        </div>
       
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/50 to-black/30" />
        
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />
        {/* Contenido */}
        <div className="relative container mx-auto px-6 py-24 md:py-28 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md"
          >
            Dona con Amor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 md:mt-6 max-w-3xl mx-auto text-base md:text-lg text-white/90"
          >
            Tu aporte ayuda a transformar vidas. Cáritas está al servicio de quienes más lo necesitan.
          </motion.p>
        </div>
        
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,96L1440,0L1440,120L0,120Z" className="fill-white"></path>
        </svg>
      </section>

      {/* ¿POR QUÉ DONAR?  */}
      <section className="bg-[#6e0b14] py-16 px-6 lg:px-32 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-white mb-10"
        >
          ¿Por qué <span className="text-yellow-300">donar</span>?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Ayuda directa",
              p: "Tus donaciones se transforman en alimentos, medicinas y refugio para quienes lo necesitan.",
            },
            {
              t: "Impacto real",
              p: "Cada aporte contribuye a programas comunitarios que mejoran la calidad de vida de cientos de familias.",
            },
            {
              t: "Solidaridad cristiana",
              p: "Siguiendo el llamado del Papa Francisco, llevamos la caricia de la Iglesia a los más vulnerables.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.t}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-8 text-left shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
            >
              <h3 className="text-xl font-semibold text-[#7a1212] mb-3">{card.t}</h3>
              <p className="text-gray-700 leading-relaxed">{card.p}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOQUE IMAGEN  */}
      <section className="bg-white py-16 px-6 lg:px-32">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.img
            src={ayuda}
            alt="Apoyo Cáritas"
            className="rounded-2xl w-full object-cover shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
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
              className="text-3xl font-bold text-[#5c0a0a] mb-4"
            >
              Cada donación es esperanza
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-gray-700 leading-relaxed text-lg mb-6"
            >
              Con tu ayuda, Cáritas puede llegar a más comunidades, brindar apoyo a familias en crisis,
              acompañar a los enfermos y alimentar a quienes sufren hambre.
            </motion.p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Muy pronto habilitaremos nuestra cuenta oficial para que puedas realizar tu aporte de manera segura.
            </p>
          </div>
        </div>
      </section>

      {/* CARRUSEL DONACIONES  */}
      <section className="w-full py-16 bg-[#c48b8f] text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-8">También puedes ayudarnos con</h2>
        <div className="relative max-w-6xl mx-auto">
          {/* Botón Izquierda (redondo pequeño) */}
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full border border-red-200 text-[#7a1212] shadow-md hover:bg-red-50 transition"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Botón Derecha */}
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full border border-red-200 text-[#7a1212] shadow-md hover:bg-red-50 transition"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carrusel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {donacionesData.map((item, index) => (
                <div key={item.titulo || index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                  <div className="bg-white text-[#2b2b2b] rounded-2xl border border-gray-100 shadow-lg p-6 flex flex-col items-center hover:shadow-xl hover:-translate-y-0.5 transition">
                    <img
                      src={item.imagen}
                      alt={item.titulo}
                      className="h-36 w-36 object-cover rounded-xl mb-4 shadow-md"
                      loading="lazy"
                    />
                    <h3 className="font-semibold text-lg text-[#7a1212]">{item.titulo}</h3>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">{item.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nota final */}
        <p className="mt-10 text-white/90 text-lg max-w-2xl mx-auto">
          Todo lo que dones será entregado con amor a las comunidades más necesitadas.
        </p>
      </section>

      {/* MENSAJE INSPIRADOR */}
      <section
        className="relative w-full h-[360px] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${francisco})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold drop-shadow-lg">
            “La caridad no es solo dar, es compartir y acompañar con amor.”
          </h2>
          <p className="mt-4 text-lg text-white/90">— Papa Francisco</p>
        </div>
      </section>

      <PiePagina />
    </>
  );
}