// src/components/SuccessStories.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

export function SuccessStories() {
  const stories = [
    {
      title: "AI Automation Platform",
      desc: "We developed a custom AI automation solution that streamlined internal workflows and improved efficiency.",
      result: "40% faster operations",
      client: "Global Tech Co.",
      feedback:
        "Evotech’s AI solution transformed how we handle daily processes  efficient, reliable, and scalable.",
    },
    {
      title: "Cloud Migration Project",
      desc: "Seamless migration of on-premise data systems to AWS with zero downtime.",
      result: "99.9% uptime achieved",
      client: "DataCore Ltd.",
      feedback:
        "Their team handled our migration professionally  zero data loss and smooth transition.",
    },
    {
      title: "Web App Development",
      desc: "Built a modern ERP web app that simplified project management and reporting.",
      result: "60% reduction in manual tasks",
      client: "BrightEdge Inc.",
      feedback:
        "A highly skilled team that truly understood our business needs. Exceptional delivery!",
    },
    {
      title: "Mobile App Revamp",
      desc: "Redesigned the user interface and experience for a leading retail app, increasing engagement.",
      result: "35% increase in user retention",
      client: "ShopEase",
      feedback:
        "The revamped app results exceeded our KPIs and customer reviews are fantastic!",
    },
    {
      title: "IoT Integration",
      desc: "Implemented IoT sensors and monitoring system in manufacturing plants leading to smarter operations.",
      result: "25% reduced downtime",
      client: "SmartManu Inc.",
      feedback:
        "IoT integration helped us ensure real-time data and quicker decision making.",
    },
    {
      title: "E-Commerce Platform",
      desc: "Built a scalable e-commerce website tailored for high seasonal traffic.",
      result: "50% sales growth Q3",
      client: "RetailMasters",
      feedback:
        "Smooth infrastructure and user-friendly design contributed to huge sales increase.",
    },
    {
      title: "CRM Customization",
      desc: "Customized CRM solutions that improved sales pipeline tracking and customer engagement.",
      result: "20% boost in sales conversion",
      client: "BizConnect",
      feedback:
        "Our sales and customer support teams now work more efficiently than ever.",
    },
    {
      title: "Cloud Security Upgrade",
      desc: "Enhanced cloud security architecture to protect sensitive client data.",
      result: "Zero security incidents post-implementation",
      client: "SecureCorp",
      feedback:
        "Our clients trust our infrastructure more thanks to the upgraded security measures.",
    },
    {
      title: "AI Chatbot",
      desc: "Developed a conversational AI chatbot improving customer service response times.",
      result: "40% decrease in response time",
      client: "HelpDesk Solutions",
      feedback:
        "Customers love the instant help and the chatbot integrates seamlessly with our systems.",
    },
  ];

  const storiesPerPage = 3;
  const totalGroups = Math.ceil(stories.length / storiesPerPage);

  const [groupIndex, setGroupIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);

  useEffect(() => {
    const hoverInterval = setInterval(() => {
      setHoverIndex((prev) => {
        if (prev < storiesPerPage - 1) return prev + 1;
        else {
          // Move to next group after all 3 cards hovered
          setGroupIndex((g) => (g + 1) % totalGroups);
          return 0;
        }
      });
    }, 5000); // 5s per card

    return () => clearInterval(hoverInterval);
  }, [storiesPerPage, totalGroups]);

  const start = groupIndex * storiesPerPage;
  const currentStories = stories.slice(start, start + storiesPerPage);

  if (currentStories.length < storiesPerPage) {
    currentStories.push(
      ...stories.slice(0, storiesPerPage - currentStories.length)
    );
  }

  return (
    <section className="py-20" id="success-stories">
      <div className="w-[80%] mx-auto text-center">
        <motion.h2
  className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Transforming Visions into Reality
</motion.h2>

<motion.p
  className="text-gray-600 text-sm md:text-lg mx-auto mb-12 leading-relaxed"
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2, duration: 0.6 }}
>
  Every great success begins with a bold idea  and at <span className="font-semibold text-indigo-600">Evotech</span>, 
  we turn those ideas into impactful digital realities. From AI-driven automation to cloud innovation and intelligent systems, 
  our clients’ growth stories reflect our passion for building solutions that create measurable success, inspire progress, 
  and shape the future of technology.
</motion.p>

        {/* Container */}
        <div className="relative bg-white/60 backdrop-blur-md rounded-3xl shadow-lg p-10 overflow-hidden border border-gray-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={groupIndex}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {currentStories.map((story, i) => {
                const isActive = i === hoverIndex;

                return (
                  <motion.div
                    key={i}
                    className={`rounded-2xl shadow-md p-8 transition-all duration-500 transform ${
                      isActive
                        ? "scale-110 bg-gray-900 text-white"
                        : "bg-gradient-to-br from-blue-200 to-indigo-200 text-gray-900"
                    }`}
                    animate={{
                      scale: isActive ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                    <p className="text-sm mb-3 opacity-90">{story.desc}</p>
                    <div className="text-sm mb-2">
                      📈 <span className="font-semibold">{story.result}</span>
                    </div>
                    <p className="text-xs mb-3 opacity-80">👤 {story.client}</p>
                    <div
                      className={`relative p-3 rounded-xl ${
                        isActive ? "bg-white/10" : "bg-white/20"
                      }`}
                    >
                      <Quote
                        className={`w-4 h-4 absolute -top-2 left-4 opacity-70 ${
                          isActive ? "text-white" : "text-gray-800"
                        }`}
                      />
                      <p className="text-xs italic opacity-90">
                        {story.feedback}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
