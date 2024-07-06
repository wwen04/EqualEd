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
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcREVpw7YYHmJdRVDmhBcdPRLswuO1X-Hvbm_01jarEFgSM5defKTi1kF_cPhzhFznxMb9o0wZH7BbXxiQpwiu9DhYNx5i-Ne7SmPZnri4Q"
        />
        <div className="p-8">
          <h1 className="font-mono font-bold text-3xl mt-3">
            Jackie Chan
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
            Jackie Chan, born Chan Kong-sang on April 7, 1954, in Hong Kong, is
            a globally renowned actor, martial artist, stunt performer, and
            filmmaker. He is celebrated for his unique blend of martial arts
            prowess, comedic timing, and daredevil stunts, making him a beloved
            icon in action cinema. From his early days as a child actor in Hong
            Kong cinema, Jackie Chan's career trajectory was shaped by his
            dedication to martial arts training, acrobatics, and his willingness
            to perform his own stunts. Unlike many action stars, Chan's approach
            emphasized a mix of kung fu, comedy, and elaborate choreography,
            which set him apart in the film industry. Chan's breakthrough came
            with films like "Drunken Master" (1978) and "Police Story" (1985),
            where he showcased his distinctive style of martial arts combined
            with humor. His popularity soared internationally through the 1990s
            and 2000s with hits such as "Rumble in the Bronx," "Supercop," and
            the "Rush Hour" series, alongside collaborations with Hollywood
            stars like Chris Tucker. Beyond his on-screen charisma, Jackie Chan
            is admired for his work ethic, humility, and dedication to his
            craft. He has received numerous accolades throughout his career,
            including honorary Academy Awards for his lifetime achievements in
            cinema. Additionally, Chan is known for his philanthropic efforts,
            supporting various charitable causes and disaster relief efforts.
            Jackie Chan's enduring appeal lies in his ability to entertain
            audiences with thrilling action sequences while infusing his
            performances with humor and heart. As a cultural ambassador for
            martial arts and Chinese cinema, he continues to inspire generations
            of fans worldwide with his cinematic legacy and commitment to
            pushing the boundaries of action filmmaking.
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
