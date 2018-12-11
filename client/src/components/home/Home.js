import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const Home = () => {
  return (
    <Fragment>
      <h2>Welcome Home</h2>
      <p>
        Lorem ipsum dolor Bob Ross... Let’s make a happy little mountain now. You have to make almighty decisions when you’re the creator. Let’s make a nice big leafy tree. Remember how free clouds are. They just lay around in the sky all day long.
      </p>
      <Link to={ROUTES.SIGNUP.linkTo()}>Sign Up Now!</Link>
    </Fragment>
  );
};

export default Home;
