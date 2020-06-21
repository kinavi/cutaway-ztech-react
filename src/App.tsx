import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  useLocation,
  useParams,
  useHistory,
  Route,
  Router,
  Switch,
  Link,
  BrowserRouter,
} from 'react-router-dom';

import './SuperFormReset.css';
import 'normalize.css';
import './style/index.sass';

import { IoIosArrowDropup } from 'react-icons/io';
import data from './data/index.json';

import { Header } from './components/header.jsx';
import { About } from './components/about.jsx';
import { Advantage } from './components/advantage.jsx';
import { Table } from './components/table.jsx';
// import {Warranty} from './components/warranty.jsx';
import { ShowCaseContainer } from './components/showcase.jsx';
import { Contacts } from './components/contacts.jsx';
import { NavLink } from './components/Links.jsx';
import Faq from './components/Faq';
import { store } from './redux/store';

const LangPanel = ({ lang, links }) => (
  <div className="nav-container">
    <span>
      {lang}
      :
      {' '}
    </span>
    {
        links.map((link, index) => (
          <div key={index}>
            <Link to={link.url}>{link.text}</Link>
            {index < links.length - 1 ? '/' : null}
          </div>
        ))
      }

  </div>
);

const Page = (props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isHidde, setIsHidde] = useState(false);
  const {
    data, index,
  } = props;

  // const history = useHistory();

  const onCloesMenu = () => {
    setIsOpenMenu(false);
  };

  // useEffect(() => {
  //   // const lang = navigator.language;
  //   // history.push(`/${lang}`);
  // }, []);

  const renderModalPanel = () => <div className="app__modal" onClick={onCloesMenu} />;
  const renderMenuPanel = (links) => (
    <div className="app__menu-panel">
      <NavLink links={links} onClick={onCloesMenu} />
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
      {isHidde || renderBtnUp()}
      {!isOpenMenu || renderMenuPanel(data[index].header.links)}
      {!isOpenMenu || renderModalPanel()}
      <LangPanel {...data[index].nav} />
      <Header {...data[index].header} setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
      {/* <div> */}
      <About {...data[index].about} />
      <Advantage {...data[index].advantages} />
      <Table {...data[index].table} />
      <ShowCaseContainer {...data[index].ShowCases} />
      {/* <Warranty data={data.WarrantyIcont}/> */}
      <Faq {...data[index].faq} />
      <Contacts {...data[index].contacts} />

      {/* </div> */}
    </div>
  );
};

const App = () => (
  // <Provider store={store}>

  <Switch>
    {/* <Route path='/sr'>
          <Page data={data} index={'sr'}/>
        </Route> */}
    <Route path="/ru">
      {/* <div>ru</div> */}
      <Page data={data} index="ru" />
    </Route>
    <Route>
      {/* <div>sr</div> */}
      <Page data={data} index="sr" />
    </Route>
  </Switch>
  // </Provider>

);

export default App;
