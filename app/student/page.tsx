import CourseCard from "../(components)/CourseCard";

const courses: any = [
  {
    courseTitle: "CS50",
    teacher: "Snoop Dogg",
    image: "cs.jpg",
    link: "/",
    description:
      "The most comprehensive computer science course on the Internet that anyone can access!",
  },
  {
    courseTitle: "Data Structures and Algorithm",
    teacher: "Elon Musk",
    image: "ds.jpg",
    link: "/",
    description: "Learn algorithms",
  },
];

export default function StudentPage() {
  return (
    <main className="m-16 mb-8">
      <section>
        <div className="flex justify-between border-b-2 border-gray-200 pb-4">
          <h1 className="text-5xl font-bold font-mono">My Courses</h1>
          <div className="flex gap-2">
            <button
              type="button"
              className="p-3 rounded-full font-semibold bg-green-700 text-white"
            >
              Default
            </button>
            <button
              type="button"
              className="p-3 rounded-full font-semibold border-gray-200 border"
            >
              A - Z
            </button>
            <button
              type="button"
              className="p-3 rounded-full font-semibold border-gray-200 border"
            >
              List View
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-5 mt-8 gap-8">
          {courses.map((course: any, index: number) => {
            return (
              <CourseCard
                key={index}
                courseTitle={course.courseTitle}
                image={course.image}
                teacher={course.teacher}
                link={course.link}
                description={course.description}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
