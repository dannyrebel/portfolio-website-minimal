import portfolioImage1 from "../../assets/portfolio1.png";

export default function PortfolioCards() {
  return (
    <section id="projects">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-200 my-12 font-jetbrains-mono">
          Portfolio
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8 mx-auto px-6 mb-20">
        {/* Portfolio Card 1 */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-lime-400/30 transition-all duration-300">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="http://localhost:5173/"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:w-1/2"
            >
              <img
                src={portfolioImage1}
                alt="This website project thumbnail"
                className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="sm:w-1/2">
              <h3 className="text-xl font-bold text-slate-200 mb-2">
                This website.
              </h3>
              <p className="text-slate-300">Very recursive, right?</p>
            </div>
          </div>
        </div>

        {/* Portfolio Card 2 */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-lime-400/30 transition-all duration-300">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="http://localhost:5173/"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:w-1/2"
            >
              <img
                src=""
                alt="This website project thumbnail"
                className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="sm:w-1/2">
              <h3 className="text-xl font-bold text-slate-200 mb-2">TBA</h3>
              <p className="text-slate-300">TBA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
