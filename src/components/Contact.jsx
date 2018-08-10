import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import LinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import Medium from '@fortawesome/fontawesome-free-brands/faMediumM';
import Github from '@fortawesome/fontawesome-free-brands/faGithub';
import Facebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import Envelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import style from '../style/contact.less';

const Contact = () => (
  <div>
    <a href="mailto:mealeark@yahoo.com">
      <FontAwesomeIcon icon={Envelope} size="1x" className={style.icon} />
    </a>
    <a href="https://www.linkedin.com/in/mealear-khiev/" target="_blank">
      <FontAwesomeIcon icon={LinkedIn} size="1x" className={style.icon} />
    </a>
    <a href="https://github.com/mealeark" target="_blank">
      <FontAwesomeIcon icon={Github} size="1x" className={style.icon} />
    </a>
    <a href="https://medium.com/@mealearkhiev" target="_blank">
      <FontAwesomeIcon icon={Medium} size="1x" className={style.icon} />
    </a>
    <a href="https://www.facebook.com/mealear.khiev" target="_blank">
      <FontAwesomeIcon icon={Facebook} size="1x" className={style.icon} />
    </a>
  </div>
);

export default Contact;