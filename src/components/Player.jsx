import { useState } from "react";
export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayername] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayername(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    btnCaption = "Save";
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  function handleResetNameClick() {
    setPlayername(initialName);
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="palyer-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
      <button onClick={handleResetNameClick}>Reset Name</button>
    </li>
  );
}
