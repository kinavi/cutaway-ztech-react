import React, { useState, useEffect } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import Gallery from '../../Gallery';
import { ICase, ICharacteristic } from '../../../constants/types';

const nameProduct = {
  suntech5: 'suntech5',
  Suntech7: 'Suntech7',
  Suntech9pro: 'Suntech9pro',
};

const ShowCase = (props: ICase & {index: number}): JSX.Element => {
  const {
    name, price, characteristics, index, nameModel,
  } = props;

  const [isMobile, setIsMobile] = useState(true);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize]);

  const getNameProduct = (): string | null => {
    switch (index) {
      case 0:
        return nameProduct.suntech5;
      case 1:
        return nameProduct.Suntech7;
      case 2:
        return nameProduct.Suntech9pro;
      default:
        return null;
    }
  };

  const renderTitleBlock = () => (
    <>
      <div className="show-case__name-model">
        {nameModel}
      </div>
      <div className="show-case__name">
        {name}
      </div>
      {/* <div className="show-case__price">
        {price}
      </div> */}
    </>
  );

  return (
    <>
      { isMobile
            && (
            <>
              {renderTitleBlock()}
              <Gallery nameProduct={getNameProduct()} />
            </>
            )}
      <div className="show-case__group">
        {
            isMobile || renderTitleBlock()

          }
        <div className="show-case__characteristic characteristic">
          {characteristics.map((item: ICharacteristic, index: number) => (
            <div key={index} className="characteristic__group">
              <span className="characteristic__option">
                {item.label}
              </span>
              <br />
              <span className="characteristic__text">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
      {
          !isMobile
          && (
          <div className="show-case__photo">
            <Gallery nameProduct={getNameProduct()} />
          </div>
          )
        }
    </>
  );
};

export default ShowCase;
