import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "./hero/Hero";
import Layout from "@/components/layout/Layout";
import Projects from "./projects/Projects";
import About from "./about/AboutSkills";
import Contact from "./contact/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
