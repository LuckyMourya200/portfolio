import { useState, useEffect } from "react";
import "./footersection.css";
import adarth from "../assets/projects/adarth.png";
import backend from "../assets/projects/backend.png";
import { track } from "@vercel/analytics/react";

const ProjectsSection = () => {
  const [categories] = useState([
    { id: 1, name: "All", selected: true },
    { id: 3, name: "Mobile Apps", selected: false },
    { id: 4, name: "Backend", selected: false },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const projects = [
    {
      title: "slayd.in",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a5/78/6b/a5786be3-d653-c35b-c35d-d0e1f6bc29c1/Placeholder.mill/400x400bb-75.webp",
      link: "https://apps.apple.com/in/app/slayd-app/id6749233916",

      description:
        "Collaborated with the Slayd team to build an AI-powered fashion commerce platform for outfit discovery and shopping.",

      points: [
        "⚡ Optimized app performance & API handling",
        "🧭 Built scalable Redux navigation architecture",
        "🔗 Improved deep linking & analytics tracking",
        "🛍️ Enhanced AI-driven shopping experience",
      ],
      color: "#ffffff",
      category: "Mobile Apps",
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

  const handleProjectClick = (projectName) => {
    track("Viewed Project", { project: projectName });
  };

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h1 className="section-title animate-slide-in">
          <span className="highlight">Development</span> Journey
        </h1>
        <p className="section-subtitle animate-slide-in">
          I&apos;m eager to explore new technologies and work on real-world
          projects. With each project, I&apos;m learning new skills and
          improving myself.
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
                    onClick={() => handleProjectClick(project.title)}
                  >
                    Watch Demo
                  </a>
                ) : (
                  project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleProjectClick(project.title)}
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
