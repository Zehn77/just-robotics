import { Card } from "./Card";

const items = [
  {
    id: 0,
    title: "300+",
    desctiption: "Довольных студентов",
  },
  {
    id: 1,
    title: "25+",
    desctiption: "Преподавателей",
  },
  {
    id: 2,
    title: "60+",
    desctiption: "групп",
  },
];

export const Cards = () => {
  return (
    <section className="z-10 relative max-w-[1150px] mx-auto flex gap-8 px-8 flex-wrap mb-5 md:mb-0">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </section>
  );
};
