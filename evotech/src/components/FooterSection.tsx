import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Title - Left */}
        <h2 className="text-3xl font-bold text-white whitespace-nowrap text-center md:text-left">
          Evotech Solutions
        </h2>

        {/* Paragraph - Middle */}
        <p className="text-gray-400 text-center md:text-left max-w-2xl">
          Empowering your business with next-gen IT solutions  driving innovation,
          growth, and digital transformation through technology excellence.
        </p>

        {/* Button - Right */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all whitespace-nowrap">
          Contact Us
        </button>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          
          {/* Left */}
          <div className="text-center md:text-left w-full md:w-1/3">
            © 2025 <span className="text-white font-semibold">Evotech Solutions</span>. All Rights Reserved.
          </div>

          {/* Middle */}
          <div className="text-center w-full md:w-1/3 flex justify-center space-x-3">
            <a href="#privacy" className="hover:text-blue-400 transition">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-blue-400 transition">Terms of Use</a>
            <span>|</span>
            <a href="#cookies" className="hover:text-blue-400 transition">Cookie Policy</a>
          </div>

          {/* Right */}
          <div className="flex justify-center md:justify-end w-full md:w-1/3 space-x-5">
            <a href="mailto:info@evotechsolutions.com" className="hover:text-blue-400 transition">
              <Mail size={20} />
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <MapPin size={20} />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <MessageCircle size={20} />
            </a>
            <a href="tel:+919876543210" className="hover:text-blue-400 transition">
              <Phone size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
