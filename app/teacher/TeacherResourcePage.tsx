import React, { useState } from "react";
import CourseCard from "../(components)/CourseCard";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const TeacherResourcePage = () => {
  const courses: any = [
    {
      courseTitle: "CS50",
      teacher: "Snoop Dogg",
      thumbnail:
        "data:image/webp;base64,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",
      link: "/",
      description:
        "The most comprehensive computer science course on the Internet that anyone can access!",
    },
    {
      courseTitle: "Data Structures and Algorithm",
      image:
        "data:image/jpeg;base64,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",
      link: "/",
      teacher: "Elon Musk",
      description: "Learn algorithms",
    },
  ];

  return (
    <>
      <Grid container padding={4} spacing={6}>
        {courses.map((course: any) => {
          return (
            <>
              <Grid item xs={6} md={3}>
                <CourseCard
                  courseTitle={course.courseTitle}
                  image={course.image}
                  teacher={course.teacher}
                  link={course.link}
                  description={course.description}
                />
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default TeacherResourcePage;