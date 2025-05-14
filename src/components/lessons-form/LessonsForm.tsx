import { useState } from "react";
import styles from "./LessonsForm.module.css";
import { CourseSelection } from "./CourseSelection";
import getFormattedDateTime from "../../helper/date";

import { toast } from "react-toastify";

import { API } from "../../api/api";

export const LessonsForm = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    age: "",
    course: "",
  });

  const cleanTheForm = () => {
    setData({
      name: "",
      phone: "",
      age: "",
      course: "",
    });
  };

  const setCourse = (value: string) => {
    setData({ ...data, course: value });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = JSON.stringify({
      Name: data.name,
      Phone: data.phone,
      Course: data.course,
      Age: data.age,
      Date: getFormattedDateTime(),
    });

    API.sendDataToGoogleSheet(body)
      .then(() => {
        toast.success("Success!");
        cleanTheForm();
        return;
      })
      .catch((err) => {
        if (err.message === "Network Error") {
          toast.success("Success!");
          cleanTheForm();
          return;
        }
        toast.error("Error!");
      });
  };
  return (
    <section>
      <div className="max-w-[1100px] mx-auto pt-4 md:py-12">
        <h3 className="text-center font-tektur-700 text-xl md:text-[60px] text-yellow-2">
          получите бесплатный <br className="hidden md:block" /> первый урок
        </h3>

        <form
          onSubmit={handleOnSubmit}
          className="flex  px-6 md:flex-row flex-col mt-8 gap-4"
        >
          <input
            className="bg-white w-full outline-none px-4 rounded-md py-2 placeholder:text-sm"
            type="text"
            placeholder="Ваше имя"
            required
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <input
            type="tel"
            placeholder="Номер телефона"
            className="bg-white w-full outline-none px-4 rounded-md py-2 placeholder:text-sm"
            required
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />

          <CourseSelection setCourse={setCourse} />

          <input
            className="bg-white w-full  outline-none px-4 rounded-md py-2 placeholder:text-sm"
            type="number"
            placeholder="Возраст"
            required
            value={data.age}
            onChange={(e) => setData({ ...data, age: String(e.target.value) })}
          />

          <button
            type="submit"
            className={`${styles.glowing_button_shadow} w-full  text-black uppercase  bg-yellow px-8 py-2.5 rounded-md cursor-pointer font-tektur-600`}
          >
            получить
          </button>
        </form>
      </div>
    </section>
  );
};
