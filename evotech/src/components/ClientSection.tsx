// src/components/ClientsSection.tsx
import { motion } from "framer-motion";

export function ClientsSection() {
  const clients = [
    { name: "ABC University", logo: "/abc-logo.png" },
    { name: "Global Tech Co.", logo: "/global-logo.png" },
    { name: "DataCore Ltd.", logo: "/datacore.png" },
    { name: "BrightEdge Inc.", logo: "/brightedge-logo.png" },
    { name: "ShopEase", logo: "/shopease.png" },
    { name: "SmartManu Inc.", logo: "/smart.png" },
    { name: "RetailMasters", logo: "/retail.png" },
    { name: "BizConnect", logo: "/bixconnect.png" },
    { name: "SecureCorp", logo: "/securecorp.png" },
    { name: "HelpDesk Solutions", logo: "/helpdesk.png" },
  ];

  return (
    <section className="py-20 bg-white" id="clients">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Trusted Partners & Global Clients
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver end-to-end IT and digital solutions to organizations in over <span className="font-semibold text-blue-600">15+ countries</span>, collaborating with prestigious institutions and enterprises worldwide.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center  hover:grayscale-0 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 md:h-28 object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Global Reach Summary */}
        <div className="text-center mt-12 text-gray-700">
          🌍 Serving clients across <span className="text-blue-600 font-semibold">India, USA, UK, UAE & Australia</span>
        </div>
      </div>
    </section>
  );
}
