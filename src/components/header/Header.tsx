import styles from "./Header.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { LanguageButtons } from "./LanguageButtons";
import { RiMenu3Fill } from "react-icons/ri";

export const Header = () => {
  return (
    <header className="bg-yellow py-2 z-10 relative">
      <nav className="bg-black px-5 py-1 md:p-2 flex justify-between md:justify-around items-center">
        <img
          className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
          src="images/logo.svg"
          alt="logo"
        />

        <ul className="text-white  md:flex gap-12 items-center hidden ">
          <li>Главная</li>
          <li>О нас</li>
          <li className="flex items-center gap-1 text-yellow border-yellow border-1 py-1 pl-3 pr-2 rounded-full">
            <span>Курсы</span>
            <IoMdArrowDropdown className="w-[20px] h-[20px]" />
          </li>
          <li>Контакты</li>
          <button
            className={`${styles.glowing_button_shadow} text-black uppercase  bg-yellow px-8 py-2.5 rounded-md cursor-pointer font-tektur-700`}
          >
            ПОЗВОНИТЬ
          </button>
        </ul>

        <div className="flex gap-3">
          <LanguageButtons />

          <button className="inline md:hidden text-white">
            <RiMenu3Fill className="w-[30px] h-[30px] cursor-pointer" />
          </button>
        </div>
      </nav>
    </header>
  );
};
