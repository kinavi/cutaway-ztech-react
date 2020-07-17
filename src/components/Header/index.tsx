import React, { useState, useEffect, useContext } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import ImgLogo from '../../../image/logo.png';
import Links from '../Links';

// Пока не используем
import CallBackButton from './chunks/CallBackButton';
import Menu from './chunks/Menu';
import { IHeaderLinks } from '../../constants/types';
import { MAIL } from '../../constants';

type HeaderPropsType = {
  Navigationlinks: Array<IHeaderLinks>
  phone: string
  urlLogo: string,
  nameCompany: string,
  textButton: string,
  onOpenMenu: () => void
}

const Header = (props: HeaderPropsType): JSX.Element => {
  const {
    Navigationlinks, nameCompany, phone, urlLogo, onOpenMenu, textButton,
  } = props;

  const windowSize = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (windowSize.width < 1150) {
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
      </div>
      <div className="header__mail">
        <span>{MAIL}</span>
      </div>
      <div className="header__phone">
        <a href={`tel:${phone}`}>(+999) 99 99 99 999</a>
      </div>
      <CallBackButton label={textButton} mix="header__callback" />
      {
        isMobile || <Menu onClick={onOpenMenu} />
      }
    </header>
  );
};

export default Header;
