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
          Full Stack Developer with experience in building scalable web
          applications using Nest.js, React, and MongoDB. Proficient in creating
          cross-platform mobile applications with React Native. Skilled in
          CI/CD, Docker, and AWS, ensuring efficient production deployment.
        </p>

        <button className="hire-btn">Let's Connect</button>
      </div>

      <div className="image-wrapper">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <SocialMediaIcons />
      </div>
    </header>
  );
};

export default Header;
