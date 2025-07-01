import React from "react";
import profileImage from "../assets/profile.png";
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
            BTech CS student developing production-grade solutions with 1+ years
            of experience in full-stack development. A published React Native
            developer with 10K+ app downloads and an AWS Certified Developer
            specializing in scalable cloud architectures.
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
