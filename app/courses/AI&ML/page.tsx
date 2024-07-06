import React from "react";
import CoursePage from "../CoursePage";

const pageInfo = {
  courseCode: "DA1008",
  courseTitle: "Artificial Intelligence & Machine Learning",
  teacher: "Sum Ting Wong",
  image: "/bg.gif",
  link: "/courses/ai&ml",
  description:
    "While artificial intelligence encompasses the idea of a machine that can mimic human intelligence, machine learning does not. Machine learning aims to teach a machine how to perform a specific task and provide accurate results by identifying patterns.",
};

export default function Page({ searchParams }: any) {
  const preferrence = decodeURIComponent(searchParams.pref) || "English";
  return <CoursePage pageInfo={pageInfo} preferrence={preferrence} />;
}
