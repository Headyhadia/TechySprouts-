import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({openModal}) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
      <img src="/assets/ms-icon-310x310.png" alt="Logo" />
       <a href='/' className={styles.title}>
        TechySprouts Pakistan
       </a>
       </div>
       <ul className={styles.menuItems}> 
        <li className={styles.menuItem}>
            <a href='#home'>Home</a>
        </li>
        <li className={styles.menuItem}>
            <a href='#courses'>Courses</a>
        </li>
        <li className={styles.menuItem}>
            <a href='#about'>About Us</a>
        </li>
        <li className={styles.menuItem}>
            <a href='#contact'>Contact</a>
        </li>
       </ul>
       <button onClick={openModal} className= {styles.button}>Get Started</button>
    </nav>
  )
}

export default Navbar