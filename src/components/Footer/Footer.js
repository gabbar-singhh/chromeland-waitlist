import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {

    const URL = {
        LINKEDIN: 'https://www.linkedin.com/in/himanshufs/',
        GITHUB: 'https://github.com/gabbar-singhh/'
    }
    return (
        <>
            <footer className={styles.main_footer}>
                <div className={styles.white_line}></div>
                <div className={styles.footer_container}>
                    <p>MADE WITH ❤ BY HIMANSHU</p>

                    <div className={styles.social_profile}>
                        <ul>
                            <li>
                                <Link href={URL.LINKEDIN} target="_blank" className={styles.li_text}>
                                    LinkedIn
                                </Link>
                                <img src="/icons/arrow.svg" height={10} alt="arrow icon" />
                            </li>

                            <li>
                                <Link href={URL.GITHUB} target="_blank" className={styles.li_text}>
                                    Github
                                </Link>
                                <img src="/icons/arrow.svg" height={10} alt="arrow icon" />
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;