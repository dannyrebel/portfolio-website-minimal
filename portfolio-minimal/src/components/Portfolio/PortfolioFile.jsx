export default function PortfolioFile() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-6 flex flex-col items-center space-y-6 backdrop-blur-sm ">
      <a
        href="/Daniel_Danchev_CV_25.pdf"
        download
        className=" bg-lime-400 text-slate-900 font-bold py-2 px-4 rounded-md hover:bg-lime-300 transition duration-300 font-jetbrains-mono"
      >
        Download CV
      </a>
    </section>
  );
}
