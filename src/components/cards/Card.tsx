import styles from "./Card.module.css";

type CardProps = {
  title: string;
  desctiption: string;
};

export const Card = ({ item }: { item: CardProps }) => {
  return (
    <div
      className={`bg-yellow-2 glowing_button_shadow flex-1 p-5 rounded-b-xl rounded-t-xl md:rounded-t-none flex flex-col items-center justify-start ${styles.glowing_shadow}`}
    >
      <h3 className="text-[50px] md:text-[80px] font-tektur-800">
        {item.title}
      </h3>
      <p className="text-xl md:text-4xl font-tektur-600 text-center">
        {item.desctiption}
      </p>
    </div>
  );
};
