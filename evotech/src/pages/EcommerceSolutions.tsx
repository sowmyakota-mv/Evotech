import {  CheckCircle,  CheckSquareIcon } from "lucide-react";
import ScrollAnimation from "../components/Animations/ScrollAnimations";
import { useNavigate } from "react-router-dom";

export function EcommerceSolutions() {
    const navigate=useNavigate()
  return (
    <main id="/services/ecommerce" className="pt-16 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-24 text-center overflow-hidden">
        <ScrollAnimation direction="up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering Global Commerce Online
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Build powerful, secure, and scalable e-commerce platforms that
            connect your business with customers worldwide.
          </p>
        </ScrollAnimation>
      </section>

      {/* Overview Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-6 text-indigo-700">
            Complete E-Commerce Solutions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Evotech Solutions provides fully integrated e-commerce solutions
            designed to strengthen your presence in the global online market.
            E-commerce - the buying and selling of goods and services online 
            enables businesses to reach customers across borders and scale
            faster than ever before.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether it’s developing a secure online store, managing customer
            data, or integrating payment systems, our team ensures your digital
            storefront is fast, reliable, and designed for success.
          </p>
        </ScrollAnimation>
      </section>

      {/* E-Commerce Divisions */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-12">
              Core Areas of E-Commerce
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Virtual Storefronts",
                desc: "Online catalogs and product listings designed for engagement and easy navigation.",
              },
              {
                title: "Demographic Data Insights",
                desc: "Collecting and analyzing user data to tailor experiences and drive conversions.",
              },
              {
                title: "Electronic Data Interchange (EDI)",
                desc: "Facilitating seamless B2B data exchange to streamline operations.",
              },
              {
                title: "Customer Outreach",
                desc: "Email, SMS, and digital newsletters that connect with your target audience effectively.",
              },
              {
                title: "Business-to-Business Sales",
                desc: "Creating digital platforms that simplify and secure B2B transactions.",
              },
              {
                title: "Transaction Security",
                desc: "Ensuring safe, encrypted communication for every online purchase.",
              },
            ].map((item, index) => (
              <ScrollAnimation key={index} direction={index % 2 === 0 ? "left" : "right"}>
                <div className="h-full bg-gray-50 border rounded-xl p-6 shadow-sm hover:shadow-md transition">
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

      {/* Industries Affected */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-10 text-indigo-700 text-center">
            Industries Transformed by E-Commerce
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: "💳",
              title: "Financial Services",
              desc: "Mobile banking, online transactions, and brokerage integrations.",
            },
            {
              icon: "📱",
              title: "Telecommunications",
              desc: "Online service management, bill payments, and instant support systems.",
            },
            {
              icon: "🛒",
              title: "Retail & Service",
              desc: "Dynamic shopping experiences with on-the-go payment solutions.",
            },
            {
              icon: "📰",
              title: "Information Services",
              desc: "Delivering entertainment, news, and real-time updates to users worldwide.",
            },
          ].map((industry, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-blue-600">
                  {industry.title}
                </h4>
                <p className="text-gray-600 text-sm">{industry.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Overview of Development Features */}
      <section className="bg-white py-16 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-8">
              E-Commerce Development Features
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation direction="left">
              <ul className="space-y-3 text-gray-700">{[
                "Custom Graphic & Theme Design",
                "Product Catalog & Advanced Search",
                "Special Offers & Promotions",
                "User Registration & Account Management",
                "Shopping Cart Integration",
                "Checkout & Secure Payment Gateway",
                ].map((item, index)=>(
                <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-blue-600 w-5 h-5 mt-1"/>
                <span>{item}</span></li>
              ))}
              </ul>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <ul className="space-y-3 text-gray-700">{[
                "Order Tracking & Inventory Management",
                "Shipping & Currency Conversion Support",
                "Admin Dashboard & Analytics",
                "SEO-Optimized Product Pages",
                "Multi-language & Multi-currency Support",
                ].map((item, index)=>(
                <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-blue-600 w-5 h-5 mt-1"/>
                <span>{item}</span></li>
              ))}
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-8 text-indigo-700">
            Key Components of E-Commerce Systems
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollAnimation direction="left">
            <ul className="space-y-3 text-gray-700">
              {["Virtual Storefronts & Online Malls",
              "Market Research & Analytics",
              "Electronic Data Interchange (EDI)",
              ].map((item, index)=>(
                <li key={index} className="flex items-start space-x-3">
                    <CheckSquareIcon className="text-blue-600 w-5 h-5 mt-1"/>
                <span>{item}</span></li>
              ))}
            </ul>
          </ScrollAnimation>
          <ScrollAnimation direction="right">
            <ul className="space-y-3 text-gray-700">{[
              'Email, Fax & Internet Telephony Systems',
              "B2B Sales Platforms",
              "Transaction Security Protocols",
              ].map((item, index)=>(
                <li key={index} className="flex items-start space-x-3">
                    <CheckSquareIcon className="text-blue-600 w-5 h-5 mt-1"/>
                <span>{item}</span></li>
              ))}
            </ul>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Launch Your Online Store?
          </h2>
          <p className="mb-8 opacity-90">
            Let’s transform your business into a thriving online marketplace with
            secure, scalable, and innovative e-commerce solutions.
          </p>
          <button
            onClick={()=>navigate("/contact-us")}
            className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg shadow hover:bg-gray-100 transition">
            Get started Today
          </button>
        </ScrollAnimation>
      </section>
    </main>
  );
}
