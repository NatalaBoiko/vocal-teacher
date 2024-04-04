import ContactLinksContacts from "@/components/ContactLinksContacts/ContactLinksContacts";
import Form from "@/components/Form/Form";

import React from "react";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <section id="contacts">
      <div className={`container ${styles.container}`}>
        <div className={styles.contactsWrapper}>
          <h2>Контакти</h2>
          <address className={styles.locationWrapper}>
            <svg>
              <use href="./sprite.svg#icon-location"></use>
            </svg>
            <p>Івано-Франківськ вул. Броварська буд.5 офіс 3 </p>
          </address>
          <ContactLinksContacts />
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contacts;
