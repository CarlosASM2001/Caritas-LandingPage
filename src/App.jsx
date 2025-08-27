import React from 'react'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import NoticiasDestacados from './components/NoticiasDestacados.jsx'
import PiePagina  from './components/piePagina.jsx'
import AcercaNosotros from './components/AcercaNosotros.jsx'
import Impacto from './components/Impacto.jsx'
import MapaFundacion from './components/MapaFundacion.jsx'
import DonationCTA from './components/DonacionCTA.jsx'

function App() {

  return (
    <div>
      <Navbar />
      <Banner />
      <AcercaNosotros />
      <NoticiasDestacados />
      <Impacto />
      <MapaFundacion />
      <DonationCTA />
      <PiePagina  Pagina />
    </div>
  )
}

export default App
