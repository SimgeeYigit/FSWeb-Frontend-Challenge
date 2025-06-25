import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const { content } = useSelector((store) => store);
  const data = content.footerSection;

  return (
    <footer className="md:h-[409px] bg-[#F9F9F9] dark:bg-[#141414]">
      <div className="flex flex-col justify-center gap-12 h-full pt-4 pr-[2rem] pb-20 pl-[2rem] md:pr-[10rem] md:pl-[10rem]">
        <div className="flex flex-col font-semibold text-[42px] text-[#1F2937] dark:text-[#AEBCCF]">
          <p>{data.title.first}</p>
          <p>{data.title.second}</p>
        </div>
        <div className="flex md:items-center md:flex-row flex-col">
          <div className="flex">
          <span className="mr-1">👉</span>
          <a
            href="mailto:simgeyigit98@gmail.com"
            className="pb-4 text-[#AF0C48] font-medium text-xl underline decoration-[#AF0C48] decoration-solid underline-offset-[5px] decoration-1 dark:text-[#BAB2E7] dark:decoration-[#BAB2E7]"
          >
            {data.email}
          </a>
          </div>
          <div className="flex justify-end w-full gap-5 md:flex-row flex-col">
            {data.contact.map((contact, index) => {
              if (index === 0) {
                return (
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    key={index}
                    to="/"
                    className="font-medium text-[#0A0A14] text-lg even:text-[#00AB6B] last:text-[#0077B5] dark:first:text-[#E1E1FF] dark:even:text-[#17D18B] dark:last:text-[#0BA6F6]"
                  >
                    {contact}
                  </Link>
                );
              } else if (index === 1) {
                return (
                  <a
                    key={index}
                    href="https://github.com/SimgeeYigit"
                    target="_blank"
                    className="font-medium text-[#0A0A14] text-lg even:text-[#00AB6B] last:text-[#0077B5] dark:first:text-[#E1E1FF] dark:even:text-[#17D18B] dark:last:text-[#0BA6F6]"
                  >
                    {contact}
                  </a>
                );
              } else if (index === 2) {
                return (
                  <a
                    key={index}
                    href="https://www.linkedin.com/in/simgeyigit/"
                    target="_blank"
                    className="font-medium text-[#0A0A14] text-lg even:text-[#00AB6B] last:text-[#0077B5] dark:first:text-[#E1E1FF] dark:even:text-[#17D18B] dark:last:text-[#0BA6F6]"
                  >
                    {contact}
                  </a>
                );
              } else {
                return (
                  <span
                    key={index}
                    className="font-medium text-[#0A0A14] text-lg even:text-[#00AB6B] last:text-[#0077B5] dark:first:text-[#E1E1FF] dark:even:text-[#17D18B] dark:last:text-[#0BA6F6]"
                  >
                    {contact}
                  </span>
                );
              }
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
