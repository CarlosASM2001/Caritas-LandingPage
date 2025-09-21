// Contenido principal de la sección "Quiénes Somos"

export const introduccion = {
  titulo: "Quiénes Somos",
  titulo2:"En Cáritas San Cristobal",
  parrafo: `Somos una organización de la Iglesia Católica en Venezuela, comprometida con la promoción de la dignidad humana, la justicia social y el desarrollo integral de las personas y comunidades más necesitadas. Trabajamos en acciones de promoción de los derechos humanos, construcción de paz, la asistencia a poblaciones vulnerables y la gestión del riesgo de desastres.`,
  imagen: new URL('../assets/quienesSomos.jpg', import.meta.url).href, // resuelto por Vite
};

export const misionVisionData = [
  {
    
    id: 1,
    titulo: "Misión",
    descripcion:
      "Promover acciones a la luz del evangelio y la Doctrina Social de la Iglesia, que permitan a los más pobres y excluidos ejercer plenamente su derecho a la vida digna, fortaleciendo sus capacidades, aumentando su capital humano, físico y social, y haciéndole partícipe en el desarrollo de la civilización del Amor en Venezuela.",
    contenido:
      "Nuestra misión está inspirada en el Evangelio y la Doctrina Social de la Iglesia. Trabajamos en zonas de alta vulnerabilidad promoviendo valores cristianos, acompañamiento comunitario, y procesos de transformación social desde la fe.",
    icono: new URL('../assets/mision.png', import.meta.url).href,
    destacado: true
  },
  {
    id: 2,
    titulo: "Visión",
    descripcion:
      "Desde nuestro compromiso cristiano, especialmente con la vida de los pobres y excluidos a través de la comunión y solidaridad interdiocesana, anhelamos una Venezuela justa y fraterna constituida por hombres y mujeres reconciliados, con dignidad y derechos, libres, solidarios y protagonistas de su historia como hijos e hijas de Dios.",
    contenido:
      "Buscamos ser un referente en el desarrollo integral, con comunidades fortalecidas en su espiritualidad, organizadas y comprometidas con la justicia y la solidaridad.",
    icono: new URL('../assets/vision.png', import.meta.url).href,
    destacado: true
  }
];


export const valoresData = [
  {
    id: 1,
    titulo: "Fé",
    descripcion:
      "Es optimismo, confianza, seguridad, voluntad, insistencia, perseverancia.",
    icono: new URL('../assets/valores1.jpg', import.meta.url).href,
  },
  {
    id: 2,
    titulo: "Esperanza",
    descripcion:
      "Es testimonio de la Fé. El comportamiento, en la creencia de que pese a que todo sea adverso se va a transformar.",
    icono: new URL('../assets/valores2.jpg', import.meta.url).href,
  },
  {
    id: 3,
    titulo: "Responsabilidad",
    descripcion:
      "Rendimiento de cuentas, compromiso de entrega, puntualidad, oportunidad, respeto, coherencia, acompañamiento en el servicio, compromiso.",
    icono: new URL('../assets/valores3.jpg', import.meta.url).href,
  }
];


export const principiosData = [
  {
    id: 1,
    titulo: "Caridad",
    descripcion: "Base de nuestra acción pastoral y social en una ctitud de amor y compasión hacia los demás, especialmente hacia aquellos que sufren o están necesitados. Se manifiesta en acciones de ayuda, solidaridad y generosidad, tanto materiales como espirituales.",
    imagen: new URL('../assets/banner9.jpg', import.meta.url).href
  },
  {
    id: 2,
    titulo: "Justicia Social",
    descripcion: "Actuamos para que cada persona, sin distinción, acceda a las condiciones necesarias para vivir con dignidad. Defendemos la justicia como camino hacia la paz, inspirados en el Evangelio y la Doctrina Social de la Iglesia.",
    imagen: new URL('../assets/banner2.jpg', import.meta.url).href
  },
  {
    id: 3,
    titulo: "Solidaridad",
    descripcion: "Nos unimos a quienes más sufren, acompañándolos en su proceso de vida con empatía, respeto y compromiso. Promovemos relaciones de apoyo mutuo, fortaleciendo la fraternidad y construyendo una sociedad más justa y humana.",
    imagen: new URL('../assets/banner4.jpg', import.meta.url).href
  },
  {
    id: 4,
    titulo: "Dignidad de la Persona",
    descripcion: "El Caritas se cree que en la persona humana Dios Ha impreso su imagen y semejanza (cf. Gn 1, 26), confiriéndole una dignidad incomparable, En efecto, aparte de los derechos que el hombre adquiere con su propio trabajo, hay otros derechos que no proceden de ninguna obra realizada por él, sino de su dignidad esencial de persona. Este Principio le compromete a trabajar de manera preferencial por los mas pobres y excluidos en la protección y exigibilidad de sus derechos fundamentales.",
    imagen: new URL('../assets/banner8.jpg', import.meta.url).href
  }
];

