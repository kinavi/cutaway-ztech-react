import React from 'react';

import dislike from '../../public/photo/dislike.png';
import like from '../../public/photo/like.png';

export const Table = ({title, markRed, mark, head, body}) => {
  return (
    <div className='table'>
      <div className='table__title'>
        <span>{title}</span>
      </div>
      <table className='table__container'>
        <tr>
          {
            head.map((head, i)=>
              <th className='table__header tb-header' key={i}>
                {/* {!!head.url&&<div className='tb-header__group'>
                  <img className='tb-header__img' src={head.url}/>
                </div>} */}
                <div className='tb-header__text'>{head.text}</div>
              </th>,
            )}
        </tr>
        {
          body.map((body, i)=>
            <tr key={i} className='tb-header__body'>
              <td className='tb-header__question'>
                {body.question}
              </td>
              {
                  body.isString?
                    body.response.map((item, i)=>
                      <td key={i} className='tb-header__response'>
                        <span key={i} >{item}</span></td>,
                    ):
                    <>
                      <td className='tb-header__response'>
                        <img src={like}/>
                      </td>
                      <td className='tb-header__response'>
                        <img src={dislike}/>
                      </td>
                    </>
                    // body.response.map((item, i)=>
                    //   <td key={i}className='tb-header__response'>
                    //     <img src={item}/>
                    //   </td>,
                    // )
              }
            </tr>,
          )
        }
      </table>
      {/* <div className='table__mark-group'>
        <div className='table__mark_red'>{markRed}</div>
        <div className='table__mark_green'>{mark}</div>
      </div> */}
    </div>
  );
};
