import React, { useState } from 'react'

const GameBoard = () => {
    
    const initialBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    
    const [gameBoard, setGameBoard] = useState(initialBoard)

    function handlePlayerClick(rowIndex, colIndex){
        setGameBoard((prevGameBoard) =>{ 
            const updatedGameBoard = prevGameBoard.map((innerArray) => [...innerArray])
            updatedGameBoard[rowIndex][colIndex] = "X"
            return updatedGameBoard;
        })
    }
  return (
    <div id='game-board'>
        {
            gameBoard.map((row, rowIndex) => {
               return <ol key={rowIndex}>
                    {
                        row.map((col, colIndex) => {
                            return <li key={colIndex}>
                                <button onClick={() => handlePlayerClick(rowIndex, colIndex)}> {col}</button>
                            </li>
                        })
                    }
               </ol>
            })
        }
    </div>
  )
}

export default GameBoard