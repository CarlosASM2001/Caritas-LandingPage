import axios from 'axios';

// Configuración base de Strapi
const API_URL = process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Servicios para Noticias
export const noticiasService = {
  // Obtener todas las noticias
  async getAll() {
    try {
      const response = await api.get('/noticias?populate=*');
      return response.data;
    } catch (error) {
      console.error('Error fetching noticias:', error);
      throw error;
    }
  },

  // Obtener noticia por ID
  async getById(id) {
    try {
      const response = await api.get(`/noticias/${id}?populate=*`);
      return response.data;
    } catch (error) {
      console.error('Error fetching noticia:', error);
      throw error;
    }
  },

  // Obtener noticias por categoría
  async getByCategory(categoria) {
    try {
      const response = await api.get(`/noticias?filters[categoria][$eq]=${categoria}&populate=*`);
      return response.data;
    } catch (error) {
      console.error('Error fetching noticias by category:', error);
      throw error;
    }
  }
};

// Servicios para Páginas
export const paginasService = {
  // Obtener todas las páginas
  async getAll() {
    try {
      const response = await api.get('/paginas?populate=*');
      return response.data;
    } catch (error) {
      console.error('Error fetching paginas:', error);
      throw error;
    }
  },

  // Obtener página por slug
  async getBySlug(slug) {
    try {
      const response = await api.get(`/paginas?filters[slug][$eq]=${slug}&populate=*`);
      return response.data;
    } catch (error) {
      console.error('Error fetching pagina by slug:', error);
      throw error;
    }
  }
};

// Servicio para contenido general
export const contentService = {
  // Obtener configuración general del sitio
  async getSiteConfig() {
    try {
      const response = await api.get('/configuracion-sitio?populate=*');
      return response.data;
    } catch (error) {
      console.error('Error fetching site config:', error);
      throw error;
    }
  }
};

export default api;