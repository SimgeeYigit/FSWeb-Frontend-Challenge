import { useSelector } from "react-redux";

const Skills = () => {
  const skills = useSelector((store) => store.skills);

  return (
    <section>
      <h1 className="title pb-6">{skills.title}</h1>
      <div className="flex justify-evenly gap-[120px] pb-10 border-b-[1px] border-solid border-[#BAB2E7]">
        {skills.skills.map((skill) => (
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
