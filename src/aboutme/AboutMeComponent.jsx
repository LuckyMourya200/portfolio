import React from "react";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import "./aboutme.css";

const AboutMeComponent = () => {
  return (
    <div className="about-me-container">
      <div className="section-container">
        <section id="about">
          <AboutSection />
        </section>
      </div>
      <div className="section-container">
        <section id="experience">
          <ServicesSection />
        </section>
      </div>
    </div>
  );
};

export default AboutMeComponent;
