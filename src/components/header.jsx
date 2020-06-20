import React, {useState, useEffect} from 'react';
import useWindowSize from '../hooks/useWindowSize';

import {Transition} from 'react-transition-group';

import {IconContext} from 'react-icons';
import {IoIosMenu} from 'react-icons/io';

import headerLogo from '../../public/logo.png';

import newLogo from '../../public/newLog.png';

import {NavLink} from './Links.jsx';

const CallBackButton = ({text}) =>
  <div className='header__callback'>
    <button>{text}</button>
  </div>;

const Menu = ({handleClick}) => {
  return (
    <div className='header__menu' onClick={handleClick}>
      {/* <IconContext value={{style: {verticalAlign: 'middle'}}}> */}
      <IoIosMenu/>
      {/* </IconContext> */}
    </div>
  );
};


export const Header = ({
  links, buttonCalback, phone, 
  logoUrl, name, isOpenMenu, setIsOpenMenu
}) => {
  const windowSize = useWindowSize();

  const [isSimpleEdit, setIsSimpleEdit] = useState(false);

  useEffect(()=>{
    if (windowSize.width<1024) {
      setIsSimpleEdit(false);
    } else {
      setIsSimpleEdit(true);
    }
  }, [windowSize]);



  return (
    <header className='header'>
      {
        isSimpleEdit&&<NavLink links={links}/>
      }
      <div className='header__logo logo'>
        <a href='/'>
          <img className='logo__img' src={newLogo}></img>
        </a>
        {/* <h2 className='about__name'>{name}</h2> */}
      </div>
      <div className='header__phone' >
        <a href={`tel:${phone}`}>{phone}</a>
      </div>
      {/* {
        isSimpleEdit&&<CallBackButton {...buttonCalback}/>
      } */}

      {
        isSimpleEdit || <Menu handleClick={()=>setIsOpenMenu(!isOpenMenu)}/>
      }
      {/* <Transition in={isOpenMenu} timeout={400}>
        {renderMenuPanel()}
      </Transition> */}
      {/* {
        !isOpenMenu || renderMenuPanel()
      } */}
    </header>
  );
};
