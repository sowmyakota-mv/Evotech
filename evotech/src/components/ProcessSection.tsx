// src/components/Process.tsx
import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Code2, Rocket } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: <ClipboardList className="w-6 h-6 text-white" />,
      title: "Plan & Analyze",
      desc: "We collaborate with clients to define goals, requirements, and project scope.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-white" />,
      title: "Design & Develop",
      desc: "Our experts craft scalable designs and build robust, high-performance digital solutions.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-white" />,
      title: "Test & Deliver",
      desc: "We ensure every solution is tested for quality and delivered with complete support.",
    },
  ];

  return (
    <section className="py-20" id="process">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        <div className="relative flex justify-between max-w-4xl mx-auto">
          {/* Horizontal connecting line */}
          <div className="absolute top-5 left-6 right-6 h-1 bg-blue-300 rounded"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="relative z-10 max-w-xs flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 shadow-md">
                {step.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-700">{step.desc}</p>
              {/* Step number on top right for reference */}
              <span className="absolute -top-6 right-0 rounded-full bg-blue-600 text-white w-6 h-6 flex items-center justify-center font-bold text-sm ">
                {idx + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
