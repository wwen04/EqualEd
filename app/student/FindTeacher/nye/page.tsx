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
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7FoIKVqNe9vJKxQX-ObLzcUV-rUPtPUboA_QYtQli3KWr-yd-"
        />
        <div className="p-8">
          <h1 className="font-mono font-bold text-3xl mt-3">
            Bill Nye
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
            Bill Nye, known affectionately as "The Science Guy," is a
            charismatic and influential figure in popular science education.
            With his trademark bow tie and infectious enthusiasm, Bill Nye has
            captivated audiences of all ages with his ability to make complex
            scientific concepts accessible and engaging. Born William Sanford
            Nye on November 27, 1955, in Washington, D.C., Nye's journey into
            the world of science communication began with his mechanical
            engineering degree from Cornell University. His career took a
            pivotal turn when he became a writer and performer on the popular
            children's show "Bill Nye the Science Guy," which aired from 1993 to
            1998. Through this show, Nye reached millions of households
            worldwide, blending humor, experiments, and clear explanations to
            demystify scientific principles. Beyond television, Bill Nye has
            continued to advocate for science literacy and education, becoming a
            prominent voice in discussions about climate change, space
            exploration, and the importance of critical thinking in the modern
            world. His passionate advocacy for evidence-based reasoning and
            environmental stewardship has earned him a reputation as a science
            communicator who not only informs but inspires action. In addition
            to his media presence, Bill Nye is also a prolific author, speaker,
            and advocate for scientific research and innovation. His ability to
            connect with audiences across generations has made him a beloved
            figure in both the scientific community and popular culture, leaving
            a lasting impact on how we view and understand the world around us.
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
