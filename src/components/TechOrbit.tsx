"use client";

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
  SiHtml5,
  SiCss,
  SiCplusplus,
  SiOpenjdk,
} from "@icons-pack/react-simple-icons";

const technologies = [
  { name: "React", Icon: SiReact, color: "#087EA4", position: "top-[8%] left-[42%]", size: "text-5xl", animation: "orbit-one" },
  { name: "Python", Icon: SiPython, color: "#3776AB", position: "top-[22%] right-[8%]", size: "text-5xl", animation: "float-one" },
  { name: "JavaScript", Icon: SiJavascript, color: "#D6A900", position: "top-[43%] right-[4%]", size: "text-4xl", animation: "orbit-two" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", position: "bottom-[18%] right-[12%]", size: "text-5xl", animation: "float-two" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4", position: "bottom-[6%] left-[42%]", size: "text-5xl", animation: "orbit-three" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#111827", position: "bottom-[22%] left-[8%]", size: "text-4xl", animation: "float-three" },
  { name: "WordPress", Icon: SiWordpress, color: "#21759B", position: "top-[43%] left-[5%]", size: "text-5xl", animation: "orbit-four" },
  { name: "MySQL", Icon: SiMysql, color: "#00758F", position: "top-[22%] left-[12%]", size: "text-4xl", animation: "float-four" },
  { name: "Git", Icon: SiGit, color: "#F05032", position: "top-[5%] right-[18%]", size: "text-3xl", animation: "float-two" },
  { name: "Linux", Icon: SiLinux, color: "#333333", position: "bottom-[5%] right-[30%]", size: "text-3xl", animation: "float-one" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26", position: "top-[62%] left-[18%]", size: "text-3xl", animation: "float-two" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6", position: "top-[63%] right-[20%]", size: "text-3xl", animation: "float-three" },
  { name: "C++", Icon: SiCplusplus, color: "#00599C", position: "top-[7%] left-[18%]", size: "text-3xl", animation: "orbit-two" },
  { name: "Java", Icon: SiOpenjdk, color: "#E76F00", position: "bottom-[40%] left-[1%]", size: "text-3xl", animation: "float-four" },
];

export default function TechOrbit() {
  return (
    <div
      className="tech-orbit relative mx-auto aspect-square w-full max-w-md"
      aria-label="Floating logos of technologies I work with"
      role="img"
    >
      <div className="absolute inset-[15%] rounded-full bg-blue-100/60 blur-3xl" />

      {technologies.map(({ name, Icon, color, position, size, animation }) => (
        <div
          key={name}
          className={`absolute ${position} ${animation} flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100/80 bg-white/90 shadow-[0_8px_25px_rgba(15,23,42,0.07)] transition-shadow duration-300 hover:shadow-[0_12px_35px_rgba(37,99,235,0.16)] sm:h-16 sm:w-16`}
          title={name}
        >
          <Icon
            color={color}
            className={`${size} max-h-9 max-w-9 sm:max-h-10 sm:max-w-10`}
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
}