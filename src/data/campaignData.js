import samanLogo from '../assets/SAMAN/samanlogo.jpg';
import consultasLogo from '../assets/consultasmedicas/DSCN0248.jpg';
import emergenciaLogo from '../assets/emergenciahumanitaria/emergencia.jpg';

export const campaignsData = [
  {
    id: 'saman',
    title: 'SAMAN',
    image: samanLogo,
    to: '/campanas/saman',
  },
  {
    id: 'consultas-medicas',
    title: 'Consultas Médicas',
    image: consultasLogo,
    to: '/campanas/consultas-medicas',
  },
  {
    id: 'emergencia-humanitaria',
    title: 'Emergencia Humanitaria',
    image: emergenciaLogo,
    to: '/campanas/emergencia-humanitaria',
  },
];

export default campaignsData;
