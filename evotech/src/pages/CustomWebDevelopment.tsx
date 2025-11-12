import { CheckCircle,  LucideCheckCircle } from "lucide-react";
import ScrollAnimation from "../components/Animations/ScrollAnimations";
import { useNavigate } from "react-router-dom";

export function CustomWebDevelopment() {
    const navigate=useNavigate()
  return (
    <main id="/services/web-development" className="pt-16 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 text-center overflow-hidden">
        <ScrollAnimation direction="up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Building Exceptional Digital Experiences
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            A professional website that converts visitors, elevates your brand,
            and creates a lasting virtual presence for your business.
          </p>
        </ScrollAnimation>
      </section>

      {/* Overview Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">
            Custom Web Development
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We understand that modern businesses need visually attractive and
            interactive online platforms. Acknowledging this, we craft web
            designs focused on <strong>usability, accessibility, navigation,</strong> 
            and <strong>compatibility</strong>  ensuring every website we
            deliver meets both aesthetic and performance goals.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Web development encompasses all tasks involved in building and
            maintaining websites  including design, content creation,
            client/server-side scripting, and security. Whether it’s a simple
            website or an advanced business application, we develop with purpose
            and precision.
          </p>
        </ScrollAnimation>
      </section>

      {/* Web Development Process */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-semibold text-center text-blue-700 mb-12">
              Web Development Process
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Site Definition & Planning",
              "Information Architecture",
              "Site Design",
              "Site Construction",
              "Site Marketing",
              "Tracking & Maintenance",
            ].map((step, index) => (
              <ScrollAnimation key={index} direction="up">
                <div className="bg-gray-50 border rounded-xl shadow-sm p-6 hover:shadow-md transition">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {step}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Each stage ensures a balance between creativity and
                    functionality, helping us deliver web solutions that drive
                    measurable results.
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-8 text-blue-700">
            Key Components of Web Development
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollAnimation direction="left">
            <ul className="space-y-3 text-gray-700">
              {[
                "Client-side Coding",
                "Server-side Coding",
                "Database Integration",
                "Network & Security Configuration",
                "Responsive Front-End Architecture",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <ul className="space-y-3 text-gray-700">
              {[
                "Concept Design & Navigation Planning",
                "Interface & Animation Enhancements",
                "Graphics & Imaging Solutions",
                "Database Connectivity",
                "Maintainable, Validated Code",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <LucideCheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollAnimation>
        </div>
      </section>

      {/* CMS Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-semibold text-blue-700 mb-6">
              Content Management Capabilities
            </h2>
            <p className="text-gray-700 mb-6">
              We build content management systems that empower users to manage
              their digital presence efficiently. With our CMS solutions, you
              can easily:
            </p>

            <ul className="space-y-3 text-gray-700">
              {[
                "Gather, edit, and create website content",
                "Assemble content using predefined templates",
                "Publish and maintain dynamic web pages",
                "Manage content from multiple sources seamlessly",
                "Provide personalized user experiences through portals",
                "Store, organize, and secure digital assets efficiently",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-semibold mb-4">
            Let’s Build Your Next Digital Experience
          </h2>
          <p className="mb-8 opacity-90">
            From concept to deployment  we transform your ideas into fast,
            reliable, and stunning websites.
          </p>
          <button
            onClick={()=>navigate("/contact-us")}
            className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get Started Today
          </button>
        </ScrollAnimation>
      </section>
    </main>
  );
}
