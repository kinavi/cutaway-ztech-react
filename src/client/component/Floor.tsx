import React, { useState } from 'react';
import { FloorType } from './types';

const Floor = (props: FloorType): JSX.Element => {
  const { children } = props;
  const [isRotated, setIsRotated] = useState(false);
  return (
    <div className="floor" onClick={() => setIsRotated(!isRotated)}>
      {
          isRotated
            ? <>{ children }</>
            : (
              <div className="floor__mock" />
            )
        }
    </div>
  );
};

export default Floor;
