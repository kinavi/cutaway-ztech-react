import React from 'react';
import { ILanguageLink } from '../../constants/types';

type LinksType = {
  links: Array<ILanguageLink>,
  onCloseMenu: () => void
}

const Links = (props: LinksType): JSX.Element => {
  const {
    links, onCloseMenu,
  } = props;
  return (
    <div className="header__group-links">
      {
        links.map((link: ILanguageLink, index: number) => (
          <React.Fragment key={index}>
            <a className="header__link" href={link.url} onClick={onCloseMenu}>{link.label}</a>
          </React.Fragment>
        ))
      }
    </div>
  );
};

export default Links;
