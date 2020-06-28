import React, { useState, useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import ImgLogo from '../../../image/logo.png';
import Links from '../Links';

// Пока не используем
import CallBackButton from './chunks/CallBackButton';
import Menu from './chunks/Menu';
import { IHeaderLinks } from '../../constants/types';

type HeaderPropsType = {
  Navigationlinks: Array<IHeaderLinks>
  phone: string
  urlLogo: string,
  nameCompany: string,
  onOpenMenu: () => void
}

const Header = (props: HeaderPropsType): JSX.Element => {
  const {
    Navigationlinks, nameCompany, phone, urlLogo, onOpenMenu,
  } = props;

  const windowSize = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (windowSize.width < 1024) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [windowSize]);

  return (
    <header className="header">
      {
        isMobile && <Links links={Navigationlinks} />
      }
      <div className="header__logo logo">
        <a href={urlLogo}>
          <img className="logo__img" src={ImgLogo} alt="" />
        </a>
        {/* <h2 className='about__name'>{name}</h2> */}
      </div>
      <div className="header__phone">
        <a href={`tel:${phone}`}>{phone}</a>
      </div>
      {
        isMobile || <Menu onClick={onOpenMenu} />
      }
    </header>
  );
};

export default Header;
