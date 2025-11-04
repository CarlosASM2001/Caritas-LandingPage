import samanLogo from '../assets/SAMAN/samanlogo.jpg';
import consultasLogo from '../assets/consultasmedicas/DSCN0248.JPG';
import emergenciaLogo from '../assets/emergenciahumanitaria/emergencia.jpg';

export const campaignsData = [
  {
    id: 'saman',
    title: 'SAMAN',
    image: samanLogo,
    to: '/campanas/saman',
    appointmentLink: null,
  },
  {
    id: 'consultas-medicas',
    title: 'Consultas Médicas',
    image: consultasLogo,
    to: '/campanas/consultas-medicas',
    appointmentLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfV8_xUmNps8ji5xviwjFTFwhxuNuR1ONX2RYiQtbpGYmf2lQ/viewform',
  },
  {
    id: 'emergencia-humanitaria',
    title: 'Emergencia Humanitaria',
    image: emergenciaLogo,
    to: '/campanas/emergencia-humanitaria',
    appointmentLink: null,
  },
];

export default campaignsData;