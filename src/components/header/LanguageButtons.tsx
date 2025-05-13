import { useState } from "react";
import clsx from "clsx";

export const LanguageButtons = () => {
  const [lang, setLang] = useState("ru");

  return (
    <div className="flex gap-1 md:gap-3 items-center">
      <button
        onClick={() => {
          setLang("ru");
        }}
        className={clsx(
          "cursor-pointer px-2 py-1 md:px-6 md:py-2 rounded text-lg",
          {
            "text-white bg-yellow": lang === "ru",
            "text-yellow": lang !== "ru",
          }
        )}
      >
        RU
      </button>
      <button
        onClick={() => {
          setLang("uz");
        }}
        className={clsx(
          "cursor-pointer px-2 py-1 md:px-6 md:py-2 rounded text-lg",
          {
            "text-white bg-yellow": lang === "uz",
            "text-yellow": lang !== "uz",
          }
        )}
      >
        UZ
      </button>
    </div>
  );
};
