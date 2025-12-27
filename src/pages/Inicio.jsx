import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import banner from "../assets/images/BannerPrueba.png";

import hab4_1 from "../assets/images/Hab4/Hab4.png";
import hab4_2 from "../assets/images/Hab4/Hab4_4.png";
import hab4_3 from "../assets/images/Hab4/Hab4_5.png";

import hab3_1 from "../assets/images/Hab3/Hab3_3.png";
import hab3_2 from "../assets/images/Hab3/Hab3_2.png";
import hab3_3 from "../assets/images/Hab3/Hab3.png";

import hab7_1 from "../assets/images/Hab7/Hab7.png";
import hab7_2 from "../assets/images/Hab7/Hab7_4.png";
import hab7_3 from "../assets/images/Hab7/Hab7_3.png";



const habitaciones = [
    {
        nombre: "Habitación Cuadruple",
        tipo: "Cuadrupl",
        personas: 4,
        camas: "2 camas matrimoniales",
        iconPersonas: "👤👤👤👤",
        iconCamas: "🛏️🛏️",
        imagenes: [hab3_1, hab3_2, hab3_3],
    },
    {
        nombre: "Habitación Doble",
        tipo: "Doble",
        personas: 2,
        camas: "1 cama matrimonial",
        iconPersonas: "👤👤",
        iconCamas: "🛏️",
        imagenes: [hab4_1, hab4_2, hab4_3],
    },
    {
        nombre: "Habitación Doble",
        tipo: "Doble",
        personas: 2,
        camas: "1 cama matrimonial",
        iconPersonas: "👤👤",
        iconCamas: "🛏️",
        imagenes: [hab7_1, hab7_2, hab7_3],
    },
];

