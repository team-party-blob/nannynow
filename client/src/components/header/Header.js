import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routes';
import styles from './Header.css';

export default function Header() {
  return (
    <header>
      <img src='https://www.graphicsprings.com/filestorage/stencils/8ca848b9be9e7d7fc9ddb96c6efb6c41.png?width=500&height=500'/>


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
