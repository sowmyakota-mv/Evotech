// src/pages/EnterpriseSoftwareIntegration.tsx

import ScrollAnimation from "../components/Animations/ScrollAnimations";

export function EnterpriseSoftwareIntegration() {
  return (
    <main id="/services/enterprise-software" className="pt-16 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-700 to-blue-600 text-white py-24 text-center overflow-hidden">
        <ScrollAnimation direction="up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise Software &amp; Integration
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Streamline operations, connect systems, and propel your business forward with tailored enterprise-grade solutions.
          </p>
        </ScrollAnimation>
      </section>

      {/* Overview Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-6 text-teal-700">
            What We Offer
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Evotech Solutions, we deliver enterprise software &amp; integration services designed to unify your IT ecosystem and increase business agility. Whether you’re consolidating legacy systems, building new platforms, or integrating across services, we provide robust and scalable software tailored to your unique workflows.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From end-to-end project planning through deployment and ongoing support, we ensure your software infrastructure becomes a strategic asset  delivering performance, reliability, and value.
          </p>
        </ScrollAnimation>
      </section>

      {/* Key Capabilities Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-semibold text-center text-teal-700 mb-12">
              Core Capabilities
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Software Development",
                desc: "Building applications tailored exactly to your business logic, processes and growth goals.",
              },
              {
                title: "System Integration & APIs",
                desc: "Connecting disparate systems, enabling seamless data flow and real-time visibility across platforms.",
              },
              {
                title: "Legacy Modernization",
                desc: "Upgrading and consolidating outdated infrastructure into modern, maintainable systems with less risk.",
              },
              {
                title: "Cloud & Hybrid Deployments",
                desc: "Deploying enterprise applications in clouds or hybrid models to boost scalability and resilience.",
              },
              {
                title: "Enterprise DevOps & Automation",
                desc: "Automating build, release and monitoring processes to accelerate delivery and ensure quality at scale.",
              },
              {
                title: "Support, Maintenance & Governance",
                desc: "Providing ongoing support, monitoring, security, and governance to protect and optimize your investment.",
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

      {/* Process & Approach Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-8 text-teal-700">
            Our Approach
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollAnimation direction="left">
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li><strong>Discovery & Strategy:</strong> Define goals, architecture and roadmap.</li>
              <li><strong>Design & Prototyping:</strong> Model key workflows and interfaces.</li>
              <li><strong>Development & Integration:</strong> Build core modules, integrate systems and APIs.</li>
            </ul>
          </ScrollAnimation>
          <ScrollAnimation direction="right">
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li><strong>Deployment & Transition:</strong> Move to production, ensure security and support.</li>
              <li><strong>Optimization & Scaling:</strong> Monitor, refine and scale systems as business grows.</li>
              <li><strong>Governance & Maintenance:</strong> Ongoing support, updates and compliance management.</li>
            </ul>
          </ScrollAnimation>
        </div>
      </section>

      {/* Case/Highlight Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-semibold mb-6 text-teal-700">
              Why Choose Us for Enterprise Solutions
            </h2>
            <p className="text-gray-700 mb-8">
              With a deep understanding of business operations and technology, Evotech Solutions brings together strategic insight, technical excellence and trusted delivery to support complex enterprise needs.
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Security & Compliance",
                desc: "We embed best-practice security and compliance into all software we deliver.",
              },
              {
                icon: "🚀",
                title: "Performance & Scalability",
                desc: "Enterprise systems built to perform today and scale tomorrow.",
              },
              {
                icon: "🤝",
                title: "Long-Term Partnership",
                desc: "We act as your technology partner, not just a vendor, to ensure sustained impact.",
              },
            ].map((val, idx) => (
              <ScrollAnimation key={idx} direction="up" delay={idx * 0.1}>
                <div className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
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
            Ready to Transform Your Enterprise Systems?
          </h2>
          <p className="mb-8 opacity-90">
            Let’s modernize your software ecosystem and unlock new levels of business value.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-white text-teal-600 font-medium rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </ScrollAnimation>
      </section>
    </main>
  );
}
