import profileImage from "../../assets/images/profile.webp";
import SocialMediaIcons from "../../components/common/SocialMediaIcons";
import SectionWrapper from "../../components/layout/SectionWrapper";
import "./Home.css";
import { track } from "@vercel/analytics/react";

const Header = () => {
  const handleConnectClick = () => {
    track("Contacted via Email");
  };

  return (
    <SectionWrapper id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Lucky Mourya</h1>
          <h2 className="hero-subtitle">Mobile & Full-Stack Developer</h2>
          <p className="hero-description">
            I build and ship production mobile applications and backend systems using React Native, Spring Boot, and Node.js.
          </p>
          <a
            id="header-btn-connect"
            href="mailto:hello@developerlucky.in"
            onClick={handleConnectClick}
            className="btn-primary"
          >
            Let&apos;s Connect
          </a>
        </div>
        <div className="hero-visual">
          <div className="profile-image-container">
            <img
              src={profileImage}
              alt="Profile of Lucky Mourya"
              className="profile-image"
              width="800"
              height="696"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <SocialMediaIcons idPrefix="social-header" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Header;
