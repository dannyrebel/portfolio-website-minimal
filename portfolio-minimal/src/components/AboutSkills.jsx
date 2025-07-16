import {
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiReact,
  DiGithubBadge,
  DiNpm,
  DiPython,
} from "react-icons/di";

const skills = [
  { icon: DiCss3, label: "CSS3" },
  { icon: DiHtml5, label: "HTML5" },
  { icon: DiJsBadge, label: "JavaScript" },
  { icon: DiReact, label: "ReactJS" },
  { icon: DiGithubBadge, label: "Git" },
  { icon: DiNpm, label: "NPM" },
  { icon: DiPython, label: "Python" },
];

export default function AboutSkills() {
  return (
    <div>
      <h2 className="font-jetbrains-mono text-2xl font-bold text-slate-200/90 text-center mt-5">
        Skills & Education
      </h2>
      <div className="flex flex-row mt-5 space-x-10 justify-center">
        {skills.map(({ icon: Icon, label }) => (
          <div className="flex flex-col items-center" key={label}>
            {Icon && <Icon className="text-lime-100 text-5xl mx-auto mt-5" />}
            <p className="text-slate-200 text-center">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
