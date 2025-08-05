import Cards from "./Card";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState, useEffect } from "react";
import Chips from "./Chips";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import DownloadIcon from "@mui/icons-material/Download";
import Framer from "../Framer";

export default function Work() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Example breakpoint

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const timelineLayout = isMobile ? "1-column-left" : "2-columns";

  const webDev = [
    {
      name: "Unisettle",
      img: "/img/unisettle_logo.PNG",
      desc: "Developed a full-stack mobile app for helping international students to setlle in Canada. It has an active community, job board, and more.",
      date: "July 2025 - Present",
      code: [
        "React Native",
        "Node.js",
        "TypeScript",
        "Appwrite",
        "Tailwind CSS",
        "Stripe",
      ],
      links: [
        {
          name: "Landing Page",
          url: "https://unisettle.vercel.app/",
          icon: <LanguageIcon />,
        },
        {
          name: "Download App",
          url: "",
          icon: <DownloadIcon />,
        },
      ],
    },
    {
      name: "MecSimCalc",
      img: "/img/mecsimcalc_logo.jpg",
      desc: "Contributed to an AI-assisted app generator with OpenAI API, using TypeScript, React, and Material UI.",
      date: "June 2023 - August 2023",
      code: ["TypeScript", "React JS", "OpenAI API (ChatGPT)", "Material UI"],

      links: [
        {
          name: "Live Demo",
          url: "https://mecsimcalc.com/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      name: "SPE UAlberta",
      img: "/img/logo_2.jpg",
      desc: "Designed and built the official SPE UAlberta website using React, Tailwind, and Material UI.",
      date: "August 2024 - December 2024",
      code: ["React JS", "TypeScript", "Material UI", "Tailwind CSS"],
      links: [
        {
          name: "Live Demo",
          url: "https://spe-kohl.vercel.app/",
          icon: <LanguageIcon />,
        },
        {
          name: "GitHub",
          url: "https://github.com/Rum2y/SPE-Website",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      name: "Portfolio Website",
      img: "/logo.png",
      desc: "Created a personal portfolio with React and Tailwind CSS to showcase my projects and skills.",
      date: "January 2025 - Present",
      code: ["React JS", "TypeScript", "Tailwind CSS", "Material UI"],
      links: [
        {
          name: "Live Demo",
          url: "https://iyinoluwaadejumo.vercel.app/",
          icon: <LanguageIcon />,
        },
        {
          name: "GitHub",
          url: "https://github.com/Rum2y/personal-portfolio",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      name: "Ravon Ecommerce",
      img: "/img/ravon_logo.png",
      desc: "Built a full ecommerce site with real product data, cart features, and a Node.js backend.",
      date: "July 2022 - August 2022",
      code: ["HTML", "CSS", "JavaScript", "Node.js", "Bootstrap"],
      links: [
        {
          name: "Live Demo",
          url: "https://ravon-ecommerce.netlify.app/#",
          icon: <LanguageIcon />,
        },
        {
          name: "GitHub",
          url: "https://github.com/Rum2y/Ravon-Ecommerce-site",
          icon: <GitHubIcon />,
        },
      ],
    },
  ];

  const pete = [
    {
      name: "PIPESIM SIMULAION",
      description: `Utilized Schlumberger PIPESIM to designe and optimize artificial lift systems (Gas Lift and ESP) to increase oil production rates from under-saturated
      carbonate reservoirs. Below is the link to the project:`,
      link: "https://drive.google.com/drive/folders/1qDO8NVaJOgjPhXwST1qSFzJ9AEGVAbL-?usp=drive_link",
      disp: "Project Link",
    },
    {
      name: "Design of a Bit Hydraulics Program",
      description: `Developed a hydraulic design program for a 14,000ft vertical well, recommending optimal drilling fluid flow rate and bit nozzle sizes
      to maximize hydraulic energy and drilling rate. Determined specifications for drilling fluid pumps, considering technical
      feasibility, safety, and economic factors. Below is the link to the project:`,
      link: "https://drive.google.com/drive/folders/1KP5OrA5Kmxs2QQIP5q7IH1Y8hvxgEkq1?usp=sharing",
      disp: "Project Link",
    },
  ];

  return (
    <>
      <Framer>
        <div className="mb-5 lg:mt-[10rem] mt-[5rem]" id="Work">
          <h1 className="text-[#E0E0E0] text-[4rem] font-light">MY WORK</h1>
          <h6 className="text-[#B0B0B0]">Explore some of my Projects</h6>
        </div>
        <h4 className="text-[#C69749] font-medium text-xl mb-2">
          Software Development Projects
        </h4>
      </Framer>
      <VerticalTimeline animate={true} layout={timelineLayout}>
        {webDev.map((el, index) => (
          <VerticalTimelineElement
            key={index}
            date={el.date}
            dateClassName="text-[white] mx-5"
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  #C69749" }}
            contentStyle={{
              background: "#1E1E1E",
              color: "#E0E0E0",
              border: "1px solid #C69749",
            }}
            iconStyle={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#1E1E1E",
            }}
            icon={
              <img
                src={el.img}
                alt={el.name}
                className="w-[90%] h-[90%] rounded-full"
              />
            }
          >
            <h4 className="vertical-timeline-element-title text-[1.2rem] lg:text-[1.5rem] font-bold ">
              {el.name}
            </h4>
            <p
              className="vertical-timeline-element-desc"
              style={{ marginBottom: "10px" }}
            >
              {el.desc}
            </p>
            <Chips items={el.code} />
            <div className="flex mt-2 lg:mt-5">
              {el.links.map((link, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  sx={{
                    color: "#C69749",
                    borderColor: "#C69749",
                    "&:hover": {
                      backgroundColor: "#B08B3D",
                      borderColor: "#B08B3D",
                      color: "#E0E0E0",
                    },
                    margin: "0 5px",
                    marginBottom: {
                      xs: "5px",
                      md: "10px",
                    },
                    padding: {
                      xs: "6px",
                      md: "10px",
                    },
                  }}
                  href={link.url}
                  target="_blank"
                >
                  <span className="flex items-center gap-1 lg:gap-2 text-[.7rem] lg:text-base">
                    {link.icon}
                    {link.name}
                  </span>
                </Button>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <Framer>
        <div className="mt-10">
          <h4 className="text-[#C69749] font-medium text-xl mb-2">
            Petroleum Design Projects
          </h4>
          <div className="flex gap-5 xs:flex-wrap xl:flex-nowrap">
            <Cards arr={pete} width={"50%"} />
          </div>
        </div>
      </Framer>
    </>
  );
}
