import React from "react";
import "./GameRules.css";

const GameRules = ({ startGameHandler }) => {
  return (
    <>
      <div className="main-div">
        <h2 className="heading">RULES FOR GAME</h2>
        <p className="line">
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </p>
        <h2 className="heading">HOW TO PLAY</h2>
        <ul className="list">
          <li className="listItems">1) Red goes first in the first game.</li>
          <li className="listItems">
            2) Players must alternate turns, and only one disc can be dropped in
            each turn.
          </li>
          <li className="listItems">
            3) The game ends when there is a 4-in-a-row or a stalemate.
          </li>
        </ul>
      </div>
      <button onClick={startGameHandler} className="start-button">
        Start Game
      </button>
    </>
  );
};

export default GameRules;
