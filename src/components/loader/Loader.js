import React from "react";
import Typewriter from "typewriter-effect";

// new Typewriter('#typewriter', {
//   strings: ['Hello', 'World'],
//   autoStart: true,
// });

export default function Loader() {
  return (
    <div className=" ">
      <div
        id="loader"
        className="font-zidan text-7xl md:text-8xl w-full text-center pt-[calc(100vh/3.5)] fixed tracking-[.05em] p-8"
      >
        <Typewriter
          options={{
            strings: ["Breana  Johnson"],
            autoStart: true,
            loop: true,
            delay: 100,
          }}
        />
      </div>

      <div className="font-raleway text-center w-full sm:text-green-500 md:text-pink-500">
        Software Engineer & Designer
      </div>
    </div>
  );
}
