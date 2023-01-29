import React, { useEffect, useState } from "react";
import pic from "/public/icons/gatsby.png";
import Image from "next/image";
import Loader from "../components/loader/Loader";

function Load() {
  useEffect(() => {});
  return (
    <div>
TESTTTT
      {/* <Loader /> */}
      <Image src={pic} className='justify-center items-center align-middle text-center' alt='hi' width={300}/>
    </div>
  );
}

export default Load;
