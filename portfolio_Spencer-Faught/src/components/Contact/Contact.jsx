import React from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

export default function Contact(){
  return (
    <footer id = 'contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:sgfaught1@gmail.com">sgfaught1@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/spencer-faught-4b1960152/?trk=opento_sprofile_details">linkedin.com/spencer-faught</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                <a href="https://github.com/sgfaught1">github.com/sgfaught1</a>
            </li>
        </ul>
    </footer>
  )
}
