import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../style/mobilenav.less';

const MobileNav = () => (
  <div>
    <ul className={style.mobilenav}>
      <li>
        <NavLink
          exact={true}
          to="/about"
          className={style.link}
          activeClassName={style.selected}
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          exact={true}
          to="/portfolio"
          className={style.link}
          activeClassName={style.selected}
        >
          APPS
        </NavLink>
      </li>
    </ul>
  </div>
);

export default MobileNav;