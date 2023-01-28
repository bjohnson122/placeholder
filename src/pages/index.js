import Hero from "./hero/Hero";
import Layout from "@/components/layout/Layout";
import Projects from "./projects/Projects";
import About from "./about/AboutSkills";
import Contact from "./contact/Contact";
import Image from "next/image";
import Loader from "./load";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Loader />
    </>
  );
}
