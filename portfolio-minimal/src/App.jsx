import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutText from "./components/AboutText";
import AboutSkills from "./components/AboutSkills";

function App() {
  return (
    <div className="relative flex  flex-col h-screen w-screen overflow-hidden bg-slate-900">
      <Navbar />
      <Header />
      <AboutText />
      <AboutSkills />
    </div>
  );
}

export default App;
