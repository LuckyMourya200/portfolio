import React from "react";
import "./footersection.css";

const ProjectsSection = () => {
  const categories = [
    { id: 1, name: "All", selected: false },
    { id: 2, name: "Full Stack Project", selected: true },
    { id: 3, name: "WebApp", selected: false },
    { id: 4, name: "Mobile Apps", selected: false },
    { id: 5, name: "Backend", selected: false },
  ];

  return (
    <div className="projects-section">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-description">
        Scalable solutions delivered through 2+ years of professional
        development
      </p>
      <div className="categories-menu">
        {categories.map((category) => (
          <button
            key={category.id}
            className="category-button"
            style={{
              background: category.selected ? "#fd6f00" : "#f3f3f3",
              color: category.selected ? "#fff" : "#000",
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
