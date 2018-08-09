import React from 'react';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';
import style from '../style/nav.less';

const Nav = () => (
  <div className={style.nav}>
    <div>
      <h1 className={style.header}>
        <span className={style.first}>mealear </span>
        <span className={style.last}>khiev</span>
      </h1>
      <h4 className={style.subheader}>software engineer</h4>
    </div>
    <div>
      <ul className={style.list}>
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
      </ul>
    </div>
    <hr className={style.bar} />
    <div>
      <Contact />
    </div>
  </div>
);

export default Nav;