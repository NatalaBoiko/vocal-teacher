import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import React from "react";
import styles from "./NavLinks.module.scss";

const NavLinks = ({ className }) => {
  return (
    <nav className={`${styles.navLinks} ${className}`}>
      {navLinks.map((item) => {
        return (
          <Link key={item.title} href={item.href}>
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
