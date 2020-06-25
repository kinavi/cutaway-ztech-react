import React from 'react';
import { OutsideType } from '../../../constants/types';

type OptionOutsidePropsType = {
    index: number,
} & OutsideType

const OptionOutside = (props: OptionOutsidePropsType): JSX.Element => {
  const {
    index, advantage, explanation,
  } = props;
  return (
    <div className="outside__option">
      <div className="outside__advantage">
        {index + 1}
        .
        {advantage}
      </div>
      { explanation && <div className="outside__explanation">{explanation}</div>}
    </div>
  );
};

export default OptionOutside;
