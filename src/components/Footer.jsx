import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border/50">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      © {new Date().getFullYear()} Ain Malik. Built with <Heart size={14} className="text-accent" />
      <div className="flex gap-4">
        {[
          { icon: Github, href: "https://github.com/Aina145" },
          { icon: Linkedin, href: "https://linkedin.com/in/ain-malik-dev75/" },
          { icon: Mail, href: "Ainamalik145@gmail.com[Email Address" },
        ].map(({ icon: Icon, href }, i) => (
          <a key={i} href={href} className="text-muted-foreground hover:text-foreground transition-colors">
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
