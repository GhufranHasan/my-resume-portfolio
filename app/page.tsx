import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import { HomeHero } from "./components/homehero";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import SocialIcons from "./components/socialIcons";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <SocialIcons />
      <Header />
      <HomeHero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </>
  );
}
