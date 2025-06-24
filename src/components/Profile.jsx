import { useSelector } from "react-redux";

const Profile = () => {
  const { content } = useSelector((store) => store);
  const data = content.profileSection;
  return (
    <section className="pt-12 pb-12 pr-[20rem] pl-[20rem]">
      <div className="border-b-[1px] border-solid border-[#BAB2E7] pb-12">
        <p className="title pb-6">{data.title}</p>

        <div className="flex">
          <div className="w-[50%]">
            <p className="second-title pb-4">{data.profile.title}</p>
            <div className="flex flex-col gap-4 ">
              {data.profile.personal.map((item, index) => (
                <div key={index} className="flex gap-3 text-lg">
                  <p className="font-semibold w-40 text-lg dark:text-[#FFFFFF]">{item.title}</p>

                  {typeof item.text === "object" ? (
                    <div className="font-normal text-[#000000] text-lg dark:text-[#FFFFFF]">
                      <p>{item.text.first}</p>
                      <p>{item.text.second}</p>
                    </div>
                  ) : (
                    <p className="font-normal text-[#000000] text-lg dark:text-[#FFFFFF]">{item.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-[40%]">
            <p className="second-title pb-4">{data.aboutMe.title}</p>
            <div className="text-lg text-[#6B7280] font-normal text-justify dark:text-[#FFFFFF]">
              <p>{data.aboutMe.text.first}</p>
              <br />
              <p>{data.aboutMe.text.second}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
