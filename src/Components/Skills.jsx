import Cards from "./Card";
import Framer from "../Framer";

export default function Skills() {
  const skills = [
    {
      name: "Frontend Web Development (React, JavaScript, HTML, CSS)",
      description:
        "Experienced in building dynamic, responsive web applications using modern frontend technologies like React and JavaScript.",
    },
    {
      name: "Data Analysis and Visualization (Python, MATLAB)",
      description:
        "Proficient in analyzing large datasets and visualizing complex data using Python and MATLAB for engineering and technical projects.",
    },
    {
      name: "Microsoft Office",
      description:
        "Skilled in using Microsoft Office tools such as Word, Excel, and PowerPoint for documentation, data analysis, and presentations.",
    },
    {
      name: "Reservoir Modeling",
      description:
        "Familiar with reservoir simulation and modeling techniques to analyze subsurface fluid flow and optimize production strategies.",
    },
  ];

  return (
    <Framer>
      <div className="mb-5" id="Skills">
        <h1 className="text-[#E0E0E0] text-[4rem] font-light">MY SKILLS</h1>
        <h6 className="text-[#B0B0B0]">What I specialize in</h6>
      </div>
      <div className="flex gap-5 flex-wrap">
        <Cards arr={skills} width={"30%"} />
      </div>
    </Framer>
  );
}
