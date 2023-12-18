"use client";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/Register/Register.module.css";

const Form = () => {
  const router = useRouter();
  const { category } = router.query;
  console.log(category);
  return (
    <div>
      {" "}
      <Head>
        <title>Order</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div>
          <h1>Order</h1>
          <form
            action="http://localhost:5000/form/"
            method="post"
            encType="multipart/form-data"
          >
            <div>
              <input
                value={category}
                readOnly
                type="text"
                name="itemCategory"
                id="itemCategory"
              />
            </div>
            <div>
              <input
                placeholder="How old is it?*"
                type="text"
                name="itemAge"
                id="itemAge"
              />
            </div>
            <div>
              <input
                placeholder="What type of house hold item it is?*"
                type="text"
                name="itemTypeDesc"
                id="itemTypeDesc"
              />
            </div>
            <div>
              <input
                placeholder="Enter your Phone number*"
                type="text"
                name="phone"
                id="phone"
              />
            </div>
            <div>
              <input
                placeholder="Enter your e-mail*"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <input
                placeholder="Type short message*"
                type="text"
                name="shortMessage"
                id="shortMessage"
              />
            </div>
            <input type="file" name="photos" accept="image/*" />
            <input type="file" name="photos" accept="image/*" />
            <input type="file" name="photos" accept="image/*" />

            <button type="submit">Send a request</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
