import { FaPlay } from "react-icons/fa6";
import styles from "./Reviews.module.css";

export const ReviewCard = () => {
  return (
    <div
      className={`bg-gray  min-w-[160px] md:min-w-[200px] h-[220px] md:h-[260px] rounded-xl flex justify-center items-center ${styles.glowing_shadow}`}
    >
      <div className="border-white border-1 px-7 py-3 rounded-3xl flex items-center justify-center">
        <FaPlay className="text-white w-[22px] h-[22px]" />
      </div>
    </div>
  );
};
