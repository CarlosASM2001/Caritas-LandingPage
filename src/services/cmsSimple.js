import axios from 'axios';

// Configuración simple para Strapi
const API_URL = process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Servicio simple para noticias
export const getNoticiasCMS = async () => {
  try {
    const response = await api.get('/noticias?populate=*&sort=fecha:desc');
    return response.data.data || [];
  } catch (error) {
    console.error('Error al cargar noticias del CMS:', error);
    // Si falla el CMS, devolver array vacío para usar datos estáticos como fallback
    return [];
  }
};

// Función para convertir datos del CMS al formato que ya usas
export const formatNoticiaCMS = (noticiaCMS) => {
  const attrs = noticiaCMS.attributes;
  
  return {
    id: noticiaCMS.id,
    titulo: attrs.titulo,
    contenido: attrs.contenido,
    fecha: attrs.fecha || attrs.publishedAt,
    categoria: attrs.categoria || 'General',
    imagen: getImageUrl(attrs.imagen),
    // Campos adicionales que podrías tener
    autor: attrs.autor || 'Caritas',
    resumen: attrs.resumen || attrs.contenido?.substring(0, 150) + '...'
  };
};

// Función auxiliar para URLs de imágenes
const getImageUrl = (imagen) => {
  if (!imagen?.data) return '/api/placeholder/400/250';
  
  const url = imagen.data.attributes?.url;
  if (!url) return '/api/placeholder/400/250';
  
  // Si es URL completa, usar directamente
  if (url.startsWith('http')) return url;
  
  // Si es relativa, agregar dominio de Strapi
  return `${API_URL}${url}`;
};

// Función principal que combina CMS con datos estáticos como fallback
export const getNoticiasConFallback = async (datosEstaticos = []) => {
  try {
    const noticiasCMS = await getNoticiasCMS();
    
    if (noticiasCMS.length > 0) {
      // Si hay datos del CMS, usarlos y formatearlos
      return noticiasCMS.map(formatNoticiaCMS);
    } else {
      // Si no hay datos del CMS, usar los estáticos
      console.log('Usando datos estáticos como fallback');
      return datosEstaticos;
    }
  } catch (error) {
    console.log('CMS no disponible, usando datos estáticos');
    return datosEstaticos;
  }
};

export default api;