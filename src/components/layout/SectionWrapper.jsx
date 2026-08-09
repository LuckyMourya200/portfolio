import PropTypes from "prop-types";
import "./sectionWrapper.css";

const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`section-wrapper ${className}`}>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default SectionWrapper;
