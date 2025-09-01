import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import banner7 from "../assets/banner7.jpg";
import valores1 from "../assets/valores1.jpg";
import valores2 from "../assets/valores2.jpg";
import valores3 from "../assets/valores3.jpg";

export const campanasData = [
  {
    id: 1,
    titulo: "Sembramos Esperanza",
    resumen:
      "Programa de acompañamiento comunitario que promueve la salud integral y la esperanza en los más vulnerables.",
    descripcionMarkdown: `
## ¿De qué trata?

Esta campaña impulsa espacios de escucha, formación y contención para familias que atraviesan situaciones de dificultad. Promovemos la salud mental, el acompañamiento espiritual y la organización comunitaria.

### Cómo puedes ayudar
- Participando como voluntario en los puntos de escucha
- Donando insumos para talleres y jornadas
- Difundiendo la campaña en tu comunidad
`,
    portada: banner7,
    imagenes: [banner7, banner2, valores1, valores2, valores3],
  },
  {
    id: 2,
    titulo: "Día Mundial del Refugiado",
    resumen:
      "Acciones de acogida, integración y protección para personas en movilidad humana.",
    descripcionMarkdown: `
Con motivo del Día Mundial del Refugiado realizamos actividades de sensibilización, asesoría legal básica y articulación con organizaciones aliadas para garantizar derechos y acompañamiento digno.
`,
    portada: banner4,
    imagenes: [banner4, banner2, banner1, valores2],
  },
  {
    id: 3,
    titulo: "Jornada Mundial de los Pobres",
    resumen:
      "La caridad se organiza para llegar a quienes más lo necesitan con escucha y alimentos.",
    descripcionMarkdown: `
Animamos a comunidades y bienhechores a sumar esfuerzos para compartir alimentos, medicinas y afecto. La jornada incluye momentos de oración, servicio y encuentro.
`,
    portada: banner3,
    imagenes: [banner3, banner1, valores1, valores3],
  },
  {
    id: 4,
    titulo: "Cuidado de la Casa Común",
    resumen:
      "Educación ecológica integral inspirada en Laudato Si' para escuelas y barrios.",
    descripcionMarkdown: `
Promovemos reciclaje, siembra urbana, ahorro de agua y energía, y formación para niñas, niños y adultos. Soñamos ciudades más limpias y solidarias.
`,
    portada: banner1,
    imagenes: [banner1, banner2, valores2, valores3],
  },
];

export const getCampanas = () => campanasData;

export const getCampanaById = (id) =>
  campanasData.find((c) => String(c.id) === String(id));

