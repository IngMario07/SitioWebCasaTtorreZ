import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { ruta: "/inicio", titulo: "Inicio" },
    { ruta: "/galeria", titulo: "Habitaciones" },
    { ruta: "/nosotros", titulo: "Nuestra Historia" },
    { ruta: "/servicios", titulo: "Servicios" },
    { ruta: "/contacto", titulo: "Contacto" },
  ];

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* NAVBAR DESKTOP */}
      <motion.nav
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="
          hidden lg:flex
          fixed top-5 left-1/2 -translate-x-1/2
          px-10 py-3 rounded-3xl shadow-lg
          backdrop-blur-md
          bg-[rgba(255,255,255,0.85)]
          border border-[rgba(0,0,0,0.08)]
          z-50 select-none
          items-center justify-center
        "
      >
        <ul className="flex items-center gap-10 font-medium">
          {links.map((item, index) => (
            <li key={index} className="relative">
              <NavLink
                to={item.ruta}
                className={({ isActive }) =>
                  `
                    text-[15px] tracking-wide transition
                    ${isActive ? "text-[#B0493B] font-semibold" : "text-[#3A3A3A]"}
                    hover:text-[#B0493B]
                  `
                }
              >
                {item.titulo}
              </NavLink>

              {location.pathname === item.ruta && (
                <motion.div
                  layoutId="activeLinkBar"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#B0493B] rounded-full"
                />
              )}
            </li>
          ))}

          {/* Botón Reservar */}
          <a
            href="https://wa.me/524151395556"
            className="
              ml-3 px-4 py-2 text-sm rounded-full shadow-md
              bg-[#B0493B] text-white
              hover:bg-[#9E3E32] transition
            "
          >
            Reservar
          </a>
        </ul>
      </motion.nav>

      {/* BOTÓN MENÚ MÓVIL */}
      <button
        onClick={toggle}
        className="
          lg:hidden
          fixed top-5 left-5
          text-[#3A3A3A] bg-white/70 
          border border-[rgba(0,0,0,0.1)]
          p-2 rounded-2xl shadow-md active:scale-95
          backdrop-blur-md
          z-50
        "
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* MENÚ DESPLEGABLE MÓVIL  */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="
            lg:hidden fixed top-0 left-0 w-full h-screen
            bg-[rgba(255,255,255,0.8)] backdrop-blur-xl
            z-40 pt-20
            flex flex-col items-center gap-6
          "
        >
          {links.map((item, index) => (
            <NavLink
              key={index}
              to={item.ruta}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `
                w-[85%] text-center py-3 rounded-xl text-lg font-semibold
                transition-all
                ${
                  isActive
                    ? "bg-[#B0493B] text-white shadow-md"
                    : "bg-white/50 text-[#3A3A3A] border border-[rgba(0,0,0,0.1)] hover:bg-white/70"
                }
              `
              }
            >
              {item.titulo}
            </NavLink>
          ))}

          <a
            href="/reservacion"
            onClick={() => setIsOpen(false)}
            className="
              mt-5 w-[85%] text-center py-3 rounded-xl 
              bg-[#B0493B] text-white font-bold text-lg shadow-md
            "
          >
            Reservar
          </a>
        </motion.div>
      )}
    </>
  );
};
