import styles from "@/styles/Home.module.css";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Footer from "@/components/Footer/Footer";
import validator from "validator";
import { useEffect, useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const email_handler = (e) => {
    setEmail(e.target.value);
  };
  const username_handler = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {}, []);

  function send_to_firebase(data) {
    try {
      const db = getFirestore();
      const docRef = addDoc(collection(db, "users"), {
        name: username,
        email: email,
      });

      setUsername("");
      setEmail("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  const send_credentials = () => {
    if (validator.isEmail(email)) {
      send_to_firebase({ name: username, email: email });
    } else {
      console.log("enter valid credentials!");
    }
  };

  return (
    <main className={styles.main}>
      <NavigationBar />
      <div className={styles.bg_img}></div>
      <section className={styles.waitlist_form}>
        <p>Join Waitlist 🚀</p>

        <span>
          <label>Name</label>
          <input
            type="text"
            placeholder="johnny sins"
            name="name-input"
            className={styles.name_input}
            onChange={username_handler}
            value={username}
          />
        </span>

        <span>
          <label>Email</label>
          <input
            className={styles.email_input}
            placeholder="johnny.yespapa@gmail.com"
            type="email"
            name="email-input"
            spellCheck="false"
            value={email}
            onChange={email_handler}
          />
        </span>

        <div onClick={send_credentials} className={`${styles.sign_up_btn}`}>
          Sign up
        </div>
      </section>
      <Footer />
    </main>
  );
}
