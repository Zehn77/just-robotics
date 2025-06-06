import clsx from "clsx";

export const Hero = () => {
  return (
    <section className="bg-black">
      <div className="relative px-8 bg-black py-8 max-w-[1300px] mx-auto">
        <div className="bg-white w-[200px] md:w-[600px] min-h-[240px] md:min-h-[300px] my-5 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <h3 className="font-tektur-700 text-xl md:text-7xl text-center">
              JustRobotics
            </h3>
            <p className="text-base md:text-2xl font-semibold mt-2">
              твой проводник в мир технологий и искусства
            </p>
          </div>

          <div className="flex flex-col gap-2 items-start">
            <p className="text-xs md:text-sm text-gray-500">
              получите бесплатное первое занятие
            </p>
            <button className="bg-black text-xs md:text-lg text-yellow px-6 py-2 rounded-md">
              Перейти к курсам
            </button>
          </div>
        </div>

        <img
          className={clsx(
            "object-fill absolute bottom-[40px] rigth-0 w-[200px] right-[20px] md:w-[430px] md:top-[-85px]",
            {}
          )}
          src="./images/robot.png"
          alt="Robot image"
        />
      </div>
    </section>
  );
};
