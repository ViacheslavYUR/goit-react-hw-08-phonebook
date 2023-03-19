import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/auth-operations';

import LoginForm from 'modules/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <h2>Sign in using your profile</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};
export default LoginPage;
