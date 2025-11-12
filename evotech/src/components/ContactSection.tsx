// src/components/ContactSection.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import ScrollAnimation from "./Animations/ScrollAnimations";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear specific error
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
    setErrors({ ...errors, phone: "" });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", email: "", phone: "" };

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
      valid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    // Phone Validation (min 10 digits)
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
      valid = false;
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Please enter a valid phone number.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you soon.");

    setFormData({
      name: "",
      email: "",
      location: "",
      phone: "",
      message: "",
    });
    setErrors({ name: "", email: "", phone: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-cover bg-center"
      style={{backgroundImage: 'url("/contact-bg.jpg")' }}>
      <div className="absolute inset-0 bg-black/10"></div>
<ScrollAnimation direction="up">
      <div className="relative max-w-6xl mx-auto w-[80%] md:w-[70%] bg-white/10 overflow-hidden shadow-2xl backdrop-blur-md rounded-2xl">
        <div className="grid md:grid-cols-[70%_30%]">
          {/* Left Form Section */}
          <ScrollAnimation direction="left">
          <motion.div
            className="bg-gradient-to-br from-blue-600/30 to-blue-800/30 text-white p-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 ${
                      errors.name
                        ? "border border-red-400"
                        : "focus:ring-blue-300"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-white text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "border border-red-400"
                        : "focus:ring-blue-300"
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-white text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Enter your location"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <PhoneInput
                    country={"gb"}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    inputStyle={{
                      width: "100%",
                      height: "42px",
                      borderRadius: "4px",
                      border: errors.phone ? "1px solid #f87171" : "1px solid #ccc",
                      color: "#1f2937",
                      fontSize: "15px",
                    }}
                    buttonStyle={{
                      border: "none",
                      background: "transparent",
                    }}
                    containerStyle={{ width: "100%" }}
                    placeholder="🇮🇳 | +91 "
                  />
                  {errors.phone && (
                    <p className="text-white text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 h-28 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-40 bg-blue-600 text-white font-semibold py-2 hover:bg-gray-100 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          </ScrollAnimation>

          {/* Right Info Section */}
          
          <motion.div
            className="bg-gradient-to-br from-white to-gray-100 p-10 flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ScrollAnimation direction="right" delay={0.2}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Details
            </h3>

            <div className="space-y-5 text-gray-700">
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" />
                <span className="text-sm">Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" />
                <a href="tel:+919052544446" className="text-sm hover:underline">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <a
                  href="mailto:info@evotech-solutions.com"
                  className="text-sm hover:underline"
                >
                  info@evotech-solutions.com
                </a>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Office Hours
              </h4>
              <p className="text-gray-600">Mon - Fri: 9:00 AM – 6:00 PM</p>
            </div></ScrollAnimation>
          </motion.div>
          
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
}
