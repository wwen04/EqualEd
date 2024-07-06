"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChalkboardTeacher, FaBook } from "react-icons/fa";

function Homepage() {
  const router = useRouter();

  const handleLearn = () => router.push("/student");
  const handleTeach = () => router.push("/teacher");

  return (
    <div
      className="
        flex flex-col justify-center items-center p-20 text-white"
    >
      <h2 className="text-5xl font-serif text-black mb-6 pb-10 ">
        Who's logging in today?
      </h2>
      <div className="flex flex-row mb-4 mt-6 gap-16">
        <button
          onClick={handleLearn}
          className=" text-black h-80 w-60 p-2 rounded-2xl transition-colors duration-300 ease-in-out hover:animate-pulse 
                    flex flex-col items-center justify-center font-serif border-2 border-transparent hover:border-gray-500 "
        >
          <FaBook className="text-gray-700 mb-4" size={60} />
          <span className="text-3xl">Student</span>
        </button>

        <button
          onClick={handleTeach}
          className=" text-black p-2 w-60 h-80 rounded-2xl transition-colors duration-300 ease-in-out hover:animate-pulse 
                    flex flex-col items-center justify-center font-serif border-2 border-transparent hover:border-gray-500"
        >
          <FaChalkboardTeacher className="text-gray-700 mb-4" size={60} />
          <span className="text-3xl">Teacher</span>
        </button>
      </div>
    </div>
  );
}

export default Homepage;
