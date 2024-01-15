import React, { FC, useState } from 'react';
import R34 from './assets/img/R34.jpeg'
import './App.css'

interface ControlProps {
  
}

const Control: FC<ControlProps> = ({  }) => {
  const [tiles, setTiles] = useState<number[][]>([[]]);
  const [originalImage, setOriginalImage] = useState<string | null>(null)
  
  const imageScramble = () => {
    R34
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