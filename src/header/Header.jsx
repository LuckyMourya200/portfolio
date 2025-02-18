import React from "react";
import profileImage from "../assets/profile.png";
import SocialMediaIcons from "./SocialMediaIcons";
import "./Home.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <span className="greeting">Hi I am</span>
        <span className="name">Lucky Mourya</span>

        <div className="title-wrapper">
          <h1 className="main-title">Full Stack</h1>
          <h1 className="main-title offset">Developer</h1>
        </div>

        <p className="description">
          BTech CS student building production-grade solutions with 2+ years of
          experience in full-stack development. Published React Native developer
          with 50K+ app downloads. AWS Certified Developer specializing in
          scalable cloud architectures.
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
  );
};

export default Header;
