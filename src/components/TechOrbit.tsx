"use client";

import Image from "next/image";
import {
  SiReact,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiNextdotjs,
  SiWordpress,
  SiMysql,
  SiGit,
  SiLinux,
  SiCplusplus,
  SiOpenjdk,
} from "@icons-pack/react-simple-icons";

const technologies = [
  {
    name: "React",
    Icon: SiReact,
    color: "#61DAFB",
    position: "left-[12%] top-[12%]",
  },
  {
    name: "Python",
    Icon: SiPython,
    color: "#FFD43B",
    position: "right-[12%] top-[10%]",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    color: "#F7DF1E",
    position: "right-[4%] top-[38%]",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6",
    position: "right-[8%] bottom-[28%]",
  },
  {
    name: "PHP",
    Icon: SiPhp,
    color: "#777BB4",
    position: "left-[6%] bottom-[28%]",
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    color: "#FFFFFF",
    position: "left-[12%] top-[38%]",
  },
  {
    name: "WordPress",
    Icon: SiWordpress,
    color: "#21759B",
    position: "left-[22%] bottom-[12%]",
  },
  {
    name: "MySQL",
    Icon: SiMysql,
    color: "#00A6C7",
    position: "left-[38%] top-[4%]",
  },
  {
    name: "Git",
    Icon: SiGit,
    color: "#F05032",
    position: "right-[28%] bottom-[12%]",
  },
  {
    name: "Linux",
    Icon: SiLinux,
    color: "#FCC624",
    position: "right-[32%] top-[4%]",
  },
  {
    name: "C++",
    Icon: SiCplusplus,
    color: "#00599C",
    position: "left-[3%] bottom-[44%]",
  },
  {
    name: "Java",
    Icon: SiOpenjdk,
    color: "#E76F00",
    position: "right-[2%] bottom-[45%]",
  },
];

const codeSnippets = [
  {
    position: "left-[0%] top-[22%]",
    code: [
      "def build_future():",
      "    learn()",
      "    create()",
      "    repeat()",
    ],
  },
  {
    position: "right-[0%] top-[22%]",
    code: [
      "class Developer:",
      "    def create(self):",
      "        return ideas",
    ],
  },
  {
    position: "left-[3%] bottom-[17%]",
    code: [
      "skills = ['Python']",
      "while learning:",
      "    improve()",
    ],
  },
];

export default function TechOrbit() {
  return (
    <div className="tech-orbit relative mx-auto w-full max-w-lg px-2 sm:px-0">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[12%] rounded-full bg-cyan-500/15 blur-[90px]"
      />

      {/* Floating code panels */}
      {codeSnippets.map((panel, index) => (
        <div
          key={panel.code[0]}
          aria-hidden="true"
          className={`pointer-events-none absolute ${panel.position} z-0 hidden rounded-xl border border-cyan-400/20 bg-slate-950/90 p-3 font-mono text-[9px] leading-5 text-cyan-300/80 shadow-[0_0_25px_rgba(34,211,238,0.08)] sm:block ${
            index % 2 === 0 ? "tech-code-float" : "tech-code-float-slow"
          }`}
          style={{
            animationDelay: `${index * -1.5}s`,
          }}
        >
          {panel.code.map((line, lineIndex) => (
            <div key={`${index}-${lineIndex}`}>{line}</div>
          ))}
        </div>
      ))}

      {/* Technology logos */}
      {technologies.map(({ name, Icon, color, position }, index) => (
        <div
          key={name}
          title={name}
          aria-label={name}
          className={`absolute ${position} z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/95 shadow-[0_0_20px_rgba(34,211,238,0.12)] sm:h-12 sm:w-12 ${
            index % 2 === 0 ? "tech-float" : "tech-float-slow"
          }`}
          style={{
            animationDelay: `${index * -0.45}s`,
          }}
        >
          <Icon color={color} size={24} />
        </div>
      ))}

      {/* Central portrait */}
      <div className="relative z-20 mx-auto w-[76%]">
        {/* Portrait glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-cyan-400/10 blur-2xl"
        />

        <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-[#111318] shadow-[0_0_45px_rgba(34,211,238,0.10)] transition-all duration-500 hover:border-cyan-400/60">
          <Image
            src="/image/shoyab.png"
            alt="Portrait of KM Shoyab"
            fill
            priority
            sizes="(max-width: 640px) 75vw, 360px"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {/* Subtle cinematic overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
          />
        </div>
      </div>
    </div>
  );
}