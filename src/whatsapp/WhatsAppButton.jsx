import whatsapp from "../assets/whatsapp.png";
import "./whatsapp.css";

const WhatsAppButton = () => {
  const phoneNumber = "+919165309608";
  const defaultMessage = "Hi Lucky! I saw your portfolio...";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="whatsapp-button">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on whatsapp"
      >
        <img className="whatsapp-icon" src={whatsapp} alt={"whatsapp"} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
