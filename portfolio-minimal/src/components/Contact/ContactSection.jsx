export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-slate-200 mb-12 font-jetbrains-mono">
          Get in Touch
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Name */}
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-4 bg-transparent border border-slate-700 rounded-lg 
                       focus:outline-none focus:ring-1 focus:ring-lime-400 text-white"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-4 bg-transparent border border-slate-700 rounded-lg 
                       focus:outline-none focus:ring-1 focus:ring-lime-400 text-white"
          />

          {/* Message */}
          <textarea
            placeholder="Your message"
            rows="5"
            className="w-full p-4 bg-transparent border border-slate-700 rounded-lg 
                       focus:outline-none focus:ring-1 focus:ring-lime-400 text-white resize-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-4 bg-lime-400 text-slate-900 rounded-lg 
                       hover:bg-lime-500 transition-all duration-300 font-semibold font-jetbrains-mono"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
