import About from "@/sections/About/About";
import Contacts from "@/sections/Contacts/Contacts";
import Hero from "@/sections/Hero/Hero";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Contacts />
    </>
  );
}
