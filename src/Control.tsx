import React, { FC, useState } from 'react';
import R34 from './assets/img/R34.jpeg'
import './App.css'

interface ControlProps {
  
}

const Control: FC<ControlProps> = ({  }) => {
  const [tiles, setTiles] = useState<number[][]>([[]]);
  const [originalImage, setOriginalImage] = useState<string | null>(null)
  
  const imageScramble = () => {
    //Divides image into 3x3 grid
    const rows = 3;
    const cols = 3;
    const tileWidth = 300;
    const tileHeight = 300;
  }

  return (
    <div>
      <div className="square-image">
        {/* original image */}
        <img src={R34} />
        {/* scrambled image */}
      </div> 
    </div>
  )
}

export default Control;