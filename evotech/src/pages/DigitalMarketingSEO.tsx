// src/pages/DigitalMarketingSEO.tsx
import { useNavigate } from "react-router-dom";
import ScrollAnimation from "../components/Animations/ScrollAnimations";

export function DigitalMarketingSEO() {
    const navigate=useNavigate()
  return (
    <main className="pt-16 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-24 text-center overflow-hidden">
        <ScrollAnimation direction="up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Digital Marketing & SEO Solutions
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            We elevate your online presence, drive traffic and conversions, and help you stand out in a crowded digital world.
          </p>
        </ScrollAnimation>
      </section>

      {/* Overview Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-6 text-indigo-700">
            Driving Results Through Strategy & Technology
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Evotech IT Solutions, we provide comprehensive digital marketing and SEO services to help your business rank higher, attract qualified visitors, and convert them into customers. We understand the value of a strong brand identity combined with efficient marketing campaigns.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From organic search strategies to paid campaigns, content creation to technical optimisation - we deploy a holistic approach to deliver measurable growth.
          </p>
        </ScrollAnimation>
      </section>

      {/* Key Services Grid */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-12">
              What We Offer
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📢",
                title: "Social Media Campaigns",
                desc: "Crafting engaging social media strategies, viral videos, and community growth to build brand awareness.",
              },
              {
                icon: "✉️",
                title: "Email & Content Marketing",
                desc: "Developing persuasive content and targeted email campaigns to nurture leads and drive conversions.",
              },
              {
                icon: "🔍",
                title: "Search Engine Optimization (SEO)",
                desc: "Improving your website's ranking on Google, Bing and other search engines through proven white-hat methods.",
              },
              {
                icon: "💡",
                title: "Promotional Strategy & Branding",
                desc: "Building impactful digital messaging, creative visuals and comprehensive brand approaches for growth.",
              },
              {
                icon: "🛍️",
                title: "E-Commerce Integrations",
                desc: "Integrating marketing solutions with your e-commerce platforms to increase traffic and sales.",
              },
              {
                icon: "📊",
                title: "Analytics & Performance Optimisation",
                desc: "Tracking results, optimizing campaigns, refining targeting and improving ROI through data-driven actions.",
              },
            ].map((item, idx) => (
              <ScrollAnimation key={idx} direction={idx % 2 === 0 ? "left" : "right"}>
                <div className="h-full bg-gray-50 border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Methodology */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-8 text-indigo-700">
            Our Approach to Digital Growth
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollAnimation direction="left">
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li><strong>Research & Strategy:</strong> Understand your market, audience and competition.</li>
              <li><strong>Content & Creative:</strong> Develop compelling content that resonates and converts.</li>
              <li><strong>Execution & Optimization:</strong> Run campaigns, monitor progress and refine for best results.</li>
            </ul>
          </ScrollAnimation>
          <ScrollAnimation direction="right">
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li><strong>Technical SEO & Analytics:</strong> Improve site performance, indexing and insights.</li>
              <li><strong>Scale & Retention:</strong> Grow your brand, nurture your customers and drive long-term value.</li>
              <li><strong>Reporting & Refinement:</strong> Use data to optimize future campaigns and budgets.</li>
            </ul>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Elevate Your Online Visibility?
          </h2>
          <p className="mb-8 opacity-90">
            Connect with us to boost your ranking, expand your reach and increase your revenue through strategic digital marketing.
          </p>
          <button
            onClick={()=>navigate("/contact-us")}
            className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow hover:bg-gray-100 transition"
          >
           Get in Touch
          </button>
        </ScrollAnimation>
      </section>
    </main>
  );
}
