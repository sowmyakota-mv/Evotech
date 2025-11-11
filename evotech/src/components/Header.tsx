import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "Custom Web Development", href: "/services/web-development" },
    { name: "E-Commerce Solutions", href: "/services/ecommerce" },
    { name: "Enterprise Software", href: "/services/enterprise-software" },
    { name: "Cloud & Infrastructure", href: "/services/cloud-infrastructure" },
    { name: "Digital Marketing & SEO", href: "/services/digital-marketing-seo" },
    { name: "Branding & Creative Design", href: "/services/branding-creative-design" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              className="h-8 w-auto"
              src="/logo.svg"
              alt="Evotech Solutions"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 relative">
          {navLinks.map((link) =>
            link.name === "Services" ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setServiceDropdown(true)}
                onMouseLeave={() => setServiceDropdown(false)}
              >
                {/* Main Services link */}
                <Link
                  to={link.href}
                  className="text-gray-700 hover:text-blue-600 inline-flex items-center"
                >
                  {link.name}
                  <svg
                    className="ml-1 w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                {/* Dropdown */}
                {serviceDropdown && (
                  <div className="absolute left-0 mt-3 w-64 bg-white shadow-lg rounded-xl py-3 z-50 border border-gray-100">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-blue-600"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          {navLinks.map((link) =>
            link.name === "Services" ? (
              <div key={link.name} className="border-b border-gray-100">
                <button
                  onClick={() => setServiceDropdown(!serviceDropdown)}
                  className="w-full flex justify-between items-center px-4 py-3 text-gray-700 hover:bg-gray-50"
                >
                  {link.name}
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      serviceDropdown ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown on Mobile */}
                {serviceDropdown && (
                  <div className="bg-gray-50">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-100"
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 mt-2 bg-blue-600 text-white text-center rounded-lg mx-4 mb-4"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
