import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import PiePagina from "../components/piePagina.jsx";
import francisco from "../assets/francisco.jpg";
import ayuda from "../assets/banner9.jpg";
import donacion1 from "../assets/donacion1.jpg";
import donacion2 from "../assets/donacion2.jpg";
import donacion3 from "../assets/donacion3.jpg";


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
        "Arroz, granos, pasta, enlatados y otros alimentos no perecederos para apoyar a las familias.",
      imagen: alimentos,
    },
    {
      titulo: "Ropa y Calzado",
      descripcion:
        "Donaciones de ropa en buen estado y calzado cómodo para adultos, jóvenes y niños.",
      imagen: ropa,
    },
    {
      titulo: "Juguetes y útiles",
      descripcion:
        "Juegos, juguetes y útiles escolares que llevan alegría y esperanza a los niños mas necesitados.",
      imagen: juguetes,
    },
    {
      titulo: "Medicinas",
      descripcion:
        "Medicamentos esenciales y material médico que ayudan a salvar vidas y atender a los más vulnerables.",
      imagen: medicinas,
    },
    {
      titulo: "Kid de Higiene",
      descripcion:
        "Muchas familias no tienen acceso a productos esenciales de aseo personal y del hogar.",
      imagen: kidHigiene,
    },
  ];

  const maxIndex = Math.max(0, donacionesData.length - itemsPerView);

  // Ajuste responsivo
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

      {/* Hero con 3 imágenes de fondo */}
<section className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
  {/* Grid de imágenes */}
  <div className="absolute inset-0 grid grid-cols-3">
    <img src={donacion1} alt="Hero 1" className="w-full h-full object-cover" />
    <img src={donacion2} alt="Hero 2" className="w-full h-full object-cover" />
    <img src={donacion3} alt="Hero 3" className="w-full h-full object-cover" />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Contenido */}
  <div className="relative z-10 text-center text-white px-6">
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
    >
      Dona con Amor
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-4 text-lg md:text-xl max-w-3xl mx-auto"
    >
      Tu aporte ayuda a transformar vidas. Cáritas está al servicio de quienes
      más lo necesitan.
    </motion.p>
  </div>
</section>


      {/* Sección de motivos */}
      <section className="bg-[#fff5f5] py-16 px-6 lg:px-32 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-red-800 mb-8"
        >
          ¿Por qué donar?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold text-red-700 mb-3">Ayuda directa</h3>
            <p className="text-gray-700">
              Tus donaciones se transforman en alimentos, medicinas y refugio
              para quienes lo necesitan.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold text-red-700 mb-3">Impacto real</h3>
            <p className="text-gray-700">
              Cada aporte contribuye a programas comunitarios que mejoran la
              calidad de vida de cientos de familias.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold text-red-700 mb-3">
              Solidaridad cristiana
            </h3>
            <p className="text-gray-700">
              Siguiendo el llamado del Papa Francisco, llevamos la caricia de la
              Iglesia a los más vulnerables.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección con imagen y mensaje */}
      <section className="bg-white py-16 px-6 lg:px-32 flex flex-col lg:flex-row items-center gap-12">
        <img
          src={ayuda}
          alt="Ayuda Cáritas"
          className="rounded-2xl shadow-lg w-full lg:w-1/2 object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="lg:w-1/2 text-left">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-red-800 mb-4"
          >
            Cada donación es esperanza
          </motion.h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Con tu ayuda, Cáritas puede llegar a más comunidades, brindar apoyo
            a familias en crisis, acompañar a los enfermos y alimentar a los que
            sufren hambre.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Muy pronto habilitaremos nuestra cuenta oficial para que puedas
            realizar tu aporte de manera segura.
          </p>
        </div>
      </section>

      {/* Carrusel de donaciones en especie */}
      <section className="w-full py-16 bg-[#fdecea] text-red-800 text-center px-4">
        <h2 className="text-3xl font-bold mb-8">También puedes ayudarnos con</h2>
        <div className="relative max-w-6xl mx-auto">
          {/* Botón Izquierda */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-red-50 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-red-800 group-hover:text-red-900" />
          </button>

          {/* Botón Derecha */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-red-50 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-red-800 group-hover:text-red-900" />
          </button>

          {/* Carrusel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {donacionesData.map((item, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white text-[#2b2b2b] rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition">
                    <img
                      src={item.imagen}
                      alt={item.titulo}
                      className="h-32 w-32 object-cover rounded-xl mb-4 shadow-md"
                    />
                    <h3 className="font-bold text-lg text-red-800">
                      {item.titulo}
                    </h3>
                    <p className="text-sm text-gray-700 mt-2">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-10 text-gray-700 text-lg max-w-2xl mx-auto">
          Todo lo que dones será entregado con amor a las comunidades más
          necesitadas.
        </p>
      </section>

      {/* Mensaje inspirador */}
      <section
        className="relative w-full h-[350px] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${francisco})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold drop-shadow-lg">
            “La caridad no es solo dar, es compartir y acompañar con amor.”
          </h2>
          <p className="mt-4 text-lg">Papa Francisco</p>
        </div>
      </section>

      <PiePagina />
    </>
  );
}
