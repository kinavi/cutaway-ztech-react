import React from 'react';

import about from '../../public/about.png';

export const About = ({name, description, advantage, where}) =>
  <div className='about'>
    <div className='about__poster'>
      <img src={about}/>
    </div>
    <div className='about__container'>
      <div className='about__group'>
        <h2 className='about__name'>{name}</h2>
        <h1 className='about__description'>{description}</h1>
        <h3 className='about__advantage'>{advantage}</h3>
        <div className='about__where'>{where}</div>
        {/* <button className='about__btn'>Заказать</button> */}
      </div>
    </div>
  </div>;
