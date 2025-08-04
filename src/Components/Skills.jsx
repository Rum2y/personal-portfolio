import Cards from "./Card";
import Framer from "../Framer";

export default function Skills() {
  const skills = [
    {
      name: "Programming Languages",
      description: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Python",
        "Node.js",
        "MATLAB",
      ],
    },
    {
      name: "Frameworks",
      description: [
        "React JS",
        "Next JS",
        "React Native",
        "Bootstrap",
        "Material UI",
        "Tailwind CSS",
        "Express JS",
      ],
    },
    {
      name: "Reservoir Engineering Tools",
      description: ["PIPESIM", "CMG", "Well Logging"],
    },
  ];

  return (
    <Framer>
      <div className="mb-5" id="Skills">
        <h1 className="text-[#E0E0E0] text-[4rem] font-light">MY SKILLS</h1>
        <h6 className="text-[#B0B0B0]">What I specialize in</h6>
      </div>
      <div className="flex flex-wrap w-full gap-5">
        <Cards arr={skills} width={"32%"} />
      </div>
    </Framer>
  );
}
