import Button from 'shared/components/Batton/Button';
import css from './navbar-user.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/auth-selector';
import { logout } from 'redux/auth/auth-operation';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {name}, <Button onClick={onLogout}>Logout</Button>
    </div>
  );
};

export default NavbarUser;
