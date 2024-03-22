"use client";

import { useWindowResize } from "@/hooks/useWindowResize";
import React, { useState } from "react";
import BurgerBtn from "../Buttons/BurgerBtn/BurgerBtn";

// import { GiHamburgerMenu } from "react-icons/gi";
import ButtonLink from "../Buttons/ButtonLink/ButtonLink";
import ContactLinks from "../ContactLinks/ContactLinks";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./Header.module.scss";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { isMobile, isTablet, isLaptop, isDesktop } = useWindowResize();

  return (
    <header className={styles.header}>
      <div
        className={
          isClicked
            ? `container ${styles.container} ${styles.mobileMebuContainer}`
            : `container ${styles.container}`
        }
      >
        <BurgerBtn
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          onClick={() => {
            setIsClicked(!isClicked);
          }}
          className={styles.burgerBtn}
        />

        <NavLinks
          className={
            isClicked
              ? `${styles.navLinks} ${styles.navLinksMobilevisible}`
              : `${styles.navLinks}`
          }
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
