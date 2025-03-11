import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derivedActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((preTurns) => {
      let currentPlayer = derivedActivePlayer(preTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
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
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
