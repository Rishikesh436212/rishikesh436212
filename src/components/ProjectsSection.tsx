import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Fraud Detection System",
    description: "A machine learning model to detect fraudulent transactions using advanced classification algorithms and feature engineering techniques.",
    tech: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
    github: "#",
    demo: "#",
  },
  {
    title: "FastAPI Backend Template",
    description: "A scalable REST API template built with FastAPI, featuring authentication, database integration, and comprehensive documentation.",
    tech: ["FastAPI", "PostgreSQL", "Docker", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    title: "Personal Portfolio",
    description: "A modern, animated portfolio website showcasing skills, projects, and achievements with a dark theme and smooth interactions.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className={`text-primary font-medium text-sm tracking-widest uppercase mb-4 block ${isVisible ? 'opacity-100 animate-fade-up' : 'opacity-0'}`}>
            My Work
          </span>
          <h2 className={`section-title ${isVisible ? 'opacity-100 animate-fade-up delay-100' : 'opacity-0'}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card p-6 group hover:scale-[1.02] transition-all duration-300 flex flex-col ${
                isVisible ? 'opacity-100 animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: isVisible ? `${(index + 2) * 150}ms` : '0ms' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild className="w-9 h-9">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="w-9 h-9">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm flex-grow mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
