import React from 'react';

import dislike from '../../../public/photo/dislike.png';
import like from '../../../public/photo/like.png';

import { TableType, IBodyTable } from '../../constants/types';

const Table = (props: TableType): JSX.Element => {
  const {
    title, head, body,
  } = props;
  return (
    <div className="table">
      <div className="table__title">
        <span>{title}</span>
      </div>
      <table className="table__container">
        <tr>
          {
            head.map((text: string, index: number): JSX.Element => (
              <th className="table__header tb-header" key={index}>
                <div className="tb-header__text">{text}</div>
              </th>
            ))
          }
        </tr>
        {
          body.map((body: IBodyTable, index: number): JSX.Element => (
            <tr key={index} className="tb-header__body">
              <td className="tb-header__question">
                {body.label}
              </td>
              {
                  body.text
                    ? body.text.map((item: string, index: number): JSX.Element => (
                      <td key={index} className="tb-header__response">
                        <span>{item}</span>
                      </td>
                    ))
                    : (
                      <>
                        <td className="tb-header__response">
                          <img src={like} alt="" />
                        </td>
                        <td className="tb-header__response">
                          <img src={dislike} alt="" />
                        </td>
                      </>
                    )
              }
            </tr>
          ))
        }
      </table>
    </div>
  );
};

export default Table;
