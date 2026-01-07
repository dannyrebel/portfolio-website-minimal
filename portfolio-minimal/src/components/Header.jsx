import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Header({ onPortfolioClick, onContactClick }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
      {/* Background Grid Placeholder */}
      <div className="absolute inset-0" />

      <div className="text-center space-y-8 px-6 relative z-10">
        {/* Name Header (click to scroll to hero) */}
        <div className="relative cursor-pointer">
          <h1 className="font-jetbrains-mono font-black text-6xl md:text-7xl lg:text-8xl text-lime-400">
            DANIEL DANCHEV
          </h1>
        </div>

        {/* Typewriter Subtitle */}
        <h2 className="font-jetbrains-mono text-2xl md:text-3xl lg:text-4xl font-bold text-slate-200 animate-typewriter border-r-2 border-lime-400 whitespace-nowrap overflow-hidden">
          &gt; FRONT_END_ENGINEER.exe
        </h2>

        {/* Matrix-style Description */}
        <p className="font-jetbrains-mono text-lg md:text-xl text-green-400 font-bold max-w-4xl mx-auto">
          [INITIALIZING...] <br />
          Converting.design.ideas → fast.accessible.web.experiences <br />
          [STATUS: READY_TO_BUILD]
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <button
            onClick={onPortfolioClick}
            className="px-8 py-4 bg-lime-400 text-slate-900 font-jetbrains-mono font-bold text-lg rounded-none border-2 border-lime-400 hover:bg-transparent hover:text-lime-400 transition-transform transform hover:scale-105 shadow-lg hover:shadow-lime-400/50 relative overflow-hidden group"
          >
            <span className="relative z-10">[VIEW_PORTFOLIO.exe]</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </button>

          <button
            onClick={onContactClick}
            className="px-8 py-4 border-2 border-green-400 text-green-400 font-jetbrains-mono font-bold text-lg rounded-none hover:bg-green-400 hover:text-slate-900 transition-transform transform hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">[CONTACT_ME.bat]</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent rounded-lg via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </button>
        </div>
        {/* Social links */}
        <div className="flex justify-center items-center rounded-lg gap-1">
          <a
            href="https://www.linkedin.com/in/daniel-danchev-52a044206/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 text-4xl text-lime-500 cursor-pointer" />
          </a>
          <a
            href="https://github.com/dannyrebel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 text-4xl text-lime-500 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-lime-400 to-transparent rounded-full"></div>
      </div>
    </div>
  );
}
