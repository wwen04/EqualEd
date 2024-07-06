import React from "react";
import CoursePage from "../CoursePage";

const pageInfo = {
  courseCode: "DA1005",
  courseTitle: "Data Structures and Algorithms",
  teacher: "Elon Musk",
  image: "/bg.gif",
  link: "/courses/dsa",
  description:
    "Data Structures is about how data can be stored in different structures. Algorithms is about how to solve different problems, often by searching through and manipulating data structures. Theory about Data Structures and Algorithms (DSA) helps us to use large amounts of data to solve problems efficiently.",
};

export default function Page() {
  return <CoursePage pageInfo={pageInfo} />;
}
