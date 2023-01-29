import React from "react";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";

//pt-[calc(100vh/3.5)]

const loaderSmallTextAnimation = {
key: 'loader text',
initial:{opacity:0},
animate: { opacity:[0, 1, 0]},
transition: { delay:2, duration: 3,},
}

export default function Loader() {
  return (
    <div>
      <div
        id="loader"
        className="font-zidan text-6xl h-1/2 md:text-8xl w-full text-center top-0 fixed pt-[calc(100vh/3.0)] tracking-[.05em] p-5"
      >
        <Typewriter
          className="w-full"
          options={{
            strings: ["Breana  Johnson"],
            autoStart: true,
            loop: false,
            delay: 100,
            changeDeleteSpeed: 60,
            pauseFor: 1300,
          }}
        />
      </div>
      <AnimatePresence>
      <motion.div {...loaderSmallTextAnimation}
        className="font-raleway text-purple-700 text-center w-full sm:text-green-500 md:text-pink-500 fixed h-1/2 bottom-0 pt-10 font-semibold"
      >
        Software Engineer & Designer
      </motion.div>
     </AnimatePresence>
    </div>
  );
}
