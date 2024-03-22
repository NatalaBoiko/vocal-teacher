"use client";

// import { useWindowResize } from "@/hooks/useWindowResize";
import React, { useCallback, useEffect, useRef, useState } from "react";
import BurgerBtn from "../Buttons/BurgerBtn/BurgerBtn";
import ButtonLink from "../Buttons/ButtonLink/ButtonLink";
import ContactLinks from "../ContactLinks/ContactLinks";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./Header.module.scss";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  console.log("isClicked", isClicked);
  // const { isMobile, isTablet, isLaptop, isDesktop } = useWindowResize();
  const burgerBtn = useRef(null);
  const closeBtn = useRef(null);
  const mobileMebuContainer = useRef(null);

  const isBrowser = typeof window !== "undefined";

  const closeBurgerOnLinkClick = (e) => {
    console.log(e.target);
    if (
      e.target === burgerBtn.current ||
      e.target === closeBtn.current ||
      e.target === mobileMebuContainer.current
    ) {
      return;
    } else {
      setIsClicked(false);
    }
  };

  // const setLaptopHeader = () => {
  //   if (isBrowser && window.innerWidth >= 1024) {
  //     setIsClicked(false);
  //   } else {
  //     return;
  //   }
  // }

  const setLaptopHeader = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setIsClicked(false);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("click", closeBurgerOnLinkClick);
    window.addEventListener("resize", setLaptopHeader);
    // setLaptopHeader();
  }, [setLaptopHeader]);

  return (
    <header className={styles.header}>
      <div
        className={
          isClicked
            ? `container ${styles.container} ${styles.mobileMebuContainer}`
            : `container ${styles.container}`
        }
        ref={mobileMebuContainer}
      >
        <BurgerBtn
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          onClick={(e) => {
            e.stopPropagation();
            setIsClicked(!isClicked);
          }}
          className={styles.burgerBtn}
          burgerBtn={burgerBtn}
          closeBtn={closeBtn}
        />

        <NavLinks
          className={
            isClicked
              ? `${styles.navLinks} ${styles.navLinksMobilevisible}`
              : `${styles.navLinks}`
          }
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
        <ContactLinks className={styles.contactLinks} />

        <ButtonLink
          href="tel:+380505361693"
          title="Безкоштовний урок"
          className={styles.btn}
        />
      </div>
    </header>
  );
};

export default Header;
