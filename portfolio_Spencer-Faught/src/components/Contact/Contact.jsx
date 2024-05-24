import React from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

export default function Contact(){
  return (
    <>
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
    <div className={styles.mentions}><p>Photo Credit: <a href="https://www.freepik.com/free-vector/code-typing-concept-illustration_11436094.htm#fromView=search&page=3&position=42&uuid=60d9dad5-5bf6-455a-9dca-d132af1b4c06">Image by storyset on Freepik</a> and <a href="https://www.freepik.com/free-vector/blond-man-with-eyeglasses-icon-isolated_68190105.htm#fromView=search&page=1&position=0&uuid=955d2227-a741-4b8f-8bcb-3e3756f2cff6">Image by djvstock on Freepik</a></p></div>
    </>
  )
}
