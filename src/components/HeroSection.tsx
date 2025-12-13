import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.jpg";

const HeroSection = () => {
  const [showTagline, setShowTagline] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [visibleWords, setVisibleWords] = useState(0);

  const taglineWords = ["Code.", "Create.", "Automate.", "Accelerate", "your", "ideas", "into", "reality."];

  useEffect(() => {
    const taglineTimer = setTimeout(() => setShowTagline(true), 600);
    const contentTimer = setTimeout(() => setShowContent(true), 2200);
    return () => {
      clearTimeout(taglineTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  useEffect(() => {
    if (showTagline && visibleWords < taglineWords.length) {
      const wordTimer = setTimeout(() => {
        setVisibleWords(prev => prev + 1);
      }, 150);
      return () => clearTimeout(wordTimer);
    }
  }, [showTagline, visibleWords, taglineWords.length]);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-12 md:pt-0 md:pb-0">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-radial-gradient" />
      
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Photo - Top on mobile, Left on desktop */}
          <div className="order-1 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-glow-secondary/30 rounded-2xl blur-3xl animate-pulse-glow-slow" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
                <img 
                  src={heroPhoto} 
                  alt="Rishikesh T - Full-Stack Developer" 
                  className="w-full h-full object-cover object-top scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </div>
          </div>

          {/* Content - Below photo on mobile, Right on desktop */}
          <div className="order-2 lg:order-2 text-center lg:text-left space-y-4 md:space-y-6">
            <div className="inline-block">
              <span className="text-primary font-medium text-xs sm:text-sm md:text-base tracking-widest uppercase opacity-0 animate-fade-in-slow">
                Full-Stack Developer & ML Enthusiast
              </span>
            </div>

            <h1 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-foreground">Hi, I'm </span>
              <span className="relative inline-block">
                <span className="gradient-text animate-scale-in-name">Rishikesh T</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-glow-secondary to-primary animate-glow-underline" />
              </span>
            </h1>

            {showTagline && (
              <div className="py-2 md:py-4">
                <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed">
                  {taglineWords.map((word, index) => (
                    <span
                      key={index}
                      className={`inline-block mr-2 transition-all duration-500 ${
                        index < visibleWords 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-2'
                      } ${index < 3 ? 'text-primary font-semibold' : ''}`}
                      style={{ 
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </p>
              </div>
            )}

            {showContent && (
              <>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-up-slow leading-relaxed">
                  Aspiring Full-Stack Developer & Machine Learning Enthusiast passionate about solving problems, building intelligent systems, and crafting meaningful digital experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4 opacity-0 animate-fade-up-slow animation-delay-300">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                    <a href="#projects">
                      View Projects
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="hero-outline" size="lg" className="w-full sm:w-auto" asChild>
                    <a 
                      href="mailto:rishikesh140405@gmail.com?subject=Portfolio%20Contact&body=Hi%20Rishikesh%2C%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Message
                    </a>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
