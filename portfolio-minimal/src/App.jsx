import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection/AboutSection.jsx";
import PortfolioCards from "./components/Portfolio/PortfolioCards";
import ContactSection from "./components/Contact/ContactSection";

import { useRef } from "react";

import HTMLCSS from "./assets/HTMLCSS.jpg";
import JSFrontEnd from "./assets/JSFrontEnd.jpg";
import postGreSQL from "./assets/postGreSQL.jpg";
import pythonAdvanced from "./assets/pythonAdvanced.jpg";
import pythonOOP from "./assets/pythonOOP.jpg";
import PortfolioFile from "./components/Portfolio/PortfolioFile";

const slidesCertificate = [
  JSFrontEnd,
  HTMLCSS,
  postGreSQL,
  pythonAdvanced,
  pythonOOP,
  "https://udemy-certificate.s3.amazonaws.com/image/UC-f277da78-9843-42a1-82aa-165fb40f773c.jpg?v=1709732843000",
];

function App() {
  const portfolioSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const heroSectionRef = useRef(null);

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-slate-900">
      <section ref={heroSectionRef} className="scroll-mt-20">
        <Navbar
          onHeroClick={() => {
            heroSectionRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </section>

      {/* Hero Section with ref */}

      <Header
        onPortfolioClick={() => {
          portfolioSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
        onContactClick={() => {
          contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <AboutSection slidesCertificate={slidesCertificate} />

      <section ref={portfolioSectionRef} className="scroll-mt-20">
        <PortfolioCards />
        <PortfolioFile />
      </section>

      <section ref={contactSectionRef} className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}

export default App;
