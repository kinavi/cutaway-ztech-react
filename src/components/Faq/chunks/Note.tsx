import React, { useState } from 'react';
import { IOption } from '../types';
import Icons from '../../Icons';

export type NoteType = {
    caption: string,
    text: string,
    isMobile: boolean,
    options?: Array<IOption>
}

const Note = (props: NoteType): JSX.Element => {
  const {
    id, caption, options, text, isMobile,
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderOptions = () => options && options.map((option: IOption, index: number) => <div className="note__option">{`${index + 1}. ${option.label}`}</div>);
  const renderMobileNote = () => (
    <div onClick={handleClick} className="faq__note note">
      <div className="note__header">
        <span className="note__caption">{caption}</span>
        <div>{isOpen ? Icons.arrowDown : Icons.arrowUp}</div>
      </div>
      { isOpen && (
        <div className="note__text">
          <span>{text}</span>
          { renderOptions() }
        </div>
      )}
    </div>
  );
  const renderNote = () => (
    <div key={id} className="faq__note note">
      <h2 className="note__caption">{caption}</h2>
      <p className="note__text">{text}</p>
      { renderOptions() }
    </div>
  );

  return isMobile ? renderMobileNote() : renderNote();
};

export default Note;
