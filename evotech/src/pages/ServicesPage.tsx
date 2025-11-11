import { motion } from "framer-motion";
import ScrollAnimation from "../components/Animations/ScrollAnimations";

export function ServicesPage() {
  const services = [
    {
      icon: "💻",
      title: "Custom Web Development",
      desc: "Building fast, scalable, and secure web applications tailored to your business goals.",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: "🛒",
      title: "E-Commerce Solutions",
      desc: "Designing seamless online stores with optimized UX and conversion-driven strategies.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "⚙️",
      title: "Enterprise Software & Integration",
      desc: "Streamlining business operations with robust software and smooth system integration.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: "☁️",
      title: "Cloud & Infrastructure Services",
      desc: "Hosting, scaling, and managing cloud platforms for reliability and performance.",
      gradient: "from-sky-500 to-teal-500",
    },
    {
      icon: "📈",
      title: "Digital Marketing & SEO",
      desc: "Boosting online visibility with targeted campaigns and smart SEO practices.",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: "🎨",
      title: "Branding & Creative Design",
      desc: "Crafting memorable brand identities and visuals that inspire trust and engagement.",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      {/* Section Header */}
      <div className="relative max-w-6xl mx-auto px-6 text-center mb-20 z-10">
        <ScrollAnimation direction="up">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering businesses through innovative, scalable, and creative technology solutions designed for impact.
          </p>
        </ScrollAnimation>
      </div>

      {/* Services Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 z-10">
        {services.map((service, idx) => (
          <ScrollAnimation
            key={idx}
            direction={idx % 2 === 0 ? "left" : "right"}
            delay={idx * 0.1}
          >
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="p-8 h-full bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border border-blue-100 hover:shadow-2xl hover:bg-white transition-all"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="relative max-w-5xl mx-auto text-center mt-20 z-10">
        <ScrollAnimation direction="up">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            Let’s Build Something Great Together
          </motion.a>
        </ScrollAnimation>
      </div>
    </section>
  );
}
