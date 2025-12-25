import React from "react";
import "./Home.css";

const Navbar = ({
  menuItems = ["Home", "About", "Experience", "Projects", "Contact me"],
  buttonText = "Resume",
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
