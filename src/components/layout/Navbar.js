import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Link from "next/link";
// import { useScrollDirection } from 'hooks';

function Navbar() {
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection);
      return () => {
        window.removeEventListener("scroll", updateScrollDirection);
      };
    }, [scrollDirection]);

    console.log(scrollDirection);
    return scrollDirection;
  }

  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } flex items-start w-screen list-none p-3  bg-cyan-200 drop-shadow-lg  transition-all duration-500` }
    >
      <span className="w-1/4 flex justify-around ">
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
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </span>
      <span className="text-2xl cursor-pointer font-zidan font-light text-rose-500 w-1/2 text-center" onClick={() => {window.scrollTo(0, 0)}}>
        Breana Johnson
      </span>
      <span className="w-1/4 flex justify-around">
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
