import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import QuienesSomos from './pages/quienesSomos.jsx';
import Noticias from './pages/noticias.jsx';
import NoticiaDetalle from './pages/NoticiaDetalle.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:id" element={<NoticiaDetalle />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);