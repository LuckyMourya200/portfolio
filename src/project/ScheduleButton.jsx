import "./footersection.css";

const ScheduleButton = () => {
  const calendlyUrl = "https://calendly.com/luckymourya9000/30min";

  return (
    <a
      href={calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="schedule-button"
    >
      Schedule a Meeting
    </a>
  );
};

export default ScheduleButton;
