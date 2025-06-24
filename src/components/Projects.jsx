import { useSelector } from "react-redux";
import pizza from "../assets/projects/pizza.jpeg";
import portfolio from "../assets/projects/portfolio.png";
import film from "../assets/projects/film.png";

const Projects = () => {
  const { content } = useSelector((store) => store);
  const data = content.projectsSection;
  const img = [pizza, portfolio, film];

  return (
    <section id="projects" className="pr-[20rem] pl-[20rem] pb-[150px]">
      <p className="title pb-8">{data.title}</p>
      <div className="flex justify-between">
        {data.projects.map((project, index) => (
          <div key={index} className="flex flex-col w-[300px] gap-4">
            <img
              src={img[index]}
              alt={project.title}
              className="w-[300px] h-[180px] object-cover"
            />
            <p className="second-title">{project.title}</p>
            <p className="text-justify font-normal text-sm text-[#6B7280] dark:text-[#FFFFFF]">
              {project.text}
            </p>
            <div className="flex text-[#3730A3] font-medium text-sm gap-[10px]">
              {project.need.map((need) => (
                <p className="rounded border pt-1.5 px-[18px] pb-[7px] border-[#3730A3] dark:text-[#8F88FF] dark:bg-[#383838] dark:border-[#8F88FF]">
                  {need}
                </p>
              ))}
            </div>
            <div className="flex justify-between font-medium text-base text-[#3730A3] underline decoration-[#3730A3] decoration-solid underline-offset-[2px] decoration-1 dark:decoration-[#E1E1FF] ">
              <a className="dark:text-[#E1E1FF]" href={project.github}>Github</a>
              <p className="dark:text-[#E1E1FF]">{project.view}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
