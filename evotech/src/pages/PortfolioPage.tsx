import { useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "../components/Animations/ScrollAnimations";

const projects = [
  {
    id: 1,
    title: "BD Times 365",
    category: "Web Development",
    image: "/bdtimes.jpg",
    link: "https://bdtimes365.com",
  },
  {
    id: 2,
    title: "Desi Newspapers",
    category: "E-commerce Solution",
    image: "/desinewspapers.jpg",
    link: "https://desinewspapers.com",
  },
  {
    id: 3,
    title: "Skinic Dermatology",
    category: "Service",
    image: "/skinic.jpg",
    link: "https://skinicdermatology.com",
  },
  {
    id: 4,
    title: "The Independent BD",
    category: "Web Development",
    image: "/theindependent.png",
    link: "https://independentbd.com",
  },
  {
    id: 5,
    title: "The Dhaka Post",
    category: "Search Engine",
    image: "/dhaka-post.jpg",
    link: "https://dhakapost.com",
  },
  {
    id: 6,
    title: "New York Mail",
    category: "Graphics Design",
    image: "/New-York-Mail.png",
    link: "https://newyorkmail.com",
  },
  {
    id: 7,
    title: "Deshe Bideshe",
    category: "E-commerce Solution",
    image: "/desinewspapers.jpg",
    link: "https://deshebideshe.com",
  },
  {
    id: 8,
    title: "Ajker Ograbani",
    category: "Web Development",
    image: "/ajkerograbani.jpg",
    link: "https://ajkerograbani.com",
  },
  {
    id: 9,
    title: "Prothom Bhor",
    category: "Graphics Design",
    image: "/prothombhor.png",
    link: "https://prothombhor.com",
  },
  {
    id: 10,
    title: "Free Herbal Guide",
    category: "Service",
    image: "/freeherbalguide.png",
    link: "https://freeherbalguide.com",
  },
  {
    id: 11,
    title: "Ghotona",
    category: "Web Development",
    image: "/ghotona.png",
    link: "https://ghotona.com",
  },
];

const categories = [
  "All",
  "Web Development",
  "E-commerce Solution",
  "Search Engine",
  "Service",
  "Graphics Design",
];

const DigitalPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Page Title */}
        <ScrollAnimation direction="up">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Our Digital Portfolio
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Explore our creative and technical expertise across various domains.
            Each project reflects our commitment to innovation, design, and performance.
          </p>
        </ScrollAnimation>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-md rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  {project.category}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-medium hover:underline"
                >
                  Visit Project →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalPortfolio;
