import React from "react";
import TeacherCard from "@/app/(components)/TeacherCard";

const page = () => {
  const teachers = [
    {
      name: "Boyd Anderson",
      subject: "Computer Science",
      link: "FindTeacher/boyd",
      description: "Top 10 Prof",
      image: "https://www.comp.nus.edu.sg/~sochr/www/stfphotos/boyd.jpg",
    },
    {
      name: "Andrew Tate",
      subject: "Hustling",
      link: "FindTeacher/tate",
      description: "Breathe air",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmp_K4hp0XPSpmdssUIeZU8cDMLB33YQJcmg&s",
    },
    {
      name: "Bill Nye",
      subject: "Science",
      link: "FindTeacher/nye",
      description: "The science guy",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7FoIKVqNe9vJKxQX-ObLzcUV-rUPtPUboA_QYtQli3KWr-yd-",
    },
    {
      name: "Jackie Chan",
      subject: "Martial Arts",
      link: "FindTeacher/jackie",
      description: "Kung Fu Master",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcREVpw7YYHmJdRVDmhBcdPRLswuO1X-Hvbm_01jarEFgSM5defKTi1kF_cPhzhFznxMb9o0wZH7BbXxiQpwiu9DhYNx5i-Ne7SmPZnri4Q",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 mt-3 gap-8 mx-auto p-5">
        {teachers.map((teacher): any => {
          return (
            <TeacherCard
              name={teacher.name}
              subject={teacher.subject}
              link={teacher.link}
              description={teacher.description}
              image={teacher.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default page;
