import React from 'react'
import Typewriter from 'typewriter-effect';


// const defaultTheme = require('tailwindcss/defaultTheme')

export default function Hero() {
  return (
    <div>
    <div className='font-raleway text-center text-7xl mt-[2rem] md:mt-[1rem] font-bold'>
      <Typewriter
      options={{loop: true}}
      onInit={(typewriter) => {
        typewriter.typeString('Developer')
        .pauseFor(1200)
        .deleteChars(7)
        .typeString('signer')
        .pauseFor(1200)
        .deleteAll()
        .typeString('Artist')
        .pauseFor(1200)
        .deleteAll()
        .typeString('Wearer of many hats*')
        .pauseFor(1200)
        .deleteAll()
        .start()
  }}
/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
      <h3>HERO SECTION </h3> <br/>
      <h3>HERO SECTION </h3> <br/>
      <h3>HERO SECTION </h3> <br/>
      <h3>HERO SECTION </h3> <br/>
        <h1 >Breana Johnson</h1>
        <br/>
       <hr className='font-bold'/>
    </div>
    </div>
  )
}
