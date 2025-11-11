// src/components/WhyChooseUs.tsx
import { motion } from "framer-motion";
import { Users, Lightbulb, ShieldCheck, HeartHandshake } from "lucide-react";
import ScrollAnimation from "./Animations/ScrollAnimations";

export function WhyChooseUs() {
  const features = [
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Expert Team",
      desc: "Skilled professionals with deep technical and domain expertise.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
      title: "Innovative Solutions",
      desc: "We leverage emerging technologies to deliver future-ready solutions.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "Quality & Reliability",
      desc: "Every project is built with attention to quality, performance, and scalability.",
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-blue-600" />,
      title: "Client Satisfaction",
      desc: "We value long-term relationships built on trust and transparency.",
    },
  ];

  return (
    <ScrollAnimation direction="up">
    <section className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 ml-12 md:ml-24">
        {/* Left: Feature Grid (50% width) */}
        <div className="md:w-1/2 grid md:grid-cols-2  gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation direction="left">
            <motion.div
              key={index}
              className="h-full flex items-center p-6 bg-blue-80 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="flex-shrink-0 mr-6">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{feature.desc}</p>
              </div>
            </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Right: Title + Paragraph (30% width) */}
        <motion.div
          className="md:w-[36%] flex flex-col justify-center text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We bring together a team of industry experts with a passion for innovation and a commitment to delivering excellence at each stage of the project.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our approach is client-centric, ensuring customized solutions that meet unique business needs and challenges.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dedicated to quality, scalability, and long-term partnerships, we ensure your success is our priority.
          </p>
        </motion.div>
      </div>
    </section>
    </ScrollAnimation>
  );
}
