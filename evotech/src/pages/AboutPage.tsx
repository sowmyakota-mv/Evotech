// src/components/AboutPage.tsx
import { motion } from "framer-motion";
import ScrollAnimation from "../components/Animations/ScrollAnimations";


export function AboutPage() {
  return (
    <div className="about-page">

{/* Section 1: Driven by Innovation & Impact */}  
<section className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
  {/* Soft radial background glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none"></div>

  {/* Centered Section Title */}
  <div className="max-w-7xl mx-auto px-6 text-center relative z-10 mb-16">
    <ScrollAnimation direction="up">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
          Driven by Innovation & Impact
        </span>
      </h2>
      <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
        Empowering businesses worldwide with smart, scalable, and transformative IT solutions.
      </p>
    </ScrollAnimation>
  </div>

  {/* Two-Column Layout (Video + Card 1) */}
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
    
    {/* Left Side: Auto-playing Video */}
    <ScrollAnimation direction="left">
      <div> 
        {/* remove rounded-3xl here */}
        <div className="absolute -top-6 -left-6 md:w-[460px] h-68 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

        <video
          src="/about-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="md:ml-24 relative z-10  md:w-[460px] object-cover hover:scale-105 transition-transform duration-700 rounded-none" 
          // remove rounding from video itself
        />
      </div>
    </ScrollAnimation>

    {/* Right Side: Text + Card 1 */}
    <ScrollAnimation direction="right">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="md:w-[460px] bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-blue-100 transition-all"
      >
        <h3 className="text-2xl font-semibold mb-2 text-blue-600">
          A Rapidly Growing IT Solutions Partner
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Introducing Evotech IT Solutions, a rapidly growing global IT service
          and outsourcing platform. We serve small, medium, and large-scale
          industries, providing high-quality, affordable, and timely IT
          services through our skilled team.
        </p>
      </motion.div>
    </ScrollAnimation>
  </div>

  {/* Full-width row for Card 2 & 3 */}
  <div className="max-w-7xl mx-auto px-6 mt-16">
    <ScrollAnimation direction="up">
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="md:w-[460px] bg-white/70 flex-1  backdrop-blur-sm p-6 rounded-2xl shadow-md border border-blue-100 transition-all"
        >
          <h3 className="text-2xl font-semibold mb-2 text-blue-600">
            Delivering Comprehensive IT Services
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Evotech provides end-to-end IT and outsourcing solutions, including
            Web Design, Development, E-commerce, SEO, Graphic Design, Admin
            Support, and Market Research  all crafted for performance and
            reliability.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex-1 bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-blue-100 transition-all"
        >
          <h3 className="text-2xl font-semibold mb-2 text-blue-600">
            Driving Business Efficiency Through Technology
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We design, implement, and support customized technology strategies to
            enhance productivity and ROI. Our scalable IT services empower
            businesses to thrive in a modern digital environment.
          </p>
        </motion.div>
      </div>
    </ScrollAnimation>
  </div>
</section>

      {/* Section 2: Mission & Vision — Futuristic Modern Layout */}
<section className="relative py-12 bg-[#f8fafc] overflow-hidden">
  {/* Animated Gradient Background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_60%)]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.15),transparent_60%)]"></div>

  {/* Decorative Gradient Lines */}
  {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent opacity-30 animate-pulse"></div> */}

  {/* Section Title */}
  <div className="relative max-w-5xl mx-auto text-center mb-20 px-6">
    <ScrollAnimation direction="up">
      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Vision Meets Mission
        </span>
      </h2>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Blending innovation, technology, and purpose to redefine what’s possible for tomorrow’s digital world.
      </p>
    </ScrollAnimation>
  </div>

  {/* Floating Container */}
  <div className="relative max-w-7xl h-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 items-center">
    
    {/* Vision Section */}
    <ScrollAnimation direction="left">
      <div className="group relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
        {/* Icon Bubble */}
        <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
          👁️
        </div>

        <h3 className="text-3xl font-semibold text-blue-700 mt-10 mb-4">
          Our Vision
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Evotech IT Solutions envisions being the most trusted and innovative partner in IT transformation  combining excellence, scalability, and cost-effectiveness to deliver measurable business value.  
          We focus on empowering organizations through cutting-edge technologies and creating sustainable growth while nurturing long-term partnerships built on trust and performance.
        </p>

        {/* Subtle underline animation */}
        {/* <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:w-36 transition-all duration-500"></div> */}
      </div>
    </ScrollAnimation>

    {/* Mission Section */}
    <ScrollAnimation direction="right">
      <div className="group relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
        {/* Icon Bubble */}
        <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
          🚀
        </div>

        <h3 className="text-3xl font-semibold text-indigo-700 mt-10 mb-4">
          Our Mission
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to design and deliver transformative technology solutions that improve lives and empower businesses globally.  
          We aim to exceed expectations by blending creativity, precision, and dedication  driving efficiency, customer satisfaction, and long-lasting success through innovation.
        </p>

        {/* Subtle underline animation */}
        {/* <div className="mt-6 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full group-hover:w-36 transition-all duration-500"></div> */}
      </div>
    </ScrollAnimation>
  </div>

 {/* Background Accent Circles */}
<div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-30"></div>
<div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
</section>

{/* Section 3: Our Core Values */}
<section className="py-24 bg-white relative overflow-hidden">
  {/* Decorative gradient background for depth */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_70%)]"></div>

  <div className="relative max-w-6xl mx-auto px-6 text-center mb-16">
    <ScrollAnimation direction="up">
      <h2 className="text-5xl font-extrabold mb-6">
        <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
          The Principles That Power Us
        </span>
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Our foundation is built on integrity, innovation, and impact  guiding every solution, partnership, and breakthrough we create.  
        These values define who we are and how we drive digital transformation with purpose.
      </p>
    </ScrollAnimation>
  </div>

  {/* Animated Value Cards */}
  <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
    {[
      { icon: "💡", title: "Innovation", text: "We explore, adapt, and innovate with technology to shape a smarter future." },
      { icon: "🤝", title: "Collaboration", text: "We believe in the power of teamwork to achieve transformative outcomes." },
      { icon: "🧭", title: "Integrity", text: "We act with honesty, accountability, and transparency in every interaction." },
      { icon: "⚡", title: "Excellence", text: "We’re driven to deliver results that exceed expectations  every single time." },
      { icon: "🌍", title: "Customer Success", text: "Your success fuels ours  we build relationships that last and deliver value that matters." },
    ].map((val, idx) => (
      <ScrollAnimation key={idx} direction={idx % 2 === 0 ? "left" : "right"} delay={idx * 0.1}>
        <div className="h-full group relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
          <div className="text-4xl mb-4">{val.icon}</div>
          <h4 className="text-xl font-semibold text-blue-700 mb-2">{val.title}</h4>
          <p className="text-gray-600">{val.text}</p>

          {/* Animated underline */}
          {/* <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:w-24 transition-all duration-500 mx-auto"></div> */}
        </div>
      </ScrollAnimation>
    ))}
  </div>
</section>

      {/* Section 4: Our Journey Timeline */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="space-y-12">
            {[
              { year: "2016", event: "Founded in Hyderabad" },
              { year: "2018", event: "Expanded into global outsourcing" },
              { year: "2020", event: "50+ enterprise projects" },
              { year: "2023", event: "AI & Cloud integration services" },
              { year: "2025", event: "Building global partnerships" },
            ].map((step, idx) => (
              <ScrollAnimation key={idx} direction="bottom" delay={idx * 0.2}>
                <div className="flex items-start gap-6">
                  <div className="shrink-0 text-blue-600 font-bold text-xl">{step.year}</div>
                  <div>
                    <h4 className="text-lg font-semibold">{step.event}</h4>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section> */}

      {/* Section 5: Leadership Message */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollAnimation direction="up">
            <h2 className="text-4xl font-bold mb-6">From the Founder</h2>
            <p className="text-lg text-gray-700 mb-4 italic">
              “At Evotech, we believe technology is not just a tool  it’s a bridge to smarter, more connected businesses.”
            </p>
            <p className="text-lg text-gray-700">
              With our professional attainment, Evotech IT Solutions always stands by you and cordially invites you to choose and experience the best and unmatched support and services.
            </p>
          </ScrollAnimation>
        </div>
      </section>

    </div>
  );
}
