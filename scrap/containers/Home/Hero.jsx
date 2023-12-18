import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home/Hero.module.css";
import HeroImg from "../../public/hero_img.png";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero_text_container}>
        <div className={styles.hero_text}>
          <p>Scrap wola</p>
          <h1>
            Your Scrap <br /> Our Treasure
          </h1>
          <p>Sell to free some space </p>
          <Link href="/products">
            <button className={styles.shop_button}>Sell Now</button>
          </Link>
        </div>
      </div>
      <div className={styles.hero_img}>
        <Image src="/hero_img.png" layout="fill" objectFit="cover" priority />
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
