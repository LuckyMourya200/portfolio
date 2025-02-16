import React from "react";
import profileImage from "../assets/profile.png";
const Header = ({ style }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "75px 50px",
        minWidth: "1200px",
        width: "100%",
        boxSizing: "border-box",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "718px",
        }}
      >
        <span
          style={{
            fontFamily: "Poppins",
            fontSize: "24px",
            fontWeight: 600,
            letterSpacing: "0.72px",
            color: "#000000",
          }}
        >
          Hi I am
        </span>

        <span
          style={{
            fontFamily: "Poppins",
            fontSize: "32px",
            fontWeight: 600,
            letterSpacing: "0.96px",
            color: "#FF6300",
          }}
        >
          Lucky Mourya
        </span>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <span
            style={{
              fontFamily: "Poppins",
              fontSize: "100px",
              fontWeight: 700,
              letterSpacing: "3px",
              color: "#000000",
              lineHeight: "150px",
            }}
          >
            UI & UX
          </span>
          <span
            style={{
              fontFamily: "Poppins",
              fontSize: "100px",
              fontWeight: 700,
              letterSpacing: "3px",
              color: "#000000",
              lineHeight: "150px",
              marginLeft: "237px",
            }}
          >
            Designer
          </span>
        </div>

        <p
          style={{
            fontFamily: "Poppins",
            fontSize: "21px",
            fontWeight: 400,
            letterSpacing: "0.63px",
            color: "#000000",
            maxWidth: "706px",
            margin: "20px 0",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus
          consectetur lacus
        </p>

        <button
          style={{
            width: "188px",
            height: "52px",
            backgroundColor: "#FF6300",
            border: "none",
            borderRadius: "5px",
            color: "#FFFFFF",
            fontFamily: "Poppins",
            fontSize: "21px",
            fontWeight: 400,
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#ff7a2a")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#FF6300")}
        >
          Hire Me
        </button>
      </div>
      <div
  style={{
    width: "674px",
    height: "760px",
  }}
>
        <img
          src={profileImage}
          alt="Designer"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

Header.defaultProps = {
  style: {},
};

export default Header;
