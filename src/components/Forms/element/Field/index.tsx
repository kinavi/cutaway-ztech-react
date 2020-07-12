import React from 'react';
import { FieldType } from '../types';

type FieldPropsType = {

} & FieldType

const Field = (props: FieldPropsType): JSX.Element => {
  const {
    label, placeholder, mix, isRequired,
  } = props;
  return (
    <div className={`field ${mix}`}>
      <label htmlFor="user_email">{label}</label>
      <input required={isRequired} type="text" className="field__input" id="" name="user_email" placeholder={placeholder} />
    </div>
  );
};

export default Field;
