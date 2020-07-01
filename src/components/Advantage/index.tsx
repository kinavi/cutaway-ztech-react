import React, { useState, useEffect } from 'react';

import useWindowSize from '../../hooks/useWindowSize';

import ImgAdvantage from '../../../image/advantage.png';

import { AdvantagesType, OutsideType } from '../../constants/types';

import OptionOutside from './chunks/OptionOutside';
import OptionInterior from './chunks/OptionInterior';
import IconsBlock from './chunks/IconsBlock';

const Advantage = (props: AdvantagesType): JSX.Element => {
  const {
    title, outsides, interior, icons, titleInterior, titleOutsid,
  } = props;
  const windowSize = useWindowSize();
  // const [it, seIt] = useState(false)
  const [isMobile, setIsMobile] = useState(false);
  const [isIconBlockInside, setIsIconBlockInside] = useState(false);

  useEffect(() => {
    if (windowSize.width < 424) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    if (windowSize.width < 1024) {
      setIsIconBlockInside(true);
    } else {
      setIsIconBlockInside(false);
    }
  }, [windowSize]);

  const AdvantageInterior = (): JSX.Element => (
    <div className="advantage__interior interior">
      <span className="interior__title">{titleInterior}</span>
      { interior.map((item: string, index: number): JSX.Element => <OptionInterior key={index} value={item} />)}
    </div>
  );

  return (
    <>
      <div className="advantage" id="advantage">
        { isIconBlockInside || <IconsBlock iconContexts={icons} /> }
        <div className="advantage__img">
          <img className="img" src={ImgAdvantage} alt="" />
        </div>
        <div className="advantage__group">
          <div className="advantage__title">
            {title}
          </div>
          <div className="advantage__outside outside">
            <span className="outside__title">{titleOutsid}</span>
            {outsides.map((item: OutsideType, index: number) => (
              <OptionOutside
                key={index}
                index={index}
                {...item}
              />
            ))}
          </div>
          {isMobile || <AdvantageInterior />}
        </div>
        {isMobile && <AdvantageInterior />}
      </div>
      {isIconBlockInside && <IconsBlock iconContexts={icons} />}
    </>
  );
};

export default Advantage;
