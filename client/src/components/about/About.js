import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import mikeImage from '../../assets/mike.png';
import mackImage from '../../assets/mack.jpg';


const About = () => {
  return (
    <Fragment>
      <h2>About The Team</h2>
      <h4>Mack Berliner</h4>
      <img src={mackImage}/>
      <p>
        Software developer and University of Oregon alumni with a exemplary background in public policy.
        Mack find great satisfaction collaborating with creative individuals, and bringing ideas to life through code.
        Outside of work you can find him hiking in the forest or chasing the perfect powder day on the mountain.
      </p>
      <h4>Mike Lambert</h4>
      <img src={mikeImage}/>
      <p>
      Mike Lambert is full-stack developer with a particular affinity for the front-end.
      He holds a degree in philosophy from the University of Washington, as well as an MBA from IE Business School in Madrid, Spain.
      He has lived in five countries on three different continents and is fluent in four (human) languages.
      When he’s not rockin’ out in the code mines, you can find Mike hanging with his wife Luces and two lovebirds, Raymi and Condor.
      </p>
      <h4>Sarah Flynn</h4>
      <img/>
      <p>Something</p>
    </Fragment>
  );
};

export default About;
