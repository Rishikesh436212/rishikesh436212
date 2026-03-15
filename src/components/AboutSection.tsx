import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="relative">
      <div className="absolute inset-0 bg-radial-gradient opacity-50" />
      
      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className={`text-primary font-medium text-sm tracking-widest uppercase mb-4 block ${isVisible ? 'opacity-100 animate-fade-up' : 'opacity-0'}`}>
            About Me
          </span>
          
          <h2 className={`section-title gradient-text mb-8 ${isVisible ? 'opacity-100 animate-fade-up delay-100' : 'opacity-0'}`}>
            Turning Ideas Into Digital Reality
          </h2>
          
          <div className={`glass-card p-8 md:p-12 ${isVisible ? 'opacity-100 animate-fade-up delay-200' : 'opacity-0'}`}>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
              I'm <span className="text-foreground font-semibold">Rishikesh T</span>, a Full-Stack Developer and Machine Learning enthusiast who loves transforming ideas into real, working digital solutions. I focus on writing clean code, building efficient backend systems, and creating smart ML models that solve real problems.
            </p>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
              Fueled by curiosity, I constantly explore new technologies and enjoy learning through hands-on projects. Whether it's developing scalable APIs with FastAPI or building models like Fraud Detection, I enjoy challenges that push me to grow.
            </p>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              I believe in crafting solutions that are <span className="text-primary font-medium">practical</span>, <span className="text-primary font-medium">efficient</span>, and <span className="text-primary font-medium">impactful</span> — turning creativity into clean, functional systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
