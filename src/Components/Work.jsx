import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState, useEffect } from "react";
import Chips from "./Chips";
import Button from "@mui/material/Button";
import { projects } from "../projects";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Framer from "../Framer";

export default function Work() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  const timelineLayout = isMobile ? "1-column-left" : "2-columns";

  return (
    <>
      <Framer>
        <div className="mb-5 lg:mt-[10rem] mt-[5rem]" id="Work">
          <h1 className="text-[#E0E0E0] text-[4rem] font-light">MY WORK</h1>
          <h6 className="text-[#B0B0B0]">Explore some of my Projects</h6>
        </div>
        <div className="mb-10 w-full">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#C69749",
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#C69749",
              },
              "& .MuiTab-root": {
                color: "#E0E0E0",
                fontSize: {
                  xs: "0.9rem",
                  md: "1rem",
                },
              },
            }}
          >
            <Tab label="Software Development" {...a11yProps(0)} />
            <Tab label="Petroleum Design" {...a11yProps(1)} />
          </Tabs>
        </div>
      </Framer>
      <VerticalTimeline animate={true} layout={timelineLayout}>
        {projects[value].map((el, index) => (
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
            <Chips items={el?.code} />
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
                  disabled={link?.disable}
                >
                  <span className="flex items-center gap-1 lg:gap-2 text-[.7rem] lg:text-base">
                    {link?.icon}
                    {link.name}
                  </span>
                </Button>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
}
