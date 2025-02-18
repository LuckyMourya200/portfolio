import React from "react";
import "./footersection.css";
import SocialMediaIcons from "../header/SocialMediaIcons";

const Footer = () => {
  const menuItems = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Testimonials",
    "Contact Me",
  ];

  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <div className="logo-box">
          <span className="logo-letter">L</span>
        </div>
        <span className="brand-name">ucky</span>
      </div>

      <div className="footer-menu">
        {menuItems.map((item, index) => (
          <div
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
          © 2025 Lucky All Rights Reserved , Inc.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
