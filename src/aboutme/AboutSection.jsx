import React, { useEffect, useRef, useState } from "react";
import profileImage from "../assets/profile2.png";
import "./aboutme.css";

const AboutSection = () => {
  const skills = [
    { name: "UX", percentage: 95 },
    { name: "Website Design", percentage: 89 },
    { name: "App Design", percentage: 93 },
    { name: "Graphic Design", percentage: 88 },
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
            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
            felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus
            consectetur lacus
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
