import React from "react";
import "./aboutme.css";

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
      icon: "https://dashboard.codeparrot.ai/api/image/Z7Idfo9nxTWt8i_A/icon-4.png",
      title: "Full Stack Development",
      description:
        "Design & develop scalable web applications using Nest.js, React, and MongoDB. Expertise in REST APIs and MongoDB aggregation pipelines.",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z7Idfo9nxTWt8i_A/icon-2.png",
      title: "Mobile App Development",
      description:
        "Build cross-platform apps with React Native. Published 2 Play Store apps with 50K+ downloads, integrated Firebase analytics.",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z7Idfo9nxTWt8i_A/icon-3.png",
      title: "Backend Systems",
      description:
        "Develop secure Spring Boot backends. Government API integration specialist (E-Way Bill systems), JWT/Spring Security implementation.",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z7Idfo9nxTWt8i_A/icon.png",
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
