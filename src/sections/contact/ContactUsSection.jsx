import "../projects/footersection.css";
import ScheduleButton from "../../components/common/ScheduleButton";
import SectionWrapper from "../../components/layout/SectionWrapper";

const ContactUsSection = () => {
  return (
    <SectionWrapper id="contact-me" className="contact-section">
      <h2 className="contact-title">Let&apos;s Build Together</h2>
      <p className="contact-description">
        Seeking opportunities to build mobile applications and full-stack systems.
      </p>
      <ScheduleButton />
    </SectionWrapper>
  );
};

export default ContactUsSection;
