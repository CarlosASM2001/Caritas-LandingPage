
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, Search, Filter, ChevronDown, ArrowRight } from 'lucide-react';
import PiePagina from "../components/piePagina.jsx";
import Navbar from '../components/Navbar.jsx';
import { 
  noticiasData, 
  getCategorias, 
  getNoticiasByCategoria, 
  searchNoticias,
  getNoticiasRecientes 
} from '../data/noticiasData.js';

const Noticias = () => {
  const [filteredNoticias, setFilteredNoticias] = useState(noticiasData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const noticiasPerPage = 6;

  const categorias = ['Todas', ...getCategorias()];

  // Filtro y buscar
  useEffect(() => {
    let result = noticiasData;

    // filtro por categoria
    if (selectedCategory !== 'Todas') {
      result = getNoticiasByCategoria(selectedCategory);
    }

    // buscar filtro
    if (searchTerm) {
      result = searchNoticias(searchTerm).filter(noticia => 
        selectedCategory === 'Todas' || noticia.categoria === selectedCategory
      );
    }

    setFilteredNoticias(result);
    setCurrentPage(1); // Reset
  }, [searchTerm, selectedCategory]);

  // Pagination logic
  const indexOfLastNoticia = currentPage * noticiasPerPage;
  const indexOfFirstNoticia = indexOfLastNoticia - noticiasPerPage;
  const currentNoticias = filteredNoticias.slice(indexOfFirstNoticia, indexOfLastNoticia);
  const totalPages = Math.ceil(filteredNoticias.length / noticiasPerPage);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryFilter = (categoria) => {
    setSelectedCategory(categoria);
    setShowFilters(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-700 py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <nav className="text-white/80 text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span> 
            <span className="text-white">Noticias</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Noticias
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Mantente informado sobre nuestros proyectos, logros y las historias que están 
            transformando vidas en las comunidades tachirenses.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          
          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar noticias..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-900 transition-colors"
                >
                  <Filter className="w-5 h-5" />
                  {selectedCategory}
                  <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
                
                {showFilters && (
                  <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-48">
                    {categorias.map((categoria) => (
                      <button
                        key={categoria}
                        onClick={() => handleCategoryFilter(categoria)}
                        className={`block w-full text-left px-4 py-3 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                          selectedCategory === categoria ? 'bg-red-50 text-red-800 font-semibold' : 'text-gray-700'
                        }`}
                      >
                        {categoria}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Results summary */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600">
                Mostrando {currentNoticias.length} de {filteredNoticias.length} noticias
                {searchTerm && ` para "${searchTerm}"`}
                {selectedCategory !== 'Todas' && ` en ${selectedCategory}`}
              </p>
            </div>
          </div>

          {/* News Grid */}
          {currentNoticias.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentNoticias.map((noticia) => (
                <article
                  key={noticia.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={noticia.imagen}
                      alt={noticia.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {noticia.categoria}
                      </span>
                    </div>
                    {noticia.destacado && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Destacado
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(noticia.fecha)}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {noticia.autor}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-red-800 transition-colors">
                      {noticia.titulo}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {noticia.descripcion}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {noticia.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/noticias/${noticia.id}`}
                      className="inline-flex items-center text-red-800 hover:text-red-900 font-semibold group/link"
                    >
                      Leer más
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* No results */
            <div className="text-center py-16">
              <div className="bg-white rounded-xl shadow-lg p-12 max-w-md mx-auto">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No se encontraron noticias
                </h3>
                <p className="text-gray-600 mb-6">
                  No hay noticias que coincidan con tu búsqueda. Intenta con otros términos o categorías.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('Todas');
                  }}
                  className="bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-900 transition-colors"
                >
                  Ver todas las noticias
                </button>
              </div>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Anterior
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-red-800 text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      </section>
      <PiePagina />
    </>
  );
};

export default Noticias;