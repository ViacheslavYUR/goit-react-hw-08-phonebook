import css from './userMenu.module.css';
import Button from 'shared/components/Button/Button';

import { useSelector, useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';

import { getUser } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <span className={css.userName}>{name}</span>
      <Button onClick={onLogout}>Logout</Button>
    </div>
  );
};

export default UserMenu;
