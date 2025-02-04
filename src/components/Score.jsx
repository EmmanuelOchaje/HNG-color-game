import React from "react";

const Score = ({ score, reset }) => {
  return (
    <div data-testId="score" className="score">
      <h2>{score}</h2>
      <button data-testId="newGameButton" onClick={reset}>
        New Game
      </button>
    </div>
  );
};

export default Score;
