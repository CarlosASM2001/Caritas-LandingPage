import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getCampanaById } from '../data/campanasData.js';

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const goPrev = () => setIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setIndex((prev) => (prev + 1) % total);

  return (
    <div className="relative w-full">
      <div className="h-72 md:h-96 overflow-hidden rounded-xl">
        <img src={images[index]} alt={`Imagen ${index + 1}`} className="w-full h-full object-cover" />
      </div>
      <button
        onClick={goPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full px-3 py-2 shadow"
      >
        ‹
      </button>
      <button
        onClick={goNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full px-3 py-2 shadow"
      >
        ›
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${i === index ? 'bg-red-800' : 'bg-white/70'}`}
          />
        ))}
      </div>
    </div>
  );
};

const CampanaDetalle = () => {
  const { id } = useParams();
  const campana = getCampanaById(id);

  if (!campana) {
    return (
      <div className="container mx-auto px-4 py-16">
        <p className="text-gray-700">Campaña no encontrada.</p>
        <Link to="/" className="text-red-800 font-semibold">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <main className="py-14">
      <div className="container mx-auto px-4">
        <nav className="mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-gray-700">Inicio</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-700">Campañas</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">{campana.titulo}</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{campana.titulo}</h1>
          <p className="text-gray-600 max-w-3xl">{campana.resumen}</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <Carousel images={campana.imagenes} />

          <article className="prose max-w-none">
            <ReactMarkdown>{campana.descripcionMarkdown}</ReactMarkdown>
            <div className="mt-6">
              <a
                href="#contacto"
                className="inline-block bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Quiero participar
              </a>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default CampanaDetalle;

