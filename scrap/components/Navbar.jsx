"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "../components/Logo";
import styles from "../styles/Home/Navbar.module.css";

import NavLink from "./NavLink.jsx";

const Navbar = () => {
  let token = null;
  if (typeof window !== "undefined") {
    token = window.localStorage.getItem("token");
  }
  const { push } = useRouter();

  const logout = () => {
    if (window !== undefined) {
      window.localStorage.clear();
      push("/");
    }
  };

  let isLoggedIn = false;
  if (token !== null) isLoggedIn = true;
  return (
    <div className={`${styles.container} ${styles.opaque}`}>
      <Link href="/">
        <a className={styles.logo}>
          <Logo />
        </a>
      </Link>

      <div className={`${styles.nav_container}`}>
        <nav className={styles.nav}>
          <NavLink
            activeClassName={styles.active}
            href="/"
            className={`${styles.link}`}
          >
            Home
          </NavLink>

          <NavLink
            activeClassName={styles.active}
            href="/contact"
            className={`${styles.link}`}
          >
            Contact us
          </NavLink>
        </nav>

        <div className={styles.nav}>
          {isLoggedIn ? (
            <a
              style={{ cursor: "pointer" }}
              onClick={logout}
              className={`${styles.link}`}
            >
              Logout
            </a>
          ) : (
            <>
              <Link href="/login" className={`${styles.link}`}>
                Sign In
              </Link>
              <Link href="/register" className={`${styles.link}`}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
