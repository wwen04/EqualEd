import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="p-8">
      <div className="justify-between border-b-2 border-gray-200 pb-4">
        <div className="w-full flex justify-end">
          <Link href={"/teacher"}>
            <button type="button">Back</button>
          </Link>
        </div>
        <img
          src="https://cs50.harvard.edu/x/2023/assets/sanders.jpg"
          className="max-h-[50vh] w-full rounded-xl object-cover"
        />
        <h1 className="text-5xl font-bold font-mono">CS50</h1>
      </div>
      <div>
        <p>
          An entry-level course taught by David J. Malan, CS50x teaches students
          how to think algorithmically and solve problems efficiently. Topics
          include abstraction, algorithms, data structures, encapsulation,
          resource management, security, software engineering, and web
          development.
        </p>
      </div>
    </main>
  );
};

export default page;
