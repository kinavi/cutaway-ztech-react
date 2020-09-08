import React from 'react';

type ButtonPropsType = {
    label: string;
    onClick?: () => void;
    mix?: string;
}

const Button = (props: ButtonPropsType): JSX.Element => {
  const {
    mix, onClick, label,
  } = props;
  return (
    <div className={`button ${mix}`}>
      <button type="submit" onClick={onClick} className="btn btn-success">{label}</button>
    </div>
  );
};
export default Button;
