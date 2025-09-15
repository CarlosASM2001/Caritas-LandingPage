import React from 'react';
import Navbar from '../components/Navbar.jsx';
import PiePagina from '../components/piePagina.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';

const emergenciaImages = [
  '/src/assets/emergenciaHumanitaria/imagen1.jpg',
  '/src/assets/emergenciaHumanitaria/imagen2.jpg',
  '/src/assets/emergenciaHumanitaria/imagen3.jpg',
  '/src/assets/emergenciaHumanitaria/imagen4.jpg',
  '/src/assets/emergenciaHumanitaria/imagen5.jpg',
  '/src/assets/emergenciaHumanitaria/imagen6.jpg',
  '/src/assets/emergenciaHumanitaria/imagen7.jpg',
  '/src/assets/emergenciaHumanitaria/imagen8.jpg',
  '/src/assets/emergenciaHumanitaria/imagen9.jpg',
  '/src/assets/emergenciaHumanitaria/imagen10.jpg',
  '/src/assets/emergenciaHumanitaria/imagen11.jpg',
];

export default function EmergenciaHumanitariaPage() {
    return (
        <div>
            <Navbar />
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
                <h2>Emergencia Humanitaria 2025</h2>
                <p>
                  Cáritas San Cristóbal ha respondido activamente a las emergencias humanitarias provocadas por las lluvias intensas en este año 2025, 
                  distribuyendo ayuda esencial como alimentos, agua, ropa, artículos de higiene y colchones, 
                  brindando acompañamiento psicosocial a miles de familias afectadas. Esta labor se ha realizado en colaboración de las 
                  Cáritas Parroquiales, empresa privada, ONGs y personas en general que se sumaron a colaborar con nuestro centro de acopio 
                  y ser solidarios con cada una de las familias afectadas y así brindar la caricia de Dios a los más necesitados.
                </p>
                <p>
                  Durante la temporada fuertes de lluvias se logró abordar a los diversos sectores afectados en la región tachirense 
                  (San Vicente de la Revancha en Junín, Barrio San Francisco, Barrio Eleazar López Contreras y el Sector la Valeria en el Municipio Fernández Feo), 
                  así como también, se realizó envío importante de ayudas para el estado Apure en Guasdualito y al estado Mérida.
                </p>
            </div>
            <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '2rem' }}>
                <ImageCarousel images={emergenciaImages} />
            </div>
            <PiePagina />
        </div>
    )
}