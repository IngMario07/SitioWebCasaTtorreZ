import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

import {
    Phone,
    Mail,
    MapPin,
    MessageCircle
} from "lucide-react";

export const Contacto = () => {
    return (
        <>
            <Navbar />

            {/* HERO */}
            <section className="relative h-[55vh] flex items-center justify-center bg-[#B0493B]">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-white px-6 max-w-3xl"
                >
                    <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                        Contáctanos
                    </h1>
                    <p className="text-white/90 text-lg">
                        Estamos para ayudarte a planear tu estancia en
                        el corazón de San Miguel de Allende.
                    </p>
                </motion.div>
            </section>

            {/* INTRO */}
            <section className="max-w-6xl mx-auto px-6 py-20 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-gray-700 text-lg max-w-3xl mx-auto"
                >
                    Si tienes alguna duda, deseas realizar una reservación
                    o necesitas información adicional, no dudes en comunicarte
                    con nosotros. Con gusto te atenderemos.
                </motion.p>
            </section>

            {/* TARJETAS DE CONTACTO */}
            {/* CONTACTO GUIADO */}
            <section className="relative py-28 bg-white overflow-hidden">

                {/* Decoración suave */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(176,73,59,0.08),transparent_70%)]" />

                <div className="relative max-w-6xl mx-auto px-6">

                    {/* TÍTULO */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl font-semibold text-[#B0493B] mb-6">
                            ¿Cómo podemos ayudarte?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Elige la opción que mejor se adapte a lo que necesitas.
                            Nuestro equipo está listo para atenderte.
                        </p>
                    </motion.div>

                    {/* OPCIONES */}
                    <div className="space-y-10 max-w-4xl mx-auto">

                        {/* OPCIÓN 1 – WHATSAPP (DESTACADA) */}
                        <motion.a
                            href="https://wa.me/524151395556"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 180 }}
                            className="group relative bg-[#B0493B] text-white rounded-3xl p-10 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />

                            <MessageCircle size={54} />

                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-semibold mb-2">
                                    Reservar o preguntar por WhatsApp
                                </h3>
                                <p className="text-white/90 text-sm">
                                    Respuesta rápida, disponibilidad inmediata y atención personalizada.
                                </p>
                            </div>

                            <span className="bg-white text-[#B0493B] px-8 py-3 rounded-full font-medium">
                                Enviar mensaje
                            </span>
                        </motion.a>

                        {/* OPCIÓN 2 – TELÉFONO */}
                        <motion.a
                            href="tel:+524151395556"
                            whileHover={{ x: 6 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-6 bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 shadow-sm"
                        >
                            <Phone size={36} className="text-[#B0493B]" />
                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    Prefiero llamar por teléfono
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Atención directa en horario de oficina
                                </p>
                            </div>
                            <span className="ml-auto text-[#B0493B] font-medium">
                                +52 415 139 5556
                            </span>
                        </motion.a>

                        {/* OPCIÓN 3 – CORREO */}
                        <motion.a
                            href="mailto:casattorrez@gmail.com"
                            whileHover={{ x: 6 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-6 bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 shadow-sm"
                        >
                            <Mail size={36} className="text-[#B0493B]" />
                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    Enviar un correo electrónico
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Solicitudes formales o información detallada
                                </p>
                            </div>
                            <span className="ml-auto text-[#B0493B] font-medium">
                                Escribir →
                            </span>
                        </motion.a>

                    </div>

                    {/* CONFIANZA */}
                    <p className="text-center text-xs text-gray-400 mt-16">
                        Te responderemos lo antes posible para ayudarte con cualquier duda o reservación.
                    </p>

                </div>
            </section>

            {/* UBICACIÓN */}
            <section className="py-24 max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-semibold text-[#B0493B] mb-6"
                >
                    Nuestra ubicación
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-700 text-lg max-w-2xl mx-auto mb-10"
                >
                    Nos encontramos dentro del Centro Histórico de
                    San Miguel de Allende, a pocos minutos de sus
                    principales atractivos turísticos.
                </motion.p>

                <motion.a
                    href="https://maps.app.goo.gl/YycUKyXP5MSAumd79"
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 260 }}
                    className="inline-flex items-center gap-3 border border-[#B0493B] text-[#B0493B] px-8 py-3 rounded-full font-medium hover:bg-[#B0493B] hover:text-white transition shadow-sm"
                >
                    <MapPin size={18} />
                    Ver en Google Maps
                </motion.a>
            </section>

            {/* Caminata maps */}
            <section className="py-24 max-w-6xl mx-auto px-6 text-center">
                <h3 className="text-2xl font-semibold text-[#B0493B] mb-6">
                    Ruta a pie recomendada
                </h3>

                <p className="text-gray-700 max-w-2xl mx-auto mb-10">
                    Disfruta de una caminata por los principales atractivos del Centro Histórico,
                    pasando por mercados, restaurantes y plazas emblemáticas hasta llegar a la Parroquia.
                </p>

                <div className="rounded-3xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/d/embed?mid=1Azn9NN_Xkx9RpIw-peaPMGSPcPdvZkY&ehbc=2E312F"
                        width="100%"
                        height="450"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

            <Footer />
        </>
    );
};
