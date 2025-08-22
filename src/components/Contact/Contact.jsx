import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.contact}>
        <h3 className={styles.heading}>Contact Us</h3>
        <ul className={styles.contactlist}>
          <li className={styles.mail}>
            <a href="mailto:techysprouts@gmail.com">techysprouts@gmail.com</a>
          </li>
          <li className={styles.cell}>
            <a href="tel:+1234567890">+92 346 3341448</a>
          </li>
        </ul>
      </div>
      <div className={styles.follow}>
        <h3 className={styles.heading}>Follow Us</h3>
        <ul className={styles.followlist}>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61579657832839">
              <img src="/assets/contact/fb.png" alt="Facebook logo" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/techysprouts/">
              <img src="/assets/contact/insta.png" alt="Instagram logo" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/techysprouts/">
              <img src="/assets/contact/linkedin.png" alt="LinkedIn logo" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
