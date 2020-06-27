import React from 'react';

const WarrantyIconBlock = ({ data }) => (
  <div className="warranty-icon-block">
    {data.map((icon, i) => (
      <div key={i} className="warranty-icon-block__icon">
        <div className="warranty-icon-block__img">
          <img className="img" src={icon.url} alt="" />
        </div>
        <span>{icon.text}</span>
      </div>
    ))}
  </div>
);

const Warranty = ({ data }) => (
  <div className="warranty">
    <WarrantyIconBlock data={data} />
  </div>
);

export default Warranty;
