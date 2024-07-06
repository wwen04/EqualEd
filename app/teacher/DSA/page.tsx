import React from "react";
import Link from "next/link";

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
          src="https://repository-images.githubusercontent.com/492834560/f00cf87f-9e5a-4bdd-ab9f-11d2312275bd"
          className="max-h-[50vh] w-full rounded-xl object-cover"
        />
        <h1 className="text-5xl font-bold font-mono">
          Data Structures and Algorithms
        </h1>
      </div>
      <div>
        <p>
          Data Structures is about how data can be stored in different
          structures. Algorithms is about how to solve different problems, often
          by searching through and manipulating data structures. Theory about
          Data Structures and Algorithms (DSA) helps us to use large amounts of
          data to solve problems efficiently.
        </p>
      </div>
    </main>
  );
};

export default page;
