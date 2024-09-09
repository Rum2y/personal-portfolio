import Framer from "../Framer";

export default function Home() {
  return (
    <Framer>
      <div className="mb-[10rem]" id="Home">
        <div className="mt-[4rem] xs:w-full lg:w-3/4">
          <h1 className="text-[#E0E0E0] xs:text-[2.5rem] lg:text-[4rem] lg:leading-[4.5rem] xl:text-[6rem] font-light xs:leading-[3rem] xl:leading-[7rem] xs:text-center lg:text-left">
            PETROLEUM ENGINEER & FRONT-END WEB DEVELOPER
          </h1>
        </div>
        <div className="xs:w-full xl:w-[60%] mt-[5rem]">
          <h4 className="text-[#C69749] font-medium text-xl mb-2">About Me</h4>
          <p className="text-[#E0E0E0] text-lg">
            I am a passionate and driven individual with four years of academic
            experience in Petroleum Engineering, complemented by three years of
            self-taught programming. My journey into coding began out of
            curiosity, and it has since become an essential part of my skill
            set. Over the years, I’ve developed a strong foundation in frontend
            web development, working with technologies like React, JavaScript,
            and Tailwind CSS, while also applying my technical knowledge to
            engineering projects. I am eager to merge my expertise in petroleum
            engineering with my programming skills to solve real-world
            challenges and drive innovation in both industries.
          </p>
        </div>
      </div>
    </Framer>
  );
}
