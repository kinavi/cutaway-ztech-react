import React, { useEffect, useState } from 'react';
import { IoIosArrowDropup } from 'react-icons/io'; // Убрать к иконкам
import Header from '../components/Header';
import About from '../components/About';
import Advantage from '../components/Advantage';
import Table from '../components/Table';
// import {Warranty} from './components/warranty.jsx';
import ShowCaseContainer from '../components/ShowCase';
import Contacts from '../components/Contacts';
import Links from '../components/Links';
import Faq from '../components/Faq';
// import { store } from '../redux/store';
import LanguagePanel from '../components/LanguagePanel';
import {
  NAVIGATION_BAR, HEADER, ABOUT, ADVANTAGES, TABLE, SHOWCASES, CONTACTS,
} from '../constants';

type PagePropsType = {
    language: string
}

const Page = (props: PagePropsType): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isHidde, setIsHidde] = useState(false);
  const {
    language,
  } = props;

  const onCloesMenu = () => {
    setIsOpenMenu(false);
  };

  const renderModalPanel = () => <div className="app__modal" onClick={onCloesMenu} />;
  const renderMenuPanel = (links) => (
    <div className="app__menu-panel">
      <Links links={links} onCloseMenu={onCloesMenu} />
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
    // {...data[index].nav}
  return (
    <div className="app__page">
      { isHidde || renderBtnUp() }
      { !isOpenMenu || renderMenuPanel(HEADER[language].Navigationlinks) }
      { !isOpenMenu || renderModalPanel() }
      <LanguagePanel {...NAVIGATION_BAR[language]} />
      <Header {...HEADER[language]} onOpenMenu={() => setIsOpenMenu(!isOpenMenu)} />
      <About {...ABOUT[language]} />
      <Advantage {...ADVANTAGES[language]} />
      <Table {...TABLE[language]} />
      <ShowCaseContainer {...SHOWCASES[language]} />
      {/* <Warranty data={data.WarrantyIcont}/> */}
      {/* <Faq {...data[index].faq} /> */}
      <Contacts {...CONTACTS[language]} />
      {/* <iframe src="https://player.vimeo.com/video/347705505" loop="" autoPlay="" className="normal-image" width="100%" height="500px" /> */}
    </div>
  );
};

export default Page;
