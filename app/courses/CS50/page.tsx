import Link from "next/link";
import React from "react";

const pageInfo = {
  courseTitle: "CS50: Introduction to Computer Science",
  teacher: "David J. Malan",
  image: "/bg.gif",
  link: "/courses/cs50",
  description:
    "An entry-level course taught by David J. Malan, CS50x teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development.",
};

const page = () => {
  return (
    <main className="p-16">
      <div className="w-full flex justify-end">
        <Link href={"/courses"}>
          <button type="button">Back</button>
        </Link>
      </div>

      {/* Course Banner */}
      <div className="relative mb-8">
        <img
          src={pageInfo.image}
          className="max-h-[50vh] w-full rounded-2xl object-cover"
        />
        <div className="absolute w-full flex bottom-0 justify-between p-8">
          <h1 className="text-8xl font-bold font-mono text-white">CS50</h1>
          <button
            type="button"
            className=" bg-red-600 rounded-full text-white px-8 h-fit py-4 my-auto text-2xl font-bold font-mono hover:bg-red-400"
          >
            Enroll
          </button>
        </div>
      </div>

      {/* Course Details */}
      <div>
        <h1 className="text-5xl font-mono font-bold border-b-4 border-gray-300 pb-4 mb-4">
          {pageInfo.courseTitle}
        </h1>
        <p className="text-xl">Instructor: {pageInfo.teacher}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl my-4 font-serif">
              Course Description & Objectives
            </h1>
            <p>{pageInfo.description}</p>
          </div>
          <iframe
            className="rounded-xl mx-auto"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BretE8c90TU?si=y5izTqmQ47lP4xYS"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default page;
