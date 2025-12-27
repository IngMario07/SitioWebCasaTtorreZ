import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

// IMÁGENES (ajusta rutas)
import h1 from "../assets/images/LogoTCafe.png";
import h2 from "../assets/images/LogoTCafe.png";
import h3 from "../assets/images/LogoTCafe.png";
import h4 from "../assets/images/LogoTCafe.png";

const timeline = [
  {
    year: "Nuestros inicios",
    title: "Una casa con historia",
    text: "Casa Ttorrez nace como una vivienda tradicional en el corazón del Centro Histórico de San Miguel de Allende, conservando su arquitectura colonial y su esencia familiar.",
    image: h1,
  },
  {
    year: "Transformación",
    title: "De hogar a hospedaje",
    text: "Con el paso del tiempo, la casa fue adaptada cuidadosamente para recibir visitantes, manteniendo elementos originales como muros de cantera y bóvedas tradicionales.",
    image: h2,
  },
  {
    year: "Crecimiento",
    title: "Espacios pensados para el descanso",
    text: "Se acondicionaron habitaciones cómodas y funcionales, enfocadas en brindar descanso, privacidad y una experiencia auténtica para cada huésped.",
    image: h3,
  },
  {
    year: "Hoy",
    title: "Hospitalidad con identidad",
    text: "Actualmente, Casa Ttorrez recibe a viajeros de todo el mundo que buscan una estancia tranquila, bien ubicada y con el encanto propio de San Miguel de Allende.",
    image: h4,
  },
];

export const Nosotros = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#B0493B]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Nuestra Historia
          </h1>
          <p className="max-w-2xl mx-auto text-white/90 text-lg">
            Un espacio con raíces, tradición y hospitalidad en el corazón de
            San Miguel de Allende.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto"
        >
          Casa Ttorrez es más que un lugar para hospedarse. Es una casa con
          historia, cuidadosamente conservada y adaptada para ofrecer una
          experiencia cálida, auténtica y cercana. Cada rincón refleja el
          carácter colonial de la ciudad y el compromiso por brindar un trato
          humano y personalizado.
        </motion.p>
      </section>

      {/* TIMELINE */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-[#B0493B] text-center mb-20">
            Nuestra evolución
          </h2>

          <div className="space-y-24">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGEN */}
                <div className="overflow-hidden rounded-3xl shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />
                </div>

                {/* TEXTO */}
                <div>
                  <span className="inline-block text-sm uppercase tracking-widest text-[#B0493B] mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="py-24 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-[#B0493B] mb-6"
        >
          Nuestra esencia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          En Casa Ttorrez creemos en la hospitalidad cercana, en los espacios
          que cuentan historias y en ofrecer un descanso auténtico en una de
          las ciudades más emblemáticas de México.
        </motion.p>
      </section>

      <Footer />
    </>
  );
};
