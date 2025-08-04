export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-lime-400/30 shadow-lg shadow-lime-300/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div
            className="font-jetbrains-mono font-bold text-lime-400 text-xl"
            data-text="DD"
          >
            DD
          </div>

          {/* Terminal Navigation */}
          <ul className="flex flex-row space-x-8 font-jetbrains-mono">
            <li className="nav-item">
              <a
                href="#about"
                className="text-slate-200 hover:text-lime-400 transition-all duration-300 relative"
              >
                [about.html]
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                className="text-slate-200 hover:text-lime-400 transition-all duration-300 relative"
              >
                [projects.js]
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="text-slate-200 hover:text-lime-400 transition-all duration-300 relative"
              >
                [contact.py]
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
