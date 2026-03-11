import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Bot, Rocket } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive web applications built with React, TypeScript, and cutting-edge technologies.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Custom AI solutions including chatbots, workflow automation, and intelligent data processing.",
  },
  {
    icon: Rocket,
    title: "SaaS Development",
    description: "End-to-end SaaS product development from concept to launch, with scalable architecture.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center mb-4">
            Services
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            What I can help you build.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 text-center group hover:-translate-y-2 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <service.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
