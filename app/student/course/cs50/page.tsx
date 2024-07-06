import Image from "next/image";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ArticleIcon from "@mui/icons-material/Article";

const page = () => {
  return (
    <>
      <div className="p-10">
        <h1 className="text-4xl font-bold font-mono">IM1003</h1>
        <h2 className="text-5xl font-bold font-mono flex justify-between border-b-2 border-gray-200 pb-4">
          Object Oriented Programming
        </h2>
        <div className="p-6 text-3xl font-serif font-bold">Week 5</div>
        <div className="ml-10 flex">
          <Image
            src="/thumbnail.png"
            alt="thumbnail"
            height={600}
            width={900}
          />
          <div>
            <p className="ml-5 mt-20">
              Object-oriented programming (OOP) is a programming paradigm that
              organizes software design around objects rather than actions and
              data rather than logic. Objects represent real-world entities or
              concepts, encapsulating data (attributes) and behaviors (methods
              or functions) that operate on the data. This paradigm emphasizes
              reusability, modularity, and extensibility of code, making it
              easier to maintain and scale software systems. Key principles of
              OOP include encapsulation, inheritance, polymorphism, and
              abstraction, which collectively facilitate efficient and
              structured development of complex applications.
            </p>
            <button type="button" className="pl-6 pt-5 text-blue-600">
              <ArticleIcon className="mr-2" />
              objectOrientedProgramming.pdf <FileDownloadIcon />
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="hover:bg-green-700 hover:text-white bg-green-200 rounded-full px-3 py-1"
            type="button"
          >
            Next <NavigateNextIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
