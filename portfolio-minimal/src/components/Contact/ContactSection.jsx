export default function ContactSection() {
  return (
    <section id="projects">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-200 my-12 font-jetbrains-mono">
          Let's get in touch!
        </h2>
        <input
          type="text"
          placeholder="Your email address"
          className="w-full p-4 bg-transparent border border-slate-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-lime-400 text-white"
        />
        <button className="w-full p-4 bg-lime-400 text-slate-800 rounded-lg hover:bg-lime-500 transition-all duration-300">
          Send
        </button>
      </div>
    </section>
  );
}
