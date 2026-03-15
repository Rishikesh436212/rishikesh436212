import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "rishikesh140405@gmail.com",
    href: "mailto:rishikesh140405@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "9360845471",
    href: "tel:+919360845471",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Rishikesh436212",
    href: "https://github.com/Rishikesh436212",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Rishikesh T",
    href: "https://www.linkedin.com/in/rishikesh-t-791a4b357/",
  },
];

const ContactDetails = () => {
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
    <section id="contact-details" ref={sectionRef} className="relative">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className={`text-primary font-medium text-sm tracking-widest uppercase mb-4 block ${isVisible ? 'opacity-100 animate-fade-up' : 'opacity-0'}`}>
            Get In Touch
          </span>
          <h2 className={`section-title ${isVisible ? 'opacity-100 animate-fade-up delay-100' : 'opacity-0'}`}>
            Contact <span className="gradient-text">Details</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactDetails.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card p-6 text-center group hover:scale-105 transition-all duration-300 ${
                isVisible ? `opacity-100 animate-fade-up delay-${(index + 2) * 100}` : 'opacity-0'
              }`}
              style={{ animationDelay: isVisible ? `${(index + 2) * 100}ms` : '0ms' }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <contact.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">
                {contact.label}
              </h3>
              <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
