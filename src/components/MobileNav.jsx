import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../style/smallnav.less';

const MobileNav = () => (
  <div>
    <ul className={style.smallnav}>
      <li>
        <NavLink
          exact={true}
          to="/"
          className={style.link}
          activeClassName={style.selected}
        >
          HOME
        </NavLink>
      </li>
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
      <li>
        <NavLink
          exact={true}
          to="/painting"
          className={style.link}
          activeClassName={style.selected}
        >
          ART
        </NavLink>
      </li>
    </ul>
  </div>
);

export default MobileNav;