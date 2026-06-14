import profileImage from "../assets/profile.webp";
import SocialMediaIcons from "./SocialMediaIcons";
import "./Home.css";
import { track } from "@vercel/analytics/react";

const Header = () => {
  const handleConnectClick = () => {
    track("Contacted via Email");
    window.location = "mailto:hello@developerlucky.in";
  };

  return (
    <section id="home">
      <header className="header-container">
        <div className="header-content">
          <span className="greeting">Hi, I’m</span>
          <h1 className="name">Lucky Mourya</h1>

          <div className="title-wrapper">
            <h1 className="main-title">Full Stack</h1>
            <h1 className="main-title offset">Developer</h1>
          </div>

          <p className="description">
            I&apos;m a React Native &amp; Full Stack Developer with 2+ years of
            experience building and shipping production mobile applications,
            scalable backend systems, and high-performance digital products.
          </p>

          <button onClick={handleConnectClick} className="hire-btn">
            Let&apos;s Connect
          </button>
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
          <SocialMediaIcons />
        </div>
      </header>
    </section>
  );
};

export default Header;
