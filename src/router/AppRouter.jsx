import { Route, Routes } from "react-router-dom"
import { Inicio } from "../pages/Inicio"
import { Contacto } from "../pages/Contacto"
import { Galeria } from "../pages/Galeria"
import { Nosotros } from "../pages/Nosotros"
import { Reservacion } from "../pages/Reservacion"
import { Servicios } from "../pages/Servicios"

import { ScrollToTop } from "../components/ScrollToTop";

export const AppRouter = () => {
  return(
    <>
    <ScrollToTop />
        <Routes>
          <Route path="/*" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/reservacion" element={<Reservacion />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
    </>
  )
}