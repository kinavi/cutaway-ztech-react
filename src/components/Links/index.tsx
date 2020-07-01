import React from 'react';
import { ILanguageLink } from '../../constants/types';

type LinksType = {
  links: Array<ILanguageLink>,
  mix: string,
  onCloseMenu: () => void
}

// TODO рефактор классов
const Links = (props: LinksType): JSX.Element => {
  const {
    links, mix, onCloseMenu,
  } = props;
  return (
    <div className="header__group-links">
      {
        links.map((link: ILanguageLink, index: number) => (
          <React.Fragment key={index}>
            <a className={`header__link ${mix}`} href={link.url} onClick={onCloseMenu}>{link.label}</a>
          </React.Fragment>
        ))
      }
    </div>
  );
};

export default Links;
