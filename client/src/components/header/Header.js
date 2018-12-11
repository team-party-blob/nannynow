import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from './Header.css';
import { logo } from '../../assets/imageUrl';

export default function Header({ session }) {
  return (
    <header>
      <img src={logo} />
      <div>
        <label id={styles.hamburgerLabel}>This is the hamburger input.</label>
        <input type='checkbox' id={styles.hamburgerInput} />
        <span id={styles.hamburgerSpan} />

        <nav id={styles.nav}>
          <Link className={styles.link} to={ROUTES.HOME.linkTo()}>
            Dashboard
          </Link>
          <Link className={styles.link} to={ROUTES.HOME.linkTo()}>
            Edit Profile
          </Link>
          {!session && (
            <Link className={styles.link} to={ROUTES.SIGNIN.linkTo()}>
              Log In
            </Link>
          )}
          {session && (
            <Link className={styles.link} to={ROUTES.SIGNUP.linkTo()}>
              Log Out
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
