import { useSelector } from "react-redux";

const Footer = () => {
  const { content } = useSelector((store) => store);
  const data = content.footerSection;

  return (
    <footer className="h-[409px] bg-[#F9F9F9]">
      <div className="flex flex-col justify-center gap-12 h-full pt-4 pr-[20rem] pb-20 pl-[20rem]">
        <div className="flex flex-col font-semibold text-[42px] text-[#1F2937]">
          <p>{data.title.first}</p>
          <p>{data.title.second}</p>
        </div>
        <div className="flex items-center">
          <span className="mr-1">👉</span><a href="mailto:simgeyigit98@gmail.com" className="text-[#AF0C48] font-medium text-xl underline decoration-[#AF0C48] decoration-solid underline-offset-[5px] decoration-1">{data.email}</a>
          <div className="flex justify-end w-full gap-5">
            {data.contact.map((contact) => (
              <p className="font-medium text-[#0A0A14] text-lg even:text-[#00AB6B] last:text-[#0077B5]">{contact}</p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
