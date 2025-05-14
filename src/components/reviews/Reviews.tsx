import { ReviewCard } from "./ReviewCard";

export const Reviews = () => {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto">
        <h3 className="font-tektur-700 text-center md:text-left px-6 text-yellow-2 text-xl pb-2">отзывы</h3>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 py-2 ">
            <div className="opacity-0">f</div>

            {Array.from({ length: 30 }, (_, index) => (
              <ReviewCard key={index} />
            ))}

            <div className=" opacity-0">f</div>
          </div>
        </div>
      </div>
    </section>
  );
};
