import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";
import styles from './Layout.module.css'

function Layout({ children }) {
  return (
    <div
      className="layout"
      // style={{
      //   margin: "0",
      //   padding: " 0",
      //   display: "flex",
      //   height: "100px",
      //   width: "100%",
      //   fontSize: " calc(1rem + 1vw)",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <Meta title="Designer and Developer" />
      <Navbar styles={styles}/>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
