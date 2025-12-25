import React from "react";
import "./footersection.css";
import SocialMediaIcons from "../header/SocialMediaIcons";

const Footer = () => {
  const menuItems = ["Home", "About", "Experience", "Projects", "Contact me"];

  const handleScroll = (section) => {
    const sectionId = section.toLowerCase().replace(" ", "-");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand-section">
          <div className="footer-logo">
            <span className="brand-name">Lucky Mourya</span>
            
          </div>
          <div className="footer-contact-info">
            <p>Let's build something together.</p>
          </div>
        </div>

        
        <div className="footer-social-section">
          <h3 className="footer-heading">Connect</h3>
          <div className="social-icons-wrapper">
            <SocialMediaIcons
              style={{
                justifyContent: "flex-start",
                marginLeft: 0,
                paddingLeft: 0,
              }}
            />
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          <span className="copyright-text">
            © {new Date().getFullYear()} Lucky Mourya. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
