import Link from "next/link";
import React from "react";
import styles from "./ButtonLink.module.scss";

const ButtonLink = ({ href, title, className }) => {
  return (
    <>
      <Link href={href} className={`${styles.btn} ${className}`}>
        {title}
      </Link>
    </>
  );
};

export default ButtonLink;
