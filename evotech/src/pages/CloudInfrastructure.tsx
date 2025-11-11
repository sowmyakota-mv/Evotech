// src/pages/CloudInfrastructure.tsx
import { CopyCheck } from "lucide-react";
import ScrollAnimation from "../components/Animations/ScrollAnimations";

export function CloudInfrastructure() {
  return (
    <main id="/services/cloud-infrastructure" className="pt-16 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-700 to-blue-600 text-white py-24 text-center overflow-hidden">
        <ScrollAnimation direction="up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cloud & Infrastructure Services
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Hosting, scalability and infrastructure solutions engineered for modern businesses  designed to perform, protected to last.
          </p>
        </ScrollAnimation>
      </section>

      {/* Overview Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-6 text-teal-700">
            Why Cloud & Infrastructure Matter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In today’s digital-first world, your infrastructure is the backbone of your operations. We build cloud-native environments, scalable infrastructure, and resilient systems that support growth, innovation and security.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From virtualization to hybrid cloud models, from managed hosting to complete infrastructure transformation - we deliver solutions aligned with your business goals and technology roadmap.
          </p>
        </ScrollAnimation>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-semibold text-center text-teal-700 mb-12">
              Key Benefits of Our Cloud Approach
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Scalability & Elasticity",
                desc: "Automatically adjust resources as your business demands grow or change.",
              },
              {
                title: "Robust Security & Compliance",
                desc: "Enterprise-grade security with industry standards, audits and governance built-in.",
              },
              {
                title: "High Availability & Performance",
                desc: "Minimize downtime and deliver fast, reliable services to your users worldwide.",
              },
              {
                title: "Cost Efficiency & Optimization",
                desc: "Pay-as-you-go models, optimized resources and reduced infrastructure overhead.",
              },
              {
                title: "Global Reach & Edge Services",
                desc: "Deploy closer to your customers with cloud regions, CDNs and edge computing.",
              },
              {
                title: "Managed Infrastructure & Support",
                desc: "Full lifecycle management including monitoring, updates, backup and DR support.",
              },
            ].map((item, idx) => (
              <ScrollAnimation key={idx} direction={idx % 2 === 0 ? "left" : "right"}>
                <div className="h-full bg-gray-50 border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <h3 className="text-xl font-semibold text-teal-600 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Capabilities */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-8 text-teal-700">
            Our Infrastructure Capabilities
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollAnimation direction="left">
            <ul className="space-y-3 text-gray-700">{[
              "Cloud architectural design (public, private, hybrid)",
              "Virtualization & containerization (Docker, Kubernetes)",
              "Automated infrastructure provisioning & IaC",
              "Disaster recovery & business continuity planning",
              ].map((item, index)=>(
                <li key={index} className="flex items-start space-x-3">
                    <CopyCheck className="text-blue-600 w-5 h-5 mt-1"/>
                <span>{item}</span></li>
              ))}
            </ul>
          </ScrollAnimation>
          <ScrollAnimation direction="right">
            <ul className="space-y-3 text-gray-700">{[
              "Global deployment & content delivery networks (CDN)",
              "Managed cloud hosting & data-center services",
              "Monitoring, logging & alerting systems",
              "Compliance, security audits & operations governance",
              ].map((item, index)=>(
                <li key={index} className="flex items-start space-x-3">
                    <CopyCheck className="text-blue-600 w-5 h-5 mt-1"/>
                <span>{item}</span></li>
              ))}
            </ul>
          </ScrollAnimation>
        </div>
      </section>

      {/* Infrastructure Ecosystem */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-semibold mb-6 text-teal-700">
              Why Partner With Us
            </h2>
            <p className="text-gray-700 mb-8">
              We act as your technology partner  aligning infrastructure to your business strategy, enabling innovation, and providing ongoing support so your operations remain resilient and future-ready.
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Security-First Approach",
                desc: "From architecture to operations, security & resilience are built into every layer.",
              },
              {
                icon: "🌍",
                title: "Global Expertise",
                desc: "Deployments across regions, teams that understand global scale and local nuance.",
              },
              {
                icon: "📊",
                title: "Operational Excellence",
                desc: "Managed services, 24/7 support, optimized operations  so you focus on growth.",
              },
            ].map((val, idx) => (
              <ScrollAnimation key={idx} direction="up" delay={idx * 0.1}>
                <div className="h-full p-8 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
                  <div className="text-4xl mb-4">{val.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{val.title}</h4>
                  <p className="text-gray-600">{val.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16 text-center">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="mb-8 opacity-90">
            Let us help you create resilient, scalable, and future-proof infrastructure for your business.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-white text-teal-600 font-medium rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get a Free Consultation
          </a>
        </ScrollAnimation>
      </section>
    </main>
  );
}
