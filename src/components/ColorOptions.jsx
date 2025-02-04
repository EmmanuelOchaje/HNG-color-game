import React from "react";

const ColorOptions = ({ colors, handleGuess }) => {
  return (
    <div>
      <div data-testid="colorOption" className="grid">
        {colors.map((color, index) => (
          <button
            className="clr-btn"
            data-testId="colorOption"
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => handleGuess(color)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorOptions;
