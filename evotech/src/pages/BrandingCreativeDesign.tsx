// src/pages/BrandingCreativeDesign.tsx
import { useNavigate } from "react-router-dom";
import ScrollAnimation from "../components/Animations/ScrollAnimations";

export function BrandingCreativeDesign() {
    const navigate=useNavigate()
  return (
    <main id="/services/branding-creative-design" className="pt-16 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-700 to-rose-500 text-white py-24 text-center overflow-hidden">
        <ScrollAnimation direction="up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Branding & Creative Design
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Crafting memorable identities and visuals that inspire trust and elevate your brand’s presence.
          </p>
        </ScrollAnimation>
      </section>

      {/* Overview Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-6 text-rose-600">
            Why Branding & Creative Design Matters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In a crowded digital landscape, your brand is more than a logo - it’s the story you tell, the emotion you evoke, and the experience you deliver. We build creative identities that resonate, adapt, and grow with your business.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From logo design to full brand systems, from visual storytelling to marketing assets  our creative solutions are designed to support your strategy and amplify your impact.
          </p>
        </ScrollAnimation>
      </section>

      {/* Core Services */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-semibold text-center text-rose-600 mb-12">
              Our Creative Service Offering
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "Brand Identity Design",
                desc: "Logo creation, color systems, typography, and a cohesive visual language that defines your brand.",
              },
              {
                icon: "🖼️",
                title: "Marketing & Collateral Design",
                desc: "Brochures, business cards, digital presentations, and printed materials that align with your brand story.",
              },
              {
                icon: "💻",
                title: "UI/UX & Web Visuals",
                desc: "Designing interfaces, animations, and immersive visuals that enhance engagement across digital platforms.",
              },
              {
                icon: "📱",
                title: "Social Media Graphics",
                desc: "Branded content for social, animations, stories and video assets that drive interaction and shareability.",
              },
              {
                icon: "🔧",
                title: "Packaging & Product Design",
                desc: "Physical packaging, mockups, product labels, unboxing experiences  elevating how your product is seen and used.",
              },
              {
                icon: "📊",
                title: "Brand Strategy & Guidelines",
                desc: "Defining your voice, positioning, messaging, and guidelines to ensure consistent brand experiences everywhere.",
              },
            ].map((item, idx) => (
              <ScrollAnimation key={idx} direction={idx % 2 === 0 ? "left" : "right"}>
                <div className="bg-gray-50 border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-rose-600 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Workflow */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-8 text-rose-600">
            Our Creative Process
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollAnimation direction="left">
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li><strong>Discovery & Insight:</strong> Understand your brand, audience and competitive landscape.</li>
              <li><strong>Concept & Visual Direction:</strong> Develop moodboards, design directions and prototypes.</li>
              <li><strong>Design & Production:</strong> Craft high-fidelity visuals, animations and brand assets.</li>
            </ul>
          </ScrollAnimation>
          <ScrollAnimation direction="right">
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li><strong>Implementation & Launch:</strong> Roll out across digital and print touchpoints.</li>
              <li><strong>Measurement & Optimization:</strong> Track brand performance and refresh visuals as needed.</li>
              <li><strong>Governance & Extension:</strong> Provide brand guidelines and ongoing creative support.</li>
            </ul>
          </ScrollAnimation>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-semibold mb-6 text-rose-600">
              Why Partner With Our Creative Studio
            </h2>
            <p className="text-gray-700 mb-8">
              With a blend of artistic sensibility and strategic thinking, we craft brands that stand the test of time, engage audiences, and drive results.
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: "Award-Worthy Creative",
                desc: "Award-standard design delivered on time, with a focus on distinction and visual impact.",
              },
              {
                icon: "🔄",
                title: "Scalable Design Systems",
                desc: "Design frameworks that grow with your business and maintain consistency across channels.",
              },
              {
                icon: "🤝",
                title: "Collaborative Partnership",
                desc: "We become part of your team, offering ongoing support and evolution of your brand identity.",
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
      <section className="bg-rose-600 text-white py-16 text-center">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Define Your Brand’s Future?
          </h2>
          <p className="mb-8 opacity-90">
            Let’s craft a creative identity, visuals and user experience that reflect your ambition and engage your audience.
          </p>
          <button
            onClick={()=>navigate("/contact-us")}
            className="px-6 py-3 bg-white text-rose-600 font-medium rounded-lg shadow hover:bg-gray-100 transition">
            Get in Touch
          </button>
        </ScrollAnimation>
      </section>
    </main>
  );
}
