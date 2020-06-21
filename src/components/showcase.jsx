import React, { useState, useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';

import { Gallery } from './gallery.jsx';

// import one from '../../public/444.png';
// import two from '../../public/555.png';
// import three from '../../public/666.png';

// import AliceCarousel from 'react-alice-carousel';

const nameProduct = {
  suntech5: 'suntech5',
  Suntech7: 'Suntech7',
  Suntech9pro: 'Suntech9pro',
};

// const data = [
//   'https://static.tildacdn.com/tild3264-6634-4434-b232-653361303063/3.jpg',
//   'https://static.tildacdn.com/tild3637-6266-4136-a163-343934386631/1.jpg',
//   'https://static.tildacdn.com/tild6331-3961-4463-b164-633838613437/5.jpg',
// ]; className="show-case__title"

export const ShowCaseContainer = ({ cases, title }) => (
  <div className="show-case" id="showcase">
    <h1>{title}</h1>
    {cases.map((item, index) => (
      <div key={index} className="show-case__item">
        <ShowCase {...item} index={index} />
      </div>
    ))}
  </div>
);

const ShowCase = ({
  photoUrl, name, price, links, characteristic, index,
}) => {
  const [isMobile, setIsMobile] = useState(true);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize]);

  const getNameProduct = () => {
    switch (index) {
      case 0:
        return nameProduct.suntech5;
      case 1:
        return nameProduct.Suntech7;
      case 2:
        return nameProduct.Suntech9pro;
      default:
    }
  };

  const renderTitleBlock = () => (
    <>
      <div className="show-case__name">
        {name}
      </div>
      <div className="show-case__price">
        {price}
      </div>
    </>
  );

  return (
    <>
      {
        isMobile
          && (
          <>
            {renderTitleBlock()}
            <Gallery nameProduct={getNameProduct()} />
          </>
          )
          // <div className='show-case__photo'>
          //   <img src={getImg()} alt=""/>
          // </div>
      }
      <div className="show-case__group">
        {
          isMobile || renderTitleBlock()

        }
        {/* <hr></hr> */}

        {/* {
          isMobile&&
            <button className='characteristic__btn'>Заказать</button>
        } */}
        {/* <div className='show-case__links'>
          {links.map((link, i)=>link.isLink?
            <div className='show-case__link'><a key={i} href={link.url}>{link.name}</a></div>:
            <div className='show-case__link'><button>{link.name}</button></div>,
          )}
        </div> */}
        <div className="show-case__characteristic characteristic">
          {characteristic.map((item, i) => (
            <div key={i} className="characteristic__group">
              <span className="characteristic__option">
                {item.option}
              </span>
              <span className="characteristic__text">
                {item.text}
              </span>
            </div>
          ))}
        </div>
        {/* {
          isMobile||
          <button className='characteristic__btn'>Заказать</button>
        } */}
      </div>
      {
        isMobile
        || (
        <div className="show-case__photo">
          <Gallery nameProduct={getNameProduct()} />
          {/* <img src={getImg()} alt=""/> */}
        </div>
        )
      }

    </>
  );
};
