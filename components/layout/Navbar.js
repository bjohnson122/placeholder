import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Link from "next/link";

function Navbar({styles}) {
  return (
    <div className="nav">
      <a
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
      <span className={`${styles.scrollToTopIcon} scrollToTopIcon`}>BJ</span>
      <Link href="#about">About</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#contact">Contact</Link>
    </div>
  );
}

export default Navbar;
