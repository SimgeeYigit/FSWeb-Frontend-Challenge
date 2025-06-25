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
    <section className="py-16 pt-4 pr-[2rem] md:pb-20 pl-[2rem] md:pr-[10rem] md:pl-[10rem]">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        {/* Metin Bloğu */}
        <div className="flex flex-col gap-8 w-full md:w-[50%]">
          <div className="flex items-center gap-4">
            <div className="h-px w-[102px] bg-[#4338CA] dark:bg-[#BAB2E7]"></div>
            <p className="text-[#4338CA] font-medium text-xl whitespace-nowrap dark:text-[#BAB2E7]">
              {data.name}
            </p>
          </div>
          <p className="font-bold text-4xl md:text-7xl text-[#1F2937] dark:text-[#AEBCCF]">
            {data.title.first}
            <br />
            {data.title.second}
          </p>
          <p className="font-normal text-lg text-[#6B7280] text-justify dark:text-[#FFFFFF]">
            {data.text}
          </p>
          <div className="flex gap-3 items-center flex-wrap">
            {data.socials.map((social, index) => {
              if (index === 0) {
                return (
                  <button
                    key={index}
                    onClick={() => history.push("/contact")}
                    className="text-[#FFFFFF] bg-[#3730A3] py-3 px-8 border border-[#3730A3] rounded-md dark:bg-[#E1E1FF] dark:text-[#000000] cursor-pointer"
                  >
                    {social.text}
                  </button>
                );
              }

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
                  className="text-[#3730A3] py-3 px-8 border border-[#3730A3] rounded-md dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:bg-[#383838]"
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

        {/* Görsel Bloğu */}
        <div className="w-full md:w-[50%] flex justify-center md:justify-end">
          <img className="w-full max-w-[476px] rounded-[18px]" src={profileİmg} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
