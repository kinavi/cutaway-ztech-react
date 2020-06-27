import React from 'react';

type CallBackButtonType = {
    label: string
}

const CallBackButton = (props: CallBackButtonType): JSX.Element => {
  const {
    label,
  } = props;
  return (
    <div className="header__callback">
      <button type="button">{label}</button>
    </div>
  );
};

export default CallBackButton;
