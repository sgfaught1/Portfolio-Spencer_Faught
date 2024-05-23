import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"


export default function Hero() {
    return (
        <section className={styles.container}>
            <div className = {styles.content}>
                <h1 className={styles.title}>Hi, I'm Spencer</h1>
                <p className={styles.description}>I'm a front-end developer with 2 years of experience with frontend languages, libraries, and frameworks. Reach out if you'd like to learn more!</p>
                <a className={styles.contactBtn} href="mailto:sgfaught1@gmail.com">Contact Me</a>
                </div>
                <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="hero image of me" />
                <div className = {styles.topBlur}>
                </div>
                <div className = {styles.bottomBlur}></div>
        </section>
    )
}