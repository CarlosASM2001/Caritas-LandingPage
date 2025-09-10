import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import QuienesSomos from './pages/quienesSomos.jsx';
import Contacto from './pages/contacto.jsx';
import Noticias from './pages/noticias.jsx';
import NoticiaDetalle from './pages/noticiaDetalle.jsx';
import SamanPage from './pages/saman.jsx';
import ConsultasMedicasPage from './pages/consultasMedicas.jsx';
import Donaciones from './pages/donaciones.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:id" element={<NoticiaDetalle />} />
        <Route path="/campanas/saman" element={<SamanPage />} />
        <Route path="/campanas/consultas-medicas" element={<ConsultasMedicasPage />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/donaciones" element={<Donaciones />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);