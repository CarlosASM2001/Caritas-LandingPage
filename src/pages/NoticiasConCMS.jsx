import React, { useState, useEffect, useMemo } from 'react';
import { Calendar, User, Tag, Search, Filter, ChevronDown, ArrowRight } from 'lucide-react';
import PiePagina from "../components/piePagina.jsx";
import Navbar from '../components/Navbar.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import { useNoticias } from '../hooks/useCMS.js';

const NoticiasConCMS = () => {
  const { noticias, loading, error } = useNoticias();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const noticiasPerPage = 6;

  // Extraer categorías únicas de las noticias del CMS
  const categorias = useMemo(() => {
    if (!noticias.length) return ['Todas'];
    const uniqueCategories = [...new Set(noticias.map(noticia => noticia.attributes?.categoria).filter(Boolean))];
    return ['Todas', ...uniqueCategories];
  }, [noticias]);

  // Filtrar noticias basado en búsqueda y categoría
  const filteredNoticias = useMemo(() => {
    let result = noticias;

    // Filtro por categoría
    if (selectedCategory !== 'Todas') {
      result = result.filter(noticia => noticia.attributes?.categoria === selectedCategory);
    }

    // Filtro por búsqueda
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(noticia => 
        noticia.attributes?.titulo?.toLowerCase().includes(searchLower) ||
        noticia.attributes?.contenido?.toLowerCase().includes(searchLower)
      );
    }

    return result;
  }, [noticias, selectedCategory, searchTerm]);

  // Reset página cuando cambien los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Lógica de paginación
  const indexOfLastNoticia = currentPage * noticiasPerPage;
  const indexOfFirstNoticia = indexOfLastNoticia - noticiasPerPage;
  const currentNoticias = filteredNoticias.slice(indexOfFirstNoticia, indexOfLastNoticia);
  const totalPages = Math.ceil(filteredNoticias.length / noticiasPerPage);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const truncateText = (text, maxLength = 150) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  // Función para obtener la URL de la imagen
  const getImageUrl = (noticia) => {
    const imagen = noticia.attributes?.imagen?.data;
    if (!imagen) return '/api/placeholder/400/250';
    
    // Si es una URL completa, usarla directamente
    if (imagen.attributes?.url?.startsWith('http')) {
      return imagen.attributes.url;
    }
    
    // Si es una URL relativa, agregar el dominio de Strapi
    const strapiUrl = process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';
    return `${strapiUrl}${imagen.attributes?.url}`;
  };

  // Manejo de estados de carga y error
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <LoadingSpinner size="lg" text="Cargando noticias..." />
        <PiePagina />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <h3 className="font-bold">Error al cargar las noticias</h3>
            <p>{error}</p>
            <p className="text-sm mt-2">
              Asegúrate de que Strapi esté funcionando en http://localhost:1337
            </p>
          </div>
        </div>
        <PiePagina />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">Noticias y Actualidades</h1>
          <p className="text-xl opacity-90">
            Mantente informado sobre nuestras actividades y el impacto en la comunidad
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Controles de búsqueda y filtros */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Barra de búsqueda */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar noticias..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filtros */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Filter className="h-5 w-5" />
                Filtros
                <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>

              {showFilters && (
                <div className="flex flex-wrap gap-2">
                  {categorias.map((categoria) => (
                    <button
                      key={categoria}
                      onClick={() => setSelectedCategory(categoria)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedCategory === categoria
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {categoria}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Estadísticas */}
          <div className="mt-4 text-sm text-gray-600">
            Mostrando {filteredNoticias.length} de {noticias.length} noticias
            {selectedCategory !== 'Todas' && (
              <span className="ml-2">
                • Categoría: <span className="font-semibold">{selectedCategory}</span>
              </span>
            )}
          </div>
        </div>

        {/* Grid de noticias */}
        {currentNoticias.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📰</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No se encontraron noticias
            </h3>
            <p className="text-gray-500">
              {searchTerm || selectedCategory !== 'Todas' 
                ? 'Intenta ajustar tus filtros de búsqueda'
                : 'Aún no hay noticias publicadas'
              }
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentNoticias.map((noticia) => (
              <div key={noticia.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Imagen */}
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={getImageUrl(noticia)}
                    alt={noticia.attributes?.titulo || 'Noticia'}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = '/api/placeholder/400/250';
                    }}
                  />
                </div>

                {/* Contenido */}
                <div className="p-6">
                  {/* Categoría */}
                  {noticia.attributes?.categoria && (
                    <div className="flex items-center gap-1 mb-2">
                      <Tag className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-600">
                        {noticia.attributes.categoria}
                      </span>
                    </div>
                  )}

                  {/* Título */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {noticia.attributes?.titulo}
                  </h3>

                  {/* Contenido */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {truncateText(noticia.attributes?.contenido)}
                  </p>

                  {/* Fecha */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {formatDate(noticia.attributes?.fecha || noticia.attributes?.publishedAt)}
                    </div>

                    <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Leer más
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Anterior
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>

      <PiePagina />
    </div>
  );
};

export default NoticiasConCMS;