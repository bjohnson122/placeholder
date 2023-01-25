import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Link from "next/link";
// import styles from "./Layout.module.css";

function Navbar() {
  return (
    <div className="sticky top-0 flex items-start w-screen list-none p-3 bg-cyan-200 drop-shadow-lg">
      <span className='w-1/4 flex justify-around'>
        <li>
          <a
            className="test"
            href="https://github.com/bjohnson122"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/breanaj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            href="mailto:brecjohnson@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailOutlineIcon />
          </a>
        </li>
        <li>
          {" "}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </span>
      <span className="text-2xl font-zidan text-rose-500 w-1/2 text-center">Breana Johnson</span>
      <span className='w-1/4 flex justify-around'>
        <li>
          {" "}
          <Link href="#about">About</Link>
        </li>
        <li>
          {" "}
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          {" "}
          <Link href="#contact">Contact</Link>
        </li>
      </span>{" "}
    </div>
  );
}

export default Navbar;
