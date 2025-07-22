import React from 'react'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import NoticiasDestacados from './components/NoticiasDestacados.jsx'
import PiePagina  from './components/piePagina.jsx'

function App() {

  return (
    <div>
      <Navbar />
      <Banner />
      <NoticiasDestacados />
      <PiePagina  Pagina />
    </div>
  )
}

export default App
