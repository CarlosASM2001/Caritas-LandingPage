
// Data structure for noticias (news) in the application
export const noticiasData = [
  {
    id: 1,
    titulo: "Ruralidad, fe y justicia: voces de esperanza desde el corazón del campo colombiano",
    descripcion: "Promovemos la agricultura sostenible y el desarrollo económico en comunidades rurales, fortaleciendo la fe y la justicia social en el campo colombiano.",
    contenidoMarkdown: `# Transformando el Campo Colombiano

En el marco de nuestro compromiso con el **desarrollo rural integral**, hemos iniciado un ambicioso proyecto que busca fortalecer las comunidades campesinas colombianas.

## Un Enfoque Integral

Este programa integra tres aspectos fundamentales:

- **Agricultura sostenible**: Técnicas modernas que respetan el medio ambiente
- **Justicia social**: Promoción de los derechos humanos en el campo
- **Fortalecimiento de la fe comunitaria**: Apoyo espiritual y construcción de valores

### Metodología de Trabajo

> "Trabajamos de la mano con las comunidades, no para ellas, sino con ellas."

A través de **talleres de capacitación técnica**, apoyo espiritual y promoción de los derechos humanos, estamos trabajando de la mano con más de **200 familias rurales** en diferentes regiones del país.

### Resultados Esperanzadores

Los resultados han sido alentadores:

1. **Incremento del 40%** en la productividad agrícola
2. **Fortalecimiento** de las organizaciones comunitarias  
3. **Renovación de la esperanza** en territorios que han sido históricamente marginados

## Impacto en las Comunidades

Estas iniciativas han generado un **círculo virtuoso** de desarrollo que trasciende lo económico, tocando el corazón mismo de lo que significa ser comunidad en el campo colombiano.

*El camino hacia la transformación rural es largo, pero cada paso cuenta hacia un futuro más justo y próspero.*`,
    imagen: "/src/assets/banner1.jpg",
    fecha: "2024-01-15",
    autor: "Fundación Cáritas Colombia",
    categoria: "Desarrollo Rural",
    tags: ["ruralidad", "fe", "justicia", "agricultura", "comunidad"],
    destacado: true,
    link: "/noticias/1"
  },
  {
    id: 2,
    titulo: "El Secretariado Nacional de Pastoral Social - Cáritas Colombiana participó en AGROEXPO 2024",
    descripcion: "Participación destacada en la feria agropecuaria más importante del país, promoviendo el desarrollo rural sostenible y la soberanía alimentaria.",
    contenidoMarkdown: `# AGROEXPO 2024: Sembrando Futuro

Durante **cuatro días intensos**, nuestro equipo participó activamente en **AGROEXPO 2024**, la feria agropecuaria más importante de Colombia.

## Nuestra Presencia en la Feria

En nuestro **stand institucional**, pudimos compartir con miles de visitantes los proyectos de desarrollo rural que adelantamos en todo el territorio nacional.

### Iniciativas Presentadas

- **Agricultura sostenible**: Técnicas innovadoras respetuosas con el medio ambiente
- **Programas de soberanía alimentaria**: Garantizando la seguridad alimentaria de las comunidades
- **Proyectos de fortalecimiento organizativo campesino**: Empoderando a los productores rurales

## Actividades Destacadas

### Conferencias Magistrales
Presentamos conferencias sobre **"Pastoral Social y Desarrollo Rural"**, donde expusimos nuestra visión integral del desarrollo campesino.

### Talleres Prácticos
Realizamos talleres prácticos de **agricultura ecológica**, compartiendo conocimientos técnicos con productores de todo el país.

### Espacios de Diálogo
> "El diálogo es la base de toda transformación social sostenible."

Facilitamos espacios de diálogo sobre **políticas públicas para el campo**, reuniendo a diferentes actores del sector agropecuario.

## Nuevas Alianzas Estratégicas

Este evento nos permitió establecer **nuevas alianzas estratégicas** con:

1. **Organizaciones internacionales** de cooperación
2. **Entidades gubernamentales** a nivel nacional y regional
3. **Organizaciones campesinas** de diferentes regiones

### Impacto Esperado

Estas alianzas nos permitirán **ampliar el impacto** de nuestros programas, llegando a más familias rurales y fortaleciendo el tejido social del campo colombiano.

*AGROEXPO 2024 representó una oportunidad única para visibilizar nuestro trabajo y construir puentes hacia un desarrollo rural más justo y sostenible.*`,
    imagen: "/src/assets/banner2.jpg",
    fecha: "2024-01-10",
    autor: "Equipo Comunicaciones",
    categoria: "Eventos",
    tags: ["agroexpo", "agricultura", "soberanía alimentaria", "desarrollo rural"],
    destacado: true,
    link: "/noticias/2"
  },
];

// Funciones para acceder a los datos
export const getNoticiasDestacadas = () => {
  return noticiasData.filter(noticia => noticia.destacado);
};

export const getNoticiasByCategoria = (categoria) => {
  return noticiasData.filter(noticia => noticia.categoria === categoria);
};

export const getNoticiaById = (id) => {
  return noticiasData.find(noticia => noticia.id === parseInt(id));
};

export const getCategorias = () => {
  const categorias = [...new Set(noticiasData.map(noticia => noticia.categoria))];
  return categorias;
};

export const getNoticiasRecientes = (limite = 6) => {
  return noticiasData
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    .slice(0, limite);
};

export const searchNoticias = (termino) => {
  const terminoLower = termino.toLowerCase();
  return noticiasData.filter(noticia => 
    noticia.titulo.toLowerCase().includes(terminoLower) ||
    noticia.descripcion.toLowerCase().includes(terminoLower) ||
    noticia.tags.some(tag => tag.toLowerCase().includes(terminoLower))
  );
};