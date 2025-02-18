import React from "react";
import "./Home.css";
import Licon from "../assets/L.png";

const Navbar = ({
  logoText = "ucky",
  menuItems = ["Home", "About", "Experience", "Projects", "Contact me"],
  buttonText = "Download CV",
}) => {
  const handleDownload = () => {
    const cvUrl =
      "https://s3.ap-south-1.amazonaws.com/developerlucky.in/LuckyMourya.pdf";
    window.open(cvUrl, "_blank");
  };
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
    <nav className="navbar-container">
      <a href="/" className="logo-wrapper">
        <img className="logo-icon" src={Licon}></img>

        <span className="brand-name">{logoText}</span>
      </a>

      <div className="menu-items">
        {menuItems.map((item) => (
          <a
            onClick={() => handleScroll(item)}
            key={item}
            className="menu-link"
          >
            {item}
          </a>
        ))}
      </div>

      <button className="download-btn" onClick={handleDownload}>
        {buttonText}
      </button>
    </nav>
  );
};

export default Navbar;
