import Cards from "./Card";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chips from "./Chips";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import Framer from "../Framer";

export default function Work() {
  const webDev = [
    {
      name: "MecSimCalc",
      img: "/img/mec.png",
      desc: `Collaborated on developing an AI-assisted app generator using the ChatGPT API. Contributed to dynamic form generation, component rendering, and user input validation logic using TypeScript and React. Integrated Material UI for styling and ensured responsiveness across devices.`,
      code: ["TypeScript", "React JS", "ChatGPT API", "Material UI"],
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
      img: "/img/spe.png",
      desc: `Designed and developed the official website for the SPE student chapter at the University of Alberta. Implemented a clean, mobile-first interface using React, Tailwind, and Material UI to improve event visibility, membership registration, and content management. Continuously updated based on user feedback.`,
      code: ["React JS", "Material UI", "Tailwind CSS"],
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
    // {
    //   name: "Portfolio Website",
    //   img: "/img/portfolio.png",
    //   desc: `Developed a personal portfolio website to showcase my projects and skills. Implemented a clean, modern design using React and Tailwind CSS, ensuring a responsive layout for all devices.`,
    //   code: ["React JS", "Tailwind CSS"],
    //   links: [
    //     {
    //       name: "Live Demo",
    //       url: "https://my-portfolio.com/",
    //       icon: <LanguageIcon />,
    //     },
    //     {
    //       name: "GitHub",
    //       url: "https://github.com/Rum2y/personal-portfolio",
    //       icon: <GitHubIcon />,
    //     },
    //   ],
    // },
    {
      name: "Ravon Ecommerce",
      img: "/img/ravon.png",
      desc: `Built a fully functional ecommerce site with features like product browsing, wishlist management, and shopping cart. Utilized APIs to fetch live data from H&M and ASOS. Implemented frontend with HTML, CSS, Bootstrap, and handled backend logic and routes using Node.js.`,
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
          Web Design Projects
        </h4>
      </Framer>
      <div className="flex gap-5 flex-col w-full">
        {webDev.map((el, index) => {
          return (
            <Framer>
              <div
                className={`flex gap-5 mb-[5rem] ${
                  index % 2 !== 0
                    ? "xl:flex-row-reverse flex-col"
                    : "xl:flex-row flex-col"
                }`}
                key={index}
              >
                <div className="xl:w-1/2 w-full mb-5 xl:mb-0">
                  <img
                    src={el.img}
                    alt={el.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div className="xl:w-1/2 w-full xl:px-10">
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      color: "#E0E0E0",
                      marginBottom: "20px",
                      textAlign: "center",
                      fontSize: "2.5rem",
                    }}
                  >
                    {el.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#B0B0B0",
                      fontSize: {
                        xs: "1.2rem",
                        xl: "1.5rem",
                      },
                      lineHeight: {
                        xs: "1.4",
                        xl: "1.5",
                      },
                      textAlign: "center",
                      marginBottom: "20px",
                    }}
                  >
                    {el.desc}
                  </Typography>

                  <div className="flex flex-wrap gap-2 mt-3 justify-center mb-10">
                    <Chips items={el.code} />
                  </div>
                  <div className="flex justify-center mt-5">
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
                        }}
                        href={link.url}
                        target="_blank"
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          {link.icon}
                          {link.name}
                        </span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </Framer>
          );
        })}
      </div>

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
