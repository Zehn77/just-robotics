import { useState, useEffect, useRef } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import clsx from "clsx";

const options = [
  "Работотехника",
  "Живопись для взрослых",
  "Живопись для детей",
  "Шахмат",
  "Английский",
];

type CourseSelectionProps = {
  setCourse: (value: string) => void;
};

export const CourseSelection = ({ setCourse }: CourseSelectionProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Выберете курс");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const close = () => setShowMenu(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="bg-white min-w-[240px] cursor-pointer relative flex justify-between items-center outline-none px-4 rounded-md py-2"
      onClick={toggleMenu}
    >
      <p className="text-sm select-none text-gray-500">{selectedOption}</p>
      <BiSolidDownArrow className="text-gray-500" />

      <div
        className={clsx(
          "absolute rounded-md py-2 w-full top-[50px] left-0 bg-white shadow-md z-10",
          {
            block: showMenu,
            hidden: !showMenu,
          }
        )}
      >
        <div
          className="px-4"
          onClick={(e) => {
            e.stopPropagation();
            close();
          }}
        >
          <div className="flex w-full justify-between py-2">
            <p className="text-sm select-none text-gray-500">Выберете курс</p>
            <BiSolidUpArrow className="text-gray-500" />
          </div>
          <hr className="text-gray-400 mt-0.5" />
        </div>

        {options.map((option) => (
          <div
            key={option}
            className="px-4"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedOption(option);
              setCourse(option);
              close();
            }}
          >
            <div className="flex w-full justify-between py-2">
              <p className="text-sm select-none text-black">{option}</p>
            </div>
            <hr className="text-gray-400 mt-0.5" />
          </div>
        ))}
      </div>
    </div>
  );
};
