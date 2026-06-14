import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./experience.css";

const experiences = [
  {
    duration: "June 2025 — Present",
    role: "Mobile App Developer",
    company: "Slayd Tech",
    description: [
      "Optimized React Native performance to cut re-renders by 30%, API calls by 35%, and crashes by 20%.",
      "Integrated end-to-end Razorpay payment systems and boosted product page load speeds by 20%.",
    ],
  },
  {
    duration: "Sep 2024 — May 2025",
    role: "Full Stack Developer Intern",
    company: "Acumensa Technologies",
    description: [
      "Developed and deployed microservices using Docker and AWS EC2 with NGINX, establishing a reproducible CI/CD pipeline.",
      "Optimized complex MongoDB Aggregation Pipelines, reducing campaign report generation times by 50%.",
    ],
  },
  {
    duration: "May 2024 — Sep 2024",
    role: "React Native Developer Intern",
    company: "Lazy Trunk",
    description: [
      "Developed cross-platform React Native games, boosting user retention by 25% via Firebase integration.",
      "Successfully published 'Codewords' & 'This or That' to Play Store, exceeding 15K+ total downloads.",
    ],
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
        <ul className="exp-description">
          {exp.description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

TimelineItem.propTypes = {
  exp: PropTypes.shape({
    duration: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
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
