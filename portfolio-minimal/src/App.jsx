import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutText from "./components/AboutText";
import AboutSkills from "./components/AboutSkills";
import Courses from "./components/Courses";

import HTMLCSS from "./assets/HTMLCSS.jpg";
import JSFrontEnd from "./assets/JSFrontEnd.jpg";
import postGreSQL from "./assets/postGreSQL.jpg";
import pythonAdvanced from "./assets/pythonAdvanced.jpg";
import pythonOOP from "./assets/pythonOOP.jpg";

const slidesCertificate = [
  JSFrontEnd,
  HTMLCSS,
  postGreSQL,
  pythonAdvanced,
  pythonOOP,
  "https://udemy-certificate.s3.amazonaws.com/image/UC-f277da78-9843-42a1-82aa-165fb40f773c.jpg?v=1709732843000",
];

function App() {
  return (
    <div className="relative flex  flex-col min-h-screen w-full bg-slate-900">
      <Navbar />
      <Header />
      <AboutText />
      <AboutSkills />
      <Courses>
        {slidesCertificate.map((slide, index) => (
          <img key={index} src={slide} alt={`Slide ${index}`} />
        ))}
      </Courses>
      <AboutText />
    </div>
  );
}

export default App;
