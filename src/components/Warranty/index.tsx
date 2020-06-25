import React from 'react';

const WarrantyIconBlock = ({data}) => {
  return (
    <div className='warranty-icon-block'>
      {data.map((icon, i)=>
        <div key={i} className='warranty-icon-block__icon'>
          <div className='warranty-icon-block__img'>
            <img src={icon.url}></img>
          </div>
          <span>{icon.text}</span>
        </div>,
      )}
    </div>
  );
};

export const Warranty = ({data}) =>
  <div className='warranty'>
    <WarrantyIconBlock data={data}/>
  </div>;
