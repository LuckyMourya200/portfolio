import React, { useEffect, useRef, useState } from "react";
import profileImage from "../assets/profile2.png";
import "./aboutme.css";

const AboutSection = () => {
  const skills = [
    { name: "Full Stack Development", percentage: 90 },
    { name: "React & React Native", percentage: 85 },
    { name: "Nest.js & Spring Boot", percentage: 80 },
    { name: "CI/CD & Docker", percentage: 85 },
    { name: "AWS & Firebase", percentage: 80 },
    { name: "MongoDB & SQL", percentage: 85 },
  ];

  const SkillBar = ({ name, percentage }) => {
    const [progress, setProgress] = useState(0);
    const skillRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setProgress(percentage);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );

      if (skillRef.current) {
        observer.observe(skillRef.current);
      }

      return () => {
        if (skillRef.current) {
          observer.unobserve(skillRef.current);
        }
      };
    }, [percentage]);

    return (
      <div className="skill-bar-container" ref={skillRef}>
        <div className="skill-name">{name}</div>
        <div className="skill-track">
          <div className="skill-progress" style={{ width: `${progress}%` }} />
          <div className="skill-indicator" />
        </div>
      </div>
    );
  };
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-image-wrapper">
          <img src={profileImage} alt="About" className="about-image" />
        </div>
        <div className="about-text-content">
          <h1 className="about-heading">About Me</h1>
          <p className="about-description">
            I'm Lucky Mourya, a Full Stack Developer passionate about creating
            seamless and dynamic digital experiences.
          </p>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
