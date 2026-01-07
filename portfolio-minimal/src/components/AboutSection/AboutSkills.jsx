import {
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiReact,
  DiGithubBadge,
  DiNpm,
  DiPython,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGithubactions } from "react-icons/si";

const skills = [
  { icon: DiCss3, label: "CSS3" },
  { icon: DiHtml5, label: "HTML5" },
  { icon: DiJsBadge, label: "JavaScript" },
  { icon: DiReact, label: "ReactJS" },
  { icon: DiGithubBadge, label: "Git" },
  { icon: DiNpm, label: "NPM" },
  { icon: DiPython, label: "Python" },
  { icon: RiTailwindCssFill, label: "Tailwind CSS" },
  { icon: SiGithubactions, label: "Github Actions" },
];

export default function AboutSkills() {
  return (
    <div>
      <h2 className="font-jetbrains-mono text-2xl font-bold text-slate-200/90 text-center mb-6">
        Skills
      </h2>

      {/* Grid layout that works in narrow containers */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {skills.map(({ icon: Icon, label }) => (
          <div
            className="flex flex-col items-center p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
            key={label}
          >
            {Icon && <Icon className="text-lime-400 text-4xl mb-2" />}
            <p className="text-slate-200 text-center text-sm font-medium">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
