import React from 'react';
import Button from '../Button';

type OverlayerPropsType = {
    children: JSX.Element;
    onClose: () => void;
    mix?: string;
}

const Overlayer = (props: OverlayerPropsType): JSX.Element => {
  const {
    children, onClose, mix,
  } = props;

  return (
    <div className={`overlayer ${mix}`} onClick={onClose}>
      <div className="overlayer__controll">
        <Button
          mix="overlayer__btn-close"
          label="X"
          onClick={onClose}
        />
      </div>
      <div className="overlayer__body" onClick={(event) => event.stopPropagation()}>
        {children}
      </div>

    </div>
  );
};

export default Overlayer;
