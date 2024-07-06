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

export default function Page() {
  return <CoursePage pageInfo={pageInfo} />;
}
