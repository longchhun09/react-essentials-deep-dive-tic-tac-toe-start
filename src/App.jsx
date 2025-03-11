import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((crrActivePlayer) => (crrActivePlayer === "X" ? "O" : "X"));
    setGameTurns((preTurns) => {
      let currentPlayer = "X";
      if (preTurns.length > 0 && preTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...preTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <>
      <header>
        <img src="game-logo.png" alt="Tic-Tac Toe" />
      </header>
      <h1>React Tic-Tac-Toe</h1>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="Player 1"
              symbol="x"
              isActive={activePlayer === "X"}
            />
            <Player
              initialName="Player 2"
              symbol="o"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            activePlayerSymbol={activePlayer}
            turns={gameTurns}
          />
        </div>
      </main>
    </>
  );
}

export default App;
