import React from "react";
import styles from "./NavigationBar.module.css";

import Image from "next/image";
const NavigationBar = () => {
  return (
    <nav className={styles.container_nav}>
      <p>Chromeland</p>
      <Image className={styles.logo} src="/logo-final.png" alt="chromeland logo" height={40} width={40}/>
    </nav>
  );
};

export default NavigationBar;
