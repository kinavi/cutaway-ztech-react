import React from 'react';

import { IconType } from '../../../constants/types';
import { ICONS_IMG } from '../../../constants';

type IconBlockPropsType = {
    iconContexts: Array<IconType>
}

const IconBlock = (props: IconBlockPropsType): JSX.Element => {
  const {
    iconContexts,
  } = props;
  return (
    <div className="icon-block">
      {
        iconContexts.map((icon: IconType, index: number) => (
          <div key={index} className="icon-block__icon">
            <div className="icon-block__img">
              <img src={ICONS_IMG[icon.index]} alt="" />
            </div>

            <span>{icon.label}</span>
          </div>
        ))
      }
    </div>
  );
};

export default IconBlock;
