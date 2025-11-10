// src/components/KeyStats.tsx
import { motion } from "framer-motion";

export function KeyStats() {
  const stats = [
    { number: "120+", label: "Projects Delivered" },
    { number: "60+", label: "Clients Served" },
    { number: "40+", label: "Expert Professionals" },
    { number: "8+", label: "Years of Excellence" },
  ];

  return (
    <section className="py-20">
      <div className="w-[80%] mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Driving Digital Growth with Proven Results
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600  mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our consistent innovation and customer-centric approach have enabled us to deliver measurable success across industries, empowering businesses to scale smarter and faster.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-cyan-600 to-cyan-500 text-white rounded-2xl shadow-lg p-8 hover:scale-105 transform transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-4xl font-extrabold">{stat.number}</h3>
              <p className="text-sm font-medium mt-3 opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
