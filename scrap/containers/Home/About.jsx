import Image from "next/image";
import React from "react";
import styles from "../../styles/Home/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutImg_container}>
        {/* <img src="/about.png" alt="art-piece"  /> */}
        <div className={styles.aboutImg}>
          <Image
            src="/about.png"
            alt="art-piece"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.about_text}>
        <h6>About</h6>
        <h1>Scrap Wola</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque
          ultrices faucibus volutpat, nunc. Adipiscing sed cursus tellus sed ut
          sapien mi sapien. Suspendisse lectus neque commodo, volutpat ornare.
          Facilisi et turpis enim sed vitae rhoncus. Rhoncus pharetra sit nunc
          non. Amet est
        </p>
      </div>
    </div>
  );
};

export default About;
