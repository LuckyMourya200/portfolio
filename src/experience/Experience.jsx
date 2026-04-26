import React, { useEffect, useRef } from "react";
import "./experience.css";

const experiences = [
  {
    duration: "2025 Jul — Present",
    role: "Mobile App Developer",
    company: "Slayd",
    description:
      "Building a production React Native app with embedded AI/ML capabilities, integrating a Python-based backend to deliver smart, real-time features. Drove frontend performance optimization that reduced load times and elevated user retention through seamless AI-assisted interactions.",
  },
  {
    duration: "2024 May — 2024 Sep",
    role: "Full Stack Developer Intern",
    company: "Acumensa Technologies",
    description:
      "Engineered scalable full-stack web applications using Nest.js and React, designing complex MongoDB aggregation pipelines that cut query times significantly. Delivered a critical Government API integration (E-Way Bill system) with JWT-secured Spring Boot endpoints, enabling compliance-ready enterprise workflows.",
  },
  {
    duration: "2024 May — 2024 Sep",
    role: "React Native Developer Intern",
    company: "Lazy Trunk",
    description:
      "Shipped 4+ cross-platform mobile applications to the Google Play Store, collectively surpassing 10K+ downloads. Integrated Firebase Analytics and real-time data pipelines to drive data-informed product decisions, while maintaining clean, component-driven React Native codebases.",
  },
];

const TimelineItem = ({ exp, index }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("exp-item--visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="exp-item"
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Left — orange square + vertical line */}
      <div className="exp-marker">
        <div className="exp-square" />
        <div className="exp-line" />
      </div>

      {/* Right — content */}
      <div className="exp-content">
        <span className="exp-duration">{exp.duration}</span>
        <h3 className="exp-role">{exp.role}</h3>
        <h4 className="exp-company">{exp.company}</h4>
        <p className="exp-description">{exp.description}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("exp-header--visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="exp-section" id="experience">
      <div className="exp-container">
        <div className="exp-header" ref={headerRef}>
          <span className="exp-label">Professional Journey</span>
          <h2 className="exp-title">Experience</h2>
        </div>

        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
