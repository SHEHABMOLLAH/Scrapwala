"use client";
import Link from "next/link";
import React from "react";
import styles from "../styles/Post.module.css";
import Image from "next/image";

const Category = ({ imgSrc, title, id }) => {
  let token = null;
  if (typeof window !== "undefined") {
    token = window.localStorage.getItem("token");
  }

  let isLoggedIn = false;
  if (token !== null) isLoggedIn = true;

  let link = "";
  if (isLoggedIn) {
    link = `/form?category=${id}`;
  } else {
    link = "/login";
  }
  return (
    <Link href={link}>
      <div className={styles.container}>
        <div className={styles.art_container}>
          <div className={styles.art}>
            <Image src={imgSrc} layout="fill" objectFit="cover" />
          </div>
          <p className={styles.subtitle}>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Category;
