import React, { useEffect, useRef } from "react";
import "./aboutme.css";

import FullIcon from "../assets/icons/icon_fullstack.png";
import MobileIcon from "../assets/icons/icon_mobile.png";
import BackendIcon from "../assets/icons/icon_backend.png";
import CloudIcon from "../assets/icons/icon_cloud.png";

const services = [
  {
    icon: FullIcon,
    title: "Full Stack Development",
    description:
      "Design & develop scalable web applications using Nest.js, React, and MongoDB. Expertise in REST APIs and MongoDB aggregation pipelines.",
  },
  {
    icon: MobileIcon,
    title: "Mobile App Development",
    description:
      "Build cross-platform apps with React Native. Published 4+ Play Store apps with 10K+ downloads, integrated Firebase analytics.",
  },
  {
    icon: BackendIcon,
    title: "Backend Systems",
    description:
      "Develop secure Spring Boot backends. Government API integration specialist (E-Way Bill systems), JWT/Spring Security implementation.",
  },
  {
    icon: CloudIcon,
    title: "Cloud DevOps",
    description:
      "AWS Certified solutions with Dockerized deployments. CI/CD pipelines, EC2/S3 management, and Nginx configurations.",
  },
];

const ServiceCard = ({ icon, title, description, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("card-visible");
        }
      },
      { threshold: 0.15 },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      className="service-card-new"
      ref={cardRef}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="service-card-icon-wrap">
        <img src={icon} alt={title} className="service-card-icon" />
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">{description}</p>
    </div>
  );
};

const AboutSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("about-text-visible");
        }
      },
      { threshold: 0.2 },
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div className="about-section-new">
      {/* Left — text */}
      <div className="about-text-col" ref={textRef}>
        <span className="about-label">Who I Am</span>
        <h1 className="about-heading-new">About Me</h1>
        <p className="about-desc-new">
          I&apos;m <strong>Lucky Mourya</strong>, a passionate Full Stack
          Developer who loves building robust, scalable end-to-end systems and
          digital experiences.
        </p>
        <p className="about-desc-new">
          With expertise across the full product lifecycle, I thrive on turning
          complex problems into elegant, performant solutions that users love.
        </p>
        <div className="about-accent-line" />
      </div>

      {/* Right — 2×2 cards */}
      <div className="about-cards-grid">
        {services.map((service, i) => (
          <ServiceCard key={i} index={i} {...service} />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
