import { useState } from "react";
import {Menu, X} from 'lucide-react';
import logo from "../assets/logo-navbar.png";
import { Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleMobileDrawer = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg py-3 border-b border-gray-200/50 shadow-lg">
        <div className="container px-4 mx-auto relative text-[14px]">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt="Caritas Logo" className="h-10 w-10 mr-2" />
                    <span className="text-xl tracking-tight">Caritas San Cristobal</span>
                </div>
                <ul className="hidden lg:flex ml-auto space-x-12">
                    <li><Link to="/" className="text-black-300 hover:text-black">Inicio</Link></li>
                    <li><Link to="/quienes-somos" className="text-black-300 hover:text-black">Quienes Somos</Link></li>
                    <li><Link to="/noticias" className="text-black-300 hover:text-black">Noticias</Link></li>
                    <li><a href="#contacto" className="text-black-300 hover:text-black">Contacto</a></li>
                    
                </ul>
                <div className="hidden lg:flex justify-center space-x-5 items-center ml-12">
                    <a 
                        href="https://www.facebook.com/CaritasSanCristobal" 
                        target="_blank" rel="noopener noreferrer" 
                        className="text-red-900 hover:text-black">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                        href="https://www.instagram.com/caritas_sancristobal/" 
                        target="_blank" rel="noopener noreferrer" 
                        className="text-red-900 hover:text-black">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button 
                        onClick={toggleMobileDrawer} 
                        className="text-black-300 hover:text-black focus:outline-none">
                        {mobileDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border border-gray-200/50">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li><Link to="/" className="text-black-300 hover:text-black">Inicio</Link></li>
                        <li><Link to="/quienes-somos" className="text-black-300 hover:text-black">Quienes Somos</Link></li>
                        <li><Link to="/noticias" className="text-black-300 hover:text-black">Noticias</Link></li>
                        <li><a href="#contacto" className="text-black-300 hover:text-black">Contacto</a></li>
                        <li><a href="#dona" className="bg-gradient-to-r from-red-800 to-red-900
                        py-2 px-3 rounded-md text-white">Dona Aqui</a></li>
                    </ul>
                </div>
            )}
        </div>
    </nav>
  );
}

export default Navbar;