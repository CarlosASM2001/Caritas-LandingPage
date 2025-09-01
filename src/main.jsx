import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import QuienesSomos from './pages/quienesSomos.jsx';
import Noticias from './pages/noticias.jsx';
import NoticiaDetalle from './pages/noticiaDetalle.jsx';
import CampanaDetalle from './pages/CampanaDetalle.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:id" element={<NoticiaDetalle />} />
        <Route path="/campanas/:id" element={<CampanaDetalle />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);