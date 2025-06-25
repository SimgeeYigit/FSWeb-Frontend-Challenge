import { useSelector } from "react-redux";

const Skills = () => {
  const { content } = useSelector((store) => store);
  const data = content.skillsSection;

  return (
    <section id="skills" className="pt-8 pr-[10rem] pl-[10rem]">
      <h1 className="title pb-6">{data.title}</h1>
      <div className="flex justify-evenly gap-[120px] pb-12 border-b-[1px] border-solid border-[#BAB2E7]">
        {data.skills.map((skill) => (
          <div>
            <p className="second-title pb-6">{skill.name}</p>
            <p className="text text-justify dark:text-[#FFFFFF]">{skill.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
