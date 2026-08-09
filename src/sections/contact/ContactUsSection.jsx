import "../projects/footersection.css";
import ScheduleButton from "../../components/common/ScheduleButton";
import SectionWrapper from "../../components/layout/SectionWrapper";

const ContactUsSection = () => {
  return (
    <SectionWrapper id="contact-me" className="contact-section">
      <h2 className="contact-title">Let&apos;s Build Together</h2>
      <p className="contact-description">
        Seeking collaboration on full-stack solutions and high-performance digital products.
      </p>
      <ScheduleButton />
    </SectionWrapper>
  );
};

export default ContactUsSection;
