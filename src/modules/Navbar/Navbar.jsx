import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import css from './navbar.module.css';
import items from './items';
import { isUserLogin } from 'redux/auth/auth-selector';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

const getFullName = ({ isActive }) => {
  return isActive ? `${css.link} ${css.active}` : css.link;
};

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className={css.navbar}>
      <NavLink to="/">Logo</NavLink>

      <ul className={css.menu}>{elements}</ul>

      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </div>
  );
};

export default Navbar;
