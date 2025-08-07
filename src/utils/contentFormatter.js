// Utilidades para formatear contenido de noticias

/**
 * Formatea el contenido de una noticia dividiendo en párrafos y aplicando estilos
 * @param {string} contenido - El contenido de la noticia
 * @returns {Array} Array de objetos con el contenido formateado
 */
export const formatearContenido = (contenido) => {
  if (!contenido) return [];
  
  // Dividir por párrafos (doble salto de línea o salto simple)
  const parrafos = contenido
    .split(/\n\s*\n|\n/)
    .filter(parrafo => parrafo.trim().length > 0)
    .map(parrafo => parrafo.trim());
  
  return parrafos.map((parrafo, index) => {
    // Detectar diferentes tipos de contenido
    if (parrafo.startsWith('## ')) {
      return {
        tipo: 'subtitulo',
        contenido: parrafo.replace('## ', ''),
        clave: `subtitulo-${index}`
      };
    }
    
    if (parrafo.startsWith('### ')) {
      return {
        tipo: 'subtitulo-pequeno',
        contenido: parrafo.replace('### ', ''),
        clave: `subtitulo-pequeno-${index}`
      };
    }
    
    if (parrafo.startsWith('> ')) {
      return {
        tipo: 'cita',
        contenido: parrafo.replace('> ', ''),
        clave: `cita-${index}`
      };
    }
    
    if (parrafo.startsWith('- ') || parrafo.startsWith('* ')) {
      return {
        tipo: 'lista',
        contenido: parrafo.replace(/^[*-] /, ''),
        clave: `lista-${index}`
      };
    }
    
    if (parrafo.startsWith('**') && parrafo.endsWith('**')) {
      return {
        tipo: 'destacado',
        contenido: parrafo.replace(/\*\*/g, ''),
        clave: `destacado-${index}`
      };
    }
    
    return {
      tipo: 'parrafo',
      contenido: parrafo,
      clave: `parrafo-${index}`
    };
  });
};

// Esta función se usa en el componente React para renderizar elementos
// Retorna los datos necesarios para crear los elementos JSX

/**
 * Agrupa elementos de lista consecutivos
 * @param {Array} elementos - Array de elementos formateados
 * @returns {Array} Array con elementos agrupados
 */
export const agruparListas = (elementos) => {
  const resultado = [];
  let listaActual = [];
  
  elementos.forEach((elemento, index) => {
    if (elemento.tipo === 'lista') {
      listaActual.push(elemento);
    } else {
      if (listaActual.length > 0) {
        resultado.push({
          tipo: 'lista-contenedor',
          elementos: listaActual,
          clave: `lista-contenedor-${index}`
        });
        listaActual = [];
      }
      resultado.push(elemento);
    }
  });
  
  // Agregar lista final si existe
  if (listaActual.length > 0) {
    resultado.push({
      tipo: 'lista-contenedor',
      elementos: listaActual,
      clave: `lista-contenedor-final`
    });
  }
  
  return resultado;
};

/**
 * Procesa contenido completo con formato
 * @param {string} contenido - Contenido de la noticia
 * @returns {Array} Array de elementos formateados para renderizar
 */
export const procesarContenidoCompleto = (contenido) => {
  const elementosFormateados = formatearContenido(contenido);
  return agruparListas(elementosFormateados);
};