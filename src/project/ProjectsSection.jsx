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
        "Built a fashion commerce app with React Native, React, Django, and Razorpay.",
      points: [
        "⚡ Cut re-renders by 30% and API calls by 35% for smoother performance",
        "💳 Built Razorpay payments for mobile and web with Django APIs",
        "🧠 Improved Redux flow and reduced navigation bugs by 25%",
        "🔗 Boosted deep-link success to 95%+ and improved product loading by 20%",
        "🍏 Fixed iOS layout and lifecycle bugs, cutting issues by 40%",
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
        "Built a social media app with React Native, Firebase, and real-time chat.",
      points: [
        "🔐 Added Google Auth, Firebase Auth, push notifications, and analytics",
        "💬 Built real-time chat with image editing and file uploads",
        "⬆️ Upgraded Expo SDK across iOS and Android",
        "🚀 Shipped the app to both App Store and Play Store",
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
        "Built the business app for messaging, media handling, and customer workflows.",
      points: [
        "🔐 Added Google Auth, Firebase Auth, push notifications, and analytics",
        "💬 Built chat, image editing, and file upload flows",
        "📦 Helped launch the app on App Store and Play Store",
      ],
      color: "#ffffff",
      category: "Mobile Apps",
    },
    {
      title: "Oaysis Social Media",
      image: oaysis,
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
        "Built an Instagram-style social media experience with stories and media tools.",
      points: [
        "🎨 Added image capture, editing, filters, and uploads",
        "✅ Finished a complex feature others could not complete",
        "🏆 Earned a 5.0/5.0 Upwork rating and strong client feedback",
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
        "Built a real-time multiplayer spy game inspired by Codenames.",
      points: [
        "🎮 Built iOS and Android game flows with React Native",
        "🔥 Used Firebase Realtime Database and analytics",
        "📈 Published on Google Play with 5K+ downloads",
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
      description: "Built a fun question card game for mobile users.",
      points: [
        "🃏 Designed game screens and card layouts in React Native",
        "🔄 Built offline and online question sync",
        "💰 Added Firebase analytics and in-app purchases",
        "📈 Shipped the app with 10K+ downloads",
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
        "Built Spring Boot Backend for E-Way Bill and core backend APIs.",
      points: [
        "☕ Worked on Java 17, Spring Boot, and PostgreSQL DataBase",
        "🧩 Refactored credit note, debit note, and E-Way Bill APIs",
        "⚙️ Removed duplicate logic with Java generics",
        "🔐 Integrated government APIs with JWT-secured endpoints",
      ],
      color: "white",
      category: "Backend",
    },
    {
      title: "Adarth Backend",
      image: adarth,
      description:
        "Built a fast backend for ad campaigns, reports, and analytics.",
      points: [
        "🛠️ Built Backend with NestJS and MongoDB",
        "⚡ Cut report generation time by 50%",
        "🚀 Deployed with Docker, AWS EC2, and NGINX",
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
