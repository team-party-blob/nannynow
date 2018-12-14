import React, { Fragment } from 'react';
import mikeImage from '../../assets/mike.png';
import mackImage from '../../assets/mack.jpg';
import sarahImage from '../../assets/sarah.jpg';


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
      <img src={sarahImage}/>
      <p>SSarah Flynn is a full stack software developer using the MERN stack, Vue (a favorite), and Plain JS. She is curious, hard-working, and deeply committed to the missions of organizations she works for. She started out as an astrophysics major in college, where she did research assistantships at Brookhaven National Laboratory and the National Radio Astronomy Observatory. She graduated summa cum laude with a BA in creative writing and also excelled in an MFA creative writing program. She has 10 years of experience working in Portland in advocate/manager/director roles for campaigns and nonprofits. When she isn't coding, she is probably sleeping or running errands, but she might also be rock climbing, hiking, playing the ukulele, or traveling.</p>
    </Fragment>
  );
};

export default About;
