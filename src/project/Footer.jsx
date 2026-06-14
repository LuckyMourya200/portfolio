import "./footersection.css";
import SocialMediaIcons from "../header/SocialMediaIcons";

const Footer = () => {
  const handleScroll = (e, section) => {
    e.preventDefault();
    const sectionId = section.toLowerCase().replace(" ", "-");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const links = ["Home", "About", "Experience", "Projects", "Contact me"];

  return (
    <footer className="footer-root">
      <div className="footer-inner">
        {/* Top row */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <span className="footer-name">Lucky Mourya</span>
            <p className="footer-tagline">
              Full Stack Developer · React Native · Cloud &amp; DevOps
            </p>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Quick Links</h4>
            <ul className="footer-nav">
              {links.map((l) => {
                const sectionId = l.toLowerCase().replace(" ", "-");
                return (
                  <li key={l}>
                    <a
                      href={`#${sectionId}`}
                      className="footer-nav-link"
                      onClick={(e) => handleScroll(e, l)}
                    >
                      {l}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Connect</h4>
            <SocialMediaIcons />
            <a href="mailto:hello@developerlucky.in" className="footer-email">
              hello@developerlucky.in
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} Lucky Mourya. All rights reserved.
          </span>
          <span className="footer-made">
            Built with <span className="footer-heart">♥</span> &amp; React
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
