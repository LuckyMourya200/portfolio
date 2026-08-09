import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./navbar.css";

const Navbar = ({
  menuItems = ["Home", "About", "Experience", "Projects", "Contact me"],
  buttonText = "Resume",
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const handleDownload = () => {
    const cvUrl =
      "https://s3.ap-south-1.amazonaws.com/developerlucky.in/LuckyMourya.pdf";
    window.open(cvUrl, "_blank");
  };

  const handleScroll = (e, section) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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
    <>
      <nav className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-content">
          <div className="logo-placeholder">LM.</div>
          
          <div className="menu-items desktop-only">
            {menuItems.map((item) => {
              const sectionId = item.toLowerCase().replace(" ", "-");
              return (
                <a
                  href={`#${sectionId}`}
                  id={`nav-link-${sectionId}`}
                  onClick={(e) => handleScroll(e, item)}
                  key={item}
                  className="menu-link"
                >
                  {item}
                </a>
              );
            })}
          </div>

          <div className="nav-actions">
            <button
              id="nav-btn-resume"
              className="download-btn desktop-only"
              onClick={handleDownload}
            >
              {buttonText}
            </button>
            <button 
              className="mobile-menu-btn mobile-only"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-content">
          {menuItems.map((item) => {
            const sectionId = item.toLowerCase().replace(" ", "-");
            return (
              <a
                href={`#${sectionId}`}
                onClick={(e) => handleScroll(e, item)}
                key={item}
                className="mobile-menu-link"
              >
                {item}
              </a>
            );
          })}
          <button
            className="download-btn mobile-drawer-btn"
            onClick={handleDownload}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string,
};

export default Navbar;
