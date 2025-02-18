import React from "react";
import "./footersection.css";
import ScheduleButton from "./ScheduleButton";

const ContactUsSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-header">
        <h1 className="contact-title">Lets Build Together</h1>
        <p className="contact-description">
          Seeking collaboration on full-stack solutions
        </p>
      </div>
      <ScheduleButton />
    </div>
  );
};

export default ContactUsSection;
