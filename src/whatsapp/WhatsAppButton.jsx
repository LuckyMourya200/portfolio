import whatsapp from "../assets/whatsapp.png";
import "./whatsapp.css";
import { track } from "@vercel/analytics/react";

const WhatsAppButton = () => {
  const phoneNumber = "+919165309608";
  const defaultMessage = "Hi Lucky! I saw your portfolio...";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage,
  )}`;

  const handleWhatsAppClick = () => {
    track('Contacted via WhatsApp');
  };

  return (
    <div className="whatsapp-button">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on whatsapp"
        onClick={handleWhatsAppClick}
      >
        <img className="whatsapp-icon" src={whatsapp} alt={"whatsapp"} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
