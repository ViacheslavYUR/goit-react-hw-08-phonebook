import RegisterForm from 'modules/RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/auth/auth-operation';
import { isUserLogin } from 'redux/auth/auth-selector';
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();
  const handlesignup = data => {
    dispatch(signup(data));
  };
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <RegisterForm onSubmit={handlesignup} />
    </div>
  );
};

export default RegisterPage;
