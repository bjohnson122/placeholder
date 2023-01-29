import React from "react";
import Typewriter from "typewriter-effect";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useRouter } from 'next/navigation';

export default function Hero() {
    const router = useRouter();

  return (
    <div className=" bg-red-400 relative mt-6 pt-6 sm:bg-slate-700">
      <div className="text-center h-[90vh] ">
        <p className="mt-0">Hi, my name is Breana and I am a(n)</p>
        {/* typewriter */}
        <div className="font-raleway text-center text-2xl">
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Developer")
                .pauseFor(1200)
                .deleteChars(7)
                .typeString("signer")
                .pauseFor(1200)
                .deleteAll()
                .typeString("Artist")
                .pauseFor(1200)
                .deleteAll()
                .typeString("Wearer of many hats*")
                .pauseFor(1200)
                .deleteAll()
                .start();
            }}
          />
        </div>

        <div className="animate-bounce text-[0.6rem] w-full cursor-default scroll-smooth absolute bottom-10 right-0">
          Scroll Down
          <br />
          <span className="scroll-smooth"
           onClick={() => router.push('/#about')
            }
          >
            <KeyboardDoubleArrowDownIcon />
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
}
