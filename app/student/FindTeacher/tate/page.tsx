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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmp_K4hp0XPSpmdssUIeZU8cDMLB33YQJcmg&s"
        />
        <div className="p-8">
          <h1 className="font-mono font-bold text-3xl mt-3">
            Andrew Tate
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
            Andrew Tate is a controversial figure who gained prominence through
            his ventures in professional kickboxing and subsequent forays into
            social media and business. Born on December 1, 1986, in Washington,
            D.C., Tate has built a persona around themes of wealth, masculinity,
            and self-improvement. Initially recognized for his achievements as a
            four-time kickboxing world champion, Andrew Tate transitioned into
            the digital realm, leveraging his success to promote a lifestyle
            centered on financial independence and personal empowerment. Through
            platforms like YouTube and Twitter, Tate shares provocative
            viewpoints on topics ranging from relationships to success
            strategies, often espousing a philosophy of relentless ambition and
            self-confidence. Despite garnering a significant following for his
            unapologetic and sometimes polarizing perspectives, Tate has faced
            criticism for controversial statements and behaviors, which have
            stirred debate and scrutiny within online communities. His
            self-promotion and provocative rhetoric have made him a divisive
            figure, admired by some for his outspokenness and entrepreneurial
            drive, while others criticize him for promoting materialism and
            questionable ideologies. Andrew Tate continues to maintain a
            presence in various online and business ventures, positioning
            himself as a maverick entrepreneur advocating for personal freedom
            and financial success through his unique blend of charisma,
            controversy, and self-promotion.
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
