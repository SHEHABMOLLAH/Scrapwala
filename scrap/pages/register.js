import Head from "next/head";
import styles from "../styles/Register/Register.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { push } = useRouter();

  function onRegister(e) {
    e.preventDefault();
    fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(function (res) {
        res
          .json()
          .then((res) => {
            window.localStorage.setItem("token", res);
            push("/");
          })
          .catch((err) => console.log(err));
      })
      .catch(function (res) {});
  }
  return (
    <div>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div>
          <h1>Register</h1>
          <form onSubmit={onRegister} action="" method="post">
            <div>
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
