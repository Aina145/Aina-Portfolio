import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, Heart } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Technologies", value: "20+" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Passionate developer crafting digital experiences that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a full-stack developer with 5+ years of experience building modern web applications, 
              AI-powered tools, and SaaS products. I specialize in React, TypeScript, and Node.js, 
              with a growing focus on AI automation and intelligent workflows.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines clean code architecture with thoughtful design to create 
              applications that are both powerful and delightful to use.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { icon: Code2, label: "Clean Code" },
                { icon: Zap, label: "Performance" },
                { icon: Heart, label: "User First" },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="glass-card p-4 text-center">
                  <Icon className="mx-auto mb-2 text-accent" size={24} />
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-6 text-center glow-primary">
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
