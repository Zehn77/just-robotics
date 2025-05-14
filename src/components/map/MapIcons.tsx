import { ImPhone } from "react-icons/im";
import { IoLocationOutline } from "react-icons/io5";
import { BsClockFill } from "react-icons/bs";

export const MapIcons = () => {
  return (
    <ul className="flex mt-9 justify-center md:gap-12 gap-0">
      <li className="flex items-center gap-2">
        <div className="bg-yellow flex items-center justify-center p-1.5 rounded-3xl">
          <ImPhone />
        </div>
        <span className="text-white text-xs md:text-sm">Номера телефонов</span>
      </li>

      <li className="flex items-center gap-2">
        <div className="bg-yellow flex items-center justify-center p-1.5 rounded-3xl">
          <IoLocationOutline />
        </div>
        <span className="text-white md:text-sm text-xs">Адрес ориентир</span>
      </li>

      <li className="flex items-center gap-2">
        <BsClockFill className="text-yellow w-[23px] h-[23px]" />
        <span className="text-white md:text-sm text-xs">График работы</span>
      </li>
    </ul>
  );
};
