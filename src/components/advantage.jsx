import React, {useState, useEffect} from 'react';

import useWindowSize from '../hooks/useWindowSize';
import adv from '../../public/decrip.jpg';//'../public/decrip.jpg';

import newD from '../../public/333.png';

import icon1 from '../../public/photo/icon/1.png';
import icon2 from '../../public/photo/icon/2.png';
import icon3 from '../../public/photo/icon/3.png';
import icon4 from '../../public/photo/icon/4.png';
import icon5 from '../../public/photo/icon/5.png';
import icon6 from '../../public/photo/icon/6.png';

const icons = [
  icon1, icon2, icon3, icon4, icon5, icon6,
];

const OptionOutside = ({index, value, explanation}) =>
  <div className='outside__option'>
    <div className='outside__advantage'>
      {index+1}. {value}
    </div>
    {!explanation||<div className='outside__explanation' >{explanation}</div>}
  </div>;

const OptionInterior = ({value}) =>
  <div className='interior__explanation'>
    <span className='point'>&#9679;</span>
    {value}
  </div>;


export const Advantage = ({title, Interior, Outside, IcontTexts}) =>{
  const windowSize = useWindowSize();
  // const [it, seIt] = useState(false)
  const [isMobile, setIsMobile]= useState(false);
  const [isIconBlockInside, setIsIconBlockInside]=useState(false);

  useEffect(()=>{
    if (windowSize.width<424) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    };

    if (windowSize.width<1024) {
      setIsIconBlockInside(true);
    } else {
      setIsIconBlockInside(false);
    };
  }, [windowSize]);

  const IconBlock = () => {
    return (
      <div className='icon-block'>
        {IcontTexts.map((icon, i)=>
          <div key={i} className='icon-block__icon'>
            <div className='icon-block__img'>
              <img src={icons[i]}></img>
            </div>

            <span>{icon.text}</span>
          </div>,
        )}
      </div>
    );
  };

  const AdvantageInterior = () =>
    <div className='advantage__interior interior'>
      <span className='interior__title'>Унутра</span>
      {Interior.map((item, i)=>
        <OptionInterior key={i} value={item}/>,
      )}
    </div>;

  return (
    <>
      <div className='advantage' id='advantage'>
        {isIconBlockInside||<IconBlock />}
        <div className='advantage__img'>
          <img src={newD}></img>
        </div>
        <div className='advantage__group'>
          <div className='advantage__title'>
            {title}
          </div>
          <div className='advantage__outside outside'>
            <span className='outside__title'>Споља</span>
            {Outside.map((item, i)=>
              <OptionOutside
                key={i}
                index={i}
                value={item.advantage}
                explanation={item.explanation}/>,
            )}
          </div>
          {isMobile||<AdvantageInterior/>}
        </div>
        {isMobile&&<AdvantageInterior/>}
      </div>
      {isIconBlockInside&&<IconBlock />}
    </>
  );
};
