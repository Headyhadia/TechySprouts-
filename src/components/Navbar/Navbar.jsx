import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <img src="/assets/favicon.ico" alt="Logo" />
        <a href="/" className={styles.title}>
          <a className={styles.techy}>Techy</a>
          <a className={styles.sprouts}>Sprouts</a>
        </a>
      </div>
      <ul className={styles.menuItems}>
        <li className={styles.menuItem}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/courses" className={styles.link}>
            Courses
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/about" className={styles.link}>
            About Us
          </Link>
        </li>
        <li className={styles.menuItem}>
          <HashLink
            smooth
            to="#contact"
            className={styles.link}
            scroll={(el) => {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Contact
          </HashLink>
        </li>
      </ul>
      <button className={styles.button}>
        <Link to="https://forms.gle/Lrnm9NJDtru1nZwA7">Enroll Now</Link>
      </button>
    </nav>
  );
};

export default Navbar;
