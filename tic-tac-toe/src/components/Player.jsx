import { useState } from "react";

export default function Player({
  symbol,
  activePlayer,
  playerName,
  onNameChange,
}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((prev) => !prev);
  }

  function handleChange(event) {
    onNameChange(symbol, event.target.value);
  }

  return (
    <li className={symbol === activePlayer ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}