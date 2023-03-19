import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { current } from 'redux/auth/auth-operation';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return <>{children}</>;
};
export default AuthProvider;
