import React from "react";

const ColorDisplay = ({ colorDisplayed }) => {
  return (
    <div
      data-testid="colorBox"
      className="clr-display"
      style={{ backgroundColor: colorDisplayed }}
    ></div>
  );
};

export default ColorDisplay;
