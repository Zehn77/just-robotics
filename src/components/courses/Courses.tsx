import { CourseCard } from "./CourseCard";
import { courses } from "./data";

export const Courses = () => {
  return (
    <section className="">
      <div className="max-w-[1100px] mx-auto py-6 md:py-12">
        <h3 className="text-center font-tektur-700 text-xl md:text-[60px] text-yellow-2">
          Авторские кусы <br className="hidden md:block" /> от JustRobotics
        </h3>

        <div className="overflow-x-auto md:overflow-visible">
          <div className="flex md:grid md:grid-cols-2 md:gap-10 gap-4 py-6 ">
            <div className="md:hidden opacity-0">f</div>

            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
            <div className="md:hidden opacity-0">f</div>
          </div>
        </div>
      </div>
    </section>
  );
};
