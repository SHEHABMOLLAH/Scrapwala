import React from "react";
import ContactInfo from "../containers/Contact/ContactInfo";
import styles from "../styles/Contact/index.module.css";

const contact = () => {
  return (
    <div className={styles.container}>
      <ContactInfo />
    </div>
  );
};

export default contact;
