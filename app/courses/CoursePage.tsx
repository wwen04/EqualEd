import Link from "next/link";

export default async function CoursePage({
  pageInfo,
  language,
  level,
}: {
  pageInfo: {
    courseCode: string;
    courseTitle: string;
    teacher: string;
    image: string;
    link: string;
    description: string;
  };
  language: string;
  level: string;
}) {
  language ??= "English";
  level ??= "3";
  const { G4F } = require("g4f");
  const g4f = new G4F();

  const levelMapping: any = {
    "1": "Primary School Student",
    "2": "Secondary School Student",
    "3": "Adult",
  };

  // Description Prompt
  const description = [
    {
      role: "system",
      content:
        "You're an expert in translation and rewording. When asked anything, you should only translate the text directly and not ask questions or anything. This text will be the course description of a course. You should not reply or ask anything else.",
    },
    {
      role: "user",
      content: `Translate the following in ${language} like I am a ${levelMapping[level]}, answer only: ${pageInfo.description}`,
    },
  ];

  /// Course Title Prompt
  const courseTitle = [
    {
      role: "system",
      content: "You are an expert translator bot.",
    },
    {
      role: "user",
      content: `Translate the following in ${language}, answer only: ${pageInfo.courseTitle}`,
    },
  ];

  const translated_courseTitle = await g4f.chatCompletion(courseTitle);
  const translated_description = await g4f.chatCompletion(description);

  return (
    <main className="px-16">
      {/* Course Banner */}
      <div className="relative mb-8">
        <img
          src={pageInfo.image}
          className="max-h-[50vh] w-full rounded-2xl object-cover"
        />
        <div className="absolute w-full flex bottom-0 justify-between p-8">
          <h1 className="text-8xl font-bold font-mono text-white">
            {pageInfo.courseCode}
          </h1>
          <Link href="/student">
            <button
              type="button"
              className=" bg-red-600 rounded-full text-white px-8 h-fit py-4 my-auto text-2xl font-bold font-mono hover:bg-red-400"
            >
              Enroll
            </button>
          </Link>
        </div>
      </div>

      {/* Course Details */}
      <div>
        <h1 className="text-5xl font-mono font-bold border-b-4 border-gray-300 pb-4 mb-4">
          {translated_courseTitle}
        </h1>
        <p className="text-xl">Instructor: {pageInfo.teacher}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="flex flex-row my-4 items-center">
              <h1 className="font-semibold text-xl mr-4">
                Understanding level:
              </h1>
              <div className="flex flex-row">
                <Link
                  href="/courses/CS50?level=1"
                  className="p-2 px-4 rounded-l-full bg-green-500 hover:bg-green-700 hover:text-white text-black"
                >
                  Primary School
                </Link>
                <Link
                  href="/courses/CS50?level=2"
                  className="p-2 px-4 bg-green-500 hover:bg-green-700 hover:text-white text-black"
                >
                  Secondary School
                </Link>
                <Link
                  href="/courses/CS50?level=3"
                  className="p-2 px-4 rounded-r-full bg-green-500 hover:bg-green-700 hover:text-white text-black"
                >
                  Adult
                </Link>
              </div>
            </div>
            <h1 className="text-3xl my-4 font-serif">
              Course Description & Objectives
            </h1>
            <p className="text-md text-justify">{translated_description}</p>
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
}
