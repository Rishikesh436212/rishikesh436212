import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Generative AI Foundations",
    issuer: "Microsoft Learn",
    icon: "🤖",
    linkedIn: "https://www.linkedin.com/posts/rishikesh-t-791a4b357_exploring-the-power-of-generative-ai-activity-7381644662966521856-1Fe",
  },
  {
    title: "Python 101 for Data Science",
    issuer: "IBM Certified",
    icon: "🐍",
    linkedIn: "https://www.linkedin.com/posts/rishikesh-t-791a4b357_pythonprogramming-programming-coding-activity-7376506931500224512-G2k1",
  },
  {
    title: "SQL & Relational Databases 101",
    issuer: "IBM Certified",
    icon: "🗃️",
    linkedIn: "https://www.linkedin.com/posts/rishikesh-t-791a4b357_ibmcertified-sql-relationaldatabases-activity-7374446171844689920-Ikaz",
  },
];

const CertificationsSection = () => {
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
    <section id="certifications" ref={sectionRef} className="relative">
      <div className="absolute inset-0 bg-radial-gradient opacity-30" />
      
      <div className="section-container relative">
        <div className="text-center mb-12">
          <span className={`text-primary font-medium text-sm tracking-widest uppercase mb-4 block ${isVisible ? 'opacity-100 animate-fade-up' : 'opacity-0'}`}>
            Credentials
          </span>
          <h2 className={`section-title ${isVisible ? 'opacity-100 animate-fade-up delay-100' : 'opacity-0'}`}>
            <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <a
              key={cert.title}
              href={cert.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card p-8 text-center group tilt-card glow-hover ${
                isVisible ? 'opacity-100 animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: isVisible ? `${(index + 2) * 150}ms` : '0ms' }}
            >
              <div className="text-5xl mb-6 animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                {cert.icon}
              </div>
              
              <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {cert.issuer}
              </p>
              
              <div className="flex items-center justify-center gap-2 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View on LinkedIn</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
