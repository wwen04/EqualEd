import CourseCard from "../(components)/CourseCard";

const courses: any = [
  {
    courseTitle: "CS50: Introduction to Computer Science",
    teacher: "David J. Malan",
    image: "cs.jpg",
    link: "courses/CS50",
    description:
      "This course teaches you how to solve problems, both with and without code, with an emphasis on correctness, design, and style.",
  },
  {
    courseTitle: "Data Structures and Algorithm",
    teacher: "Elon Musk",
    image: "ds.jpg",
    link: "courses/DSA",
    description:
      "Embark on a journey to master the essential concepts of data structures and algorithms in this comprehensive course",
  },
  {
    courseTitle: "Artificial Intelligence & Machine Learning",
    teacher: "Sum Ting Wong",
    image: "ai.jpg",
    link: "courses/AI&ML",
    description:
      "Unlock the potential of artificial intelligence and machine learning in this in-depth course. Designed for aspiring AI practitioners, this course covers the foundational concepts, techniques, and applications of AI and ML.",
  },
];

export default function CoursesPage() {
  return (
    <main className="m-16 mb-8">
      <section>
        <div className="flex justify-between border-b-2 border-gray-200 pb-4">
          <h1 className="text-5xl font-bold font-mono">All Courses</h1>
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
        <div className="grid grid-cols-1 lg:grid-cols-5 mt-8 gap-8 mx-auto">
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
