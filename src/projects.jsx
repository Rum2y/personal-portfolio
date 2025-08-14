import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import DownloadIcon from "@mui/icons-material/Download";

export const projects = [
  [
    {
      name: "Unisettle",
      img: "/img/unisettle_logo.PNG",
      desc: "Developed a full-stack mobile app for helping international students to setlle in Canada. It has an active community, job board, and more. (App still getting approved by Apple and Google)",
      date: "July 2025 - Present",
      code: [
        "React Native",
        "Node.js",
        "TypeScript",
        "Appwrite",
        "Tailwind CSS",
        "Stripe",
        "RevenueCat",
      ],
      links: [
        {
          name: "Landing Page",
          url: "https://unisettle.ca",
          icon: <LanguageIcon />,
        },
        {
          name: "Download App",
          disable: true,
          // This project is still in development, so we disable the links for now
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
          url: "https://iyinoluwa.me",
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
  ],
  [
    {
      name: "Development Plan for Upper Mannville, Alderson Field - Torxen Energy (PET 496-Capstone Project)",
      desc: `Evaluated a low-permeability (0.02–10 mD), high water cut (~69%) reservoir under budget constraints.
  Estimated reserves using volumetric, decline curve, and Accumap methods.
  Built CMG simulation models for six development scenarios and identified water injection in two wells as the optimal EOR method, forecasting an NPV of $11.5M over 10 years.
  Designed a cost-effective waterflood plan using existing infrastructure and produced water to reduce CAPEX.`,
      date: "January 2025 - April 2025",
      img: "/img/uofa.jpg",
      code: ["CMG", "Reservoir Simulation", "EOR", "Field Development"],
      links: [
        {
          url: "https://drive.google.com/drive/folders/1gpDWzniUCsqkZmiG-GP8GIOQqVIAbuIZ?usp=drive_link",
          name: "Project Link",
        },
      ],
    },
    {
      name: "PIPESIM SIMULATION (PET E 366)",
      desc: `Utilized Schlumberger PIPESIM to designe and optimize artificial lift systems (Gas Lift and ESP) to increase oil production rates from under-saturated
      carbonate reservoirs. Below is the link to the project:`,
      date: "January 2024 - April 2024",
      img: "/img/uofa.jpg",
      code: ["PIPESIM", "Reservoir Engineering"],
      links: [
        {
          url: "https://drive.google.com/drive/folders/1qDO8NVaJOgjPhXwST1qSFzJ9AEGVAbL-?usp=drive_link",
          name: "Project Link",
        },
      ],
    },
    {
      name: "Design of a Bit Hydraulics Program (PET E 364)",
      desc: `Developed a hydraulic design program for a 14,000ft vertical well, recommending optimal drilling fluid flow rate and bit nozzle sizes
      to maximize hydraulic energy and drilling rate. Determined specifications for drilling fluid pumps, considering technical
      feasibility, safety, and economic factors. Below is the link to the project:`,
      date: "September 2023 - December 2023",
      img: "/img/uofa.jpg",
      links: [
        {
          url: "https://drive.google.com/drive/folders/1KP5OrA5Kmxs2QQIP5q7IH1Y8hvxgEkq1?usp=sharing",
          name: "Project Link",
        },
      ],
    },
  ],
];
