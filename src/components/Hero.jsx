import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profileİmg from "../assets/profile-image.png";
import { useHistory } from "react-router-dom";

const Hero = () => {
  const { content } = useSelector((store) => store);
  const history = useHistory();
  const data = content.heroSection;

  return (
    <section className="py-16 pt-4 pr-[20rem] pb-20 pl-[20rem]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-8 w-[50%]">
          <div className="flex items-center gap-4">
            <div className="h-px w-[102px] bg-[#4338CA] dark:bg-[#BAB2E7]"></div>
            <p className="text-[#4338CA] font-medium text-xl whitespace-nowrap dark:text-[#BAB2E7]">
              {data.name}
            </p>
          </div>
          <p className="font-bold text-7xl text-[#1F2937] dark:text-[#AEBCCF]">
            {data.title.first}
            <br />
            {data.title.second}
          </p>
          <p className="font-normal text-lg text-[#6B7280] text-justify dark:text-[#FFFFFF]">
            {data.text}
          </p>
          <div className="flex gap-3 items-center">
            {data.socials.map((social, index) => {
              if (index === 0) {
                // İç sayfa yönlendirme için button/div kullan
                return (
                  <button
                    key={index}
                    onClick={() => history.push("/contact")}
                    className="first:text-[#FFFFFF] first:bg-[#3730A3] text-[#3730A3] py-3 px-8 border border-[#3730A3] rounded-md dark:first:bg-[#E1E1FF] dark:first:text-[#000000] dark:border-[#E1E1FF] dark:text-[#E1E1FF] dark:bg-[#383838] cursor-pointer"
                  >
                    {social.text}
                  </button>
                );
              }

              // Dış linkler için a etiketi
              return (
                <a
                  href={
                    index === 1
                      ? "https://github.com/SimgeeYigit"
                      : index === 2
                      ? "https://www.linkedin.com/in/simgeyigit/"
                      : undefined
                  }
                  target="_blank"
                  key={index}
                  className="first:text-[#FFFFFF] first:bg-[#3730A3] text-[#3730A3] py-3 px-8 border border-[#3730A3] rounded-md dark:first:bg-[#E1E1FF] dark:first:text-[#000000] dark:border-[#E1E1FF] dark:text-[#E1E1FF] dark:bg-[#383838]"
                >
                  {index === 1 && (
                    <FontAwesomeIcon className="mr-2" icon={faGithub} />
                  )}
                  {index === 2 && (
                    <FontAwesomeIcon className="mr-2" icon={faLinkedin} />
                  )}
                  {social.text}
                </a>
              );
            })}
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
