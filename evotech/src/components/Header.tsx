// src/components/Header.tsx
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    // { name: "Careers", href: "/careers" },
    // { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <a href="/">
            {/* Replace with your logo image */}
            <img className="h-8 w-auto" src="/logo.svg" alt="Evotech Solutions" />
          </a>
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href="/contact" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get a Quote
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-gray-900 focus:outline-none">
            {/* Simple Hamburger icon */}
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              {link.name}
            </a>
          ))}
          <a href="/contact" className="block px-4 py-2 mt-2 bg-blue-600 text-white text-center rounded-lg mx-4">
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
