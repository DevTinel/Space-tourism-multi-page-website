import React from "react";
import Logo from "../../assets/shared/logo.svg";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import "../../App.css";

export const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <img src={Logo} alt="Logo" />
        <div className={styles.navLinks}>
          <Link to="/" className={`${styles.navLinksItem}`}>
            <span>00</span>
            <p>HOME</p>
          </Link>
          <Link to="/destination" className={styles.navLinksItem}>
            <span>01</span>
            <p>DESTINATION</p>
          </Link>
          <Link to="/crew" className={styles.navLinksItem}>
            <span>02</span>
            <p>CREW</p>
          </Link>
          <Link to="/technology" className={styles.navLinksItem}>
            <span>03</span>
            <p>TECHNOLOGY</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};
