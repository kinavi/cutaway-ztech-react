import React from 'react';
import { FieldType } from '../types';

type FieldPropsType = {
  dataId: string;
} & FieldType

const Field = (props: FieldPropsType): JSX.Element => {
  const {
    label, placeholder, mix, isRequired, dataId,
  } = props;
  return (
    <div className={`field ${mix}`}>
      <label htmlFor={dataId}>{label}</label>
      <input required={isRequired} type="text" className="field__input" id="" name={dataId} placeholder={placeholder} />
    </div>
  );
};

export default Field;
