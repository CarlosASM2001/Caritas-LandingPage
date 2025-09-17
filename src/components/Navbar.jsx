import { useState } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import logo from "../assets/caritas_sc.png";
import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleMobileDrawer = () => setMobileDrawerOpen((s) => !s);
  const closeMobileDrawer = () => setMobileDrawerOpen(false);

  const linkBase =
    "text-[#2b1b1b] hover:text-[#5c0a0a] transition-colors duration-200";

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/60 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
      <div className="container px-4 mx-auto text-[14px]">
        <div className="flex justify-between items-center py-3">
          {/* Logo clickeable → Inicio */}
          <Link
            to="/"
            aria-label="Ir al inicio"
            className="flex items-center group"
            onClick={closeMobileDrawer}
          >
            <img
              src={logo}
              alt="Cáritas San Cristóbal"
              className="h-12 w-auto transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:drop-shadow"
              loading="eager"
            />
          </Link>

          {/* Links desktop */}
          <ul className="hidden lg:flex ml-auto items-center space-x-10">
            <li>
              <Link to="/" className={linkBase}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/quienes-somos" className={linkBase}>
                Quienes Somos
              </Link>
            </li>
            <li>
              <Link to="/noticias" className={linkBase}>
                Noticias
              </Link>
            </li>
            <li>
              <Link to="/contacto" className={linkBase}>
                Contáctanos
              </Link>
            </li>
          </ul>

          {/* Redes + Donar (desktop) */}
          <div className="hidden lg:flex items-center gap-4 ml-10">
            <a
              href={siteConfig.redes.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#6e0b14] hover:text-[#2b1b1b] transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.redes.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#6e0b14] hover:text-[#2b1b1b] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* Botón Donar */}
            <Link
              to="/donaciones"
              className="ml-4 inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold text-white
                         bg-gradient-to-r from-[#6e0b14] to-[#52080e]
                         hover:from-[#52080e] hover:to-[#3d060a]
                         shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-yellow-300/70"
            >
              Donar
            </Link>
          </div>

          {/* Botón menú móvil */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileDrawer}
              aria-label={mobileDrawerOpen ? "Cerrar menú" : "Abrir menú"}
              className="p-2 rounded-md text-[#2b1b1b] hover:bg-gray-100 transition"
            >
              {mobileDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Drawer móvil */}
        {mobileDrawerOpen && (
          <div className="lg:hidden origin-top animate-in fade-in zoom-in-95 duration-150">
            <div className="rounded-xl border border-gray-200/60 bg-white/95 backdrop-blur-md shadow-xl overflow-hidden mb-3">
              <ul className="flex flex-col divide-y divide-gray-200/60">
                <li>
                  <Link
                    to="/"
                    onClick={closeMobileDrawer}
                    className="block px-5 py-3 hover:bg-gray-50 transition-colors"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quienes-somos"
                    onClick={closeMobileDrawer}
                    className="block px-5 py-3 hover:bg-gray-50 transition-colors"
                  >
                    Quienes Somos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/noticias"
                    onClick={closeMobileDrawer}
                    className="block px-5 py-3 hover:bg-gray-50 transition-colors"
                  >
                    Noticias
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contacto"
                    onClick={closeMobileDrawer}
                    className="block px-5 py-3 hover:bg-gray-50 transition-colors"
                  >
                    Contáctanos
                  </Link>
                </li>
                <li className="px-5 py-3">
                  <Link
                    to="/donaciones"
                    onClick={closeMobileDrawer}
                    className="w-full inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold text-white
                               bg-gradient-to-r from-[#6e0b14] to-[#52080e]
                               hover:from-[#52080e] hover:to-[#3d060a]
                               shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none
                               focus-visible:ring-2 focus-visible:ring-yellow-300/70"
                  >
                    Donar
                  </Link>
                </li>
              </ul>

              {/* Redes en móvil */}
              <div className="flex items-center justify-center gap-6 py-4">
                <a
                  href={siteConfig.redes.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-[#6e0b14] hover:text-[#2b1b1b] transition-colors"
                  onClick={closeMobileDrawer}
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.redes.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#6e0b14] hover:text-[#2b1b1b] transition-colors"
                  onClick={closeMobileDrawer}
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
