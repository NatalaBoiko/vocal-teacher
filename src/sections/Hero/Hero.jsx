import Image from "next/image";
import React from "react";
import styles from "./Hero.module.scss";
import microphone from "../../../public/images/microphone.png";

const Hero = () => {
  return (
    <section id={styles["hero"]}>
      <div className={`container ${styles.container}`}>
        <div className={styles.nameWrapper}>
          <h1>
            Яна <br />
            Полонська
          </h1>
          <p>Викладач вокалу</p>
        </div>
        <div className={styles.imgWrapper}>
          <Image src={microphone} alt="Picture of the author" fill />
        </div>
      </div>
    </section>
  );
};

export default Hero;
