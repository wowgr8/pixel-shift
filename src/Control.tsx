import React, { FC, useState, useEffect } from 'react';
import R34 from './assets/img/R34.jpeg';
import './App.css';

interface ControlProps {}

const Control: FC<ControlProps> = () => {
  const [tiles, setTiles] = useState<number[][]>([[]]);
  const [originalImage, setOriginalImage] = useState<string | null>(null);

  useEffect(() => {
    setOriginalImage(R34);
    initializeTiles();
  }, []);

  const initializeTiles = () => {
    // Divide the image into a 3x3 grid
    const rows = 3;
    const cols = 3;
    const tileWidth = 300; // Adjust based on your image size
    const tileHeight = 300; // Adjust based on your image size

    const initialTiles: number[][] = [];
    for (let row = 0; row < rows; row++) {
      const rowArray: number[] = [];
      for (let col = 0; col < cols; col++) {
        rowArray.push(row * cols + col);
      }
      initialTiles.push(rowArray);
    }

    setTiles(initialTiles);
  };

  const handleTileClick = (row: number, col: number) => {
    // Handle tile click logic here
  };

  return (
    <div>
      <div className="square-image">
        {/* Original image */}
        <img src={originalImage} alt="Original" />

        {/* Display divided images */}
        {tiles.map((row, rowIndex) =>
          row.map((colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="grid-cell"
              style={{
                width: '100px', // Adjust based on your tile size
                height: '100px', // Adjust based on your tile size
                backgroundImage: `url(${originalImage})`,
                backgroundSize: '300% 300%', // Adjust based on your image size
                backgroundPosition: `-${(colIndex / 3) * 100}% -${(rowIndex / 3) * 100}%`,
              }}
              onClick={() => handleTileClick(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Control;
