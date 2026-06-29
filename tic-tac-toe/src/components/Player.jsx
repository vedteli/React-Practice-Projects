import React, { useState } from 'react'

const Player = ({name, symbol}) => {
  const [isEditing, setIsEditing] = useState(true);
  const [playerName, setPlayerName] = useState(name);

  function handleClick(){
    setIsEditing((prev) => !prev)
      }

  function handleChange(event){
    setPlayerName(event.target.value)
  }

  return <li>
              <span className="player">
                {
                    isEditing ? <span className="player-name">{playerName}</span> : <input type="text" value={playerName} onChange={handleChange} id="playerName" required/>
                }
                <span className="player-symbol">{symbol}</span>
              </span>

              <button onClick={handleClick}>
                {
                    isEditing ? "Edit" : "Save"
                }
              </button>
        </li>
}

export default Player