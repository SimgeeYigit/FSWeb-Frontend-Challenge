import { useSelector } from "react-redux";

const Skills = () => {
  const { content } = useSelector((store) => store);
  const data = content.skillsSection;
  console.log(data)

  return (
    <section className="pt-10 pt-4 pr-[20rem] pb-20 pl-[20rem]">
      <h1 className="title pb-6">{data.title}</h1>
      <div className="flex justify-evenly gap-[120px] pb-10 border-b-[1px] border-solid border-[#BAB2E7]">
        {data.skills.map((skill) => (
          <div>
            <p className="second-title pb-6">{skill.name}</p>
            <p className="text text-justify">{skill.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
