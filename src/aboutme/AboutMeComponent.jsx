import AboutSection from "./AboutSection";
import "./aboutme.css";

const AboutMeComponent = () => {
  return (
    <div className="about-me-container">
      <div className="section-container">
        <section id="about">
          <AboutSection />
        </section>
      </div>
    </div>
  );
};

export default AboutMeComponent;
