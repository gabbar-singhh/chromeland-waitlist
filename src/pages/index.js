import styles from "@/styles/Home.module.css";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Footer from "@/components/Footer/Footer";
import validator from "validator";
import { useEffect, useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function Home() {
  useEffect(() => {
    window.location.replace("http://chromeland.vercel.app/signup");
  }, []);
  return (
    <main className={styles.main}>
      <NavigationBar />

      <Footer />
    </main>
  );
}
