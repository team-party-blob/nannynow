import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import About from '../about/About';

const Home = () => {
  return (
    <Fragment>
      <About/>
    </Fragment>
  );
};

export default Home;
