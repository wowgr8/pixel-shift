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

  const rows = 3;
  const cols = 3;
  
  const imageScramble = (R34) => {
  
    // Create an array of objects representing tiles with id and tile properties
    const initialTiles = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const id = row * cols + col;
        const tile = row * cols + col;
        initialTiles.push({ id, tile });
      }
    }
  
    // Shuffle the initialTiles array to get a random order
    for (let i = initialTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [initialTiles[i], initialTiles[j]] = [initialTiles[j], initialTiles[i]];
    }
  
    setTiles(initialTiles);
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='border border-gray-500 p-4'> 
        <div className='grid grid-cols-3 gap-4'> 
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className="grid-cell"
              style={{
                width: '200px',
                height: '200px',
                backgroundImage: `url(${R34})`,
                backgroundSize: '300% 300%',
                backgroundPosition: `-${(tile.tile % cols) * 100}% -${Math.floor(tile.tile / rows) * 100}%`,
              }}
            />
          ))}
        </div> 
      </div> 
    </div>
  )
}

export default Control;