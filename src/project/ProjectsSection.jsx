import { useEffect, useMemo, useState } from "react";
import "./footersection.css";
import adarth from "../assets/projects/adarth.webp";
import backend from "../assets/projects/backend.webp";
import oaysis from "../assets/oaysis.webp";
import { track } from "@vercel/analytics/react";

const ProjectsSection = () => {
  const categories = useMemo(
    () => [
      { id: 1, name: "All" },
      { id: 2, name: "Mobile Apps" },
      { id: 3, name: "Backend" },
    ],
    [],
  );

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const projects = [
    {
      title: "Slayd",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a5/78/6b/a5786be3-d653-c35b-c35d-d0e1f6bc29c1/Placeholder.mill/400x400bb-75.webp",
      links: [
        {
          label: "Web App",
          url: "https://slayd.in/",
        },
        {
          label: "iOS",
          url: "https://apps.apple.com/in/app/slayd-app/id6749233916",
        },
        {
          label: "Android",
          url: "https://play.google.com/store/apps/details?id=com.slayd.tech&hl=en_IN",
        },
      ],
      description:
        "Mobile App Developer for a fashion commerce platform with React Native, React, Django, and Razorpay integration.",
      points: [
        "Reduced re-renders by 30% and API calls by 35%, resulting in smoother UI and 20% fewer crashes",
        "Built end-to-end Razorpay payment integration across React Native mobile and React web with Django APIs",
        "Implemented scalable Redux state management, reducing navigation-driven bugs by 25%",
        "Optimized product detail loading by 20%, deep-linking to 95%+, and analytics tracking by 30%",
        "Resolved iOS layout and lifecycle issues, reducing platform-specific bugs by 40%"
      ],
      color: "#ffffff",
      category: "Mobile Apps",
    },
    {
      title: "PoppyGrid",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f3/8c/0c/f38c0c96-14f9-335d-251f-b18602cdabeb/Placeholder.mill/400x400bb-75.webp",
      links: [
        {
          label: "iOS",
          url: "https://apps.apple.com/in/app/poppygrid/id6755103014",
        },
        {
          label: "Android",
          url: "https://play.google.com/store/apps/details?id=com.tocoroyo.poppygrid.prod",
        },
      ],
      description:
        "Consumer social media app built with React Native, Firebase, and real-time communication features.",
      points: [
        "Implemented Google Auth, Firebase Auth, FCM push notifications, and Google Analytics",
        "Built real-time WebSocket chat feature with image manipulation and file upload flows",
        "Migrated Expo SDK to latest version across both apps and managed end-to-end store submission",
        "Shipped production app to both iOS App Store and Google Play Store"
      ],
      color: "#ffffff",
      category: "Mobile Apps",
    },
    {
      title: "PoppyGrid Business",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/9c/e8/5a/9ce85a15-f471-63ae-4105-433bb563d941/Placeholder.mill/400x400bb-75.webp",
      links: [
        {
          label: "iOS",
          url: "https://apps.apple.com/in/app/poppygrid-business/id6761496583",
        },
        {
          label: "Android",
          url: "https://play.google.com/store/apps/details?id=com.tocoroyo.poppygrid.biz",
        },
      ],
      description:
        "Business companion app for PoppyGrid, managing customer-facing workflows, messaging, and media handling.",
      points: [
        "Implemented Google Auth, Firebase Auth, push notifications, and analytics tracking",
        "Built chat, image manipulation, and file upload flows matching the consumer app",
        "Supported App Store and Play Store releases from scratch"
      ],
      color: "#ffffff",
      category: "Mobile Apps",
    },
    {
      title: "Oaysis Social Media",
      image: oaysis,
      link: "https://www.oaysis.com/",
      links: [
        {
          label: "Website",
          url: "https://www.oaysis.com/",
        },
        {
          label: "Upwork Project",
          url: "https://www.upwork.com/freelancers/~010bd78117629f4623?p=2023040514272751616",
        },
      ],
      description:
        "Social media platform featuring an Instagram-style Stories experience.",
      points: [
        "Built the interactive frontend workflow in React Native",
        "Implemented image capture, editing, filters, and uploads",
        "Delivered a complex feature that previous developers could not complete",
        "Received a 5.0/5.0 Upwork rating and strong client recommendation",
      ],
      color: "#ffffff",
      category: "Mobile Apps",
    },
    
  
    {
      title: "Codewords: Online Multiplayer",
      image:
        "https://play-lh.googleusercontent.com/U-VbrEXlvrDzqP1jjOHlNuCj0JS_Gnhhf09IHIRzi2y9Sw-maeex_HSb60ytYhTrnKEh=w480-h960-rw",
      links: [
        {
          label: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.lazytrunk.codenames.secretagent.codewords",
        },
      ],
      description:
        "Real-time multiplayer spy party game inspired by Codenames.",
      points: [
        "Built cross-platform iOS & Android game flows using React Native",
        "Integrated Firebase Realtime Database and analytics to boost user engagement",
        "Published app on Google Play Store, achieving 5K+ downloads"
      ],
      color: "#f2f2f2",
      category: "Mobile Apps",
    },
    {
      title: "This or That: Questions Game",
      image:
        "https://play-lh.googleusercontent.com/tcC8Dd40wm4zhxMA4U2iH1XnUieu6Rt8lCG6EJAJPQ-B_SxLJAs296YaUP1kVfm9uIk=w480-h960-rw",
      links: [
        {
          label: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.lazytrunk.thisorthat",
        },
      ],
      description: "Fun and quirky question card game.",
      points: [
        "Designed and implemented game screens, card layouts, and offline/online question synchronization using React Native",
        "Integrated Firebase analytics and in-app purchases, boosting user retention by 25%",
        "Published app on Google Play Store, achieving 10K+ downloads"
      ],
      color: "#fff2e2",
      category: "Mobile Apps",
    },
      {
      title: "Ximkart Backend",
      image: backend,
      links: [
        {
          label: "Website",
          url: "https://www.ximkart.com/",
        },
      ],
      description:
        "Spring Boot microservices backend for the Ximkart platform with government API integrations for E-Way Bill processing.",
      points: [
        "Worked on Java 17 Spring Boot and PostgreSQL microservices codebase",
        "Refactored credit notes, debit notes, and E-Way Bill APIs, eliminating duplicate logic with Java generics",
        "Improved backend system maintainability by 60%",
        "Integrated government APIs for E-Way Bill validation and creation via JWT-secured endpoints"
      ],
      color: "white",
      category: "Backend",
    },
    {
      title: "Adarth Backend",
      image: adarth,
      description:
        "NestJS backend for ad campaign management and analytics, optimized for high-throughput production use.",
      points: [
        "Developed and deployed campaign microservices using NestJS and MongoDB",
        "Optimized MongoDB Aggregation Pipelines, cutting report generation time by 50%",
        "Deployed services using Docker and AWS EC2 with NGINX, establishing a reproducible CI/CD pipeline"
      ],
      color: "white",
      category: "Backend",
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
          I&apos;ve built and shipped production mobile apps, backend systems,
          and freelance client work across React Native, React, Django, Spring
          Boot, NestJS, and Firebase.
        </p>
      </div>

      <div className="journey-highlights">
        <div className="highlight-card animate-fade-in">
          <h3>2+ Years</h3>
          <p>Professional Development Experience</p>
        </div>
        <div className="highlight-card animate-fade-in">
          <h3>15K+</h3>
          <p>Mobile App Downloads</p>
        </div>
        <div className="highlight-card animate-fade-in">
          <h3>6+</h3>
          <p>Production Projects Delivered</p>
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

              {project.points && project.points.length > 0 && (
                <div className="project-description">
                  <ul>
                    {project.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-links">
                {project.links?.map((item) => (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleProjectClick(project.title)}
                  >
                    {item.label}
                  </a>
                ))}
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
