import Home from "./sections/hero/Home";
import AboutMeComponent from "./sections/about/AboutMeComponent";
import WhatsAppButton from "./components/common/WhatsAppButton";
import FootersectionScreeen from "./sections/projects/FootersectionScreeen";
import Experience from "./sections/experience/Experience";
import { Analytics } from "@vercel/analytics/react";

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
      <Analytics />
    </div>
  );
}

export default App;
