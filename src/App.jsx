import Navbar from "./components/common/Navbar";
import Home from "./sections/hero/Home";
import ProjectsSection from "./sections/projects/ProjectsSection";
import Experience from "./sections/experience/Experience";
import AboutSection from "./sections/about/AboutSection";
import ContactUsSection from "./sections/contact/ContactUsSection";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";

const SectionDivider = () => (
  <div
    style={{
      height: "1px",
      width: "100%",
      background: "var(--border-subtle)",
      margin: "0 auto",
    }}
  />
);

function App() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      <Navbar />
      <Home />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ContactUsSection />
      <Footer />
      <WhatsAppButton />
      <Analytics />
    </div>
  );
}

export default App;
