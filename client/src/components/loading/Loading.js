import React, { Fragment } from 'react';
import styles from './Loading.css';

export default function Loading() {
  return (
    <Fragment>
      <h1 id={styles.loadingText}>Loading</h1>
    </Fragment>
  );
}
