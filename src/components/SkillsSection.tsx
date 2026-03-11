import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 80 },
      { name: "REST / GraphQL", level: 85 },
      { name: "Express / Fastify", level: 82 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "Supabase", level: 88 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 78 },
      { name: "AWS / Vercel", level: 82 },
      { name: "CI/CD", level: 80 },
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "OpenAI / GPT", level: 88 },
      { name: "LangChain", level: 80 },
      { name: "n8n / Make", level: 85 },
      { name: "Vector DBs", level: 75 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-sm text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIndex * 0.1 + 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
