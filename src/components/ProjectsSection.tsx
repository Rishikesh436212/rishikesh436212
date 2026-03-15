import { useEffect, useRef, useState } from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Neuro Symbolic AI – Backend",
    description: "Backend project integrating neural networks and symbolic reasoning using FastAPI.",
    tech: ["FastAPI", "Python", "Neural Networks", "AI"],
    github: "https://github.com/Rishikesh436212",
    icon: "🧠",
  },
  {
    title: "FastAPI – Bank & Attendance System",
    description: "Built backend APIs for banking and attendance management.",
    tech: ["FastAPI", "Python", "PostgreSQL", "REST API"],
    github: "https://github.com/Rishikesh436212",
    icon: "🏦",
  },
  {
    title: "Fraud Detection",
    description: "ML project analyzing transaction patterns to detect fraud.",
    tech: ["Python", "Scikit-learn", "Pandas", "ML"],
    github: "https://github.com/Rishikesh436212",
    icon: "🔍",
  },
  {
    title: "Sentiment Analysis",
    description: "ML project performing text sentiment analysis.",
    tech: ["Python", "NLP", "Machine Learning", "Text Analysis"],
    github: "https://github.com/Rishikesh436212",
    icon: "💬",
  },
  {
    title: "Email-Service",
    description: "Backend project to send and manage emails.",
    tech: ["FastAPI", "Python", "SMTP", "Backend"],
    github: "https://github.com/Rishikesh436212",
    icon: "📧",
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
                  <span className="text-2xl">{project.icon}</span>
                </div>
                <Button variant="ghost" size="icon" asChild className="w-9 h-9">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
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
