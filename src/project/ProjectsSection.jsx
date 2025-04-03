import React, { useState, useEffect } from "react";
import "./footersection.css";
import truthordare from "../assets/projects/truthordare.jpg";
import chreades from "../assets/projects/chreads.jpg";
import ecom from "../assets/projects/ecom.png";
import healthcare from "../assets/projects/healthcare.jpeg";
import firsttolast from "../assets/projects/firsttolast.jpg";
import invoice from "../assets/projects/invoice.jpeg";
import adarth from "../assets/projects/adarth.png";
import backend from "../assets/projects/backend.png";

const ProjectsSection = () => {
  const [categories] = useState([
    { id: 1, name: "All", selected: true },
    { id: 2, name: "Full Stack Project", selected: false },
    { id: 3, name: "WebApp", selected: false },
    { id: 4, name: "Mobile Apps", selected: false },
    { id: 5, name: "Backend", selected: false },
  ]);

  const [selectedCategory, setSelectedCategory] =
    useState("Full Stack Project");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const projects = [
    {
      title: "Healthcare App",
      link: "https://www.youtube.com/watch?v=lziQeW3q_pM",
      image: healthcare,
      video: true,
      description:
        "A full-stack healthcare solution enabling secure communication between users and doctors",
      points: [
        "🔹 React Native + Spring Boot App",
        "🔹 JWT Security for Secure Access",
        "🔹 AWS EC2 Deployment",
        "🔹 User and Doctor Communication System",
        "🔹 Prescription Sharing Feature",
      ],
      color: "#e6eef9",
      category: "Full Stack Project",
    },
    {
      title: "Get-Invoice",
      link: "https://www.youtube.com/watch?v=wFQc8I3eYm0",
      image: invoice,
      video: true,
      description:
        "A cross-platform billing application built with React Native and Firebase.",
      points: [
        "🔹 Secure User Authentication",
        "🔹 Real-time Invoice Management with Firestore",
        "🔹 Modern, Responsive UI",
        "🔹 Seamless Android & iOS Compatibility",
      ],
      color: "white",
      category: "Full Stack Project",
    },
    {
      title: "Basic eCommerce Design",
      image: ecom,
      video: true,
      description:
        "A minimalistic eCommerce frontend design to showcase modern UI principles and UX enhancements.",
      color: "white",
      category: "WebApp",
    },
    {
      title: "Ximkart Backend",
      image: backend,
      link: "https://www.ximkart.com/",
      description:
        "A secure Spring Boot backend powering the Ximkart platform, integrating with government APIs for E-Way Bill processing.",
      color: "white",
      category: "Backend",
    },
    {
      title: "Adarth Backend",
      image: adarth,
      link: "https://www.adarth.in/",
      description:
        "A NestJS-powered backend for managing ad campaigns and analytics, optimized for high performance.",
      color: "white",
      category: "Backend",
    },
    {
      title: "Truth or Dare",
      image: truthordare,
      link: "https://play.google.com/store/apps/details?id=com.androidmate.drinking.party.couples.dirty.truth.or.dare",
      description: "React Native !! Firebase !! Ads Intreagation",
      color: "#95c8d2",
      category: "Mobile Apps",
    },
    {
      title: "Charades: Party Game",
      image: chreades,
      link: "https://play.google.com/store/apps/details?id=com.lazytrunk.charades.headsup.guessup",
      description: "Expo Mobile Sensors !! Push Notification",
      color: "#f5fae2",
      category: "Mobile Apps",
    },
    {
      title: "First to Last",
      image: firsttolast,
      link: "https://play.google.com/store/apps/details?id=com.lazytrunk.first.to.last",
      description: "Deep Linking !! Multiplayer Game Firebase",
      color: "#efb280",
      category: "Mobile Apps",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h1 className="section-title animate-slide-in">
          <span className="highlight">Development</span> Journey
        </h1>
        <p className="section-subtitle animate-slide-in">
          I'm eager to explore new technologies and work on real-world projects.
          With each project, I'm learning new skills and improving myself.
        </p>
      </div>

      <div className="journey-highlights">
        <div className="highlight-card animate-fade-in">
          <h3>2+ Years</h3>
          <p>Professional Development Experience</p>
        </div>
        <div className="highlight-card animate-fade-in">
          <h3>10K+</h3>
          <p>Mobile App Downloads</p>
        </div>
        <div className="highlight-card animate-fade-in">
          <h3>5+</h3>
          <p>Projects Delivered</p>
        </div>
      </div>

      <div className="categories-menu">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
            className={`category-button ${animate ? "scale-up" : ""}`}
            style={{
              background:
                selectedCategory === category.name ? "#fd6f00" : "#f3f3f3",
              color: selectedCategory === category.name ? "#fff" : "#000",
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={project.title}
            className={`project-card animate-card-${index % 3}`}
          >
            <div className="card-media">
              <img
                style={{ backgroundColor: project.color }}
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-description">
                {project.points && project.points.length > 0 && (
                  <ul>
                    {project.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="project-links">
                {project.video ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Demo
                  </a>
                ) : (
                  project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  )
                )}
              </div>
              <span className="project-category">{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
