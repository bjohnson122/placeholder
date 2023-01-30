import React from "react";
import Typewriter from "typewriter-effect";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useRouter } from 'next/navigation';

export default function Hero() {
    const router = useRouter();

  return (
    <div className=" bg-red-400 relative pt-6 ">
      <div className="text-center h-[90vh] text-xl">
        <p className="mt-0">Hi, my name is Breana and I am</p>
        {/* typewriter */}
        <div className="font-raleway text-center text-lg">
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("a developer.")
                .pauseFor(1200)
                .deleteChars(8)
                .typeString("signer.")
                .pauseFor(1200)
                .deleteAll()
                .typeString("an artist.")
                .pauseFor(1200)
                .deleteAll()
                .typeString("a wearer of many hats*")
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
