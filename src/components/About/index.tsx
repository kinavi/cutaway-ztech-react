import React from 'react';
import about from '../../../image/about.png';

type AboutType = {
  nameCompany: string,
  caption: string,
  description: string,
  advantage: string,
}

const About = (props: AboutType): JSX.Element => {
  const {
    nameCompany,
    caption,
    description,
    advantage,
  } = props;

  const setTitle = () => {
    document.title = `${nameCompany.toUpperCase()} ${caption.toUpperCase()}`;
  };

  return (
    <div className="about">
      {setTitle()}
      <div className="about__img">
        <img className="img" src={about} alt="" />
      </div>
      <div className="about__container">
        <div className="about__group">
          <h2 className="about__name">{nameCompany}</h2>
          <h1 className="about__description">{caption}</h1>
          <h3 className="about__advantage">{description}</h3>
          <div className="about__where">{advantage}</div>
          {/* <button className='about__btn'>Заказать</button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
