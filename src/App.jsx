import React from "react";
import Home from "./header/Home";
import AboutMeComponent from "./aboutme/AboutMeComponent";
import WhatsAppButton from "./whatsapp/WhatsAppButton";
import FootersectionScreeen from "./project/FootersectionScreeen";
import Experience from "./experience/Experience";

const SectionDivider = () => (
  <div
    style={{
      height: "1px",
      width: "100%",
      background:
        "linear-gradient(to right, rgba(226, 232, 240, 0), rgba(226, 232, 240, 1), rgba(226, 232, 240, 0))",
      margin: "0 auto",
    }}
  />
);

function App() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Home />
      <SectionDivider />
      <AboutMeComponent />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <FootersectionScreeen />
      <WhatsAppButton />
    </div>
  );
}

export default App;
