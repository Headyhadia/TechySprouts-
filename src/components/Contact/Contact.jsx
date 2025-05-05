import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container} id='contact'>
        <div className={styles.contact}>
            <h3 className={styles.heading}>Contact Us</h3>
            <ul className={styles.contactlist}>
                <li className={styles.mail}>
                    <a href="mailto:someone@example.com">info@techySprouts.pk</a>
                </li>
                <li className={styles.cell}>
                    <a href="tel:+1234567890">+92 300 1234567</a>
                </li>
            </ul>
        </div>
        <div className={styles.follow}>
           <h3 className={styles.heading}>Follow Us</h3>
           <ul className={styles.followlist}>
            <li >
                <a href='https://facebook.com'>
                <img src="/assets/contact/fb.png" alt="Facebook logo" />
                </a>
            </li>
            <li>
               <a href="https://intagram.com">
               <img src="/assets/contact/insta.png" alt="Instagram logo" />
               </a>
            </li>
            <li>
               <a href="https://youtube.com">
               <img src="/assets/contact/youtube.png" alt="Youtube logo" />
               </a>
            </li>
           </ul>
        </div>
    </div>
  )
}

export default Contact