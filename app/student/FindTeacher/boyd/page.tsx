import React from "react";
import { Button, IconButton } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const page = () => {
  return (
    <>
      <div className="p-7 flex">
        <img
          className="w-[30vw] h-[70vh]"
          src="https://www.comp.nus.edu.sg/~sochr/www/stfphotos/boyd.jpg"
        />
        <div className="p-8">
          <h1 className="font-mono font-bold text-3xl mt-3">
            Boyd Anderson
            <IconButton className="ml-5">
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <XIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </h1>
          <p>
            Boyd Anderson is a Lecturer in the Department of Computer Science at
            the School of Computing at the National University of Singapore
            (NUS). He received his PhD from the NUS Graduate School for
            Integrative Sciences and Engineering in association with School of
            Computing in 2019. He received a Masters and Postgraduate Diploma of
            Science in Statistics and Operations Research, a Graduate Diploma of
            Science in Computer Science and a Bachelors of Science in Physics
            from Victoria University of Wellington. His research interests are
            in the fields of Embedded Systems, Body Sensor Networks, and the
            Internet of Things. His doctorate research focused on human gait
            measurement and analysis using Ultra Wideband sensor systems.
          </p>
          <div className="mt-5 flex justify-end">
            <button
              type="button"
              className="py-1 px-4 w-24 bg-stone-200 rounded-full hover:bg-blue-300 text-black"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
