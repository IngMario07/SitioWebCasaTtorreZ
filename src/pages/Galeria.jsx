import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import {
    Wifi,
    Tv,
    Bath,
    Droplets,
    ParkingSquare,
    ShieldCheck,
    BedDouble,
    Home,
    Users,
} from "lucide-react";

// 🔹 IMÁGENES (ejemplo, ajusta rutas)
import gal1 from "../assets/images/Hab3/Hab3_2.png";
import gal2 from "../assets/images/Hab3/Hab3_3.png";
import gal3 from "../assets/images/Hab3/Hab3.png";
import gal4 from "../assets/images/Hab3/BañoHab3.png";

import gal5 from "../assets/images/Hab4/Hab4.png";
import gal6 from "../assets/images/Hab4/Hab4_2.png";
import gal7 from "../assets/images/Hab4/BañoHab4.png";
import gal8 from "../assets/images/Hab4/Hab4_3.png";
import gal9 from "../assets/images/Hab4/Hab4_4.png";
import gal10 from "../assets/images/Hab4/Hab4_5.png";

import gal11 from "../assets/images/Hab7/BañoHab7.png";
import gal12 from "../assets/images/Hab7/Hab7_2.png";
import gal13 from "../assets/images/Hab7/Hab7.png";
import gal14 from "../assets/images/Hab7/Hab7_3.png";
import gal15 from "../assets/images/Hab7/Hab7_4.png";

import gal16 from "../assets/images/Hab9/Hab9_2.png";
import gal17 from "../assets/images/Hab9/Hab9.png";

import gal18 from "../assets/images/Murales/Mural.png";

import gal19 from "../assets/images/Sala2/Sala2.png";
import gal20 from "../assets/images/Sala2/Sala2_1.png";

import gal21 from "../assets/images/Fachada/Fachada1.png";

import gal22 from "../assets/images/Comedor/Comedor1_3.png";


export const Galeria = () => {
    return (
        <>
            <Navbar />

            {/* HERO */}
            <section className="relative h-[65vh] flex items-center justify-center bg-gradient-to-br from-[#B0493B] to-[#8f3c31] overflow-hidden">
                {/* Detalle decorativo */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="relative text-center text-white px-6 max-w-3xl"
                >
                    <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-wide">
                        Nuestras Instalaciones
                    </h1>

                    <p className="text-white/90 text-lg leading-relaxed">
                        Un espacio donde la arquitectura colonial, el confort esencial y la
                        atención personalizada se combinan para ofrecerte una estancia
                        auténtica y tranquila en el corazón de San Miguel de Allende.
                    </p>
                </motion.div>
            </section>

            {/* INFO GENERAL */}
            <section className="max-w-6xl mx-auto px-6 py-24 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto"
                >
                    En Casa Ttorrez cuidamos cada detalle para que tu experiencia sea
                    cómoda y agradable. Nuestro hospedaje conserva elementos
                    arquitectónicos tradicionales —como techos de bóveda tipo cañón—
                    integrados con servicios funcionales que garantizan descanso,
                    seguridad y una excelente ubicación, manteniendo una relación
                    equilibrada entre calidad y precio.
                </motion.p>
            </section>

            {/* SERVICIOS HABITACIONES */}
            <section className="bg-gray-50 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl font-semibold text-[#B0493B] text-center mb-16"
                    >
                        Servicios incluidos en cada habitación
                    </motion.h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { icon: Bath, text: "Baño privado" },
                            { icon: BedDouble, text: "Ropa de cama y toallas" },
                            { icon: Tv, text: "Smart TV" },
                            { icon: Wifi, text: "Wi-Fi gratuito" },
                            { icon: Droplets, text: "Agua caliente" },
                            { icon: ShieldCheck, text: "Acceso vigilado" },
                            { icon: ParkingSquare, text: "Estacionamiento disponible" },
                            { icon: Users, text: "Atención personalizada" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center gap-4"
                            >
                                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-sm">
                                    <item.icon size={28} className="text-[#B0493B]" />
                                </div>
                                <span className="text-gray-700 text-sm font-medium">
                                    {item.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ÁREAS COMUNES */}
            <section className="py-24 max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-semibold text-[#B0493B] mb-6"
                >
                    Áreas comunes
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-700 max-w-3xl mx-auto text-lg mb-12"
                >
                    Nuestros espacios compartidos están pensados para brindar comodidad y
                    convivencia, permitiendo a los huéspedes disfrutar de un ambiente
                    relajado durante su estancia.
                </motion.p>

                <div className="flex flex-wrap justify-center gap-6 text-gray-700">
                    {[
                        "Cocina compartida",
                        "Comedor",
                        "Dos salas de estar"
                    ].map((text, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-full shadow-sm"
                        >
                            <Home size={18} />
                            {text}
                        </motion.span>
                    ))}
                </div>
            </section>


            {/* GALERÍA COLLAGE */}
            <h2 className="text-3xl font-semibold text-[#B0493B] text-center mb-14">
                Galería
            </h2>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
            >
                <Masonry gutter="16px">
                    {[gal21, gal22, gal18, gal19, gal20, gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10, gal11, gal12, gal13, gal14, gal15, gal16, gal17].map((img, i) => (
                        <motion.img
                            key={i}
                            src={img}
                            alt="Casa Ttorrez"
                            loading="lazy"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="w-full rounded-2xl shadow-md hover:scale-105 transition duration-500"
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>

            {/* NOTA */}
            <section className="bg-gray-50 py-16 text-center px-6">
                <p className="text-gray-600 max-w-4xl mx-auto text-sm leading-relaxed">
                    El uso de las áreas comunes es responsabilidad del huésped. Casa
                    Ttorrez no se hace responsable por el mal uso de las instalaciones ni
                    por objetos personales. El estacionamiento está sujeto a
                    disponibilidad según temporada.
                </p>
            </section>

            <Footer />
        </>
    );
};
