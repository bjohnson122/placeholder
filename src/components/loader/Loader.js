import React from "react";
import Typewriter from "typewriter-effect";
import Meta from "@/components/layout/Meta";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { ArticleIcon, GitHub } from "@mui/icons-material";

import { motion, AnimatePresence } from "framer-motion";

const socials = [
  {
    title: "GitHub",
    webLink: "https://github.com/bjohnson122",
    component: <GitHubIcon className="scale-110 mb-1" />,
  },
  {
    title: "LinkedIn",
    webLink: "https://linkedin.com/in/breanaj",
    component: <LinkedInIcon className="scale-110 mb-1" />,
  },
  {
    title: "Email",
    webLink: "mailto:brecjohnson@gmail.com",
    component: <MailOutlineIcon className="scale-110 mb-1" />,
  },
  {
    title: "Resume",
    webLink: "/resume.pdf",
    component: <ArticleIcon className="scale-110 mb-1" />,
  },
];
const loaderSmallTextAnimation = {
  key: "loader text",
  initial: { opacity: 0 },
  animate: { opacity: [0, 0.9, 0.9, 1] },
  transition: { delay: 1.5, duration: 2.7 },
  exit: { opacity: 1 },
};

export default function Loader() {
  return (
    <div className="h-full">
      <Meta />
      {/* containter */}
      <div className="text-center w-full p-5 pt-[calc(100vh/4.6)]">
        {/* typing text */}
        <div
          className="font-zidan tracking-[.05em] text-[2.3rem]
          2xl:text-8xl
         sm:text-6xl
          md:text-7xl flex-nowrap block"
        >
          <Typewriter
            className="w-full"
            options={{
              strings: ["Breana  Johnson"],
              autoStart: true,
              loop: true,
              delay: 100,
              changeDeleteSpeed: 12,
              pauseFor: 900000,
              delay: 75,
            }}
          />
        </div>

        {/* fade in sub-text */}

        <motion.div
          {...loaderSmallTextAnimation}
          className="font-raleway font-semibold pt-3 sm:pt-7 md:pt-6 relative text-[14px] sm:text-[1.35rem]"
        >
          Software Engineer & Designer
        </motion.div>
      </div>
      <div>
        <ul className="flex justify-center space-x-7 m-1 p-2">
          <li>
            <a
              className="text-[0.6rem]  block"
              href="https://github.com/bjohnson122"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
              <br /> GitHub
            </a>
          </li>
          <li>
            <a
              className="text-[0.6rem]  block"
              href="mailto:brecjohnson@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailOutlineIcon />
              <br /> Email
            </a>
          </li>
          <li>
            <a
              className="text-[0.6rem]  block"
              href="https://linkedin.com/in/breanaj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              <br /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <motion.div
        {...loaderSmallTextAnimation}
        className="text-center justify-center text-[.8rem] sm:w-1/2 items-center p-9 sm:mr-[25vw] sm:ml-[25vw] pt-[2vh] "
      >
        A really cool portfolio site is in the works! Please check back
        momentarily. For now, checkout my projects on GitHub and connect with me
        via LinkedIn or email.
      </motion.div>
    </div>
  );
}
