import React from "react";
import styles from "./Programs.module.css";
import { Link } from "react-router-dom";

const Programs = () => {
  return (
    <div className={styles.programs} id="courses">
      <h2 className={styles.title}>Our Programs</h2>
      <ul className={styles.cards}>
        <li className={styles.card}>
          <div>
            <img
              className={styles.image}
              src="/assets/programs/beginner.jpg"
              alt=""
            />
          </div>
          <h3 className={styles.cardtitle}>Beginner Course</h3>
          <p>Perfect for ages 7-10</p>
          <div className={styles.btn}>
            <Link to="/courses">Learn More</Link>
          </div>
        </li>
        <li className={styles.card}>
          <div>
            <img
              className={styles.image}
              src="/assets/programs/intermediate.jpg"
              alt=""
            />
          </div>
          <h3 className={styles.cardtitle}>Intermediate Course</h3>
          <p>Perfect for ages 11-14</p>
          <div className={styles.btn}>
            <Link to="/courses">Learn More</Link>
          </div>
        </li>
        <li className={styles.card}>
          <div>
            <img
              className={styles.image}
              src="/assets/programs/advanced.jpg"
              alt=""
            />
          </div>
          <h3 className={styles.cardtitle}>Advanced Course</h3>
          <p>Perfect for ages 13-16</p>
          <div className={styles.btn}>
            <Link to="/courses">Learn More</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Programs;
