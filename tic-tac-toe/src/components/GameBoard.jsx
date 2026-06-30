import React, { useState } from 'react'

const GameBoard = ({activePlayer, setActivePlayer, handlePlayerClick, gameBoard, setGameBoard}) => {
    
    
    
    function updateGameBoard(rowIndex, colIndex){
        setGameBoard((prevGameBoard) =>{ 
            const updatedGameBoard = prevGameBoard.map((innerArray) => [...innerArray])
            updatedGameBoard[rowIndex][colIndex] = activePlayer
            return updatedGameBoard;
        })
    }

    function handleSelectedSquare(rowIndex, colIndex){
        updateGameBoard(rowIndex, colIndex)
        handlePlayerClick(rowIndex, colIndex)        
    }


  return (
    <div id='game-board'>
        {
            gameBoard.map((row, rowIndex) => {
               return <ol key={rowIndex}>
                    {
                        row.map((col, colIndex) => {
                            return <li key={colIndex}>
                                <button onClick={() => handleSelectedSquare(rowIndex, colIndex)}> {col}</button>
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