import Head from "next/head";
import Hero from "../containers/Home/Hero";
import About from "../containers/Home/About";
import styles from "../styles/Home/Index.module.css";
import Category from "../components/Categories";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ScrapWola</title>
        <meta name="description" content="Lorem Ipsum Dolor Amet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <About />
        <div className={styles.container}>
          <h1>Categories</h1>

          <div className={styles.cat_container}>
            <Category
              id={"Old Car Scrap"}
              title={"Old Car Scrap"}
              imgSrc={"/about.png"}
            />
            <Category
              id={"Industrial Scrap"}
              title={"Industrial Scrap"}
              imgSrc={"/about.png"}
            />
            <Category
              id={"Household Scrap"}
              title={"Household Scrap"}
              imgSrc={"/about.png"}
            />
            <Category
              id={"Mechanical Scrap"}
              title={"Mechanical Scrap"}
              imgSrc={"/about.png"}
            />
            <Category
              id={"Electronic Scrap"}
              title={"Electronic Scrap"}
              imgSrc={"/about.png"}
            />
            <Category
              id={"Old Metal Scrap"}
              title={"Old Metal Scrap"}
              imgSrc={"/about.png"}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
