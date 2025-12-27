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
            <section className="relative h-[65vh] flex items-center justify-center bg-[#B0493B]">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-white px-6"
                >
                    <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                        Nuestras Instalaciones
                    </h1>
                    <p className="max-w-2xl mx-auto text-white/90 text-lg">
                        Espacios con esencia colonial, diseñados para brindarte una estancia
                        cómoda, segura y auténtica en el corazón de San Miguel de Allende.
                    </p>
                </motion.div>
            </section>

            {/* INFO GENERAL */}
            <section className="max-w-6xl mx-auto px-6 py-20 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto"
                >
                    En Casa Ttorrez cuidamos cada detalle para que tu experiencia sea
                    placentera. Nuestro hospedaje combina arquitectura colonial,
                    funcionalidad y servicios esenciales, manteniendo un equilibrio entre
                    confort, ubicación y precio.
                </motion.p>
            </section>

            {/* SERVICIOS HABITACIONES */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-[#B0493B] text-center mb-14">
                        Servicios en cada habitación
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        {[
                            { icon: Bath, text: "Baño privado" },
                            { icon: BedDouble, text: "Ropa de cama y toallas" },
                            { icon: Tv, text: "Smart TV" },
                            { icon: Wifi, text: "Wi-Fi gratuito" },
                            { icon: Droplets, text: "Agua caliente" },
                            { icon: ShieldCheck, text: "Acceso vigilado" },
                            { icon: ParkingSquare, text: "Estacionamiento (según disponibilidad)" },
                            { icon: Users, text: "Atención personalizada" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center gap-3"
                            >
                                <item.icon size={36} className="text-[#B0493B]" />
                                <span className="text-gray-700 text-sm">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ÁREAS COMUNES */}
            <section className="py-20 max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-semibold text-[#B0493B] mb-6">
                    Áreas comunes
                </h2>

                <p className="text-gray-700 max-w-3xl mx-auto text-lg mb-10">
                    Contamos con espacios compartidos pensados para el descanso y la
                    convivencia, disponibles para todos nuestros huéspedes.
                </p>

                <div className="flex flex-wrap justify-center gap-6 text-gray-700">
                    <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                        <Home size={18} /> Cocina compartida
                    </span>
                    <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                        <Home size={18} /> Comedor
                    </span>
                    <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                        <Home size={18} /> 2 Salas de estar
                    </span>
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
