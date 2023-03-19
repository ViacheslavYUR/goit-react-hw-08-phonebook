import css from './textField.module.css';
import { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <div className={css.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input className={css.field} id={id} onChange={handleChange} {...props} />
    </div>
  );
};

export default TextField;
