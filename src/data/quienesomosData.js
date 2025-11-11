// Contenido principal de la sección "Quiénes Somos"

export const introduccion = {
  titulo: "Quiénes Somos",
  titulo2:"En Cáritas San Cristobal",
  parrafo: `Somos una organización de la Iglesia Católica en Venezuela, comprometida con la promoción de la dignidad humana, la justicia social y el desarrollo integral de las personas y comunidades más necesitadas. Trabajamos en acciones de promoción de los derechos humanos, construcción de paz, la asistencia a poblaciones vulnerables y la gestión del riesgo de desastres.`,
  imagen: new URL('../assets/quienesSomos.jpg', import.meta.url).href, 
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

const AndresImg = new URL('../assets/directivo2.jpg', import.meta.url).href;
const JuanImg = new URL('../assets/directivo3.jpeg', import.meta.url).href;
const LisandroImg = new URL('../assets/directivo1.jpeg', import.meta.url).href;


export const directivosData = [
  {
    id: 1,
    nombre: "Monseñor Lisandro Rivas Duran",
    cargo: "Presidente",
    imagen: LisandroImg
  },
  {
    id: 2,
    nombre: "Monseñor Juan Alberto Ayala",
    cargo: "Vice-Presidente",
    imagen: JuanImg
  },
  {
    id: 3,
    nombre: "Andres Ricardo Ramirez Prato",
    cargo: "Director Ejecutivo",
    imagen: AndresImg
  },
];


