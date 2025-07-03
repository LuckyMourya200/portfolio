import React, { useEffect } from "react";
import "./experience.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const experience = [
    {
      company: "Slayd",
      role: "Mobile App Developer",
      duration: "2025 Jul - Present",

      highlights: [
        "React Native mobile app",
        "AI/ML integration",
        "Python-based backend",
      ],

      projects: [
        {
          name: "Slayd app",
          tech: ["React Native", "MongoDB", "Python"],
          contribution: "Led frontend optimization & integrated AI modules",
        },
      ],
    },
    {
      company: "Acumensa Technologies",
      role: "Full Stack Developer",
      duration: "2024 Sep - 2025 June",
      highlights: [
        "Scalable web apps with Nest.js/React",
        "MongoDB aggregation pipelines",
        "Government API integration",
      ],
      projects: [
        {
          name: "Adarth Backend",
          tech: ["Nest.js", "MongoDB", "Docker"],
          contribution: "Ads analytics & campaign management system",
        },
        {
          name: "Ximkart Backend",
          tech: ["Spring Boot", "AWS", "Nginx"],
          contribution: "E-Way Bill processing system",
        },
      ],
    },
    {
      company: "Lazy Trunk",
      role: "React Native Developer",
      duration: "2024 May - 2024 Sep",
      highlights: [
        "Cross-platform mobile apps",
        "Play Store publications",
        "Firebase integration",
      ],
      projects: [
        {
          name: "Charades: Party Game",
          tech: ["React Native", "Mobile Sensors", "Push Notifications"],
        },
        {
          name: "Truth or Dare",
          tech: ["In-app Purchases", "Firebase Analytics", "AdMob"],
        },
      ],
    },
  ];

  return (
    <section className="experience-section" id="experience" ref={ref}>
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Experience
      </motion.h2>

      <div className="experience-grid">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="experience-card"
          >
            <div className="card-header">
              <div className="timeline-marker"></div>
              <h3>{exp.role}</h3>
              <div className="company-details">
                <span className="company-name">{exp.company}</span>
                <br />
                <span className="experience-duration">{exp.duration}</span>
              </div>
            </div>

            <div className="card-highlights">
              {exp.highlights.map((highlight, hIndex) => (
                <div key={hIndex} className="highlight-item">
                  <div className="highlight-icon">▹</div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="card-projects">
              {exp.projects.map((project, pIndex) => (
                <div key={pIndex} className="project-item">
                  <h4>{project.name}</h4>
                  <div className="tech-stack">
                    {project.tech.map((tech, tIndex) => (
                      <span key={tIndex} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.contribution && <p>{project.contribution}</p>}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
