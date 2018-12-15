import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from './Header.css';
import logo from '../../components/helpers/hand_logo.png';

export default function Header({ session, signOut }) {
  return (
    <header>
      <img src={logo} />
      <div>
        <label id={styles.hamburgerLabel}>This is the hamburger input.</label>
        <input type='checkbox' id={styles.hamburgerInput} />
        <span id={styles.hamburgerSpan} />

        <nav id={styles.nav}>
          <Link
            className={styles.link}
            to={ROUTES.ABOUT.linkTo()}
          >
            About Us
          </Link>
          <Link
            className={styles.link}
            to={ROUTES.DASHBOARD.linkTo(session._id)}
          >
            Dashboard
          </Link>
          <Link className={styles.link} to={ROUTES.PROFILE.linkTo(session._id)}>
            Edit Profile
          </Link>
          <Link
            className={styles.link}
            to={ROUTES.SIGNUP.linkTo()}
            onClick={signOut}
          >
            Log Out
          </Link>
        </nav>
      </div>
    </header>
  );
}
