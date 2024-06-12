import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"


export default function Hero() {
    return (
        <section className={styles.container}>
            <div className = {styles.content}>
                <h1 className={styles.title}>Hi, I'm Spencer</h1>
                <p className={styles.description}>I'm a full-stack developer with 2 years of experience with emphasis on frontend languages, libraries, and frameworks. Experienced in developing applications with a day to day focus on React, testing, and state management.</p>
                <a className={styles.contactBtn} href="#contact">Contact Me</a>
                </div>
                <img className={styles.heroImg} src={getImageUrl("hero/spencerHeroImage.png")} alt="hero image of me" />
                <div className = {styles.topBlur}>
                </div>
                <div className = {styles.bottomBlur}></div>
        </section>
    )
}