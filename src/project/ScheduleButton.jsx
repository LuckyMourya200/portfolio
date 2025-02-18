import "./footersection.css";
import React from "react";

const ScheduleButton = () => {
  const calendlyUrl = "https://calendly.com/luckymourya9000/30min";

  return (
    <a
      href={calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="schedule-button"
    >
      Schedule an Meet
    </a>
  );
};

export default ScheduleButton;
