import ContactLinks from "@/components/ContactLinks/ContactLinks";
import Form from "@/components/Form/Form";

import React from "react";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  <h2>Контакти</h2>;
  return (
    <section id="contacts">
      <div className={`container ${styles.container}`}>
        <address className={styles.locationWrapper}>
          <svg className={styles.locationIcon}>
            <use href="./sprite.svg#icon-location"></use>
          </svg>
          <p className={styles.locationWrapper}>
            Івано-Франківськ вул. Броварська буд.5 офіс 3{" "}
          </p>
        </address>
        <ContactLinks
          id={styles.contactLinks}
          className={styles.contactLinks}
        />
        <Form />
      </div>
    </section>
  );
};

export default Contacts;
