import React from "react";
import "./aboutme.css";
import Full from "../assets/imageicon1.png";
import Mobile from "../assets/imageicon2.png";
import Backend from "../assets/imageicon3.png";
import Cloud from "../assets/imageicon4.png";

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <img src={icon} alt={title} className="service-icon" />
    <h3 className="service-title">{title}</h3>
    <p className="service-text">{description}</p>
  </div>
);

const ServicesSection = ({
  services = [
    {
      icon: Full,
      title: "Full Stack Development",
      description:
        "Design & develop scalable web applications using Nest.js, React, and MongoDB. Expertise in REST APIs and MongoDB aggregation pipelines.",
    },
    {
      icon: Mobile,
      title: "Mobile App Development",
      description:
        "Build cross-platform apps with React Native. Published 2 Play Store apps with 10K+ downloads, integrated Firebase analytics.",
    },
    {
      icon: Backend,
      title: "Backend Systems",
      description:
        "Develop secure Spring Boot backends. Government API integration specialist (E-Way Bill systems), JWT/Spring Security implementation.",
    },
    {
      icon: Cloud,
      title: "Cloud DevOps",
      description:
        "AWS Certified solutions with Dockerized deployments. CI/CD pipelines, EC2/S3 management, and Nginx configurations.",
    },
  ],
}) => {
  return (
    <div className="services-section">
      <h1 className="services-heading">Technical Expertise</h1>
      <p className="services-description">
        Proven solutions delivered through 2+ years of professional development
        experience
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
