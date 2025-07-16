export default function Navbar() {
  return (
    <nav className="text-slate-200 bg-slate-950 flex justify-center py-2">
      <ul className="flex flex-row space-x-4 font-jetbrains-mono">
        <li className="hover:text-lime-500">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-lime-500">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-lime-500">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
