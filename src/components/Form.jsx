import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function Form() {
  const { language } = useSelector((store) => store);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      title: "",
      reason: "",
      message: "",
    },
    mode: "onChange",
  });

  const notify = () => {
    toast.success("Başarıyla gönderildi! 🎉");
  };

  const submitForm = (formData) => {
    axios
      .post("https://reqres.in/api/workintech", formData, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      })
      .then((res) => {
        console.log(res.data);
        notify();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center font-inter font-medium text-base text-[#3730A3] pr-[20rem] pb-20 pl-[20rem]">

      <div className="w-full max-w-[880px] mb-4 flex justify-start">
        <button
          onClick={() => history.goBack()}
          className="border border-[#3730A3] rounded-md py-3 px-8 text-[#FFFFFF] bg-[#3730A3] hover:bg-[#EEEBFF] hover:text-[#3730A3] dark:bg-[#FFFFFF] dark:text-[#3730A3] dark:hover:text-[#3730A3] dark:hover:bg-[#FFFFFF] dark:border-[#E1E1FF] font-medium text-lg"
        >
          {language === "tr" ? "🠔 Geri Dön" : "🠔 Go Back"}
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center dark:text-white">
          {language === "tr" ? "Benimle İletişime Geçin" : "Contact Me"}
        </h2>
      </div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex justify-center gap-20">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="dark:text-[#FFFFFF]">
              {language === "tr" ? "Ad Soyad" : "Full Name"}
            </label>
            <input
              className="w-[400px] border border-[#3730A3] rounded-md h-[35px] pl-[5px] dark:bg-[#383838] dark:border-[#FFFFFF] dark:text-[#FFFFFF]"
              id="name"
              type="text"
              {...register("name", {
                required: "Ad Soyad alanı boş bırakılamaz.",
              })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="dark:text-[#FFFFFF]">
              {language === "tr" ? "E-Posta Adresi" : "Email Address"}
            </label>
            <input
              className="w-[400px] border border-[#3730A3] rounded-md h-[35px] pl-[5px] dark:bg-[#383838] dark:border-[#FFFFFF] dark:text-[#FFFFFF]"
              type="email"
              id="email"
              {...register("email", {
                required: "Email alanı boş bırakılamaz.",
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        </div>

        <div className="flex justify-center gap-20">
          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="pt-[25px] dark:text-[#FFFFFF]">
              {language === "tr" ? "Şirket" : "Company"}
            </label>
            <input
              className="w-[400px] border border-[#3730A3] rounded-md h-[35px] pl-[5px] dark:bg-[#383838] dark:border-[#FFFFFF] dark:text-[#FFFFFF]"
              id="company"
              type="text"
              {...register("company", {
                required: "Şirket alanı boş bırakılamaz.",
              })}
            />
            {errors.company && <p>{errors.company.message}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="pt-[25px] dark:text-[#FFFFFF]">
              {language === "tr" ? "Ünvan" : "Degree"}
            </label>
            <input
              className="w-[400px] border border-[#3730A3] rounded-md h-[35px] pl-[5px] dark:bg-[#383838] dark:border-[#FFFFFF] dark:text-[#FFFFFF]"
              type="text"
              id="title"
              {...register("title", {
                required: "Ünvan alanı boş bırakılamaz.",
              })}
            />
            {errors.title && <p>{errors.title.message}</p>}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="reason" className="pt-[25px] dark:text-[#FFFFFF]">
            İletişim Nedeni
          </label>
          <select
            id="reason"
            name="reason"
            className="w-[880px] border border-[#3730A3] rounded-md h-[35px] pl-[5px] dark:bg-[#383838] dark:border-[#FFFFFF] dark:text-[#FFFFFF]"
            required
          >
            <option value="">{language === "tr" ? "Seçiniz" : "Select"}</option>
            <option value="iş">
              {language === "tr" ? "İş Teklifi" : "Job Offer"}
            </option>
            <option value="proje">
              {language === "tr" ? "Proje İşbirliği" : "Project Collaboration"}
            </option>
            <option value="danışmanlık">
              {language === "tr" ? "Danışmanlık" : "Consulting"}
            </option>
            <option value="diğer">
              {language === "tr" ? "Diğer" : "Other"}
            </option>
          </select>
          {errors.reason && <p>{errors.reason.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="pt-[25px] dark:text-[#FFFFFF]">
            {language === "tr" ? "Mesajınız" : "Your Message"}
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            className="w-[880px] border border-[#3730A3] rounded-md pl-[5px] dark:bg-[#383838] dark:border-[#FFFFFF] dark:text-[#FFFFFF]"
          ></textarea>
          {errors.message && <p>{errors.message.message}</p>}
        </div>

        <div className="text-center pt-[25px] dark:text-[#FFFFFF]">
          <button
            type="submit"
            className="border border-[#3730A3] rounded-md py-3 px-8 text-[#FFFFFF] bg-[#3730A3] hover:bg-[#EEEBFF] hover:text-[#3730A3] dark:bg-[#FFFFFF] dark:text-[#3730A3] dark:hover:text-[#3730A3] dark:hover:bg-[#FFFFFF] dark:border-[#E1E1FF] font-medium text-lg"
          >
            {language === "tr" ? "Gönder" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
