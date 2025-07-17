import React from 'react';
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { getNoticiaById, getNoticiasRecientes } from '../data/noticiasData.js';

const NoticiaDetalle = ({ noticiaId, onBack }) => {
  const noticia = getNoticiaById(noticiaId);
  const noticiasRelacionadas = getNoticiasRecientes(4).filter(n => n.id !== noticiaId);

  if (!noticia) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Noticia no encontrada</h2>
        <button 
          onClick={onBack}
          className="bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-900 transition-colors"
        >
          Volver a Noticias
        </button>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = noticia.titulo;
    const text = noticia.descripcion;

    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        // Copy to clipboard
        navigator.clipboard.writeText(url);
        alert('Enlace copiado al portapapeles');
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center text-red-800 hover:text-red-900 mb-6 font-semibold"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Volver a Noticias
      </button>

      {/* Article header */}
      <article className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Featured image */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={noticia.imagen}
            alt={noticia.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-red-800 text-white px-4 py-2 rounded-full text-sm font-medium">
                {noticia.categoria}
              </span>
              {noticia.destacado && (
                <span className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Destacado
                </span>
              )}
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">{noticia.titulo}</h1>
          </div>
        </div>

        {/* Article content */}
        <div className="p-8">
          {/* Meta information */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {formatDate(noticia.fecha)}
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                {noticia.autor}
              </div>
            </div>

            {/* Share buttons */}
            <div className="flex items-center gap-3">
              <span className="text-gray-600 text-sm font-medium mr-2">Compartir:</span>
              <button
                onClick={() => handleShare('facebook')}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                title="Compartir en Facebook"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                title="Compartir en Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                title="Compartir en LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                title="Copiar enlace"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Article description */}
          <div className="mb-8">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              {noticia.descripcion}
            </p>
          </div>

          {/* Article content */}
          <div className="prose prose-lg max-w-none mb-8">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {noticia.contenido}
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Etiquetas</h3>
            <div className="flex flex-wrap gap-3">
              {noticia.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Tag className="w-4 h-4" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related articles */}
      {noticiasRelacionadas.length > 0 && (
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Noticias Relacionadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {noticiasRelacionadas.map((noticiaRelacionada) => (
              <div
                key={noticiaRelacionada.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = noticiaRelacionada.link}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={noticiaRelacionada.imagen}
                    alt={noticiaRelacionada.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {noticiaRelacionada.categoria}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(noticiaRelacionada.fecha)}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-red-800 transition-colors">
                    {noticiaRelacionada.titulo}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {noticiaRelacionada.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default NoticiaDetalle;