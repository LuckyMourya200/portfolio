import "./footersection.css";
import ScheduleButton from "./ScheduleButton";

const ContactUsSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-header">
        <h2 className="contact-title">Let&apos;s Build Together</h2>
        <p className="contact-description">
          Seeking collaboration on full-stack solutions
        </p>
      </div>
      <ScheduleButton />
    </div>
  );
};

export default ContactUsSection;
