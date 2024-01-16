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

    const initialTiles: number[][] = []; // creates empty 2D array to store grid of numbers
    for (let row = 0; row < rows; row++) { // loop iterates through each row of grid
      const rowArray: number[] = []; //new empty array created for each row
      for (let col = 0; col < cols; col++) { // neested loop iterates through each column in current row
        rowArray.push(row * cols + col); //gives unique number for each cell in the grid, based on row and column position, then push to rowArray
      }
      initialTiles.push(rowArray); //each column in current row is pushed to tilesArray - completes one row of the grid
    }
    setTiles(initialTiles);
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