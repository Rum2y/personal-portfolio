import Framer from "../Framer";

export default function Home() {
  return (
    <Framer>
      <div className="lg:mb-[10rem] mb-[5rem]" id="Home">
        <div className="mt-[4rem] xs:w-full lg:w-3/4">
          <h4 className="text-[#C69749] font-medium text-2xl mb-2 xs:text-center lg:text-left">
            Hi, I am Iyinoluwa Adejumo,
          </h4>
          <h1 className="text-[#E0E0E0] xs:text-[2.5rem] lg:text-[4rem] lg:leading-[4.5rem] xl:text-[5.5rem] font-[350] xs:leading-[3rem] xl:leading-[6rem] xs:text-center lg:text-left">
            PETROLEUM ENGINEER & SOFTWARE DEVELOPER
          </h1>
        </div>
        <div className="xs:w-full xl:w-[60%] mt-[6rem]">
          <h4 className="text-[#C69749] font-medium text-xl mb-2">About Me</h4>
          <p className="text-[#E0E0E0] text-lg">
            I am a passionate and driven individual with a degree in Petroleum
            Engineering from the University of Alberta, backed by four years of
            academic experience in the field. Alongside my engineering studies,
            I spent the past three years teaching myself programming — a journey
            that began out of curiosity and has since become a core part of my
            skill set. I’ve built a strong foundation in frontend web
            development, working with technologies like React, JavaScript, and
            Tailwind CSS, and have applied my technical knowledge to both
            engineering and software projects. I’m eager to merge my expertise
            in petroleum engineering with my programming skills to solve
            real-world challenges and drive innovation across both industries.
          </p>
        </div>
      </div>
    </Framer>
  );
}
