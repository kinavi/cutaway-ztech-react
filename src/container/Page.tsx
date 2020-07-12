import React, { useState } from 'react';
/** TODO Убрать к иконкам */
import { IoIosArrowDropup } from 'react-icons/io';
import Header from '../components/Header';
import About from '../components/About';
import Advantage from '../components/Advantage';
import Table from '../components/Table';
import ShowCaseContainer from '../components/ShowCase';
import Contacts from '../components/Contacts';
import Links from '../components/Links';
import LanguagePanel from '../components/LanguagePanel';
import {
  NAVIGATION_BAR,
  HEADER,
  ABOUT,
  ADVANTAGES,
  TABLE,
  SHOWCASES,
  CONTACTS,
  FORM,
} from '../constants';
import FormContext from '../context';
import CallbackMobile from '../components/Forms/Callback';
import Overlayer from '../components/Forms/element/Overlayer';

type PagePropsType = {
    language: string
}
type FooterPropsType = {
  children: JSX.Element
}
const Footer = (props: FooterPropsType): JSX.Element => {
  const {
    children,
  } = props;
  return (
    <div className="footer">
      {children}
    </div>
  );
};

const Page = (props: PagePropsType): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isHidde, setIsHidde] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

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
    <FormContext.Provider value={{ isOpen: isOpenForm, updateState: () => setIsOpenForm(!isOpenForm) }}>
      <div className="app__page">
        { !isHidde && renderBtnUp() }
        { isOpenMenu
          && (
          <>
            {renderMenuPanel(HEADER[language].Navigationlinks)}
            {renderOverlayer()}
          </>
          )}
        <LanguagePanel {...NAVIGATION_BAR[language]} />
        <Header {...HEADER[language]} onOpenMenu={() => setIsOpenMenu(!isOpenMenu)} />
        <About {...ABOUT[language]} />
        <Advantage {...ADVANTAGES[language]} />
        <Table {...TABLE[language]} />
        <ShowCaseContainer {...SHOWCASES[language]} />
        <Footer>
          <>
            <CallbackMobile {...FORM[language]} mix="form__footer" />
            <Contacts {...CONTACTS[language]} />
          </>
        </Footer>
        { isOpenForm
          && (
          <Overlayer
            onClose={() => setIsOpenForm(false)}
          >
            <CallbackMobile {...FORM[language]} mix="form__modal" />
          </Overlayer>
          )}
      </div>
    </FormContext.Provider>
  );
};

export default Page;
