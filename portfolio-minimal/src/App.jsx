import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutText from "./components/AboutText";
import AboutSkills from "./components/AboutSkills";
import Courses from "./components/Courses";

const slides = [
  "https://udemy-certificate.s3.amazonaws.com/image/UC-f277da78-9843-42a1-82aa-165fb40f773c.jpg?v=1709732843000",
  "https://udemy-certificate.s3.amazonaws.com/image/UC-f277da78-9843-42a1-82aa-165fb40f773c.jpg?v=1709732843000",
];

function App() {
  return (
    <div className="relative flex  flex-col h-screen w-screen overflow-hidden bg-slate-900">
      <Navbar />
      <Header />
      <AboutText />
      <AboutSkills />
      <Courses>
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt={`Slide ${index}`} />
        ))}
      </Courses>
    </div>
  );
}

export default App;
