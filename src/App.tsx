import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, MapPin, Instagram, Mail, Sparkles } from "lucide-react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipo: "",
    frecuencia: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.tipo || !formData.frecuencia) return;
    console.log("Invitation request submitted:", formData);
    setFormSubmitted(true);
  };

  // Curated editorial images — botanicals, textures, interiors
  const images = {
    // Hero: manos artesanas con ramos — gran formato
    hero: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=85&w=1600&auto=format&fit=crop",
    // Manifesto: tallo solitario en florero de vidrio sobre mesa de piedra
    manifesto: "https://images.unsplash.com/photo-1490750967868-88df5691cc5f?q=85&w=1200&auto=format&fit=crop",
    // Experiencia 1: amanecer, flores con rocío
    experience1: "https://images.unsplash.com/photo-1508784785869-4a1b2823621a?q=85&w=1200&auto=format&fit=crop",
    // Experiencia 2: tallos en agua, vidrio, luz
    experience2: "https://images.unsplash.com/photo-1551248429-40975aa4de74?q=85&w=1200&auto=format&fit=crop",
    // Experiencia 3: manos envolviendo ramo en papel
    experience3: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=85&w=1200&auto=format&fit=crop",
    // Experiencia 4: florero minimalista, luz de ventana
    experience4: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?q=85&w=1200&auto=format&fit=crop",
    // Rituales residencial: mesa de mármol con flores, luz de mañana
    ritualHogar: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=85&w=1400&auto=format&fit=crop",
    // Rituales negocio: bodega, hotel boutique, estética Mendoza
    ritualEspacios: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=85&w=1400&auto=format&fit=crop",
    // Imagen emocional breakthrough — ranúnculos, lino, packaging premium
    emotionalBreakthrough: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=85&w=2400&auto=format&fit=crop",
    // Imagen de cierre antes del formulario — interior minimalista, calma
    preForm: "https://images.unsplash.com/photo-1587334206501-11f37d7b1ec9?q=85&w=2400&auto=format&fit=crop",
  };

  // Variantes de animación — slow, cinematic
  const fadeIn = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } },
  };
  const fadeInSlow = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.8, ease: "easeOut" } },
  };

  return (
    <div className="paper-grain min-h-screen bg-cream text-ink font-sans relative overflow-x-hidden selection:bg-kraft selection:text-ink">

      {/* ─── NAVIGATION ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 transition-all duration-700 ${
          scrolled
            ? "bg-cream/92 backdrop-blur-sm shadow-[0_1px_0_rgba(216,199,160,0.35)] py-4"
            : "bg-transparent py-7"
        }`}
      >
        <a href="#" className="font-serif text-xl md:text-2xl tracking-[0.32em] font-semibold text-ink hover:opacity-70 transition-opacity duration-500">
          MARGARITÉ
        </a>

        <div className="hidden md:flex items-center gap-12 text-[11px] tracking-[0.2em] uppercase font-light text-ink-soft">
          <a href="#filosofia" className="hover:text-ink transition-colors duration-400">Filosofía</a>
          <a href="#experiencia" className="hover:text-ink transition-colors duration-400">La Experiencia</a>
          <a href="#rituales" className="hover:text-ink transition-colors duration-400">Rituales</a>
          <a href="#membresia" className="hover:text-ink transition-colors duration-400">Membresía</a>
        </div>

        <a
          href="#membresia"
          className="text-[10.5px] tracking-[0.2em] uppercase font-medium border border-ink/60 px-5 py-2.5 hover:bg-ink hover:text-cream hover:border-ink transition-all duration-500"
        >
          Solicitar Acceso
        </a>
      </nav>

      {/* ─── HERO — Editorial split, imagen a sangre ─── */}
      <header className="min-h-screen grid grid-cols-1 lg:grid-cols-[52%_48%] relative">

        {/* Copy — columna izquierda */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:pl-24 lg:pr-16 pt-32 pb-20 lg:py-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col items-start"
          >
            {/* Monograma floral SVG — detalle premium */}
            <div className="mb-10 w-14 h-14 opacity-80">
              <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
                <g>
                  <path className="stroke-gold stroke-[1.5] fill-none" d="M60 60 C60 30 42 22 42 22 C42 22 60 14 60 60" />
                  <path className="stroke-gold stroke-[1.5] fill-none" d="M60 60 C60 30 78 22 78 22 C78 22 60 14 60 60" />
                  <path className="stroke-gold stroke-[1.5] fill-none" d="M60 60 C90 60 98 42 98 42 C98 42 106 60 60 60" />
                  <path className="stroke-gold stroke-[1.5] fill-none" d="M60 60 C90 60 98 78 98 78 C98 78 106 60 60 60" />
                  <path className="stroke-gold stroke-[1.5] fill-none" d="M60 60 C60 90 78 98 78 98 C78 98 60 106 60 60" />
                  <path className="stroke-gold stroke-[1.5] fill-none" d="M60 60 C60 90 42 98 42 98 C42 98 60 106 60 60" />
                  <path className="stroke-gold stroke-[1.5] fill-none" d="M60 60 C30 60 22 78 22 78 C22 78 14 60 60 60" />
                  <path className="stroke-gold stroke-[1.5] fill-none" d="M60 60 C30 60 22 42 22 42 C22 42 14 60 60 60" />
                </g>
                <circle cx="60" cy="60" r="5" className="fill-gold" />
              </svg>
            </div>

            <span className="section-eyebrow mb-6 block">Mendoza · Flores de Origen</span>

            <h1 className="font-serif font-light text-ink tracking-tight leading-[1.03] mb-8"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
              Flores que <br />
              <em className="font-light text-kraft-deep not-italic" style={{ fontStyle: "italic" }}>respiran calma.</em>
            </h1>

            {/* Separador dorado fino */}
            <div className="gold-rule w-16 mb-8" />

            <p className="font-sans text-base text-ink-soft font-light leading-[1.75] max-w-md mb-12">
              Suscripción floral premium en Mendoza. Del campo a tu mesa en 24 horas, sin intermediarios ni transportes acelerados. Un ritmo lento que respeta la tierra.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#membresia"
                className="inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.2em] uppercase font-medium bg-ink text-cream hover:bg-kraft-deep px-8 py-4 transition-all duration-500"
              >
                Solicitar Acceso <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#filosofia"
                className="inline-flex items-center justify-center text-[11px] tracking-[0.18em] uppercase font-light text-ink-soft hover:text-ink px-6 py-4 transition-colors duration-400"
              >
                Nuestra Filosofía
              </a>
            </div>
          </motion.div>
        </div>

        {/* Imagen — columna derecha a sangre completa */}
        <div className="relative h-[60vh] lg:h-screen overflow-hidden img-cinematic-container">
          <motion.img
            src={images.hero}
            alt="Manos artesanas arreglando flores frescas de Mendoza"
            className="w-full h-full object-cover img-cinematic grayscale-[12%] brightness-[94%] contrast-[103%]"
            referrerPolicy="no-referrer"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Marco editorial interior */}
          <div className="absolute inset-5 border border-white/12 pointer-events-none z-10" />

          {/* Crédito editorial */}
          <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-cream/55 z-10">
            <span className="w-6 h-[1px] bg-cream/40 inline-block" />
            Mendoza Floral, Est. 2026
          </div>
        </div>
      </header>

      {/* ─── MANIFIESTO — Layout editorial completo ─── */}
      <section id="filosofia" className="border-t border-line/40 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[90vh]">

          {/* Columna izquierda: cita editorial */}
          <motion.div
            className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-28 lg:py-36 bg-cream"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12%" }}
            variants={fadeIn}
          >
            <span className="section-eyebrow mb-10 block">El Manifiesto</span>

            <blockquote className="font-serif font-light italic text-ink leading-[1.6] tracking-wide mb-14"
                        style={{ fontSize: "clamp(1.35rem, 2.8vw, 2.1rem)" }}>
              "Creemos en la belleza de lo que no busca llamar la atención. En la flor que se corta al amanecer y descansa sobre tu mesa antes de que termine el día.
              <br /><br />
              El hogar es un templo. Un refugio de aire y calma. Nuestros ramos no son adornos; son el latido silencioso de la naturaleza que entra en tu casa para recordarte que lo verdaderamente valioso siempre se toma su tiempo."
            </blockquote>

            {/* Separador con punto — microdetalle de lujo */}
            <div className="dot-rule">
              <span className="dot-rule-dot" />
            </div>

            <p className="font-serif text-sm italic text-kraft-deep mt-8 tracking-wide">
              — Margarité Studio, Mendoza
            </p>
          </motion.div>

          {/* Columna derecha: imagen editorial a sangre */}
          <div className="hidden lg:block relative overflow-hidden img-cinematic-container">
            <motion.img
              src={images.manifesto}
              alt="Tallo floral en florero de vidrio — luz natural"
              className="absolute inset-0 w-full h-full object-cover img-cinematic grayscale-[8%] brightness-[93%]"
              referrerPolicy="no-referrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInSlow}
            />
            <div className="absolute inset-0 bg-cream-warm/8 pointer-events-none" />
          </div>

        </div>
      </section>

      {/* ─── VALOR — Grid editorial tipo magazine ─── */}
      <section className="py-32 md:py-48 bg-cream-warm/20 border-t border-line/30">
        <div className="max-w-6xl mx-auto px-8 md:px-16">

          <motion.div
            className="mb-20 md:mb-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12%" }}
            variants={fadeIn}
          >
            <span className="section-eyebrow mb-4 block">Por Qué Margarité</span>
            <h2 className="font-serif font-light text-ink leading-[1.05]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              Lo simple florece.<br />
              <span className="text-kraft-deep italic">Y lo fresco se siente en el aire.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-line/60">

            {[
              {
                n: "01",
                title: "Recién Cortadas",
                body: "Cortadas en el cinturón verde al amanecer, en tu hogar al atardecer. Frescura intacta que perdura hasta el triple de tiempo que una flor sometida a largas cámaras de frío y traslados nacionales.",
                nota: "Vida en florero: 15 a 20 días",
              },
              {
                n: "02",
                title: "Sin Intermediarios",
                body: "Sostenemos un vínculo directo con los productores locales del oasis de Mendoza. Sin cámaras de acopio ni intermediarios. Una cadena ultra corta y transparente que apoya el trabajo de nuestra tierra.",
                nota: "Comercio directo y justo",
              },
              {
                n: "03",
                title: "Especies Silvestres",
                body: "Lisianthus, dalias silvestres, margaritas imperiales y ramas perfumadas. Una paleta botánica cambiante que rinde homenaje a cada estación, lejos de la rigidez de las flores de catálogo plástico.",
                nota: "Paleta curada por floristas",
              },
            ].map((item, i) => (
              <motion.div
                key={item.n}
                className={`py-14 md:py-20 flex flex-col justify-between border-b md:border-b-0 ${
                  i < 2 ? "md:border-r border-line/50" : ""
                } ${i > 0 ? "md:px-12" : "md:pr-12"}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-8%" }}
                variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 1.4, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] } } }}
              >
                <div>
                  <div className="font-serif text-5xl text-line font-light mb-8 leading-none select-none">
                    {item.n}
                  </div>
                  <h3 className="font-serif text-2xl font-light text-ink mb-5">{item.title}</h3>
                  <p className="font-sans text-sm text-ink-soft font-light leading-[1.8]">{item.body}</p>
                </div>
                <div className="mt-10">
                  <div className="gold-rule w-8 mb-4" />
                  <span className="font-serif text-xs italic text-kraft-deep">{item.nota}</span>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ─── LA EXPERIENCIA — Alternado editorial, paso a paso ─── */}
      <section id="experiencia" className="py-32 md:py-52 bg-cream border-t border-line/30">
        <div className="max-w-6xl mx-auto px-8 md:px-16">

          <motion.div
            className="mb-28 md:mb-40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12%" }}
            variants={fadeIn}
          >
            <span className="section-eyebrow mb-5 block">El Recorrido</span>
            <h2 className="font-serif font-light text-ink mb-4"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
              Del campo al altar del hogar
            </h2>
            <p className="font-sans text-sm text-ink-soft font-light leading-[1.8] max-w-sm mt-2">
              Un ritual invisible de paciencia, cuidado y respeto que culmina en tu espacio cotidiano.
            </p>
          </motion.div>

          <div className="space-y-40 md:space-y-60">

            {/* Paso 1 — imagen izquierda */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fadeIn}
            >
              <div className="lg:col-span-7 order-2 lg:order-1 overflow-hidden img-cinematic-container aspect-[5/4]">
                <img
                  src={images.experience1}
                  alt="Corte floral al amanecer con rocío"
                  className="w-full h-full object-cover img-cinematic grayscale-[8%] brightness-[96%]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
                <div className="gold-rule w-6 mb-6" />
                <span className="font-serif text-base italic text-kraft-deep mb-3 block">01 — El Amanecer</span>
                <h3 className="font-serif font-light text-ink mb-6" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}>
                  Corte bajo el rocío
                </h3>
                <p className="font-sans text-sm text-ink-soft font-light leading-[1.85] max-w-sm">
                  Las flores se cosechan manualmente a primera hora de la mañana, cuando la planta retiene su mayor hidratación y energía. Este simple respeto al ciclo natural multiplica la longevidad de cada ramo.
                </p>
              </div>
            </motion.div>

            {/* Paso 2 — imagen derecha */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fadeIn}
            >
              <div className="lg:col-span-5 flex flex-col justify-center lg:pl-8">
                <div className="gold-rule w-6 mb-6" />
                <span className="font-serif text-base italic text-kraft-deep mb-3 block">02 — La Curaduría</span>
                <h3 className="font-serif font-light text-ink mb-6" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}>
                  Selección pausada
                </h3>
                <p className="font-sans text-sm text-ink-soft font-light leading-[1.85] max-w-sm">
                  Revisamos tallo por tallo. Descartamos imperfecciones estructurales y seleccionamos solo aquellos pimpollos listos para abrirse de forma gradual en tu florero. Limpieza y cuidado extremo.
                </p>
              </div>
              <div className="lg:col-span-7 overflow-hidden img-cinematic-container aspect-[5/4]">
                <img
                  src={images.experience2}
                  alt="Selección de tallos limpios en agua fresca"
                  className="w-full h-full object-cover img-cinematic grayscale-[8%] brightness-[96%]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Paso 3 — imagen izquierda */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fadeIn}
            >
              <div className="lg:col-span-7 order-2 lg:order-1 overflow-hidden img-cinematic-container aspect-[5/4]">
                <img
                  src={images.experience3}
                  alt="Manos atando el ramo con papel kraft"
                  className="w-full h-full object-cover img-cinematic grayscale-[8%] brightness-[96%]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
                <div className="gold-rule w-6 mb-6" />
                <span className="font-serif text-base italic text-kraft-deep mb-3 block">03 — El Oficio</span>
                <h3 className="font-serif font-light text-ink mb-6" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}>
                  Armado con delicadeza
                </h3>
                <p className="font-sans text-sm text-ink-soft font-light leading-[1.85] max-w-sm">
                  Nuestros floristas diseñan composiciones asimétricas, orgánicas y ligeras. Envolvemos cada ramo en papel kraft reciclado de alto gramaje y lo aseguramos con cintas de algodón natural. Cero plástico.
                </p>
              </div>
            </motion.div>

            {/* Paso 4 — imagen derecha */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fadeIn}
            >
              <div className="lg:col-span-5 flex flex-col justify-center lg:pl-8">
                <div className="gold-rule w-6 mb-6" />
                <span className="font-serif text-base italic text-kraft-deep mb-3 block">04 — El Ritual</span>
                <h3 className="font-serif font-light text-ink mb-6" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}>
                  Apertura en tu mesa
                </h3>
                <p className="font-sans text-sm text-ink-soft font-light leading-[1.85] max-w-sm">
                  El viaje concluye los jueves. Entregamos en transporte propio y directo. Colocarlas en agua fresca inicia un ritual de calma en tu espacio que te acompañará día tras día.
                </p>
              </div>
              <div className="lg:col-span-7 overflow-hidden img-cinematic-container aspect-[5/4]">
                <img
                  src={images.experience4}
                  alt="Ramo en florero minimalista, interior sereno"
                  className="w-full h-full object-cover img-cinematic grayscale-[8%] brightness-[96%]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── RITUALES — Suscripciones, layout editorial alternado ─── */}
      <section id="rituales" className="py-32 md:py-52 bg-cream-warm/15 border-t border-line/30">
        <div className="max-w-6xl mx-auto px-8 md:px-16">

          <motion.div
            className="mb-24 md:mb-36"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12%" }}
            variants={fadeIn}
          >
            <span className="section-eyebrow mb-5 block">Nuestros Servicios</span>
            <h2 className="font-serif font-light text-ink"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
              Los Rituales de Entrega
            </h2>
          </motion.div>

          <div className="space-y-40 md:space-y-56">

            {/* Residencial — imagen izquierda */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fadeIn}
            >
              <div className="lg:col-span-5 aspect-[3/4] overflow-hidden img-cinematic-container relative editorial-frame">
                <img
                  src={images.ritualHogar}
                  alt="Mesa de mármol con flores frescas, luz de mañana"
                  className="w-full h-full object-cover img-cinematic grayscale-[5%] brightness-[95%]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-7">
                <span className="section-eyebrow mb-4 block">Para tu Casa</span>
                <h3 className="font-serif font-light text-ink mb-8"
                    style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                  Suscripción Residencial
                </h3>
                <p className="font-sans text-base text-ink-soft font-light leading-[1.85] mb-10 max-w-xl">
                  Ramos estacionales diseñados para habitar tu living, mesa de entrada o comedor. Olvidate de salir a buscar flores frescas; de manera quincenal o semanal, un arreglo llega listo para ser colocado en tu florero.
                </p>

                <div className="space-y-5 mb-12">
                  {[
                    "Diseñados listos para florero, con tallos ya limpios y podados.",
                    "Paleta de colores que evoluciona junto con el paisaje de Mendoza.",
                    "Flexibilidad total: pausás, cancelás o modificás con un mensaje.",
                  ].map((item) => (
                    <div key={item} className="flex gap-5 items-start">
                      <div className="mt-2 w-[5px] h-[5px] rounded-full border border-kraft-deep flex-shrink-0" />
                      <p className="font-sans text-sm text-ink-soft font-light leading-[1.7]">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-line/50 grid grid-cols-2 gap-8 max-w-sm">
                  <div>
                    <span className="section-eyebrow text-[9.5px] mb-1 block">Frecuencias</span>
                    <span className="font-serif text-lg text-ink font-light">Semanal · Quincenal</span>
                  </div>
                  <div>
                    <span className="section-eyebrow text-[9.5px] mb-1 block">Logística</span>
                    <span className="font-serif text-lg text-ink font-light">Jueves por la tarde</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Corporativo — imagen derecha */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fadeIn}
            >
              <div className="lg:col-span-7 order-2 lg:order-1">
                <span className="section-eyebrow mb-4 block">Para tu Negocio</span>
                <h3 className="font-serif font-light text-ink mb-8"
                    style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                  Suscripción para<br />Espacios de Prestigio
                </h3>
                <p className="font-sans text-base text-ink-soft font-light leading-[1.85] mb-10 max-w-xl">
                  Bodegas boutique, hoteles de diseño y espacios gastronómicos selectos. La presencia botánica no es un mero adorno; es parte de la arquitectura sensitiva de tu espacio. Diseñamos arreglos con carácter escultórico y minimalista.
                </p>

                <div className="space-y-5 mb-12">
                  {[
                    "Relevamiento del espacio físico por nuestro director de arte.",
                    "Flores con mayor resistencia para mantener una apariencia impecable.",
                    "Facturación corporativa mensual simplificada y soporte prioritario.",
                  ].map((item) => (
                    <div key={item} className="flex gap-5 items-start">
                      <div className="mt-2 w-[5px] h-[5px] rounded-full border border-kraft-deep flex-shrink-0" />
                      <p className="font-sans text-sm text-ink-soft font-light leading-[1.7]">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-line/50 grid grid-cols-2 gap-8 max-w-sm">
                  <div>
                    <span className="section-eyebrow text-[9.5px] mb-1 block">Diseño</span>
                    <span className="font-serif text-lg text-ink font-light">Escultórico a Medida</span>
                  </div>
                  <div>
                    <span className="section-eyebrow text-[9.5px] mb-1 block">Reposición</span>
                    <span className="font-serif text-lg text-ink font-light">Día de recambio fijo</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2 aspect-[3/4] overflow-hidden img-cinematic-container relative editorial-frame">
                <img
                  src={images.ritualEspacios}
                  alt="Bodega boutique de Mendoza con decoración floral de lujo"
                  className="w-full h-full object-cover img-cinematic grayscale-[5%] brightness-[95%]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── EL COMPÁS — Día de entrega, tipografía grande ─── */}
      <section className="py-36 md:py-52 bg-ink text-cream border-t border-ink">
        <div className="max-w-4xl mx-auto px-8 md:px-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
            variants={fadeIn}
          >
            <span className="section-eyebrow text-gold/80 mb-6 block">El Compás</span>

            <h2 className="font-serif font-light leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              Los jueves,{" "}
              <em className="text-gold font-light" style={{ fontStyle: "italic" }}>siempre.</em>
            </h2>

            <div className="gold-rule w-12 mx-auto mb-6 opacity-50" />

            <p className="font-sans text-sm text-cream/60 font-light mt-2 max-w-xs mx-auto leading-[1.85]">
              Ordenamos las rutas logísticas con cadencia tranquila. El jueves es el día sagrado de la flor en Mendoza.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-16 sm:gap-32 mt-20 pt-20 border-t border-cream/8">
              <div className="flex flex-col items-center">
                <span className="font-serif font-light text-gold leading-none mb-3"
                      style={{ fontSize: "clamp(4rem, 10vw, 7rem)" }}>
                  4
                </span>
                <span className="section-eyebrow text-cream/40 text-[10px]">Entregas al mes · Semanal</span>
              </div>
              <div className="h-12 w-[1px] vertical-rule hidden sm:block" />
              <div className="flex flex-col items-center">
                <span className="font-serif font-light text-gold leading-none mb-3"
                      style={{ fontSize: "clamp(4rem, 10vw, 7rem)" }}>
                  2
                </span>
                <span className="section-eyebrow text-cream/40 text-[10px]">Entregas al mes · Quincenal</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── IMAGEN EMOCIONAL GRANDE — Pausa visual antes del cierre ─── */}
      <section className="relative overflow-hidden bg-cream-warm" style={{ height: "92vh" }}>
        <motion.img
          src={images.emotionalBreakthrough}
          alt="Ranúnculos delicados envueltos en lino premium"
          className="absolute inset-0 w-full h-full object-cover grayscale-[8%] brightness-[90%] contrast-[106%]"
          referrerPolicy="no-referrer"
          initial={{ scale: 1.04, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Velo inferior para transición suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/5 to-transparent opacity-85" />
        {/* Marco editorial */}
        <div className="absolute inset-8 border border-white/8 pointer-events-none" />

        {/* Cita flotante */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full text-center px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="section-eyebrow text-ink-soft/70 mb-4 block">Margarité Mendoza</span>
            <p className="font-serif font-light italic text-ink max-w-xl mx-auto leading-[1.6]"
               style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)" }}>
              "La calma no se encuentra, se crea en la quietud de los espacios cotidianos."
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── IMAGEN PUENTE — Respiración antes del formulario ─── */}
      <section className="relative overflow-hidden bg-cream-warm/30 border-t border-line/20" style={{ height: "55vh" }}>
        <img
          src={images.preForm}
          alt="Interior minimalista con luz natural, calma y belleza"
          className="absolute inset-0 w-full h-full object-cover grayscale-[12%] brightness-[96%]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-cream/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="dot-rule mx-auto mb-8 justify-center">
              <span className="dot-rule-dot" />
            </div>
            <p className="font-serif font-light italic text-ink text-xl md:text-2xl tracking-wide">
              Un número selecto de cupos por zona.
            </p>
            <p className="font-sans text-xs text-ink-soft font-light mt-4 tracking-[0.16em] uppercase">
              Registrate para solicitar tu lugar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── INVITACIÓN PRIVADA — Formulario editorial ─── */}
      <section id="membresia" className="py-28 md:py-44 bg-cream border-t border-line/30">
        <div className="max-w-6xl mx-auto px-8 md:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-28 items-start">

            {/* Columna izquierda: texto exclusivo */}
            <motion.div
              className="lg:col-span-5 lg:sticky lg:top-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fadeIn}
            >
              <span className="section-eyebrow mb-5 block">Membresía Privada</span>
              <h2 className="font-serif font-light text-ink leading-[1.05] mb-8"
                  style={{ fontSize: "clamp(1.9rem, 3.8vw, 3rem)" }}>
                Acceso a la <br />
                <span className="italic font-light text-kraft-deep">ruta de entrega.</span>
              </h2>
              <p className="font-sans text-sm text-ink-soft font-light leading-[1.85] mb-6 max-w-sm">
                Cultivamos flores respetando la estacionalidad genuina del suelo de Mendoza. Por este motivo, nuestra disponibilidad de entrega residencial está estrictamente limitada a un número selecto de cupos por zona geográfica.
              </p>
              <p className="font-sans text-sm text-ink-soft font-light leading-[1.85] mb-12 max-w-sm">
                Registrate para solicitar tu ingreso. Evaluamos la cobertura y te contactamos en 48 horas con una propuesta personalizada para iniciar el ritual.
              </p>

              <div className="p-6 border border-line/60 bg-cream-warm/30">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-4 h-4 text-kraft-deep mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="section-eyebrow text-[9.5px] block mb-2">Zona de Cobertura Activa</span>
                    <p className="text-xs text-ink-soft font-light leading-[1.7]">
                      Mendoza Capital, Chacras de Coria, Vistalba, Godoy Cruz, Maipú y Luján de Cuyo.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Columna derecha: formulario como invitación */}
            <motion.div
              className="lg:col-span-7 bg-cream-warm/12 border border-line/70 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fadeIn}
            >
              {/* Marco interior doble — microdetalle de lujo */}
              <div className="absolute inset-[10px] border border-line/35 pointer-events-none" />

              <div className="p-8 md:p-14 lg:p-16 relative z-10">

                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="mb-12">
                        <h3 className="font-serif text-2xl md:text-3xl font-light text-ink mb-3">
                          Solicitud de Invitación
                        </h3>
                        <p className="section-eyebrow text-[10px] text-ink-soft/70">
                          Por favor, complete los datos para validar la ruta
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-10">

                        <div className="flex flex-col gap-2">
                          <label htmlFor="nombre" className="section-eyebrow text-[10px]">
                            Nombre y Apellido
                          </label>
                          <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            placeholder="María González"
                            required
                            className="w-full font-sans text-sm text-ink bg-transparent py-3.5 border-b border-line focus:border-kraft-deep outline-none transition-colors duration-500 placeholder-ink-soft/30 rounded-none"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="section-eyebrow text-[10px]">
                              Dirección de Email
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="maria@correo.com"
                              required
                              className="w-full font-sans text-sm text-ink bg-transparent py-3.5 border-b border-line focus:border-kraft-deep outline-none transition-colors duration-500 placeholder-ink-soft/30 rounded-none"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label htmlFor="telefono" className="section-eyebrow text-[10px]">
                              WhatsApp · Teléfono
                            </label>
                            <input
                              id="telefono"
                              name="telefono"
                              type="tel"
                              value={formData.telefono}
                              onChange={handleInputChange}
                              placeholder="+54 261 555 0000"
                              required
                              className="w-full font-sans text-sm text-ink bg-transparent py-3.5 border-b border-line focus:border-kraft-deep outline-none transition-colors duration-500 placeholder-ink-soft/30 rounded-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="flex flex-col gap-2">
                            <label htmlFor="tipo" className="section-eyebrow text-[10px]">
                              ¿Para qué espacio?
                            </label>
                            <div className="relative">
                              <select
                                id="tipo"
                                name="tipo"
                                value={formData.tipo}
                                onChange={handleInputChange}
                                required
                                className="w-full font-sans text-sm text-ink bg-transparent py-3.5 border-b border-line focus:border-kraft-deep outline-none transition-colors duration-500 appearance-none cursor-pointer rounded-none"
                              >
                                <option value="" disabled>Seleccione</option>
                                <option value="residencial">Mi Hogar · Particular</option>
                                <option value="bodega">Bodega · Viñedo</option>
                                <option value="hotel">Hotel de Diseño · Boutique</option>
                                <option value="gastronomia">Espacio Gastronómico</option>
                              </select>
                              <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-ink-soft/50 font-serif">↓</span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <label htmlFor="frecuencia" className="section-eyebrow text-[10px]">
                              Frecuencia Deseada
                            </label>
                            <div className="relative">
                              <select
                                id="frecuencia"
                                name="frecuencia"
                                value={formData.frecuencia}
                                onChange={handleInputChange}
                                required
                                className="w-full font-sans text-sm text-ink bg-transparent py-3.5 border-b border-line focus:border-kraft-deep outline-none transition-colors duration-500 appearance-none cursor-pointer rounded-none"
                              >
                                <option value="" disabled>Seleccione</option>
                                <option value="semanal">Semanal — 4 veces al mes</option>
                                <option value="quincenal">Quincenal — 2 veces al mes</option>
                                <option value="indeciso">Prefiero asesoramiento</option>
                              </select>
                              <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-ink-soft/50 font-serif">↓</span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4">
                          <button
                            type="submit"
                            className="w-full bg-ink text-cream py-4 px-8 tracking-[0.28em] uppercase text-[11px] font-medium border border-ink hover:bg-kraft-deep hover:border-kraft-deep transition-all duration-600 cursor-pointer text-center"
                          >
                            Enviar Solicitud de Membresía
                          </button>
                          <div className="text-center mt-6 flex items-center justify-center gap-2 text-[11px] text-kraft-deep italic font-serif">
                            <Sparkles className="w-3 h-3 text-gold-deep opacity-70" />
                            Un florista responderá personalmente en 48 horas.
                          </div>
                        </div>

                      </form>
                    </motion.div>

                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="text-center py-16"
                    >
                      <div className="mb-10 w-16 h-16 mx-auto">
                        <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
                          <path d="M60 60 C60 34 44 26 44 26 C44 26 60 18 60 60" className="stroke-gold stroke-[1.5] fill-none" />
                          <path d="M60 60 C86 60 94 44 94 44 C94 44 102 60 60 60" className="stroke-gold stroke-[1.5] fill-none" />
                          <path d="M60 60 C60 86 76 94 76 94 C76 94 60 102 60 60" className="stroke-gold stroke-[1.5] fill-none" />
                          <path d="M60 60 C34 60 26 76 26 76 C26 76 18 60 60 60" className="stroke-gold stroke-[1.5] fill-none" />
                          <circle cx="60" cy="60" r="6" className="fill-gold" />
                        </svg>
                      </div>

                      <div className="dot-rule mx-auto mb-10 justify-center">
                        <span className="dot-rule-dot" />
                      </div>

                      <h3 className="font-serif text-3xl font-light text-ink mb-5">
                        La invitación está en camino.
                      </h3>
                      <p className="font-sans text-sm text-ink-soft font-light leading-[1.85] max-w-xs mx-auto mb-10">
                        Gracias <span className="font-medium text-ink">{formData.nombre}</span>, hemos registrado tu interés. Nuestro florista principal analizará tu zona de entrega y te contactará directamente.
                      </p>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({ nombre: "", email: "", telefono: "", tipo: "", frecuencia: "" });
                        }}
                        className="text-[10px] tracking-[0.2em] uppercase font-medium border-b border-ink/40 pb-1 hover:text-kraft-deep hover:border-kraft-deep transition-colors duration-400"
                      >
                        Volver a la invitación
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-cream-warm/20 border-t border-line/50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start mb-20">

            <div className="md:col-span-4 space-y-5">
              <span className="font-serif text-2xl tracking-[0.3em] font-semibold text-ink block">
                MARGARITÉ
              </span>
              <p className="section-eyebrow text-[10px] text-ink-soft/70 block">
                Mendoza, Argentina · Lo simple florece
              </p>
              <div className="gold-rule w-8" />
              <div className="flex gap-5 text-ink-soft pt-1">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                   className="hover:text-ink transition-colors duration-400">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="mailto:hola@margarite.com" className="hover:text-ink transition-colors duration-400">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-4 space-y-4">
              <span className="section-eyebrow text-[10px] block mb-5">Suscripciones</span>
              <ul className="space-y-3 text-xs font-light text-ink-soft">
                {["Ritual Residencial", "Ritual Corporativo", "Zonas de Despacho", "Preguntas Frecuentes"].map((l, i) => (
                  <li key={l}>
                    <a href="#rituales" className="hover:text-ink transition-colors duration-400 tracking-wide">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 space-y-4 text-xs font-light text-ink-soft leading-[1.85]">
              <span className="section-eyebrow text-[10px] block mb-5">El Compromiso</span>
              <p>
                Cosechamos de manera consciente, pagando precios justos y sosteniendo el crecimiento del oasis productivo local. Envoltorios compostables y papel kraft 100% reciclado.
              </p>
              <p className="font-serif text-xs italic text-kraft-deep pt-2">
                La naturaleza es la verdadera obra de arte.
              </p>
            </div>

          </div>

          <div className="border-t border-line/35 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.18em] text-ink-soft/50 uppercase font-light">
            <p>© {new Date().getFullYear()} Margarité. Todos los derechos reservados.</p>
            <p>Diseño Editorial · Margarité Studio</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
