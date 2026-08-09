import ProjectsSection from "./ProjectsSection";
import ContactUsSection from "../contact/ContactUsSection";
import Footer from "../../components/layout/Footer";
import "./footersection.css";

const FootersectionScreeen = () => {
  return (
    <div className="contact-footer-container">
      <div className="main-content-wrapper">
        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="contact-me">
          <ContactUsSection />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FootersectionScreeen;
