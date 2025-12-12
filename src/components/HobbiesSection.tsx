import { useEffect, useRef, useState } from "react";
import { Gamepad2, Globe, Brain, Puzzle } from "lucide-react";

const hobbies = [
  { name: "Problem Solving", icon: Puzzle },
  { name: "Playing Chess", icon: Gamepad2 },
  { name: "Web Surfing", icon: Globe },
  { name: "Exploring AI & New Tech", icon: Brain },
];

const HobbiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hobbies" ref={sectionRef} className="relative">
      <div className="absolute inset-0 bg-radial-gradient opacity-30" />
      
      <div className="section-container relative">
        <div className="text-center mb-12">
          <span className={`text-primary font-medium text-sm tracking-widest uppercase mb-4 block ${isVisible ? 'opacity-100 animate-fade-up' : 'opacity-0'}`}>
            Beyond Code
          </span>
          <h2 className={`section-title ${isVisible ? 'opacity-100 animate-fade-up delay-100' : 'opacity-0'}`}>
            Hobbies & <span className="gradient-text">Interests</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.name}
              className={`flex items-center gap-3 px-6 py-4 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm group hover:bg-primary/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-default ${
                isVisible ? 'opacity-100 animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: isVisible ? `${(index + 2) * 100}ms` : '0ms' }}
            >
              <hobby.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-medium text-foreground">{hobby.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