const directivoImg = new URL('../assets/directivo1.jpg', import.meta.url).href;

export const directivosData = [
  {
    id: 1,
    nombre: "Monseñor Lisandro Rivas Duran",
    cargo: "Presidente",
    imagen: directivoImg
  },
  {
    id: 2,
    nombre: "Monseñor Juan Alberto Ayala",
    cargo: "Vice-Presidente",
    imagen: directivoImg
  },
  {
    id: 3,
    nombre: "Andres Ricardo Ramirez Prato",
    cargo: "Director Ejecutivo",
    imagen: directivoImg
  },
  {
    id: 4,
    nombre: "Elvis Ramirez",
    cargo: "Gestion social",
    imagen: directivoImg
  },
  {
    id: 5,
    nombre: "Alissette Useche",
    cargo: "Cordinadoras de relaciones institucionales",
    imagen: directivoImg
  },
  {
    id: 6,
    nombre: "Sarahi Briceño",
    cargo: "Gestor Pastoral Juvenil",
    imagen: directivoImg
  },
  {
    id: 7,
    nombre: "Franklin Ramirez",
    cargo: "Conductor",
    imagen: directivoImg
  },
  {
    id: 8,
    nombre: "Joclandy Azuaje",
    cargo: "Psicologo",
    imagen: directivoImg
  },
  {
    id: 9,
    nombre: "Ana Ilse Lizcano",
    cargo: "Gestor de Evaluacion y Monitoreo",
    imagen: directivoImg
  },
  {
    id: 10,
    nombre: "David A. Velasco Berbesi",
    cargo: "Gestion de redes y contenido digital",
    imagen: directivoImg
  },
  {
    id: 11,
    nombre: "John Jairo Neiva Largo",
    cargo: "Gestion de participacion comunitaria",
    imagen: directivoImg
  },
  {
    id: 12,
    nombre: "Iris Estrella Moreno",
    cargo: "Cordinadora de proyectos",
    imagen: directivoImg
  },
  {
    id: 13,
    nombre: "Nancy Zulay Parada Roso",
    cargo: "Cordinadora de gestion social-salud",
    imagen: directivoImg
  },
  {
    id: 14,
    nombre: "Sonia Yolanda Parada Roso",
    cargo: "Gestion Social",
    imagen: directivoImg
  },
  {
    id: 15,
    nombre: "Francisco Javier Nieto",
    cargo: "Medico",
    imagen: directivoImg
  },
  {
    id: 16,
    nombre: "Rachel Villamizar",
    cargo: "Medico",
    imagen: directivoImg
  },
  {
    id: 17,
    nombre: "Nakary Vanegas",
    cargo: "Gestion de relaciones y logistica",
    imagen: directivoImg
  },
  {
    id: 18,
    nombre: "Yvan Miguel Ponte Gonzalez",
    cargo: "Cordinador de voluntariado",
    imagen: directivoImg
  },
  {
    id: 19,
    nombre: "Randy David Acosta",
    cargo: "Gestion de integracion y desarrollo",
    imagen: directivoImg
  },
  {
    id: 20,
    nombre: "Gabby Marynes Osorio Moros",
    cargo: "Gestion de integracion y desarrollo",
    imagen: directivoImg
  },
  {
    id: 21,
    nombre: "Yumary Consolacion Parada",
    cargo: "Gestion de integracion y desarrollo",
    imagen: directivoImg
  },
  {
    id: 22,
    nombre: "Laura Josefina Garcia de Araque",
    cargo: "Gestion legal",
    imagen: directivoImg
  }
];


