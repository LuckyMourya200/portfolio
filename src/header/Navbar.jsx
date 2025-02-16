import React from "react";

const Navbar = ({ style }) => {
  const navbarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    backgroundColor: "#ffffff",
    height: "54px",
    minWidth: "1000px",
    width: "100%",
    boxSizing: "border-box",
    ...style,
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    height: "54px",
  };

  const logoBoxStyle = {
    width: "53px",
    height: "53px",
    backgroundColor: "#ff6300",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const logoTextStyle = {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "44.93px",
    color: "#000000",
    marginLeft: "2px",
  };

  const mStyle = {
    color: "#ffffff",
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "44.93px",
  };

  const menuStyle = {
    display: "flex",
    gap: "13px",
    alignItems: "center",
  };

  const menuItemStyle = {
    padding: "10px 14px",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "21px",
    letterSpacing: "0.63px",
    color: "#000000",
    cursor: "pointer",
    transition: "color 0.3s",
    ":hover": {
      color: "#ff6300",
    },
  };

  const downloadBtnStyle = {
    width: "191.6px",
    height: "52px",
    backgroundColor: "#ff6300",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "21px",
    letterSpacing: "0.63px",
    cursor: "pointer",
    border: "none",
    transition: "background-color 0.3s",
    ":hover": {
      backgroundColor: "#e65900",
    },
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>
        <div style={logoBoxStyle}>
          <span style={mStyle}>L</span>
        </div>
        <span style={logoTextStyle}>ucky</span>
      </div>

      <div style={menuStyle}>
        <button style={menuItemStyle}>Home</button>
        <button style={menuItemStyle}>About</button>
        <button style={menuItemStyle}>Services</button>
        <button style={menuItemStyle}>Projects</button>
        <button style={menuItemStyle}>Testimonials</button>
        <button style={menuItemStyle}>Contact Us</button>
      </div>

      <button style={downloadBtnStyle}>Download CV</button>
    </nav>
  );
};

Navbar.defaultProps = {
  style: {},
};

export default Navbar;
