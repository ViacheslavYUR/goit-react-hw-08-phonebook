import { NavLink } from 'react-router-dom';

import css from './navbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <div>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
      <span className={css.span}>|</span>
      <NavLink to="/login" className={css.link}>
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
