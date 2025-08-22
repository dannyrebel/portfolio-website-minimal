import AboutText from "./AboutText";
import AboutSkills from "./AboutSkills";
import Courses from "./Courses";

export default function AboutSection({ slidesCertificate }) {
  return (
    <section className="py-10 px-6 " id="about">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-slate-200 mb-12 font-jetbrains-mono">
          About Me
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* About Text Card */}
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-lime-400/30 transition-all duration-300">
            <AboutText />
          </div>

          {/* Skills Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-lime-400/30 transition-all duration-300">
            <AboutSkills />
          </div>

          {/* Courses Card - Full Width */}
          <div className="lg:col-span-3 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-lime-400/30 transition-all duration-300">
            <h2 className="text-3xl font-bold text-center text-slate-200 mb-12 font-jetbrains-mono">
              Courses & Certificates
            </h2>
            <Courses>
              {slidesCertificate.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`Slide ${index}`}
                  className="rounded-lg"
                />
              ))}
            </Courses>
          </div>
        </div>
      </div>
    </section>
  );
}
