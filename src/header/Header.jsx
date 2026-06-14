import profileImage from "../assets/profile.webp";
import SocialMediaIcons from "./SocialMediaIcons";
import "./Home.css";
import { track } from "@vercel/analytics/react";

const Header = () => {
  const handleConnectClick = () => {
    track("Contacted via Email");
  };

  return (
    <section id="home">
      <header className="header-container">
        <div className="header-content">
          <span className="greeting">Hi, I’m</span>
          <h1 className="name">Lucky Mourya</h1>

          <div className="title-wrapper">
            <h2 className="main-title">Full Stack</h2>
            <h2 className="main-title offset">Developer</h2>
          </div>

          <p className="description">
            I&apos;m a React Native &amp; Full Stack Developer with 2+ years of
            experience building and shipping production mobile applications,
            scalable backend systems, and high-performance digital products.
          </p>

          <a
            id="header-btn-connect"
            href="mailto:hello@developerlucky.in"
            onClick={handleConnectClick}
            className="hire-btn"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            Let&apos;s Connect
          </a>
        </div>

        <div className="image-wrapper">
          <img
            src={profileImage}
            alt="Profile of Lucky Mourya"
            className="profile-image"
            width="800"
            height="696"
            fetchPriority="high"
            decoding="async"
          />
          <SocialMediaIcons idPrefix="social-header" />
        </div>
      </header>
    </section>
  );
};

export default Header;
