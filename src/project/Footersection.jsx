import React from "react";
import ProjectsSection from "./ProjectsSection";
import ContactUsSection from "./ContactUsSection";
import Footer from "./Footer";
import "./footersection.css";

const Footersection = () => {
  return (
    <div className="contact-footer-container">
      <div className="main-content-wrapper">
        <ProjectsSection />
        <ContactUsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Footersection;
