import Link from "next/link";
import CoursePage from "../CoursePage";

const pageInfo = {
  courseCode: "CS0050",
  courseTitle: "CS50: Introduction to Computer Science",
  teacher: "David J. Malan",
  image: "/bg.gif",
  link: "/courses/cs50",
  description:
    "An entry-level course taught by David J. Malan, CS50x teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development.",
};

export default function Page({ searchParams }: any) {
  const language = decodeURIComponent(searchParams.lang) ?? "English"; // Default to English
  const level = decodeURIComponent(searchParams.level) ?? 1;

  return (
    <>
      <div className="w-full flex justify-between p-8">
        {/* Language Selector */}
        <div className="flex flex-row items-center">
          <h1 className="font-semibold text-xl">Language:</h1>
          <div className="ml-4 flex flex-row">
            <Link
              href="/courses/CS50?lang=English"
              className="p-2 px-4 rounded-l-full bg-green-500 hover:bg-green-700 hover:text-white text-black"
            >
              English
            </Link>
            <Link
              href="/courses/CS50?lang=Chinese"
              className="p-2 px-4 bg-green-500 hover:bg-green-700 hover:text-white text-black"
            >
              Chinese
            </Link>
            <Link
              href="/courses/CS50?lang=Japanese"
              className="p-2 px-4 bg-green-500 hover:bg-green-700 hover:text-white text-black"
            >
              Japanese
            </Link>
            <Link
              href="/courses/CS50?lang=Korean"
              className="p-2 px-4 bg-green-500 hover:bg-green-700 hover:text-white text-black"
            >
              Korean
            </Link>
            <Link
              href="/courses/CS50?lang=Malay"
              className="p-2 px-4 rounded-r-full bg-green-500 hover:bg-green-700 hover:text-white text-black"
            >
              Malay
            </Link>
          </div>
        </div>

        <Link href={"/courses"}>
          <button
            type="button"
            className="py-2 px-4 rounded-xl bg-sky-800 shadow-lg text-white"
          >
            Back
          </button>
        </Link>
      </div>
      <CoursePage pageInfo={pageInfo} language={language} level={level} />
    </>
  );
}
