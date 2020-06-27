import React, { useEffect, useState } from 'react';

import { IconContext } from 'react-icons';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import suntech5all from '../../../public/photo/products/suntech5/1.png';
import suntech51 from '../../../public/photo/products/suntech5/2.png';
import suntech52 from '../../../public/photo/products/suntech5/3.png';
import suntech53 from '../../../public/photo/products/suntech5/4.png';
import suntech54 from '../../../public/photo/products/suntech5/5.png';
import suntech55 from '../../../public/photo/products/suntech5/6.png';

import Suntech9pro1 from '../../../public/photo/products/Suntech9Pro/01.png';
import Suntech9pro2 from '../../../public/photo/products/Suntech9Pro/02.png';

import Suntech71 from '../../../public/photo/products/Suntech7/1.png';
import Suntech72 from '../../../public/photo/products/Suntech7/2.png';
import Suntech73 from '../../../public/photo/products/Suntech7/3.png';
import Suntech74 from '../../../public/photo/products/Suntech7/4.png';

const imgs = {
  suntech5: [
    suntech5all,
    suntech51,
    suntech52,
    suntech53,
    suntech54,
    suntech55,
  ],
  Suntech7: [
    Suntech71,
    Suntech72,
    Suntech73,
    Suntech74,
  ],
  Suntech9pro: [
    Suntech9pro1,
    Suntech9pro2,
  ],
};

export const Gallery = ({ nameProduct }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const renderImg = (url, index) => (
    <div key={index} className={`gallery__img ${currentPhoto === index ? 'gallery__img_show' : 'gallery__img_hidde'}`}>
      <img src={url} />
    </div>
  );

  const renderPreview = (url, index) => {
    const handleClick = () => {
      setCurrentPhoto(index);
    };
    return (
      <div onClick={handleClick} className={`gallery__preview ${currentPhoto === index && 'gallery__preview_active'}`}>
        <img src={url} />
      </div>
    );
  };

  const handleBackClick = () => {
    if (currentPhoto == 0) {
      setCurrentPhoto(imgs[nameProduct].length - 1);
    } else {
      setCurrentPhoto(currentPhoto - 1);
    }
  };

  const handleForwardClick = () => {
    if (currentPhoto == imgs[nameProduct].length - 1) {
      setCurrentPhoto(0);
    } else {
      setCurrentPhoto(currentPhoto + 1);
    }
  };

  return (
    <div className="show-case__gallery gallery">
      <div className="gallery__view-container">
        {imgs[nameProduct].map((url, index) => renderImg(url, index))}
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <IoIosArrowBack onClick={handleBackClick} />
        </IconContext.Provider>
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <IoIosArrowForward onClick={handleForwardClick} />
        </IconContext.Provider>
      </div>

      <div className="gallery__preview-container">
        {imgs[nameProduct].map((url, index) => renderPreview(url, index))}
      </div>
    </div>
  );
};
