import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"

function App() {
  const initialBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]

  const [activePlayer, setActivePlayer] = useState("X")
  const [playerLog, setPlayerLog] = useState([])
  const [gameBoard, setGameBoard] = useState(initialBoard)
  const [playerName, setPlayerName] = useState(name);



  function handlePlayerClick(rowIndex, colIndex, playerName){
        let currentPlayerLog = {
          row: rowIndex,
          col: colIndex, 
          name: ""
        }
        setActivePlayer(activePlayer === "X" ? "O" : "X")
    }

  return (
    <>
      <div id="game-container">
        <ol id="players"  className="highlight-player">
          <Player name={"Player 1"} symbol={"X"} activePlayer={activePlayer} handlePlayerClick={handlePlayerClick} playerName={playerName} setPlayerName={setPlayerName}/>
          <Player name={"Player 2"} symbol={"O"} activePlayer={activePlayer} handlePlayerClick={handlePlayerClick} playerName={playerName} setPlayerName={setPlayerName}/>
        </ol>
        <GameBoard activePlayer={ activePlayer } setActivePlayer={setActivePlayer} handlePlayerClick={handlePlayerClick} gameBoard={gameBoard} setGameBoard={setGameBoard}/>
      </div>
      <Log />
    </>
  )
}

export default App
