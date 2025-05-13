type Course = {
  title: string;
  url: string;
  alt: string;
};

export const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="min-w-[250px] md:bg-yellow-2 bg-black border-white border-1 rounded-xl p-8 shadow-md " >
      <img className="rounded-2xl" src={course.url} alt={course.alt} />
      <h3 className="font-tektur-700 text-2xl my-3 hidden md:block">
        {course.title}
      </h3>

      <p className="text-white md:hidden my-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>

      <div className="md:flex justify-end mt-10 hidden">
        <button className="bg-black cursor-pointer rounded-2xl text-sm text-white px-4 py-1">
          Подробнее о кусе -&gt;
        </button>
      </div>
    </div>
  );
};
