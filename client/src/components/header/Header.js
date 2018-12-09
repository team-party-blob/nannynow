import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routes';
import styles from './Header.css';
import logo from '../../assets/palm_logo.png';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="palm logo"/>

      <label id={styles.hamburgerLabel}>This is the hamburger input.</label>
      <input type="checkbox" id={styles.hamburgerInput} />
      <span id={styles.hamburgerSpan}></span>

      <nav id={styles.nav}>
        <Link className={styles.link} to={ROUTES.HOME.linkTo()}>Dashboard</Link>
        <Link className={styles.link} to={ROUTES.HOME.linkTo()}>Edit Profile</Link>
        <Link className={styles.link} to={ROUTES.HOME.linkTo()}>Log In</Link>
        <Link className={styles.link} to={ROUTES.HOME.linkTo()}>Log Out</Link>
      </nav>
    </header>
  );
}
