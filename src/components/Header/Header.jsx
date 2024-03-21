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
      <div className={`container ${styles.container}`}>
        <BurgerBtn
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          onClick={() => {
            setIsClicked(!isClicked);
          }}
          className={styles.burgerBtn}
        />
        <NavLinks className={styles.navLinks} />
        <ContactLinks className={styles.contactLinks} />

        <ButtonLink href="/" title="Безкоштовний урок" className={styles.btn} />
      </div>
    </header>
  );
};

export default Header;
