import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Scene from "./Scene";

const titles = [
  {
    heading: "Empowering Businesses Through Innovative IT Solutions",
    highlight: "Innovative IT Solutions",
    sub: "Harness the power of AI-driven automation to revolutionize your business workflows.",
    desc: "At Evotech Solutions, we provide cutting-edge software, automation, and digital transformation services that drive efficiency and reliability.",
  },
  {
    heading: "Driving Growth with Next-Gen Software",
    highlight: "Next-Gen Software",
    sub: "Connecting intelligent systems for seamless digital transformation worldwide.",
    desc: "Transform your processes with scalable, tailored software and seamless automation solutions built for the future.",
  },
  {
    heading: "Shaping the Future of Technology Innovation",
    highlight: "Technology Innovation",
    sub: "Building the future with scalable cloud solutions and smart data analytics.",
    desc: "Passionate about sustainable digital transformation and crafting IT platforms for tomorrow’s challenges.",
  },
];

// Typing animation helper
const useTypingEffect = (text, speed = 30, delay = 0) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);
  return displayedText;
};

export function Hero() {
  const [index, setIndex] = useState(0);

  // Typing sequence: title → sub → desc
  const titleText = useTypingEffect(titles[index].heading, 30, 0);
  const subText = useTypingEffect(
    titles[index].sub,
    30,
    titles[index].heading.length * 30 + 500 // start after title done
  );
  const descText = useTypingEffect(
    titles[index].desc,
    30,
    titles[index].heading.length * 30 + titles[index].sub.length * 30 + 1000 // after sub done
  );

  // Wait until all text finished typing → then 3s pause → next title
  useEffect(() => {
    const totalDuration =
      titles[index].heading.length * 30 +
      titles[index].sub.length * 30 +
      titles[index].desc.length * 30 +
      3000; // 3s pause

    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/hero-bg.mp4"
      />
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20 gap-12">
        {/* Left Typing Section */}
        <div className="w-full md:w-1/2 text-center md:text-left min-h-[260px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={"text-" + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-4xl font-bold mb-3">
                {titleText}
              </h1>
              <p className="text-blue-300 font-medium mb-3">{subText}</p>
              <p className="text-gray-300 text-lg">{descText}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Robot */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Scene animationIndex={index} />
        </div>
      </div>
    </section>
  );
}
