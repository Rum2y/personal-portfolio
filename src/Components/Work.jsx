import Card from "@mui/material/Card";
import Cards from "./Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Framer from "../Framer";

export default function Work() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 200,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const webDev = [
    {
      name: "MecSimCalc",
      img: "/img/mec.png",
      desc: `Collaborated on developing an AI tool for creating apps using <span style="color: #C69749;">TypeScript</span> and <span style="color: #C69749;">React</span> on the MecSimCalc platform.`,
      weblink: "https://mecsimcalc.com/",
    },
    {
      name: "SPE Ualberta",
      img: "/img/spe.png",
      desc: `Developed and designed the official website for the Petroleum Engineering Department, improving accessibility and information dissemination. Made using <span style="color: #C69749;">React Js</span>.`,
    },
    {
      name: "Ravon Ecommerce",
      img: "/img/ravon.png",
      desc: `On this ecommerce site, you can buy items, add items to wishlist, and more. It was made using <span style="color: #C69749;">HTML</span>, <span style="color: #C69749;">CSS</span>, <span style="color: #C69749;">Javascript</span>, <span style="color: #C69749;">Node</span>, and <span style="color: #C69749;">Bootstrap</span>.`,
      weblink: "https://ravon-ecommerce.netlify.app/#",
    },
  ];

  const pete = [
    {
      name: "PIPESIM SIMULAION",
      description: `Designed and optimized artificial lift systems (Gas Lift and ESP) to increase oil production rates from under-saturated
      carbonate reservoirs. Below is the link to the project:`,
      link: "https://drive.google.com/drive/folders/1qDO8NVaJOgjPhXwST1qSFzJ9AEGVAbL-?usp=drive_link",
      disp: "Project Link",
    },
    {
      name: "Design of a Bit Hydraulics Program",
      description: `Developed a hydraulic design program for a vertical well, recommending optimal drilling fluid flow rate and bit nozzle sizes
      to maximize hydraulic energy and drilling rate. Determined specifications for drilling fluid pumps, considering technical
      feasibility, safety, and economic factors. Below is the link to the project:`,
      link: "https://drive.google.com/drive/folders/1KP5OrA5Kmxs2QQIP5q7IH1Y8hvxgEkq1?usp=sharing",
      disp: "Project Link",
    },
  ];

  return (
    <Framer>
      <div className="mb-5 mt-[10rem]" id="Work">
        <h1 className="text-[#E0E0E0] text-[4rem] font-light">MY WORK</h1>
        <h6 className="text-[#B0B0B0]">Explore some of my Projects</h6>
      </div>
      <h4 className="text-[#C69749] font-medium text-xl mb-2">
        Web Design Projects
      </h4>
      <div className="">
        <Slider {...settings}>
          {webDev.map((el, index) => (
            <a href={el?.weblink} target="_blank" className="no-underline">
              <Card
                key={index}
                sx={{
                  boxShadow: "none",
                  border: "none",
                  backgroundColor: "transparent",
                }}
              >
                <CardActionArea sx={{ padding: "0 20px" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={el.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#B0B0B0" }}
                    >
                      {el.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#E0E0E0", fontSize: "1.125rem" }}
                      dangerouslySetInnerHTML={{ __html: el.desc }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </a>
          ))}
        </Slider>
      </div>
      <div className="mt-10">
        <h4 className="text-[#C69749] font-medium text-xl mb-2">
          Petroleum Design Projects
        </h4>
        <div className="flex gap-5 xs:flex-wrap xl:flex-nowrap">
          <Cards arr={pete} width={"50%"} />
        </div>
      </div>
    </Framer>
  );
}
