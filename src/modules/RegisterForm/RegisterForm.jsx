import useForm from 'shared/hooks/useForm';

import css from './register-form.module.css';

import initialState from './instialState';
import TextField from 'shared/components/TextFild/TextField';
import Button from 'shared/components/Batton/Button';
import fields from './fields';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
