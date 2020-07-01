import React from 'react';
import { ContactsType } from '../../constants/types';

const Contacts = (props: ContactsType): JSX.Element => {
  const {
    title, phone, address, email,
  } = props;
  return (
    <div className="contacts" id="contacts">
      <h4 className="contacts__title">{title}</h4>
      <hr />
      <br />
      <a className="contacts__phone" href={`tel:${phone}`}>( +381) 64 88 22 353</a>
      {/* <h3 className="contacts__phone">{phone}</h3> */}
      <h3 className="contacts__email">{email}</h3>
      <p className="contacts__address">{address}</p>
      {/* <p className="contacts__text">{text}</p> */}
    </div>
  );
};
export default Contacts;
