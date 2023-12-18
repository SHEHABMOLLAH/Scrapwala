import React from "react";
import styles from "../../styles/Contact/ContactInfo.module.css";
const ContactInfo = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Contact Us</h1>
        <p className={styles.subtitle}>
          Feel free to contact or visit my gallery
        </p>
      </div>
      <div className={styles.info}>
        <div className={styles.entry}>
          <span className={styles.title}>Address&nbsp;&nbsp;&nbsp;&nbsp;:</span>
          <p className={styles.address}>
            79-80 77th Rd Flushing, <br /> NY 11385
          </p>
        </div>
        <div className={styles.entry}>
          <span className={styles.title}>Contacts&nbsp;&nbsp;:</span>
          <p className={styles.address}>
            +088 193545454 <br />
            shihab@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
