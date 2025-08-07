import { useState, useEffect } from 'react';
import { noticiasService, paginasService, contentService } from '../services/cms';

// Hook para noticias
export function useNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        setLoading(true);
        const data = await noticiasService.getAll();
        setNoticias(data.data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error loading noticias:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  return { noticias, loading, error, refetch: () => fetchNoticias() };
}

// Hook para una noticia específica
export function useNoticia(id) {
  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchNoticia = async () => {
      try {
        setLoading(true);
        const data = await noticiasService.getById(id);
        setNoticia(data.data);
      } catch (err) {
        setError(err.message);
        console.error('Error loading noticia:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticia();
  }, [id]);

  return { noticia, loading, error };
}

// Hook para páginas
export function usePaginas() {
  const [paginas, setPaginas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaginas = async () => {
      try {
        setLoading(true);
        const data = await paginasService.getAll();
        setPaginas(data.data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error loading paginas:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPaginas();
  }, []);

  return { paginas, loading, error };
}

// Hook para página por slug
export function usePagina(slug) {
  const [pagina, setPagina] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPagina = async () => {
      try {
        setLoading(true);
        const data = await paginasService.getBySlug(slug);
        setPagina(data.data?.[0] || null);
      } catch (err) {
        setError(err.message);
        console.error('Error loading pagina:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPagina();
  }, [slug]);

  return { pagina, loading, error };
}

// Hook para configuración del sitio
export function useSiteConfig() {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        setLoading(true);
        const data = await contentService.getSiteConfig();
        setConfig(data.data);
      } catch (err) {
        setError(err.message);
        console.error('Error loading site config:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return { config, loading, error };
}