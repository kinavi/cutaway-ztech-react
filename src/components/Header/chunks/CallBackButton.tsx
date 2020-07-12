import React, { useContext } from 'react';
import FormContext from '../../../context';

type CallBackButtonType = {
    label: string,
    mix: string
}

const CallBackButton = (props: CallBackButtonType): JSX.Element => {
  const {
    label, mix,
  } = props;
  const { isOpen, updateState } = useContext(FormContext);

  return (
    <div className={`callback-button ${mix}`}>
      <button className="btn btn-outline-primary" type="button" onClick={updateState}>{label}</button>
    </div>
  );
};

export default CallBackButton;
