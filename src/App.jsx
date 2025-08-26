import React from 'react'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import NoticiasDestacados from './components/NoticiasDestacados.jsx'
import PiePagina  from './components/piePagina.jsx'
import AcercaNosotros from './components/AcercaNosotros.jsx'
import DonationCTA from './components/DonationCTA.jsx'
import Impacto2024 from './components/Impacto2024.jsx'
import MapaFundacion from './components/MapaFundacion.jsx'

function App() {

  return (
    <div>
      <Navbar />
      <Banner />
      <DonationCTA />
      <Impacto2024 />
      <AcercaNosotros />
      <MapaFundacion />
      <NoticiasDestacados />
      <PiePagina  Pagina />
    </div>
  )
}

export default App
