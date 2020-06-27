import React from 'react';
import { Link } from 'react-router-dom';
import { ILanguageLink } from '../../constants/types';

type LanguagePanelType = {
    label: string,
    links: Array<ILanguageLink>
}

const LanguagePanel = (props: LanguagePanelType): JSX.Element => {
  const {
    label, links,
  } = props;
  return (
    <div className="nav-container">
      <span>
        {label}
        :
        {' '}
      </span>
      {
            links.map((link: ILanguageLink, index: number) => (
              <div key={index}>
                <Link to={link.url}>{link.label}</Link>
                {index < links.length - 1 ? '/' : null}
              </div>
            ))
        }
    </div>
  );
};

export default LanguagePanel;
