import React from 'react';
import Navbar from '../components/Navbar.jsx';
import PiePagina from '../components/piePagina.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';

const emergenciaImages = [
  new URL('../assets/emergenciahumanitaria/imagen1.jpg', import.meta.url).href,
  new URL('../assets/emergenciahumanitaria/imagen2.jpg', import.meta.url).href,
  new URL('../assets/emergenciahumanitaria/imagen3.jpg', import.meta.url).href,
  new URL('../assets/emergenciahumanitaria/imagen4.jpg', import.meta.url).href,
  new URL('../assets/emergenciahumanitaria/imagen5.jpg', import.meta.url).href,
  new URL('../assets/emergenciahumanitaria/imagen6.jpg', import.meta.url).href,
  new URL('../assets/emergenciahumanitaria/imagen7.jpg', import.meta.url).href,
  new URL('../assets/emergenciahumanitaria/imagen8.jpg', import.meta.url).href,
  new URL('../assets/emergenciahumanitaria/imagen9.jpg', import.meta.url).href,
  new URL('../assets/emergenciahumanitaria/imagen10.jpg', import.meta.url).href,
  new URL('../assets/emergenciahumanitaria/imagen11.jpg', import.meta.url).href,
];

export default function EmergenciaHumanitariaPage() {
    return (
        <div>
            <Navbar />
            <section className="py-16">
                <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="tracking-[0.35em] text-red-800 font-semibold mb-3">CAMPANA</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#032b27] mb-6">Emergencia Humanitaria 2025</h1>
                        <div className="space-y-5 text-gray-700 leading-8">
                            <p>
                                Cáritas San Cristóbal ha respondido activamente a las emergencias humanitarias provocadas por las lluvias intensas en este año 2025,
                                distribuyendo ayuda esencial como alimentos, agua, ropa, artículos de higiene y colchones, brindando acompañamiento psicosocial a miles de familias afectadas.
                                Esta labor se ha realizado en colaboración de las Cáritas Parroquiales, empresa privada, ONGs y personas en general que se sumaron a colaborar con nuestro centro de acopio
                                y ser solidarios con cada una de las familias afectadas y así brindar la caricia de Dios a los más necesitados.
                            </p>
                            <p>
                                Durante la temporada fuertes de lluvias se logró abordar a los diversos sectores afectados en la región tachirense
                                (San Vicente de la Revancha en Junín, Barrio San Francisco, Barrio Eleazar López Contreras y el Sector la Valeria en el Municipio Fernández Feo),
                                así como también, se realizó envío importante de ayudas para el estado Apure en Guasdualito y al estado Mérida.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <ImageCarousel images={emergenciaImages} altPrefix="Emergencia Humanitaria" />
                        </div>
                    </div>
                </div>
            </section>
            <PiePagina />
        </div>
    )
}