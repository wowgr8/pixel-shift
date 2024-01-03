import React, { FC, useState } from 'react';
import R34 from './assets/img/R34.jpeg'

interface ControlProps {
  
}

const Control: FC<ControlProps> = ({  }) => {
  const [tiles, setTiles] = useState<number[][]>([[]]);

  const imageScramble = () => {
    R34
  }

  return (
    <div>
      {/* original image */}
      <img src={R34} />
      {/* scrambled image */}
      
    </div>
  )
}

export default Control;