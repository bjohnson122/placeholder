import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LightModeIcon from "@mui/icons-material/LightMode";
import ArticleIcon from '@mui/icons-material/Article';
// import { useScrollDirection } from 'hooks';


const scrollStyle = {
  scrollBehavior: "smooth"
}


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
      } flex items-start w-screen list-none p-3 h-12 bg-cyan-200 drop-shadow-lg  transition-all duration-500 items-center`}
    >
      <span className="w-1/4 flex justify-around items-center">
        <li>
          <a
            className="text-[0.5rem] text-center block"
            href="https://github.com/bjohnson122"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon  className="text-center"/> <br/> GitHub
          </a>
        </li>
        <li>
          <a
          className="text-[0.5rem] text-center block"
            href="https://linkedin.com/in/breanaj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon  className="text-center"/> <br/> LinkedIn
          </a>
        </li>
        <li>
          <a
          className="text-[0.5rem] text-center block"
            href="mailto:brecjohnson@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailOutlineIcon className="text-center"/> <br/> Email
          </a>
        </li>
        <li>
        <a
          className="text-[0.5rem] text-center block"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArticleIcon className="text-center"/> <br/> Resume
          </a>

          {/* <button
            className="border-red-500  border-2 rounded-md p-1">
           <a href="/resume.pdf" target="_blank"
            rel="noopener noreferrer">Resume</a> 
            
          
            
          </button> */}
        </li>
      </span>
      <span
        className="text-2xl cursor-pointer font-zidan font-light text-rose-500 w-1/2 text-center"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Breana <LightModeIcon className="text-sm" /> Johnson
      </span>
      <span className="w-1/4 flex justify-around scroll-smooth">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </span>
    </div>
  );
}

export default Navbar;
