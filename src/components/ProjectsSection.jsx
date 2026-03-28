import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "AI Dashboard Pro",
    description: "A real-time analytics dashboard powered by AI with smart insights and predictive analytics.",
    image: "",
    tech: ["React", "TypeScript", "OpenAI", "Supabase"],
    github: "#",
    live: "#",
  },
  {
    title: "SaaS Starter Kit",
    description: "A production-ready SaaS boilerplate with auth, billing, and multi-tenancy built in.",
    image: "",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "DevFlow",
    description: "Project management tool designed for developers with Kanban boards and sprint tracking.",
    image: "",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    live: "#",
  },
  {
    title: "AutoBot AI",
    description: "An AI automation platform for building custom workflows and chatbot integrations.",
    image: "",
    tech: ["Python", "LangChain", "React", "FastAPI"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            A selection of projects I've built and contributed to.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Layers className="text-muted-foreground/30" size={48} />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
