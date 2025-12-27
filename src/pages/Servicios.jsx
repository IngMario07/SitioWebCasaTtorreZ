import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

import {
    Home,
    Utensils,
    ParkingSquare,
    Wifi,
    AlertTriangle
} from "lucide-react";

// 🔹 IMÁGENES (ajusta rutas según tus assets)
import sala1 from "../assets/images/Sala1/Sala1.png";
import sala2 from "../assets/images/Sala2/Sala2.png";

import cocina1 from "../assets/images/Comedor/Comedor1_2.png";
import cocina2 from "../assets/images/Comedor/Comedor1_3.png";

import estacionamiento1 from "../assets/images/Estacionamiento/Estacionamineto.png";
import estacionamiento2 from "../assets/images/LogoTCafe.png";

export const Servicios = () => {
    return (
        <>
            <Navbar />

            {/* HERO */}
            <section className="relative h-[55vh] flex items-center justify-center bg-[#B0493B]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-white px-6 max-w-3xl"
                >
                    <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                        Servicios & Áreas Comunes
                    </h1>
                    <p className="text-white/90 text-lg">
                        Espacios compartidos diseñados para tu comodidad, descanso y convivencia,
                        manteniendo siempre un ambiente ordenado y respetuoso.
                    </p>
                </motion.div>
            </section>

            {/* INTRO */}
            <section className="max-w-6xl mx-auto px-6 py-20 text-center">
                <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                    En Casa Ttorrez ponemos a disposición de nuestros huéspedes diversas áreas
                    comunes que complementan su estancia. Cada espacio está pensado para brindar
                    funcionalidad, comodidad y una experiencia agradable durante su visita.
                </p>
            </section>

            {/* SERVICIOS PRINCIPALES */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-[#B0493B] text-center mb-14">
                        Lo que ofrecemos
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        {[
                            { icon: Home, text: "Salas de estar" },
                            { icon: Utensils, text: "Cocina compartida" },
                            { icon: ParkingSquare, text: "Estacionamiento" },
                            { icon: Wifi, text: "Wi-Fi en áreas comunes" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center gap-3"
                            >
                                <item.icon size={38} className="text-[#B0493B]" />
                                <span className="text-gray-700 text-sm font-medium">
                                    {item.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SALAS */}
            <section className="py-20 max-w-6xl mx-auto px-6">
                <h3 className="text-2xl font-semibold text-[#B0493B] mb-6">
                    Salas de estar
                </h3>

                <p className="text-gray-700 max-w-3xl mb-10">
                    Contamos con dos salas de estar compartidas, ideales para descansar,
                    leer, convivir o disfrutar de un momento tranquilo durante tu estancia.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[sala1, sala2].map((img, i) => (
                        <motion.img
                            key={i}
                            src={img}
                            alt="Salas de estar Casa Ttorrez"
                            className="rounded-2xl shadow-md object-cover w-full h-[280px]"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        />
                    ))}
                </div>
            </section>

            {/* COCINA */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h3 className="text-2xl font-semibold text-[#B0493B] mb-6">
                        Cocina compartida
                    </h3>

                    <p className="text-gray-700 max-w-3xl mb-10">
                        Nuestra cocina está disponible para uso de los huéspedes.
                        Se solicita mantenerla limpia y ordenada después de cada uso,
                        respetando los horarios y a los demás visitantes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[cocina1, cocina2].map((img, i) => (
                            <motion.img
                                key={i}
                                src={img}
                                alt="Cocina Casa Ttorrez"
                                className="rounded-2xl shadow-md object-cover w-full h-[280px]"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ESTACIONAMIENTO */}
            <section className="py-20 max-w-6xl mx-auto px-6">
                <h3 className="text-2xl font-semibold text-[#B0493B] mb-6">
                    Estacionamiento
                </h3>

                <p className="text-gray-700 max-w-3xl mb-10">
                    Contamos con estacionamiento dentro de las instalaciones.
                    El espacio está sujeto a disponibilidad según temporada y
                    dimensiones del vehículo.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[estacionamiento1, estacionamiento2].map((img, i) => (
                        <motion.img
                            key={i}
                            src={img}
                            alt="Estacionamiento Casa Ttorrez"
                            className="rounded-2xl shadow-md object-cover w-full h-[280px]"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        />
                    ))}
                </div>
            </section>

            {/* AVISOS IMPORTANTES */}
            <section className="bg-gray-100 py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <AlertTriangle size={42} className="mx-auto text-[#B0493B] mb-6" />

                    <h4 className="text-2xl font-semibold text-[#B0493B] mb-6">
                        Indicaciones importantes
                    </h4>

                    <ul className="text-gray-700 text-sm leading-relaxed space-y-4 text-left max-w-3xl mx-auto">
                        <li>
                            • El uso de las áreas comunes es responsabilidad del huésped.
                            Cualquier daño o mal uso de las instalaciones tendrá un costo adicional.
                        </li>
                        <li>
                            • La cocina y salas deben entregarse limpias y ordenadas después de su uso.
                        </li>
                        <li>
                            • El estacionamiento está sujeto a disponibilidad por temporada y
                            tamaño del vehículo; vehículos grandes pueden limitar el espacio.
                        </li>
                        <li>
                            • Casa Ttorrez no se hace responsable por objetos personales
                            olvidados en áreas comunes.
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    );
};
