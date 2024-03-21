"use client";

import { useWindowResize } from "@/hooks/useWindowResize";
import React, { useState } from "react";
import BurgerBtn from "../Buttons/BurgerBtn/BurgerBtn";

// import { GiHamburgerMenu } from "react-icons/gi";
import ButtonLink from "../Buttons/ButtonLink/ButtonLink";
import ContactLinks from "../ContactLinks/ContactLinks";
import styles from "./Header.module.scss";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { isMobile, isTablet, isLaptop, isDesktop } = useWindowResize();
  // console.log("isClicked", isClicked);
  // console.log("isMobile", isMobile);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        {(isMobile || isTablet) && (
          <BurgerBtn
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          />
        )}

        <ContactLinks />

        <ButtonLink href="/" title="Безкоштовний урок" />
      </div>
    </header>
  );
};

export default Header;
