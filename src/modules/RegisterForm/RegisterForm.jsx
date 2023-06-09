import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button';

import useForm from 'shared/hooks/useForm';

import fields from './fields';
import initialState from './initialState';

import PropTypes from 'prop-types';

import css from './registerForm.module.css';

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

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
