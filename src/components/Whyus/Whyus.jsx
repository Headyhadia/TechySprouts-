import React from 'react';
import styles from './Whyus.module.css';

const WhyUs = () => {
  return (
    <div className={styles.container} id='about'>
      <h2 className={styles.heading}>Why Choose TechySprouts?</h2>
      <ul className={styles.cards}>
        <li className={styles.card} >
          <div className={styles.icons}>
          <img src="./assets/whyus/console.png" alt="game console" />
          </div>
          <h3 className={styles.cardheading}>Learn Through Games</h3>
          <p>Make learning fun with interactive coding games and challenges</p>
        </li>
        <li className={styles.card}>
        <div className={styles.icons}>
          <img src="./assets/whyus/people.png" alt="instructors" />
          </div>
          <h3 className={styles.cardheading}>Expert Teachers</h3>
          <p>Learn from passionate educators who make coding fun</p>
        </li>
        <li className={styles.card}>
        <div className={styles.icons}>
          <img src="./assets/whyus/certificate.png" alt="" />
          </div>
          <h3 className={styles.cardheading}>Get Certified</h3>
          <p>Earn certificates and showcase your achievements</p>
        </li>
      </ul>
    </div>
  )
}

export default WhyUs