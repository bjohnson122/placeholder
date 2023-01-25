import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Link from "next/link";
import styles from './Layout.module.css'

function Navbar() {
  return (
    <div className={styles.layout}     
    //  style={{
    //     margin: "0",
    //     padding: " 0",
    //     display: "flex",
    //     height: "100px",
    //     width: "100%",
    //     fontSize: " calc(1rem + 1vw)",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //   }}>
    >
        <span className={` ${styles.navIcons} navIcons`}>
      <a
      className="test"
        href="https://github.com/bjohnson122"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
      <a
        href="https://linkedin.com/in/breanaj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </a>
      <a
        href="mailto:brecjohnson@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MailOutlineIcon />
      </a>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </span>
      <span className={`${styles.scrollToTopIcon} scrollToTopIcon`}>Breana Johnson</span>
     <span className={`${styles.pageLinks} pageLinks`}>
      <Link href="#about">About</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#contact">Contact</Link>
   </span> </div>
  );
}

export default Navbar;
