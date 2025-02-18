import React from "react";
import Home from "./header/Home";
import AboutMeComponent from "./aboutme/AboutMeComponent";
import WhatsAppButton from "./whatsapp/WhatsAppButton";
import FootersectionScreeen from "./project/FootersectionScreeen";

function App() {
  return (
    <div>
      <Home />
      <AboutMeComponent />
      <FootersectionScreeen />
      <WhatsAppButton />
    </div>
  );
}

export default App;
