import AboutSlider from "@/components/AboutSlider/AboutSlider";
import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section id="about">
      <div className={`container ${styles.container}`}>
        <p>
          Спів - це мистецтво, яке народжується в серці і звучить красою в
          кожній ноті.
        </p>
        <AboutSlider />
      </div>
    </section>
  );
};

export default About;
