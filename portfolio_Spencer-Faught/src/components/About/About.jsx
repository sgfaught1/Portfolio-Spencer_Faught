import React from 'react'
import styles from "./About.module.css"
import { getImageUrl } from '../../utils'


export default function About() {
    return (
        <section className = {styles.container} id = 'about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.svg")} alt="Me with a laptop" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontdeveloper with experience in building responsive and optimized sites.</p>

                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing and maintaining databases and building fast and optimized API's.</p>

                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>I have built multiple landing pages and have experience creating design systems as well.</p>

                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
