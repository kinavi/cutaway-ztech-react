import React from 'react';

type OptionInteriorPropsType = {
    value: string
}

const OptionInterior = (props: OptionInteriorPropsType): JSX.Element => {
  const {
    value,
  } = props;
  return (
    <div className="interior__explanation">
      <span className="point">&#9679;</span>
      {value}
    </div>
  );
};

export default OptionInterior;
