import React from "react";
import styles from "./Courses.module.css";

const Courses = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>Our Courses</h1>
      <div className={styles.ourCourses}>
        <p>
          At <a className={styles.boldblack}>TechySprouts</a>, we introduce kids
          to the world of coding in the most fun and engaging way possible. Our
          programs are designed for Grades 1–7 and focus on building creativity,
          confidence, and problem-solving skills.
        </p>
      </div>
      <div className={styles.what}>
        <h2 className={styles.secondaryHeading}>What kids will do:</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Build their
            <a className={styles.bold}> own games, animations, and stories</a>
          </li>
          <li className={styles.listItem}>
            Learn the foundations of{" "}
            <a className={styles.bold}>programming through play</a>
          </li>
          <li className={styles.listItem}>
            Develop skills like{" "}
            <a className={styles.bold}>
              logical thinking, problem solving, persistence, and creativity
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.how}>
        <h2 className={styles.secondaryHeading}>How our courses work:</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a className={styles.boldblack}>Beginner and Intermediate levels</a>{" "}
            available (so every child learns at the right pace)
          </li>
          <li className={styles.listItem}>
            <a className={styles.boldblack}> Hands-on, interactive sessions</a>{" "}
            filled with fun characters and challenges
          </li>
          <li className={styles.listItem}>
            <a className={styles.boldblack}>Online classes</a>, making it easy
            for kids to join from home
          </li>
          <li className={styles.listItem}>
            <a className={styles.boldblack}>End-of-course projects kids</a> can
            proudly show to their parents
          </li>
        </ul>
      </div>
      <div className={styles.upcomingBatches}>
        <h2 className={styles.secondaryHeading}>Upcoming batches</h2>
        <p className={styles.endline}>
          Your child’s journey starts with creating their very first game — and
          continues as they unlock higher levels of coding superpowers with each
          batch.
        </p>
      </div>
      <a href="https://forms.gle/aqqeTogGGnEsZBhz8" className={styles.enroll}>
        Enroll Now
      </a>
    </div>
  );
};

export default Courses;
