import { motion } from "framer-motion";
import { Code, Cloud, Cpu, Settings, MonitorSmartphone, LifeBuoy } from "lucide-react";
import ScrollAnimation from "./Animations/ScrollAnimations";

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      desc: "Custom web and mobile apps built for performance and scalability.",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Cpu,
      title: "AI & Automation",
      desc: "Intelligent AI-driven solutions to streamline your business operations.",
      gradient: "from-primary-glow to-accent",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      desc: "Seamless migration, deployment, and optimization of cloud environments.",
      gradient: "from-accent to-primary",
    },
    {
      icon: Settings,
      title: "IT Consulting",
      desc: "Strategic guidance to accelerate your digital transformation journey.",
      gradient: "from-primary to-accent",
    },
    {
      icon: MonitorSmartphone,
      title: "UI/UX Design",
      desc: "Modern, user-friendly designs for smooth digital experiences.",
      gradient: "from-primary-glow to-primary",
    },
    {
      icon: LifeBuoy,
      title: "Maintenance & Support",
      desc: "Reliable assistance to ensure your systems stay secure and up-to-date.",
      gradient: "from-accent to-primary-glow",
    },
  ];

  return (
    <section
      className="relative bg-cyan-100 py-12 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background"
      id="services"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                What We Offer
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cutting-edge solutions designed to transform your business
            </p>
          </div>
        </ScrollAnimation>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollAnimation key={index}>
                <div className="group relative h-full p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary-glow/5 group-hover:to-accent/5 transition-all duration-500" />
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-500`}
                    >
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
                    />
                  </motion.div>

                  <div className="relative">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-glow to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
