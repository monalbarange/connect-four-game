import React, { useState } from "react";
import './App.css';
import Board from './Components/Board/Board';
import DropZone from './Components/DropZone/DropZone';
import GameRules from './Components/GameRules/GameRules';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGameHandler = () => {
    setGameStarted(true);
  };

  return (
    <div className="App">
      {gameStarted ? (
        <>
          <DropZone />
          <Board />
        </>
      ) : (
        <GameRules startGameHandler={startGameHandler} />
      )}
    </div>
  );
}

export default App;
