import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.jpg";

const HeroSection = () => {
  const [showTagline, setShowTagline] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const taglineTimer = setTimeout(() => setShowTagline(true), 500);
    const contentTimer = setTimeout(() => setShowContent(true), 1500);
    return () => {
      clearTimeout(taglineTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-gradient" />
      
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-glow-secondary/30 rounded-2xl blur-3xl animate-pulse-glow" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
                <img 
                  src={heroPhoto} 
                  alt="Rishikesh T - Full-Stack Developer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="mb-6 inline-block">
              <span className="text-primary font-medium text-sm md:text-base tracking-widest uppercase opacity-0 animate-fade-in">
                Full-Stack Developer & ML Enthusiast
              </span>
            </div>

            <h1 className="section-title text-4xl md:text-5xl lg:text-6xl mb-4">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text">Rishikesh T</span>
            </h1>

            {showTagline && (
              <div className="overflow-hidden mb-6">
                <p className="font-display text-xl md:text-2xl lg:text-3xl text-muted-foreground typewriter">
                  Code. Create. Automate. Accelerate your ideas into reality.
                </p>
              </div>
            )}

            {showContent && (
              <>
                <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-up">
                  Aspiring Full-Stack Developer & Machine Learning Enthusiast passionate about solving problems, building intelligent systems, and crafting meaningful digital experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-slide-right delay-200">
                  <Button variant="hero" size="lg" asChild>
                    <a href="#projects">
                      View Projects
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="hero-outline" size="lg" asChild>
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
