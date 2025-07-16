import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="relative flex  flex-col h-screen w-screen overflow-hidden bg-slate-900">
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
