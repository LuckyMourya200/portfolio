import React, { useState } from "react";
import "./footersection.css";

const ContactUsSection = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = () => {
    console.log("Submitted email:", email);
  };

  return (
    <div className="contact-section">
      <div className="contact-header">
        <h1 className="contact-title">Lets Design Together</h1>
        <p className="contact-description">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis fghh hgjj nisi ante.
        </p>
      </div>

      <div className="contact-form">
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="contact-input"
        />
        <button
          onClick={handleSubmit}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="contact-button"
          style={{ backgroundColor: isHovered ? "#e66400" : "#fd6f00" }}
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default ContactUsSection;
