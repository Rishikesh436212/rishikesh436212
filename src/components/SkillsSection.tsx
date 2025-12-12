import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "React", category: "Frontend" },
  { name: "HTML/CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "SQL", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "TensorFlow", category: "ML/AI" },
  { name: "Scikit-learn", category: "ML/AI" },
  { name: "Pandas", category: "ML/AI" },
  { name: "NumPy", category: "ML/AI" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Linux", category: "Tools" },
];

const categories = ["Languages", "Frontend", "Backend", "Database", "ML/AI", "Tools"];

const categoryColors: Record<string, string> = {
  "Languages": "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30",
  "Frontend": "from-blue-500/20 to-blue-600/20 border-blue-500/30",
  "Backend": "from-violet-500/20 to-violet-600/20 border-violet-500/30",
  "Database": "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30",
  "ML/AI": "from-pink-500/20 to-pink-600/20 border-pink-500/30",
  "Tools": "from-amber-500/20 to-amber-600/20 border-amber-500/30",
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <section id="skills" ref={sectionRef} className="relative" onMouseMove={handleMouseMove}>
      <div className="absolute inset-0 bg-radial-gradient opacity-30" />
      
      <div className="section-container relative">
        <div className="text-center mb-12">
          <span className={`text-primary font-medium text-sm tracking-widest uppercase mb-4 block ${isVisible ? 'opacity-100 animate-fade-up' : 'opacity-0'}`}>
            My Expertise
          </span>
          <h2 className={`section-title ${isVisible ? 'opacity-100 animate-fade-up delay-100' : 'opacity-0'}`}>
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="space-y-8">
          {categories.map((category, catIndex) => (
            <div key={category} className={`${isVisible ? `opacity-100 animate-fade-up` : 'opacity-0'}`} style={{ animationDelay: `${(catIndex + 2) * 100}ms` }}>
              <h3 className="font-display font-semibold text-lg text-muted-foreground mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`px-5 py-3 rounded-xl bg-gradient-to-br ${categoryColors[category]} border backdrop-blur-sm font-medium text-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 cursor-default`}
                      style={{
                        transform: `translate(${mousePos.x * 5 * (index % 3)}px, ${mousePos.y * 5 * (index % 2)}px)`,
                      }}
                    >
                      {skill.name}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
