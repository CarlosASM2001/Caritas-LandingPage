import React from 'react';
import { procesarContenidoCompleto } from '../utils/contentFormatter.js';

const ContenidoFormateado = ({ contenido }) => {
  const elementos = procesarContenidoCompleto(contenido);

  const renderizarElemento = (elemento) => {
    const { tipo, contenido, clave } = elemento;
    
    switch (tipo) {
      case 'subtitulo':
        return (
          <h2 key={clave} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {contenido}
          </h2>
        );
      
      case 'subtitulo-pequeno':
        return (
          <h3 key={clave} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            {contenido}
          </h3>
        );
      
      case 'cita':
        return (
          <blockquote key={clave} className="border-l-4 border-red-500 pl-6 py-4 my-6 bg-red-50 rounded-r-lg italic text-gray-700">
            "{contenido}"
          </blockquote>
        );
      
      case 'lista':
        return (
          <li key={clave} className="text-gray-800 mb-2 ml-4">
            • {contenido}
          </li>
        );
      
      case 'destacado':
        return (
          <div key={clave} className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded-r-lg">
            <p className="font-semibold text-gray-900">{contenido}</p>
          </div>
        );
      
      default:
        return (
          <p key={clave} className="text-gray-800 mb-4 leading-relaxed">
            {contenido}
          </p>
        );
    }
  };

  return (
    <>
      {elementos.map((elemento) => {
        if (elemento.tipo === 'lista-contenedor') {
          return (
            <ul key={elemento.clave} className="my-4">
              {elemento.elementos.map(renderizarElemento)}
            </ul>
          );
        }
        return renderizarElemento(elemento);
      })}
    </>
  );
};

export default ContenidoFormateado;