export const Inicio = () => {
    return (
        <>
            <Navbar />

            {/* HERO */}
            <section className="relative h-[75vh] md:h-[90vh] w-full">

                {/* Imagen */}
                <img
                    src={banner}
                    alt="Hotel Casa Ttorrez"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay oscuro para legibilidad */}
                <div className="absolute inset-0 bg-black/45"></div>

                {/* Contenido */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10 h-full flex items-center justify-center px-6"
                >
                    <div className="text-center text-white max-w-2xl">

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55 }}
                            className="text-5xl md:text-5xl font-bold mb-4"
                        >
                            Casa Ttorrez
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.55 }}
                            className="text-2sm tracking-widest uppercase text-white/255 mb-4"
                        >
                            Hospedaje
                        </motion.p>

                        <motion.a
                            href="https://wa.me/524151395556"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="inline-block bg-[#B0493B] hover:bg-[#9c3f34] px-8 py-3 rounded-full font-semibold shadow-lg"
                        >
                            Reserva ahora
                        </motion.a>
                    </div>
                </motion.div>
            </section>


            {/* BIENVENIDA */}
            <section className="max-w-6xl mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl font-semibold text-[#B0493B] mb-6">
                    Bienvenido a Casa Ttorrez
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                    Casa Ttorrez es un hospedaje con esencia colonial, ubicado en el corazón del Centro Histórico de San Miguel de Allende.
                    Nuestros espacios conservan detalles arquitectónicos tradicionales, como techos de bóveda tipo cañón, que aportan carácter, historia y autenticidad a cada estancia.
                </p>
            </section>

            {/* HABITACIONES */}
            <section className="bg-gradient-to-b from-gray-50 to-white py-28">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TÍTULO */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <p className="uppercase tracking-[0.25em] text-sm text-gray-400 mb-4">
                            Confort & Tradición
                        </p>

                        <h2 className="text-4xl font-semibold text-[#B0493B]">
                            Nuestras Habitaciones
                        </h2>

                        <div className="w-24 h-[2px] bg-[#B0493B] mx-auto mt-6 rounded-full" />
                    </motion.div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {habitaciones.map((hab, index) => {
                            const [current, setCurrent] = useState(0);

                            useEffect(() => {
                                const interval = setInterval(() => {
                                    setCurrent((prev) =>
                                        prev === hab.imagenes.length - 1 ? 0 : prev + 1
                                    );
                                }, 5000);
                                return () => clearInterval(interval);
                            }, []);

                            return (
                                <motion.article
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: index * 0.15 }}
                                    viewport={{ once: true }}
                                    className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
                                >

                                    {/* CARRUSEL */}
                                    <div className="relative h-[260px] overflow-hidden">
                                        <img
                                            src={hab.imagenes[current]}
                                            alt={hab.nombre}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Overlay degradado */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                                        {/* Flechas */}
                                        <button
                                            onClick={() =>
                                                setCurrent(
                                                    current === 0 ? hab.imagenes.length - 1 : current - 1
                                                )
                                            }
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 w-9 h-9 rounded-full opacity-0 group-hover:opacity-100 transition shadow"
                                        >
                                            ‹
                                        </button>

                                        <button
                                            onClick={() =>
                                                setCurrent(
                                                    current === hab.imagenes.length - 1 ? 0 : current + 1
                                                )
                                            }
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 w-9 h-9 rounded-full opacity-0 group-hover:opacity-100 transition shadow"
                                        >
                                            ›
                                        </button>
                                    </div>

                                    {/* CONTENIDO */}
                                    <div className="p-8 text-center">

                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                            {hab.nombre}
                                        </h3>

                                        <p className="text-sm text-gray-500 mb-6">
                                            Hospedaje colonial con detalles tradicionales
                                        </p>

                                        {/* ICONOS INFO */}
                                        <div className="flex justify-center gap-4 mb-8">
                                            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600">
                                                <span>{hab.iconPersonas}</span>
                                                <span>{hab.personas} personas</span>
                                            </div>

                                            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600">
                                                <span>{hab.iconCamas}</span>
                                                <span>{hab.camas}</span>
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <Link
                                            to="/galeria"
                                            className="inline-flex items-center gap-2 text-[#B0493B] font-medium border border-[#B0493B] px-6 py-3 rounded-full hover:bg-[#B0493B] hover:text-white transition"
                                        >
                                            Ver detalles
                                            <span className="text-lg">→</span>
                                        </Link>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* RESERVA */}
            <section className="relative py-28 bg-[#B0493B] overflow-hidden">

                {/* Detalle decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>

                <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-semibold mb-4"
                    >
                        Reserva tu estancia
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-white/90 max-w-2xl mx-auto mb-14 text-lg"
                    >
                        Elige la plataforma que prefieras y asegura tu lugar en el corazón
                        del Centro Histórico de San Miguel de Allende.
                    </motion.p>

                    {/* OPCIONES DE RESERVA */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">

                        {/* AIRBNB */}
                        <motion.a
                            href="https://www.airbnb.mx/s/Casa-TtorreZ-%7C-Casa-Torres--San-Miguel-de-Allende--Gto.--M%C3%A9xico/homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJe6bKmYtRK4QRrsVuGD6bfq4&acp_id=t-g-ChIJe6bKmYtRK4QRrsVuGD6bfq4&date_picker_type=calendar&search_type=user_map_move&query=Casa%20TtorreZ%20%7C%20Casa%20Torres%2C%20San%20Miguel%20de%20Allende%2C%20Gto.%2C%20M%C3%A9xico&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-01-01&monthly_length=3&monthly_end_date=2026-04-01&search_mode=regular_search&price_filter_input_type=2&channel=EXPLORE&ne_lat=20.91911022390552&ne_lng=-100.73964430911042&sw_lat=20.91895012796507&sw_lng=-100.73984453601747&zoom=22&zoom_level=22&search_by_map=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -6 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition flex flex-col items-center gap-4 text-gray-800"
                        >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQaXkdtkvlTpDiPo0uHyuaaUN_u9XbZ_CbJg&s.svg"
                                alt="Airbnb"
                                className="h-8"
                            />
                            <span className="font-medium">Reservar en Airbnb</span>
                        </motion.a>

                        {/* WHATSAPP */}
                        <motion.a
                            href="https://wa.me/524151395556"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -6 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition flex flex-col items-center gap-4 text-gray-800"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                alt="WhatsApp"
                                className="h-10"
                            />
                            <span className="font-medium">Reserva directa</span>
                            <span className="text-sm text-gray-500">
                                Atención personalizada
                            </span>
                        </motion.a>

                        {/* BOOKING */}
                        <motion.a
                            href="https://www.booking.com/hotel/mx/casa-ttorrez.es-mx.html?label=es-mx-booking-desktop-0fsZRFl8FBmL0WPvvclzKwS652829001763%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9216074%3Ali%3Adec%3Adm&gclid=Cj0KCQiAgbnKBhDgARIsAGCDdlfUI0Y5fURIEbMhVqbve6TrHgL8vZC4YEHUHkAMF9OTzOZXokU63F8aAv9uEALw_wcB&aid=2311236&ucfs=1&arphpl=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -6 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition flex flex-col items-center gap-4 text-gray-800"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Booking.com_Icon_2022.svg"
                                alt="Booking"
                                className="h-8"
                            />
                            <span className="font-medium">Reservar en Booking</span>
                        </motion.a>

                    </div>
                </div>
            </section>

            {/* UBICACIÓN */}
            <section className="relative py-24 bg-gray-25 overflow-hidden">

                {/* Detalle decorativo */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(176,73,59,0.08),transparent_70%)]"></div>

                <div className="relative max-w-6xl mx-auto px-6 text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-semibold text-[#B0493B] mb-6"
                    >
                        Nuestra Ubicación
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-700 text-lg max-w-2xl mx-auto mb-10"
                    >
                        Nos encontramos en el corazón del Centro Histórico de San Miguel de Allende,
                        a unos pasos de sus principales atractivos, restaurantes y vida cultural.
                    </motion.p>

                    {/* CTA */}
                    <motion.a
                        href="https://maps.app.goo.gl/YycUKyXP5MSAumd79"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 260 }}
                        className="inline-flex items-center gap-3 border border-[#B0493B] text-[#B0493B] px-8 py-3 rounded-full font-medium hover:bg-[#B0493B] hover:text-white transition shadow-sm"
                    >
                        📍 Ver en Google Maps
                    </motion.a>

                </div>
            </section>
            <Footer />
        </>
    );
};
