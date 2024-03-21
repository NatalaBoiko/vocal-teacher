import Link from "next/link";
import React from "react";
import { contactLinks } from "../../data/contactLinks";
import styles from "./ContactLinks.module.scss";

const ContactLinks = ({ className }) => {
  return (
    <ul className={`${styles.contactLinks} ${className}`}>
      {contactLinks.map((item) => {
        return (
          <li key={item.name}>
            <Link href={item.href}>
              <svg className={styles[item.name]}>
                <use href={item.img}></use>
              </svg>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactLinks;
