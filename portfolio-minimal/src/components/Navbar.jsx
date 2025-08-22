import { useState } from "react";

export default function Navbar({ onHeroClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-lime-400/30 shadow-lg shadow-lime-300/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="font-jetbrains-mono font-bold text-lime-400 text-xl"
            onClick={onHeroClick}
          >
            DD
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8 font-jetbrains-mono">
            <li>
              <a
                href="#about"
                className="text-slate-200 hover:text-lime-400 transition-all duration-300"
              >
                [about.html]
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-slate-200 hover:text-lime-400 transition-all duration-300"
              >
                [projects.js]
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-slate-200 hover:text-lime-400 transition-all duration-300"
              >
                [contact.py]
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-lime-400 font-jetbrains-mono"
            >
              [menu.sh]
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <ul className="absolute top-16 right-6 bg-slate-900/95 border border-lime-400/30 rounded-lg shadow-lg flex flex-col space-y-4 p-4 md:hidden font-jetbrains-mono">
            <li>
              <a href="#about" className="text-slate-200 hover:text-lime-400">
                [about.html]
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-slate-200 hover:text-lime-400"
              >
                [projects.js]
              </a>
            </li>
            <li>
              <a href="#contact" className="text-slate-200 hover:text-lime-400">
                [contact.py]
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
