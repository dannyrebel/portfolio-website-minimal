import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import About from "./components/About";

function App() {
  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-slate-900">
      {/* Fixed left side */}
      <div className="w-128 h-screen flex flex-col">
        <Header />
        <Navbar />
      </div>
      {/* Main content area */}
      <div className="flex-1 h-screen overflow-auto">
        <About />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
