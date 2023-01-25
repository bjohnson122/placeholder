import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";
// import styles from "./Layout.module.css";


function Layout({ children }) {
  return (
    <div className='font-raleway font-normal'>
      <Meta title="Designer and Developer" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
