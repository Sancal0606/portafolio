import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id = "about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt='me programming' className={styles.aboutImage}></img>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt = "cursor"></img>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                        I'm a front end developer with experience in building responisive sites
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt = "cursor"></img>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>
                        I'm a front end developer with experience in building responisive sites
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt = "cursor"></img>
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>
                        I'm a front end developer with experience in building responisive sites
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default About
