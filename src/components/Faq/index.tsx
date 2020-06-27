import React, { useState, useEffect } from 'react';
import faq from '../../../public/photo/faq.jpg';
import useWindowSize from '../../hooks/useWindowSize';
import { INote } from './types';
import Note from './chunks/Note';

type FaqType = {
  title: string,
  list: Array<INote>
}

const Faq = (props: FaqType): JSX.Element => {
  const {
    list, title,
  } = props;

  const [isMobile, setisMobile] = useState<boolean>(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width < 768) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  }, [windowSize]);

  return (
    <div className="faq" id="faq">
      <h1>{title}</h1>
      <div className="faq__group">
        <div className="faq__list">
          {
            list.map((note: INote, index: number) => <Note key={index} isMobile={isMobile} {...note} />)
          }
        </div>
        {/* { !isMobile && <img src={faq} />} */}
      </div>

    </div>
  );
};

export default Faq;
