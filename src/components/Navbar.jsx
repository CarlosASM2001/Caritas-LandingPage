import { useState } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import logo from "../assets/caritas_sc.png";
import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleMobileDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg py-3 border-b border-gray-200/50 shadow-lg">
      <div className="container px-4 mx-auto relative text-[14px]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center ">
            <img src={logo} alt="Caritas Logo" className="h-15 w-35" />
          </div>

          {/* Links desktop */}
          <ul className="hidden lg:flex ml-auto space-x-12">
            <li>
              <Link to="/" className="text-black-300 hover:text-black">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/quienes-somos" className="text-black-300 hover:text-black">
                Quienes Somos
              </Link>
            </li>
            <li>
              <Link to="/noticias" className="text-black-300 hover:text-black">
                Noticias
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="text-black-300 hover:text-black">
                Contáctanos
              </Link>
            </li>
          </ul>

          {/* Redes + Botón Donar */}
          <div className="hidden lg:flex justify-center space-x-5 items-center ml-12">
            <a
              href={siteConfig.redes.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-900 hover:text-black"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.redes.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-900 hover:text-black"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* 🔴 Botón Donar */}
            <Link
              to="/donaciones"
              className="ml-6 bg-gradient-to-r from-red-800 to-red-900 hover:from-red-900 hover:to-red-950 text-white font-semibold py-2 px-5 rounded-md shadow-lg transition-all"
            >
              Donar
            </Link>
          </div>

          {/* Botón menú móvil */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button
              onClick={toggleMobileDrawer}
              className="text-black-300 hover:text-black focus:outline-none"
            >
              {mobileDrawerOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Drawer móvil */}
        {mobileDrawerOpen && (
          <div className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border border-gray-200/50">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link to="/" className="text-black-300 hover:text-black">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/quienes-somos" className="text-black-300 hover:text-black">
                  Quienes Somos
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="text-black-300 hover:text-black">
                  Noticias
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-black-300 hover:text-black">
                  Contacto
                </Link>
              </li>

              {/* 🔴 Botón Donar también en móvil */}
              <li>
                <Link
                  to="/donaciones"
                  className="bg-gradient-to-r from-red-800 to-red-900 py-2 px-5 rounded-md text-white font-semibold shadow-md hover:from-red-900 hover:to-red-950 transition"
                >
                  Donar
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
