import Link from "next/link";
import React from "react";
import { contactLinks } from "../../data/contactLinks";
import styles from "./ContactLinks.module.scss";

console.log("contactLinks", contactLinks);

const ContactLinks = () => {
  console.log("contactLinks", contactLinks);

  return (
    <ul className={styles.contactLinks}>
      {contactLinks.map((item) => {
        // console.log("item", item);
        return (
          <li key={item.name}>
            <Link href={item.href}>
              <svg>
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
