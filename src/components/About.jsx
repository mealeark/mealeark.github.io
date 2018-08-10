import React from 'react';
import Contact from './Contact';
import style from '../style/about.less';

const About = () => (
  <div>
    <div className={style.about}>
      <h3>Hey, I'm Mealear (Meel-lee-uh) with a silent 'r' and a loud laugh!</h3>
      <p>
        I am a full-stack software engineer with a love for architecting applications that can make an impact in millions of individuals' everyday lives, especially in the area of personal finance.
      </p>
      <p>
        Currently I'm working at a startup, guiding students to learn how to be autonomous in building full-stack applications in an agile development environment. 
        I love spending my free time traveling, especially if it is for a good cause. I regularly teach CPR/First Aid in Cambodia to empower rural villagers who otherwise have limited access to medical care.
        I love to build applications that can make an impact on lives. My current tools of choice are React, Node.js, Express, and MySQL. 
        I've been told that one of my core strengths is that I can adapt to new situations and skills as technology changes, so please reach out to me for some product ideas!
      </p>
      <div className={style.smallContact}>
        <Contact/>
      </div>
    </div>
  </div>
);

export default About;