import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import { introduccion, misionVisionData, principiosData, valoresData, directivosData } from "../data/quienesomosData";
import PiePagina from "../components/piePagina.jsx";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function QuienesSomos() {
  const [currentPrincipioIndex, setCurrentPrincipioIndex] = useState(0);
  const [currentValorIndex, setCurrentValorIndex] = useState(0);
  const [currentDirectivoIndex, setCurrentDirectivoIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const maxDirectivoIndex = Math.max(0, directivosData.length - itemsPerView);

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
  setCurrentDirectivoIndex((prev) => {
    const newIndex = prev - 1;
    const maxIndex = Math.max(0, directivosData.length - itemsPerView);
    return newIndex < 0 ? maxIndex : newIndex;
  });
  setTimeout(() => setIsAutoPlaying(true), 5000);
};

const handleNextDirectivo = () => {
  setIsAutoPlaying(false);
  setCurrentDirectivoIndex((prev) => {
    const maxIndex = Math.max(0, directivosData.length - itemsPerView);
    return prev >= maxIndex ? 0 : prev + 1;
  });
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
  const maxIndex = Math.max(0, directivosData.length - itemsPerView);

  if (isAutoPlaying) {
    const interval = setInterval(() => {
      setCurrentDirectivoIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }
}, [isAutoPlaying, itemsPerView, directivosData.length]);


  return (
    <>
      <Navbar />

      <section className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-700 py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <nav className="text-white/80 text-sm mb-4">
            <span>Home</span> <span className="mx-2">/</span> <span className="text-white">Quienes Somos</span>
          </nav>
          <h1 className="text-5xl font-bold text-white mb-6">Quienes Somos</h1>
        </div>
      </section>

      <div className="bg-[#f9f5f0] text-[#2b2b2b] font-sans px-6 lg:px-32 py-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 mb-12">
    <img
      src={introduccion.imagen}
      alt="Caritas"
      className="rounded-xl w-full lg:w-1/2 object-cover"
    />
    <div className="w-full lg:w-1/2">
      <h2 className="text-2xl font-bold mb-4">{introduccion.titulo2}</h2>
      <p className="text-md text-justify">{introduccion.parrafo}</p>
    </div>
  </div>

        <section className="relative py-16 bg-[#f9f5f0]">
          <div className="absolute inset-0 bg-red-900 opacity-40 rounded-xl mx-4 lg:mx-24" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-35">
            {misionVisionData.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg p-20 text-center transition-transform duration-300 hover:scale-[1.01]">
                <div className="mb-4 flex justify-center">
                  <img src={item.icono} alt={item.titulo} className="h-15" />
                </div>
                <h3 className="text-xl font-bold text-red-800 mb-2">{item.titulo}</h3>
                <p className="text-sm text-gray-700">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="py-16 bg-[#f9f5f0] text-center">
        <h2 className="text-3xl font-bold text-red-800 mb-8">Nuestros principios</h2>
        <div className="flex justify-center items-center gap-6">
          <button onClick={handlePrevPrincipio} className="p-2 rounded-full border border-red-800 text-red-800 hover:bg-red-100 transition-transform hover:scale-110">
            <ChevronLeft />
          </button>
          <div className="bg-white rounded-xl shadow-lg p-8 text-left flex flex-col lg:flex-row items-center lg:items-start gap-6 max-w-4xl transition-all duration-300 hover:shadow-xl">
            <img
              src={principiosData[currentPrincipioIndex].imagen}
              alt={principiosData[currentPrincipioIndex].titulo}
              className="h-48 object-contain rounded-lg"
            />
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-2">
                {principiosData[currentPrincipioIndex].titulo}
              </h3>
              <p className="text-gray-700">
                {principiosData[currentPrincipioIndex].descripcion}
              </p>
            </div>
          </div>
          <button onClick={handleNextPrincipio} className="p-2 rounded-full border border-red-800 text-red-800 hover:bg-red-100 transition-transform hover:scale-110">
            <ChevronRight />
          </button>
        </div>
      </section>

      <section className="w-full py-16 bg-white text-center px-0">
        <h2 className="text-3xl font-bold text-red-800 mb-8">Nuestros valores</h2>
        <div className="flex justify-center items-center gap-6">
          <button onClick={handlePrevValor} className="p-2 rounded-full border border-red-800 text-red-800 hover:bg-red-100 transition-transform hover:scale-110">
            <ChevronLeft />
          </button>
          <div className="border border-red-300 p-8 rounded-xl max-w-lg min-h-[400px] flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
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
              <p className="text-gray-700">
                {valoresData[currentValorIndex].descripcion}
              </p>
            </div>
          </div>
          <button onClick={handleNextValor} className="p-2 rounded-full border border-red-800 text-red-800 hover:bg-red-100 transition-transform hover:scale-110">
            <ChevronRight />
          </button>
        </div>
      </section>

      <section className="w-full py-16 bg-[#f4cccc] text-red-800 text-center px-4">
        <h2 className="text-3xl font-bold mb-8 leading-tight">Miembros directivos</h2>
        <div className="relative">
          <button
            onClick={handlePrevDirectivo}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white text-white hover:bg-white hover:text-[#c0392b] transition-transform hover:scale-110"
          >
            <ChevronLeft />
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentDirectivoIndex * (100 / itemsPerView)}%)` }}
            >
              {directivosData.map((persona, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                  <div className="bg-white text-[#2b2b2b] rounded-xl shadow-lg overflow-hidden p-6 h-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl">
                    <img src={persona.imagen} alt={persona.nombre} className="h-40 object-cover rounded mb-4" />
                    <h3 className="font-bold text-lg text-center text-red-800">{persona.nombre}</h3>
                    <p className="text-sm text-center text-gray-700 mt-2">{persona.cargo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleNextDirectivo}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white text-white hover:bg-white hover:text-[#c0392b] transition-transform hover:scale-110"
          >
            <ChevronRight />
          </button>
        </div>
      </section>
      <PiePagina />
    </>
  );
}
