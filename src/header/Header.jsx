import React from "react";
import profileImage from "../assets/profile.webp";
import SocialMediaIcons from "./SocialMediaIcons";
import "./Home.css";

const Header = () => {
  return (
    <section id="home">
      <header className="header-container">
        <div className="header-content">
          <span className="greeting">Hi, I’m</span>
          <span className="name">Lucky Mourya</span>

          <div className="title-wrapper">
            <h1 className="main-title">Full Stack</h1>
            <h1 className="main-title offset">Developer</h1>
          </div>

          <p className="description">
            I'm a BTech CS student and Full Stack Developer with 2+ years of
            experience building scalable digital products and end-to-end
            solutions that create real impact.
          </p>

          <button
            onClick={() =>
              (window.location = "mailto:luckymourya52132@gmail.com")
            }
            className="hire-btn"
          >
            Let's Connect
          </button>
        </div>

        <div className="image-wrapper">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <SocialMediaIcons />
        </div>
      </header>
    </section>
  );
};

export default Header;
