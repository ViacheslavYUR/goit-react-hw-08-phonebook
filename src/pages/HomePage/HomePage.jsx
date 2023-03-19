import { isUserLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';

import css from './homePage.module.css';

const HomePage = () => {
  const isLogin = useSelector(isUserLogin);
  const { email } = useSelector(getUser);
  return (
    <>
      {!isLogin ? (
        <h1 className={css.title}>
          Welcome! Please login to your account or register to be able to use
          the contact book
        </h1>
      ) : (
        <h1 className={css.title}>
          Congratulations! You are logged in as{' '}
          <span className={css.span}>{email}</span>.
        </h1>
      )}
    </>
  );
};

export default HomePage;
