import React from 'react';

export const Contacts = ({title, phone, address, text, email}) => {
  return (
    <div className='contacts' id='contacts'>
      <h4 className='contacts__title'>{title}</h4>
      <hr></hr>
      <h3 className='contacts__phone'>{phone}</h3>
      <h3 className='contacts__phone'>{email}</h3>
      <p className='contacts__address'>{address}</p>
      <p className='contacts__text'>{text}</p>
    </div>
  );
};
