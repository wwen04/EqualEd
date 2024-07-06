import Link from "next/link";
import { StarBorder, Search } from "@mui/icons-material";
import LinearProgressWithLabel from "../(components)/LinearProgressBar";

const courses: any = [
  {
    courseCode: "CS0050",
    courseTitle: "CS50: Introduction to Computer Science",
    teacher: "David J. Malan",
    image: "cs.jpg",
    link: "/",
    description:
      "This course teaches you how to solve problems, both with and without code, with an emphasis on correctness, design, and style.",
    progress: 50,
  },
  {
    courseCode: "IM1003",
    courseTitle: "Data Structures and Algorithm",
    teacher: "Elon Musk",
    image: "ds.jpg",
    link: "/",
    description:
      "Embark on a journey to master the essential concepts of data structures and algorithms in this comprehensive course",
    progress: 87,
  },
];

export default function StudentPage() {
  return (
    <main className="m-16 mb-8">
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

      {/* Search Bar */}
      <div className="my-4">
        <Search />
        <input placeholder="Search.." className="px-4 py-2" />
      </div>

      {/* Course Progress */}
      <div className="flex flex-col w-full gap-4">
        {courses.map((course: any, index: number) => {
          return (
            <Link
              href="/"
              className="w-full border border-gray-300 rounded-xl flex flex-row overflow-clip group hover:scale-y-110 transition-all"
              key={index}
            >
              <img
                src={course.image}
                alt={course.courseCode}
                className="object-cover w-16 h-48 group-hover:w-72 transition-all"
              />
              {/* Course Details */}
              <div className="flex flex-col p-6">
                <h1 className="text-3xl text-black font-bold">
                  {course.courseCode}
                </h1>
                <h2 className="text-xl text-black font-semibold">
                  {course.courseTitle}
                </h2>
                <h2 className="text-black mb-4">{course.teacher}</h2>
                <div className="w-[36rem]">
                  <LinearProgressWithLabel value={course.progress} />
                </div>
              </div>

              {/* Favourite Button */}
              <StarBorder className="my-auto ml-auto h-8 w-8 mr-8 hover:fill-yellow-400 hover:scale-105 transition-all" />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
