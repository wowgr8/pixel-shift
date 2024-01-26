import React, { FC, useState, useEffect } from 'react';
import R34 from './assets/img/R34.jpeg'
// import './App.css'

interface ControlProps {
  
}

const Control: FC<ControlProps> = ({  }) => {
  const [tiles, setTiles] = useState<number[][]>([[]]);
  
  useEffect(() => {
    imageScramble();
  }, []);

  const imageScramble = () => {
    //Divides image into 3x3 grid
    const rows = 3;
    const cols = 3;
    // const tileWidth = 300;
    // const tileHeight = 300;

    const initialTiles: number[][] = []; // creates empty 2D array to store grid of numbers
    for (let row = 0; row < rows; row++) { // loop iterates through each row of grid
      const rowArray: number[] = []; //new empty array created for each row
      for (let col = 0; col < cols; col++) { // neested loop iterates through each column in current row
        rowArray.push(row * cols + col); //gives unique number for each cell in the grid, based on row and column position, then push to rowArray
      }
      initialTiles.push(rowArray); //each column in current row is pushed to tilesArray - completes one row of the grid
    }
    setTiles(initialTiles);
    console.log("Tiles: ", tiles)
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='border border-gray-500 p-4'> 
        <div className='grid grid-cols-3 gap-4'> 
          {tiles.map((row, rowIndex) =>
            row.map((colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="grid-cell"
                style={{
                  width: '200px',
                  height: '200px', 
                  backgroundImage: `url(${R34})`,
                  backgroundSize: '300% 300%', // Adjust based on your image size
                  backgroundPosition: `-${(colIndex / 2) * 100}% -${(rowIndex / 2) * 100}%`, // ADJUST: divide rowIndex & colIndex by 3 and make image into a perfect square before scramble.
                }}
                // onClick={() => handleTileClick(rowIndex, colIndex)}
              />
            ))
          )}
        </div> 
      </div> 
    </div>
  )
}

export default Control;