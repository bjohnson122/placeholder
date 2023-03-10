import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";



function Layout({ children }) {
  return (
    <div className='font-raleway font-normal'>
      <Meta title="Developer and Designer" />
     
      <main className=" md:flex flex-col overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
