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
      <div className="footer-logo">
        <span className="brand-name">Lucky Mourya</span>
      </div>

      <div className="footer-menu">
        {menuItems.map((item, index) => (
          <div
            onClick={() => handleScroll(item)}
            key={index}
            className="menu-item"
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#f0f0f0")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <span className="menu-text">{item}</span>
          </div>
        ))}
      </div>

      <div className="social-icons">
        <SocialMediaIcons />
      </div>

      <div className="copyright">
        <span className="copyright-text">
          © 2025 Lucky Mourya. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
