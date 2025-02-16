import React from "react";
import Layout from "./header/Layout";
import AboutMeComponent from "./aboutme/AboutMeComponent";
import ContactUsAndFooterComponent from "./project/ContactUsAndFooterComponent";

function App() {
  return (
    <div>
      <Layout />
      <AboutMeComponent />
      <ContactUsAndFooterComponent />
    </div>
  );
}

export default App;
