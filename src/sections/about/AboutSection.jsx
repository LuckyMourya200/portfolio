import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import SectionWrapper from "../../components/layout/SectionWrapper";
import "./aboutme.css";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-card-icon" aria-hidden="true">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
        <line x1="14" y1="4" x2="10" y2="20"></line>
      </svg>
    ),
    title: "Full Stack Development",
    description: "Design & develop scalable web applications using Nest.js, React, and MongoDB. Expertise in REST APIs and MongoDB aggregation pipelines.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-card-icon" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    title: "Mobile App Development",
    description: "Build cross-platform apps with React Native. Published 4+ Play Store apps with 15K+ downloads, integrated Firebase analytics.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-card-icon" aria-hidden="true">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
    title: "Backend Systems",
    description: "Develop secure Spring Boot backends. Government API integration specialist (E-Way Bill systems), JWT/Spring Security implementation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-card-icon" aria-hidden="true">
        <path d="M18 10h-.01c.01-.16.01-.32.01-.48A5.5 5.5 0 0 0 12.5 4a5.52 5.52 0 0 0-5.11 3.5C4.45 8 2 10.45 2 13.5A5.5 5.5 0 0 0 7.5 19h10a4.5 4.5 0 0 0 4.5-4.5 4.5 4.5 0 0 0-4-4.5z"></path>
      </svg>
    ),
    title: "Cloud DevOps",
    description: "AWS Certified solutions with Dockerized deployments. CI/CD pipelines, EC2/S3 management, and Nginx configurations.",
  },
];

const ServiceCard = ({ icon, title, description, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const currentCard = cardRef.current;
    if (!currentCard) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("card-visible");
          observer.unobserve(currentCard);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(currentCard);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="service-card"
      ref={cardRef}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="service-card-icon-wrap">{icon}</div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">{description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="about-section">
      <div className="about-content-wrapper">
        <div className="about-text-col">
          <span className="about-label">Capability</span>
          <h2 className="about-title">Core Competencies</h2>
          <p className="about-description">
            With expertise across the full product lifecycle, I thrive on turning
            complex problems into elegant, performant solutions that users love.
          </p>
        </div>

        <div className="about-cards-grid">
          {services.map((service, i) => (
            <ServiceCard key={i} index={i} {...service} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
