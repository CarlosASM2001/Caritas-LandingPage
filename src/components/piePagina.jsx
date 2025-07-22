import logo from "../assets/logo-navbar.png";
import { Facebook, Instagram, Mail, MapPin, Phone, AlertTriangle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#3e0000] text-white text-sm pt-10">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between mb-10">
          {/* Logo y redes */}
          <div className="mb-8 lg:mb-0">
            <img src={logo} alt="Logo Caritas" className="h-20 mb-2" />
            <p className="text-xs">Por una Venezuela justa y fraterna</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/CaritasSanCristobal" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/caritas_sancristobal/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="mb-8 lg:mb-0">
            <h4 className="font-semibold mb-3">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Inicio</a></li>
              <li><a href="/quienes-somos" className="hover:underline">Quiénes Somos</a></li>
              <li><a href="/noticias" className="hover:underline">Noticias</a></li>
              <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            </ul>
          </div>


          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-3">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1" /> Dirección: Cra 58 # 80-87</li>
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-1" /> 01 8000 160 100</li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-1" /> escuchamostuopinion@cec.org.co</li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 mt-1" /> habeasdatasnps@cec.org.co</li>
            </ul>
          </div>
        </div>

        {/* Pie final */}
        <div className="border-t border-white/30 py-4 text-center text-xs">
          <p>© Copyright 2022 por <a href="https://evolutecc.com" className="font-bold hover:underline">Evolutecc.com</a>
          </p>
          <p className="mt-1">
            <a href="#" className="hover:underline mr-4">Política de privacidad</a>
            <a href="#" className="hover:underline">Términos de condiciones</a>
          </p>
        </div>
      </div>
    </footer>
  );
}