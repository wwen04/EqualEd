import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="p-8">
      <div className="justify-between border-b-2 border-gray-200 pb-4">
        <div className="w-full flex justify-end">
          <Link href={"/courses"}>
            <button type="button">Back</button>
          </Link>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxW8PA9RgVE-2wdfM4EuSlAPkCOmdpa_O7g&s"
          className="max-h-[50vh] w-full rounded-xl object-cover"
        />
        <h1 className="text-5xl font-bold font-mono">
          Artificial Intelligence & Machine Learning
        </h1>
      </div>
      <div>
        <p>
          While artificial intelligence encompasses the idea of a machine that
          can mimic human intelligence, machine learning does not. Machine
          learning aims to teach a machine how to perform a specific task and
          provide accurate results by identifying patterns.
        </p>
      </div>
      <div className="w-full flex justify-end pt-8 pr-5 text-2xl ">
        <button type="button" className=" hover:bg-red-600 hover:text-white">
          Enroll
        </button>
      </div>
    </main>
  );
};

export default page;
