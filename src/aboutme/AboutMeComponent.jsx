import React from "react";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import "./aboutme.css";

const AboutMeComponent = () => {
  return (
    <div className="about-me-container">
      <div className="section-container">
        <AboutSection />
      </div>
      <div className="section-container">
        <ServicesSection />
      </div>
    </div>
  );
};

export default AboutMeComponent;
