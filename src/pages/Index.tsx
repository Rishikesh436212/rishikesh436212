import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactDetails from "@/components/ContactDetails";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import HobbiesSection from "@/components/HobbiesSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Rishikesh T | Full-Stack Developer & ML Enthusiast</title>
        <meta 
          name="description" 
          content="Rishikesh T - Aspiring Full-Stack Developer & Machine Learning Enthusiast passionate about building intelligent systems and crafting meaningful digital experiences." 
        />
        <meta name="keywords" content="Rishikesh T, Full-Stack Developer, Machine Learning, Python, React, FastAPI" />
        <link rel="canonical" href="https://rishikesht.dev" />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ContactDetails />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <AchievementsSection />
          <HobbiesSection />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
