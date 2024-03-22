import React from "react";
import styles from "./BurgerBtn.module.scss";
// import { GiHamburgerMenu } from "react-icons/gi";

const BurgerBtn = ({ isClicked, onClick, className, burgerBtn, closeBtn }) => {
  return (
    <button className={`${styles.btn} ${className}`} onClick={onClick}>
      {isClicked ? (
        <svg
          className={styles.close}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          ref={closeBtn}
        >
          <path d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path>
        </svg>
      ) : (
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.burger}
          ref={burgerBtn}
        >
          <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
        </svg>
      )}
    </button>
  );
};

export default BurgerBtn;
