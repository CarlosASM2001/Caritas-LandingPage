import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Calendar, User, Tag, ArrowLeft, Share2, Clock } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import PiePagina from '../components/piePagina.jsx';
import { getNoticiaById, getNoticiasRecientes } from '../data/noticiasData.js';

const NoticiaDetalle = () => {
  const { id } = useParams();
  const noticia = getNoticiaById(id);
  const noticiasRelacionadas = getNoticiasRecientes(3).filter(n => n.id !== parseInt(id));

  if (!noticia) {
    return <Navigate to="/noticias" replace />;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const estimateReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: noticia.titulo,
        text: noticia.descripcion,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="h-96 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
          <img
            src={noticia.imagen}
            alt={noticia.titulo}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            {/* Breadcrumb */}
            <nav className="text-white/80 text-sm mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/noticias" className="hover:text-white transition-colors">Noticias</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Artículo</span>
            </nav>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-red-800 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {noticia.categoria}
                </span>
                {noticia.destacado && (
                  <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium">
                    Destacado
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {noticia.titulo}
              </h1>
              
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                {noticia.descripcion}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(noticia.fecha)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{noticia.autor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{estimateReadingTime(noticia.contenido)} min de lectura</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Article Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 pb-6 border-b border-gray-200">
              <Link
                to="/noticias"
                className="inline-flex items-center text-red-800 hover:text-red-900 font-semibold group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                Volver a noticias
              </Link>
              
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Compartir
              </button>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>,
                  h2: ({children}) => <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl font-bold text-gray-900 mt-5 mb-3">{children}</h3>,
                  p: ({children}) => <p className="text-gray-700 mb-4 text-lg leading-relaxed">{children}</p>,
                  ul: ({children}) => <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">{children}</ul>,
                  ol: ({children}) => <ol className="list-decimal list-inside mb-4 text-gray-700 space-y-2">{children}</ol>,
                  li: ({children}) => <li className="text-lg">{children}</li>,
                  blockquote: ({children}) => (
                    <blockquote className="border-l-4 border-red-800 pl-6 my-6 text-gray-700 italic bg-gray-50 py-4">
                      {children}
                    </blockquote>
                  ),
                  strong: ({children}) => <strong className="font-bold text-gray-900">{children}</strong>,
                  em: ({children}) => <em className="italic">{children}</em>,
                  code: ({children}) => (
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-800">
                      {children}
                    </code>
                  ),
                  pre: ({children}) => (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                      {children}
                    </pre>
                  )
                }}
              >
                {noticia.contenidoMarkdown || noticia.contenido}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Etiquetas</h4>
              <div className="flex flex-wrap gap-3">
                {noticia.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 bg-red-50 text-red-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-100 transition-colors"
                  >
                    <Tag className="w-4 h-4" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {noticiasRelacionadas.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Noticias Relacionadas
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {noticiasRelacionadas.map((noticiaRelacionada) => (
                  <article
                    key={noticiaRelacionada.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={noticiaRelacionada.imagen}
                        alt={noticiaRelacionada.titulo}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-6">
                      <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {noticiaRelacionada.categoria}
                      </span>
                      
                      <h4 className="text-lg font-bold text-gray-800 mt-3 mb-2 line-clamp-2">
                        {noticiaRelacionada.titulo}
                      </h4>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {noticiaRelacionada.descripcion}
                      </p>
                      
                      <Link
                        to={`/noticias/${noticiaRelacionada.id}`}
                        className="inline-flex items-center text-red-800 hover:text-red-900 font-semibold text-sm group"
                      >
                        Leer más
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <PiePagina />
    </>
  );
};

export default NoticiaDetalle;