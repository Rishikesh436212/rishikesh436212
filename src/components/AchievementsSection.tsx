import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "50 Days Badge",
    description: "LeetCode Consistency Challenge",
    icon: "🏆",
    linkedIn: "https://www.linkedin.com/posts/rishikesh-t-791a4b357_leetcode-100daysofcode-50daysbadge-activity-7393649638433628160-5KFu",
  },
];

const AchievementsSection = () => {
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
    <section id="achievements" ref={sectionRef} className="relative">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className={`text-primary font-medium text-sm tracking-widest uppercase mb-4 block ${isVisible ? 'opacity-100 animate-fade-up' : 'opacity-0'}`}>
            Milestones
          </span>
          <h2 className={`section-title ${isVisible ? 'opacity-100 animate-fade-up delay-100' : 'opacity-0'}`}>
            <span className="gradient-text">Achievements</span>
          </h2>
        </div>

        <div className="flex justify-center">
          {achievements.map((achievement, index) => (
            <a
              key={achievement.title}
              href={achievement.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card p-10 text-center group max-w-md w-full hover:scale-105 transition-all duration-300 animate-pulse-glow ${
                isVisible ? 'opacity-100 animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: isVisible ? `${(index + 2) * 150}ms` : '0ms' }}
            >
              <div className="text-6xl mb-6 animate-float">
                {achievement.icon}
              </div>
              
              <h3 className="font-display font-bold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>
              
              <p className="text-muted-foreground text-lg mb-6">
                {achievement.description}
              </p>
              
              <div className="flex items-center justify-center gap-2 text-primary">
                <span>View on LinkedIn</span>
                <ExternalLink className="w-5 h-5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
