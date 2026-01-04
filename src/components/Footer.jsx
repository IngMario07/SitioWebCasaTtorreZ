import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaTiktok, FaAirbnb, FaWhatsapp } from "react-icons/fa";


export const Footer = () => {
    return (
        <footer className="bg-[#B0493B] text-white mt-20 pt-12 pb-8">

            {/* CONTENEDOR CENTRAL */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* RESERVA AHORA */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-3 uppercase tracking-wide">
                        Reserva ahora
                    </h3>

                    <div className="flex gap-6 mb-8">
                        {/* Airbnb */}
                        <a
                            href="https://www.airbnb.mx/s/Casa-TtorreZ-%7C-Casa-Torres--San-Miguel-de-Allende--Gto.--M%C3%A9xico/homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJe6bKmYtRK4QRrsVuGD6bfq4&acp_id=t-g-ChIJe6bKmYtRK4QRrsVuGD6bfq4&date_picker_type=calendar&search_type=user_map_move&query=Casa%20TtorreZ%20%7C%20Casa%20Torres%2C%20San%20Miguel%20de%20Allende%2C%20Gto.%2C%20M%C3%A9xico&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-01-01&monthly_length=3&monthly_end_date=2026-04-01&search_mode=regular_search&price_filter_input_type=2&channel=EXPLORE&ne_lat=20.91911022390552&ne_lng=-100.73964430911042&sw_lat=20.91895012796507&sw_lng=-100.73984453601747&zoom=22&zoom_level=22&search_by_map=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition"
                        >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQaXkdtkvlTpDiPo0uHyuaaUN_u9XbZ_CbJg&s.svg"
                                alt="Airbnb"
                                className="h-7 rounded-md"
                            />
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/524151395556"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                alt="WhatsApp"
                                className="h-8"
                            />
                        </a>


                        {/* Booking */}
                        <a
                            href="https://www.booking.com/hotel/mx/casa-ttorrez.es-mx.html?label=es-mx-booking-desktop-0fsZRFl8FBmL0WPvvclzKwS652829001763%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9216074%3Ali%3Adec%3Adm&gclid=Cj0KCQiAgbnKBhDgARIsAGCDdlfUI0Y5fURIEbMhVqbve6TrHgL8vZC4YEHUHkAMF9OTzOZXokU63F8aAv9uEALw_wcB&aid=2311236&ucfs=1&arphpl=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Booking.com_Icon_2022.svg"
                                alt="Booking.com"
                                className="h-7"
                            />
                        </a>

                    </div>

                    {/* SÍGUENOS */}
                    <h3 className="text-lg font-semibold mb-4">
                        Síguenos
                    </h3>

                    <div className="flex gap-6 text-white">
                        <a href="https://www.facebook.com/casattorrez" target="_blank" className="hover:text-yellow-200 transition">
                            <Facebook size={28} />
                        </a>

                        <a href="https://www.instagram.com/casattorrez/" target="_blank" className="hover:text-yellow-200 transition">
                            <Instagram size={28} />
                        </a>

                        <a href="https://www.tiktok.com/@casattorrez?lang=es-419" target="_blank" className="hover:text-yellow-200 transition">
                            <FaTiktok size={26} />
                        </a>
                    </div>
                </div>

                {/* CONTACTO */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <h3 className="text-lg font-semibold mb-4">Contacto</h3>

                    {/* Dirección */}
                    <div className="flex items-start gap-2 mb-2 text-white/90">
                        <MapPin size={22} className="flex-shrink-0 mt-1" />
                        <span>
                            Calzada de la Presa #10, Zona Centro Histórico,<br />
                            San Miguel de Allende, Guanajuato, México
                        </span>
                    </div>

                    {/* Teléfono fijo */}
                    <a
                        href="tel:4151211483"
                        className="flex items-start gap-2 mb-2 text-white/90 hover:text-yellow-200 transition"
                    >
                        <Phone size={22} className="flex-shrink-0 mt-1" />
                        <span>415 121 1483</span>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/524151395556"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-2 mb-2 text-white/90 hover:text-yellow-200 transition"
                    >
                        <FaWhatsapp size={22} className="flex-shrink-0 mt-1" />
                        <span>+52 415 139 5556</span>
                    </a>

                    {/* Email */}
                    <div className="flex items-start gap-2 text-white/90">
                        <Mail size={22} className="flex-shrink-0 mt-1" />
                        <span>info@casatorrez.com</span>
                    </div>
                </div>

                {/* NAVEGACIÓN */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-4">Navegación</h3>
                    <ul className="space-y-2 text-white/90">
                        <li><a href="/inicio" className="hover:text-yellow-200 transition">Inicio</a></li>
                        <li><a href="/galeria" className="hover:text-yellow-200 transition">Habitaciones</a></li>
                        <li><a href="/nosotros" className="hover:text-yellow-200 transition">Nuestra Historia</a></li>
                        <li><a href="/servicios" className="hover:text-yellow-200 transition">Servicios</a></li>
                        <li><a href="/contacto" className="hover:text-yellow-200 transition">Contacto</a></li>
                    </ul>
                </div>

            </div>

            {/* LINEA DIVISORIA */}
            <div className="w-[90%] mx-auto h-[1px] bg-white/40 mt-10 mb-5"></div>

            {/* COPYRIGHT */}
            <div className="text-center text-white/80 text-sm space-y-2">
                <p>
                    © {new Date().getFullYear()} Casa Ttorrez — Todos los derechos reservados.
                </p>

                <a
                    href="/terminos"
                    className="underline hover:text-yellow-200 transition text-xs"
                >
                    Términos y Condiciones
                </a>
            </div>

        </footer>
    );
};
