import {
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiReact,
  DiGithubBadge,
  DiNpm,
  DiPython,
} from "react-icons/di";

export default function AboutSkills() {
  return (
    <div>
      <h2 className="font-jetbrains-mono text-2xl font-bold text-slate-200/90 text-center mt-5">
        Skills & Education
      </h2>
      <div className="flex flex-row mt-5 space-x-10 justify-center">
        <div className="flex flex-col items-center">
          <DiCss3 className="text-lime-100 text-5xl mx-auto mt-5" />
          <p className="text-slate-200 text-center">CSS3</p>
        </div>
        <div className="flex flex-col items-center">
          <DiHtml5 className="text-lime-100 text-5xl mx-auto mt-5" />
          <p className="text-slate-200 text-center">HTML5</p>
        </div>
        <div className="flex flex-col items-center">
          <DiJsBadge className="text-lime-100 text-5xl mx-auto mt-5" />
          <p className="text-slate-200 text-center">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <DiReact className="text-lime-100 text-5xl mx-auto mt-5" />
          <p className="text-slate-200 text-center">ReactJS</p>
        </div>
        <div className="flex flex-col items-center">
          <DiGithubBadge className="text-lime-100 text-5xl mx-auto mt-5" />
          <p className="text-slate-200 text-center">Git</p>
        </div>
        <div className="flex flex-col items-center">
          <DiNpm className="text-lime-100 text-5xl mx-auto mt-5" />
          <p className="text-slate-200 text-center">NPM</p>
        </div>
        <div className="flex flex-col items-center">
          <DiPython className="text-lime-100 text-5xl mx-auto mt-5" />
          <p className="text-slate-200 text-center">Python</p>
        </div>
      </div>
    </div>
  );
}
