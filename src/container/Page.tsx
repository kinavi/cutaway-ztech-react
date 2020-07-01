import React, { useState } from 'react';
import { IoIosArrowDropup } from 'react-icons/io'; // Убрать к иконкам
import Header from '../components/Header';
import About from '../components/About';
import Advantage from '../components/Advantage';
import Table from '../components/Table';
// import {Warranty} from './components/warranty.jsx';
import ShowCaseContainer from '../components/ShowCase';
import Contacts from '../components/Contacts';
import Links from '../components/Links';
import LanguagePanel from '../components/LanguagePanel';
import {
  NAVIGATION_BAR, HEADER, ABOUT, ADVANTAGES, TABLE, SHOWCASES, CONTACTS,
} from '../constants';

type PagePropsType = {
    language: string
}

const Page = (props: PagePropsType): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isHidde, setIsHidde] = useState(false); //
  const {
    language,
  } = props;

  const onCloesMenu = () => {
    setIsOpenMenu(false);
  };

  const renderOverlayer = () => <div className="app__modal" onClick={onCloesMenu} />;
  const renderMenuPanel = (links): JSX.Element => (
    <div className="app__menu-panel">
      <Links mix="app__links_modal" links={links} onCloseMenu={onCloesMenu} />
    </div>
  );

  const renderBtnUp = () => {
    const handleClick = () => {
      window.scrollTo(0, 0);
    };

    return (
      <div className="app__btn-up">
        <IoIosArrowDropup onClick={handleClick} />
      </div>

    );
  };

  return (
    <div className="app__page">
      { !isHidde && renderBtnUp() }
      {
        isOpenMenu
        && (
        <>
          {renderMenuPanel(HEADER[language].Navigationlinks)}
          {renderOverlayer()}
        </>
        )
      }
      <LanguagePanel {...NAVIGATION_BAR[language]} />
      <Header {...HEADER[language]} onOpenMenu={() => setIsOpenMenu(!isOpenMenu)} />
      <About {...ABOUT[language]} />
      <Advantage {...ADVANTAGES[language]} />
      <Table {...TABLE[language]} />
      <ShowCaseContainer {...SHOWCASES[language]} />
      <Contacts {...CONTACTS[language]} />
    </div>
  );
};

export default Page;
