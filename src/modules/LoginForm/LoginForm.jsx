import useForm from 'shared/hooks/useForm';

import css from './login-form.module.css';

import initialState from './instialState';
import TextField from 'shared/components/TextFild/TextField';
import Button from 'shared/components/Batton/Button';
import fields from './fields';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
