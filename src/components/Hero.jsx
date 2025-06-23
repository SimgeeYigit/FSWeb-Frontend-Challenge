import { useSelector } from "react-redux";
import profileİmg from "../assets/profile-image.png";

const Hero = () => {
  const { content } = useSelector((store) => store);
  const data = content.heroSection;

  return (
    <section className="py-16 pt-4 pr-[20rem] pb-20 pl-[20rem]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-8 w-[50%]">
          <div className="flex items-center gap-4">
            <div className="h-px w-[102px] bg-[#4338CA]"></div>
            <p className="text-[#4338CA] font-medium text-xl whitespace-nowrap">
              {data.name}
            </p>
          </div>
          <p className="font-bold text-7xl text-[#1F2937]">
            {data.title.first}
            <br />
            {data.title.second}
          </p>
          <p className="font-normal text-lg text-[#6B7280] text-justify">
            {data.text}
          </p>
          <div className="flex gap-3">
            {data.socials.map((social) => (
              <p className="first:text-[#FFFFFF] first:bg-[#3730A3] text-[#3730A3] py-3 px-8 border border-[#3730A3] rounded-md">
                {social.text}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <img className="w-[476px] rounded-[18px]" src={profileİmg} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
