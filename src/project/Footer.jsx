import React from "react";

const Footer = ({ style }) => {
  const menuItems = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Testimonials",
    "Contact Us",
  ];

  return (
    <footer
      style={{
        ...style,
        backgroundColor: "#f8f8f8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "320px",
        padding: "20px 0",
      }}
    >
      {/* Logo */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "53px",
            height: "53px",
            backgroundColor: "#ff6300",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "10px",
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontFamily: "Inter",
              fontSize: "44.93px",
              fontWeight: 700,
            }}
          >
            L
          </span>
        </div>
        <span
          style={{
            color: "#000000",
            fontFamily: "Inter",
            fontSize: "44.93px",
            fontWeight: 700,
          }}
        >
          ucky
        </span>
      </div>

      {/* Menu */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          margin: "30px 0",
        }}
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "10px 14px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              borderRadius: "4px",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#f0f0f0")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "21px",
                fontWeight: 400,
                letterSpacing: "0.63px",
                color: "#000000",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Social Media Icons */}
      <div style={{ margin: "30px 0" }}>
        <img
          src="https://dashboard.codeparrot.ai/api/image/Z7IeZI9nxTWt8i_G/social-m.png"
          alt="Social Media Icons"
          style={{ width: "205px", height: "32.48px" }}
        />
      </div>

      {/* Copyright */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#545454",
          padding: "26px 0",
          display: "flex",
          justifyContent: "center",
          marginTop: "auto",
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontFamily: "Poppins",
            fontSize: "21px",
            fontWeight: 400,
            letterSpacing: "0.63px",
          }}
        >
          © 2025 Lucky All Rights Reserved , Inc.
        </span>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  style: {},
};

export default Footer;
