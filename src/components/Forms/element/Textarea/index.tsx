import React from 'react';
import { FieldType } from '../types';

type TextareaPropsType = {

} & FieldType

const Textarea = (props: TextareaPropsType): JSX.Element => {
  const {
    label, mix, placeholder,
  } = props;
  return (
    <div className={`textarea ${mix}`}>
      <label htmlFor="user_comment">{label}</label>
      <textarea name="user_comment" placeholder={placeholder} />
    </div>
  );
};

export default Textarea;
