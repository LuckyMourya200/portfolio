import React from "react";
import "./Home.css";

const Navbar = ({
  logoText = " ucky",
  menuItems = [
    "Home",
    "About",
    "Services",
    "Experience",
    "Projects",
    "Contact me",
  ],
  buttonText = "Download CV",
}) => {
  const handleDownload = () => {
    const cvUrl =
      "https://s3.ap-south-1.amazonaws.com/developerlucky.in/LuckyMourya.pdf";
    window.open(cvUrl, "_blank");
  };

  return (
    <nav className="navbar-container">
      <a href="/" className="logo-wrapper">
        <div className="logo-box">
          <span className="logo-letter">L</span>
        </div>
        <span className="brand-name">{logoText.slice(1)}</span>
      </a>

      <div className="menu-items">
        {menuItems.map((item) => (
          <a key={item} className="menu-link">
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
