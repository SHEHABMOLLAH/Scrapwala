import React from "react";
import styles from "../styles/Home/Footer.module.css";
import Logo from "./Logo";
import { FaFacebookSquare } from "react-icons/fa";
import { BsYoutube, BsPinterest } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.footer_upper_left}>
          <Link href="/">
            <a className={styles.footer_link}>Home</a>
          </Link>

          <Link href="/contact">
            <a className={styles.footer_link}>Contact us</a>
          </Link>
        </div>
        <div className={styles.social_links}>
          <a
            href={"https://www.instagram.com/"}
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramFill />
          </a>
          <a
            href={"https://www.facebook.com/"}
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a href={"https://www.youtube.com/"} target="_blank" rel="noreferrer">
            <BsYoutube />
          </a>
        </div>
      </div>
      <div className={styles.border} />
      <div className={styles.lower}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} ScrapWola. All rights reserved.
        </div>
        <div>
          <Logo />
        </div>
        <div className={`${styles.copyright} ${styles.policy_links}`}>
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
