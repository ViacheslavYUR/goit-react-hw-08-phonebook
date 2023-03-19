import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth-operation';
import { isUserLogin } from 'redux/auth/auth-selector';
import { Navigate } from 'react-router-dom';
import LoginForm from 'modules/LoginForm/LoginForm';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(login(data));
  };
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <h1>LoginPage</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
