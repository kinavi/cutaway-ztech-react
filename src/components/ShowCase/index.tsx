import React from 'react';
import { ShowCasesType, ICase } from '../../constants/types';
import ShowCase from './chunks/ShowCase';

const ShowCaseContainer = (props: ShowCasesType): JSX.Element => {
  const { title, cases } = props;
  return (
    <div className="show-case" id="showcase">
      <h1>{title}</h1>
      {cases.map((item: ICase, index: number): JSX.Element => (
        <div key={index} className="show-case__item">
          <ShowCase {...item} index={index} />
        </div>
      ))}
    </div>
  );
};

export default ShowCaseContainer;
