import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./experience.css";

const experiences = [
  {
    duration: "June 2025 — Present",
    role: "Mobile App Developer",
    company: "Slayd Tech",
    description:
      "Optimized React Native app performance, reducing re-renders by 30% and redundant API calls by 35% to achieve smoother UI and 20% fewer crashes. Built end-to-end Razorpay payment integrations across mobile and web with Django APIs. Engineered admin dashboards, cart, and project features. Boosted product detail load speeds by 20%, deep-linking reliability to 95%+, and analytics tracking accuracy by 30%.",
  },
  {
    duration: "Sep 2024 — May 2025",
    role: "Full Stack Developer Intern",
    company: "Acumensa Technologies",
    description:
      "Developed and deployed microservices using Docker and AWS EC2 with NGINX, establishing a robust CI/CD pipeline. Enhanced campaign reporting with complex MongoDB Aggregation Pipelines, cutting report generation times by 50%. Refactored Spring Boot backend APIs using Java generics, improving maintainability by 60%. Integrated JWT-secured E-Way Bill compliance workflows.",
  },
  {
    duration: "May 2024 — Sep 2024",
    role: "React Native Developer Intern",
    company: "Lazy Trunk",
    description:
      "Built cross-platform iOS & Android games using React Native and Firebase, integrating analytics and in-app purchases to boost user retention by 25%. Shipped Codewords (5K+ downloads) and This or That (10K+ downloads) to the Google Play Store, surpassing 15K+ collective downloads.",
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
      { threshold: 0.18 },
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

TimelineItem.propTypes = {
  exp: PropTypes.shape({
    duration: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
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
      { threshold: 0.3 },
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
