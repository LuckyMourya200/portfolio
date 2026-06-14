import PropTypes from "prop-types";
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
  const handleScroll = (e, section) => {
    e.preventDefault();
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

      <button
        id="nav-btn-resume"
        className="download-btn"
        onClick={handleDownload}
      >
        {buttonText}
      </button>
    </nav>
  );
};

Navbar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string,
};

export default Navbar;
