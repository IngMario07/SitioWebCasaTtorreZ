import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

export const Terminos = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[45vh] flex items-center justify-center bg-[#B0493B]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-white/90 text-lg">
            Casa TtorreZ
          </p>
        </motion.div>
      </section>

      {/* CONTENIDO */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="space-y-12 text-gray-700 leading-relaxed">

          {/* 1 */}
          <div>
            <h2 className="text-xl font-semibold text-[#B0493B] mb-3">
              1. Reservaciones y Pagos
            </h2>
            <p>
              Para garantizar su reservación, se requiere un depósito del 50%
              del total de su hospedaje dentro de los 3 días posteriores a la
              realización de la reserva.
            </p>
            <p className="mt-2">
              En caso de no recibir el depósito dentro de este plazo, la
              reservación será cancelada sin previo aviso, ya que no se realizan
              cargos automáticos, aun cuando se hayan proporcionado datos de
              tarjeta de crédito o débito.
            </p>
            <p className="mt-2">
              El pago total de la habitación deberá ser liquidado a la llegada
              del huésped.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-semibold text-[#B0493B] mb-3">
              2. Políticas de Cancelación y No Presentación
            </h2>
            <p>
              Si la cancelación se realiza con 1 día de anticipación a la fecha
              de llegada, se cobrará el 100% del importe total de la reservación,
              incluidos los impuestos.
            </p>
            <p className="mt-2">
              En caso de salida anticipada o de no presentarse el día de la
              reservación (No Show), no habrá reembolso y se considerará como
              cancelación.
            </p>
            <p className="mt-2">
              Una vez garantizada la reservación, no se realizarán descuentos
              por reducción en el número de huéspedes.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-semibold text-[#B0493B] mb-3">
              3. Depósito en Garantía
            </h2>
            <p>
              Al momento del registro (check-in), el huésped deberá dejar un
              depósito en efectivo de $500.00 MXN.
            </p>
            <p className="mt-2">
              Dicho depósito será devuelto al momento del check-out, siempre y
              cuando no existan daños en la habitación o en las instalaciones.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-semibold text-[#B0493B] mb-3">
              4. Horarios de Estancia
            </h2>
            <p>
              Check-in: 15:00 Horas (3:00 PM) a partir de la hora establecida por Casa TtorreZ.
            </p>
            <p className="mt-2">
              Check-out: 12:00 Horas (12:00 PM) hasta la hora establecida por Casa TtorreZ.
            </p>
            <p className="mt-2">
              Las llegadas fuera de horario deberán ser notificadas con
              anticipación y estarán sujetas a disponibilidad.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-semibold text-[#B0493B] mb-3">
              5. Reglamento Interno
            </h2>
            <p>
              Es obligatorio leer y cumplir con el reglamento interno de Casa
              TtorreZ al momento del registro.
            </p>
            <p className="mt-2">
              El desconocimiento del reglamento no exime de su cumplimiento.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-semibold text-[#B0493B] mb-3">
              6. Responsabilidades del Huésped
            </h2>
            <p>
              El huésped es responsable solidario de todos los servicios
              utilizados hasta la liquidación total de su factura.
            </p>
            <p className="mt-2">
              Los huéspedes serán responsables de cualquier daño o pérdida
              ocasionados en las habitaciones o instalaciones por ellos, sus
              acompañantes o cualquier persona bajo su responsabilidad.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-semibold text-[#B0493B] mb-3">
              7. Capacidad y Convivencia
            </h2>
            <p>
              No está permitido exceder el número de huéspedes registrados en la
              reservación.
            </p>
            <p className="mt-2">
              Se solicita mantener un ambiente de respeto y tranquilidad,
              evitando ruidos excesivos o conductas que alteren la convivencia.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl font-semibold text-[#B0493B] mb-3">
              8. Prohibiciones
            </h2>
            <p>
              Está estrictamente prohibido fumar dentro de las habitaciones y
              en las instalaciones de Casa TtorreZ.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl font-semibold text-[#B0493B] mb-3">
              9. Estacionamiento
            </h2>
            <p>
              El estacionamiento está sujeto a disponibilidad según temporada y
              tamaño del vehículo.
            </p>
            <p className="mt-2">
              Casa TtorreZ no se hace responsable por daños, robos o pérdidas
              ocurridas dentro del área de estacionamiento.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-xl font-semibold text-[#B0493B] mb-3">
              10. Objetos Personales
            </h2>
            <p>
              Casa TtorreZ no se hace responsable por la pérdida o daño de
              pertenencias personales y objetos de valor.
            </p>
          </div>

          {/* CIERRE */}
          <div className="pt-10 border-t text-center">
            <p className="text-sm text-gray-500">
              Al realizar una reservación, el huésped acepta los presentes
              Términos y Condiciones.
            </p>
            <p className="mt-4 font-medium text-[#B0493B]">
              Será un gusto recibirte. ¡Gracias por reservar con nosotros!
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};
