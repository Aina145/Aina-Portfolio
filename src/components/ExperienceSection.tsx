import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    org: "Tech Corp",
    period: "2022 – Present",
    description: "Leading development of AI-powered SaaS products using React, Node.js, and OpenAI.",
  },
  {
    type: "work",
    title: "Full Stack Developer",
    org: "StartupXYZ",
    period: "2020 – 2022",
    description: "Built and maintained multiple client-facing applications and internal tools.",
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    org: "State University",
    period: "2016 – 2020",
    description: "Graduated with honors. Focused on software engineering and machine learning.",
  },
  {
    type: "work",
    title: "Frontend Developer Intern",
    org: "WebAgency",
    period: "2019 – 2020",
    description: "Developed responsive UIs and contributed to component library architecture.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            My professional journey so far.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent z-10 mt-2" />

              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                <div className="glass-card p-5 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2 justify-start md:justify-inherit">
                    {item.type === "work" ? (
                      <Briefcase size={16} className="text-accent" />
                    ) : (
                      <GraduationCap size={16} className="text-accent" />
                    )}
                    <span className="text-xs text-accent font-medium">{item.period}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-primary mb-2">{item.org}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
