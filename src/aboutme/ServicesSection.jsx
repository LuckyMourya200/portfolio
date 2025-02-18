import React from "react";
import "./aboutme.css"; // Import the CSS file

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
      title: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z7Idfo9nxTWt8i_A/icon-3.png",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z7Idfo9nxTWt8i_A/icon-2.png",
      title: "App Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z7Idfo9nxTWt8i_A/icon.png",
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh",
    },
  ],
}) => {
  return (
    <div className="services-section">
      <h1 className="services-heading">Services</h1>
      <p className="services-description">
        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
        felis ligula aliquam venenatis fghh hgjj nisi ante.
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
