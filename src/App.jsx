import React from "react";
import Home from "./header/Home";
import AboutMeComponent from "./aboutme/AboutMeComponent";
import Footersection from "./project/footersection";
import WhatsAppButton from "./whatsapp/WhatsAppButton";
function App() {
  return (
    <div>
      <Home />
      <AboutMeComponent />
      <Footersection />
      <WhatsAppButton />
    </div>
  );
}

export default App;
