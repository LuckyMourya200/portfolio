import React, { useState, useEffect } from "react";
import "./footersection.css";
import crownbankers from "../assets/projects/crownbankers.png";
import ecom from "../assets/projects/ecom.png";
import todo from "../assets/projects/todo.png";

import healthcare from "../assets/projects/healthcare.jpeg";
import invoice from "../assets/projects/Invoice.png";
import adarth from "../assets/projects/adarth.png";
import backend from "../assets/projects/backend.png";

const ProjectsSection = () => {
  const [categories] = useState([
    { id: 1, name: "All", selected: true },
    { id: 2, name: "WebApp", selected: false },
    { id: 3, name: "Mobile Apps", selected: false },
    { id: 4, name: "Backend", selected: false },
  ]);

  const [selectedCategory, setSelectedCategory] =
    useState("WebApp");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const projects = [
    {
      title: "Crown Bankers",
      image: crownbankers,
      link: "https://play.google.com/store/apps/details?id=com.crownbankers.app",
      description:
        "A secure and intuitive finance mobile app to explore market insights, track industry trends, and purchase cryptocurrencies in real-time.",
      points: [
        "📈 Real-Time Market Dashboards",
        "💳 Crypto Purchase Flow with Secure UX",
        "🔐 JWT Auth Integration with Redux & Secure Storage",
        "📲 Built with React Native (Android)",
        "🧭 Clean Navigation + Category-Wise Insights",
      ],
      color: "#ffffff",
      category: "Mobile Apps",
    },

    {
      title: "Healthcare App",
      link: "https://youtu.be/_KD9kA8CqG8",
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
      category: "Mobile Apps",
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
      category: "Mobile Apps",
    },

    {
      title: "MouzeKart",
      image: ecom,
      link: "https://www.mouzekart.developerlucky.in",
      video: false,
      description:
        "A fast and modern e-commerce app for gaming accessories, built with React and Firebase. Includes real-time Firestore, secure auth, and a sleek UI.",
      points: [
        "🛒 Gaming Gear E-Commerce",
        "🔐 Firebase Auth (Email + Google)",
        "📦 Live Cart & Checkout (Firestore)",
        "🖼️ Clean UI with Icons",
        "⚡ Built with React + TailwindCSS",
      ],
      color: "white",
      category: "WebApp",
    },
    {
      title: "Task Manager",
      image: todo,
      link: "https://task.developerlucky.in",
      video: false,
      description:
        "A minimal and responsive personal task manager built with React.js and Tailwind CSS. Features include CRUD operations, localStorage data persistence, dark mode, and task filtering.",
      points: [
        "📝 Task Creation, Edit & Delete",
        "🔍 Search by Title or Tag",
        "📅 Set Due Dates & Priorities",
        "🌗 Dark Mode Toggle",
        "⚡ Built with React + TailwindCSS",
      ],
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
      title: "Codewords: Online Multiplayer",
      image:
        "https://play-lh.googleusercontent.com/U-VbrEXlvrDzqP1jjOHlNuCj0JS_Gnhhf09IHIRzi2y9Sw-maeex_HSb60ytYhTrnKEh=w480-h960-rw",
      link: "https://play.google.com/store/apps/details?id=com.lazytrunk.codenames.secretagent.codewords",
      description:
        "Multiplayer spy party game built with Firebase and React Native.",
      color: "#f2f2f2",
      category: "Mobile Apps",
    },
    {
      title: "This or That: Questions Game",
      image:
        "https://play-lh.googleusercontent.com/tcC8Dd40wm4zhxMA4U2iH1XnUieu6Rt8lCG6EJAJPQ-B_SxLJAs296YaUP1kVfm9uIk=w480-h960-rw",
      link: "https://play.google.com/store/apps/details?id=com.lazytrunk.thisorthat",
      description:
        "Fun and quirky question game made using React Native + Firebase.",
      color: "#fff2e2",
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
          <h3>1+ Years</h3>
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
