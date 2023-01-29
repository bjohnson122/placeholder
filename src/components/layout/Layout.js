import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";


function Layout({ children }) {
  return (
    <div className='font-raleway font-normal'>
      <Meta title="Designer and Developer" />
      <Navbar />
      <main className="md:pt-[1rem] pt-[2rem] md:flex flex-col p-2">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
