import React from "react";
import Home from "./header/Home";
import AboutMeComponent from "./aboutme/AboutMeComponent";
import WhatsAppButton from "./whatsapp/WhatsAppButton";
import FootersectionScreeen from "./project/FootersectionScreeen";
import Experience from "./experience/Experience";

function App() {
  return (
    <div>
      <Home />
      <AboutMeComponent />
      <Experience />
      <FootersectionScreeen />
      <WhatsAppButton />
    </div>
  );
}

export default App;
