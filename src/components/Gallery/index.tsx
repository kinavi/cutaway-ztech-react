import React, { useState } from 'react';

import { IconContext } from 'react-icons';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import suntech5l from '../../../image/photo/products/suntech5/1.png';
import suntech52 from '../../../image/photo/products/suntech5/2.png';
import suntech53 from '../../../image/photo/products/suntech5/3.png';
import suntech54 from '../../../image/photo/products/suntech5/4.png';
import suntech55 from '../../../image/photo/products/suntech5/5.png';
import suntech56 from '../../../image/photo/products/suntech5/6.png';

import Suntech9pro1 from '../../../image/photo/products/Suntech9Pro/1.png';
import Suntech9pro2 from '../../../image/photo/products/Suntech9Pro/2.png';
import Suntech9pro3 from '../../../image/photo/products/Suntech9Pro/3.png';
import Suntech9pro4 from '../../../image/photo/products/Suntech9Pro/4.png';
import Suntech9pro5 from '../../../image/photo/products/Suntech9Pro/5.png';

import Suntech71 from '../../../image/photo/products/Suntech7/1.png';
import Suntech72 from '../../../image/photo/products/Suntech7/2.png';
import Suntech73 from '../../../image/photo/products/Suntech7/3.png';
import Suntech74 from '../../../image/photo/products/Suntech7/4.png';
import Suntech75 from '../../../image/photo/products/Suntech7/5.png';

const imgs = {
  suntech5: [
    suntech5l,
    suntech52,
    suntech53,
    suntech54,
    suntech55,
    suntech56,
  ],
  Suntech7: [
    Suntech71,
    Suntech72,
    Suntech73,
    Suntech74,
    Suntech75,
  ],
  Suntech9pro: [
    Suntech9pro1,
    Suntech9pro2,
    Suntech9pro3,
    Suntech9pro4,
    Suntech9pro5,
  ],
};

const Gallery = ({ nameProduct }) => {
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

export default Gallery;
