import React from "react";
import profileImage from "../assets/profile2.png";

const AboutSection = () => {
  const skills = [
    { name: "UX", percentage: 95 },
    { name: "Website Design", percentage: 89 },
    { name: "App Design", percentage: 93 },
    { name: "Graphic Design", percentage: 88 },
  ];

  const SkillBar = ({ name, percentage }) => (
    <div
      style={{
        width: "100%",
        marginBottom: "15px",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          fontFamily: "Poppins",
          fontWeight: 600,
          letterSpacing: "0.72px",
          marginBottom: "10px",
          color: "#000000",
        }}
      >
        {name}
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "12px",
          backgroundColor: "#edecec",
          borderRadius: "6px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: `${percentage}%`,
            backgroundColor: "#ff6300",
            borderRadius: "6px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
            width: "32px",
            height: "32px",
            backgroundColor: "#edecec",
            border: "3px solid #ff6300",
            borderRadius: "50%",
            boxSizing: "border-box",
          }}
        />
      </div>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1412px",
          gap: "40px",
        }}
      >
        <div
          style={{
            flex: "0 0 40%",
            maxWidth: "563px",
            height: "auto",
          }}
        >
          <img
            src={profileImage}
            alt="About illustration"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            flex: "1",
            maxWidth: "756px",
          }}
        >
          <h1
            style={{
              fontSize: "65px",
              fontFamily: "Poppins",
              fontWeight: 600,
              letterSpacing: "1.95px",
              marginBottom: "20px",
              color: "#000000",
            }}
          >
            About Me
          </h1>
          <p
            style={{
              fontSize: "21px",
              fontFamily: "Poppins",
              fontWeight: 400,
              letterSpacing: "0.63px",
              marginBottom: "40px",
              color: "#000000",
              lineHeight: 1.5,
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
            felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus
            consectetur lacus
          </p>
          <div
            style={{
              width: "100%",
            }}
          >
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
