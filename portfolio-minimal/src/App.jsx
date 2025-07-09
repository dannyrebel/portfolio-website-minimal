import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="relative flex h-screen w-screen overflow-hidden">
      {/* Fixed left side */}
      <div className="w-128 h-screen flex flex-col bg-gray-900">
        <Header />
        <Navbar />
      </div>
      {/* Main content area */}
      <div className="flex-1 h-screen overflow-y-scroll bg-white">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
