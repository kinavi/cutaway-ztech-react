import React from 'react';

export const NavLink = ({ links, onClick }) => (
  <div className="header__group-links">
    {links.map((link, i) => (
      <div key={i} onClick={onClick}>
        <a className="header__link" href={link.url}>{link.text}</a>
      </div>
    ))}
  </div>
);
