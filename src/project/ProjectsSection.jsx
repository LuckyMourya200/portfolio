import React from "react";
import "./footersection.css";

const ProjectsSection = () => {
  const categories = [
    { id: 1, name: "All", selected: false },
    { id: 2, name: "UI UX", selected: true },
    { id: 3, name: "Website Design", selected: false },
    { id: 4, name: "App Design", selected: false },
    { id: 5, name: "Graphic Design", selected: false },
  ];

  return (
    <div className="projects-section">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-description">
        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
        felis ligula aliquam venenatis fghh hgjj nisi ante.
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
