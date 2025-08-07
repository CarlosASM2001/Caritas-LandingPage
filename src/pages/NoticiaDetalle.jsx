import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import PiePagina from '../components/piePagina.jsx';
import ContenidoFormateado from '../components/ContenidoFormateado.jsx';
import { getNoticiaById, getNoticiasRelacionadas } from '../data/noticiasData.js';

const NoticiaDetalle = () => {
  const { id } = useParams();
  const noticia = getNoticiaById(id);
  const noticiasRelacionadas = getNoticiasRelacionadas(id);

  // Si no existe la noticia, redirigir a la página principal
  if (!noticia) {
    return <Navigate to="/noticias" replace />;
  }

  // Actualizar meta tags dinámicamente
  useEffect(() => {
    if (noticia) {
      document.title = `${noticia.titulo} - Cáritas Colombiana`;
      
      // Meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', noticia.descripcion);
      } else {
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = 'description';
        newMetaDescription.content = noticia.descripcion;
        document.head.appendChild(newMetaDescription);
      }

      // Meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      const keywords = noticia.tags ? noticia.tags.join(', ') : '';
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const newMetaKeywords = document.createElement('meta');
        newMetaKeywords.name = 'keywords';
        newMetaKeywords.content = keywords;
        document.head.appendChild(newMetaKeywords);
      }

      // Open Graph tags
      const updateOrCreateOGTag = (property, content) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (tag) {
          tag.setAttribute('content', content);
        } else {
          tag = document.createElement('meta');
          tag.setAttribute('property', property);
          tag.setAttribute('content', content);
          document.head.appendChild(tag);
        }
      };

      updateOrCreateOGTag('og:title', noticia.titulo);
      updateOrCreateOGTag('og:description', noticia.descripcion);
      updateOrCreateOGTag('og:image', noticia.imagen);
      updateOrCreateOGTag('og:url', window.location.href);
      updateOrCreateOGTag('og:type', 'article');
    }

    // Cleanup: restaurar título original al desmontar
    return () => {
      document.title = 'Cáritas Colombiana';
    };
  }, [noticia]);

  const formatearFecha = (fecha) => {
    const opciones = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      timeZone: 'America/Bogota'
    };
    return new Date(fecha).toLocaleDateString('es-CO', opciones);
  };

  const compartirNoticia = () => {
    if (navigator.share) {
      navigator.share({
        title: noticia.titulo,
        text: noticia.descripcion,
        url: window.location.href,
      });
    } else {
      // Fallback: copiar URL al portapapeles
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Botón de regreso */}
        <div className="mb-6">
          <Link 
            to="/noticias" 
            className="inline-flex items-center text-red-800 hover:text-red-900 font-medium group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Volver a noticias
          </Link>
        </div>

        {/* Contenido principal de la noticia */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Imagen destacada */}
          <div className="relative h-64 md:h-80 lg:h-96">
            <img 
              src={noticia.imagen} 
              alt={noticia.titulo}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Contenido */}
          <div className="p-6 md:p-8">
            {/* Categoría */}
            <div className="mb-4">
              <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                {noticia.categoria}
              </span>
            </div>

            {/* Título */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {noticia.titulo}
            </h1>

            {/* Metadatos */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {formatearFecha(noticia.fecha)}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {noticia.autor}
              </div>
              <button 
                onClick={compartirNoticia}
                className="flex items-center hover:text-red-800 transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </button>
            </div>

            {/* Descripción */}
            <div className="text-lg text-gray-700 mb-6 leading-relaxed border-l-4 border-red-200 pl-4 bg-gray-50 p-4 rounded-r-lg">
              {noticia.descripcion}
            </div>

            {/* Contenido completo */}
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              <ContenidoFormateado contenido={noticia.contenido} />
            </div>

            {/* Tags */}
            {noticia.tags && noticia.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center mb-3">
                  <Tag className="w-4 h-4 mr-2 text-gray-600" />
                  <span className="text-sm font-medium text-gray-600">Etiquetas:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {noticia.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Noticias relacionadas */}
        {noticiasRelacionadas.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Noticias relacionadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {noticiasRelacionadas.map((noticiaRelacionada) => (
                <Link 
                  key={noticiaRelacionada.id}
                  to={`/noticias/${noticiaRelacionada.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={noticiaRelacionada.imagen} 
                      alt={noticiaRelacionada.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-gray-500 mb-2">
                      {formatearFecha(noticiaRelacionada.fecha)}
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-800 transition-colors line-clamp-2">
                      {noticiaRelacionada.titulo}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {noticiaRelacionada.descripcion}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <PiePagina />
    </div>
  );
};

export default NoticiaDetalle;