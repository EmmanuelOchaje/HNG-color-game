import { useEffect, useState } from "react";
import ColorDisplay from "./components/ColorDisplay";
import ColorOptions from "./components/ColorOptions";
import Instructions from "./components/Instructions";
import Score from "./components/Score";
import Status from "./components/Status";

const colors = [
  "#E63946",
  "#D3D3D3",
  "#A8DADC",
  "#457B9D",
  "#1D3557",
  "#F4A261",
];

function App() {
  const [colorDisplayed, setColorDisplayed] = useState("");
  const [status, setStatus] = useState("Pick the correct color.");
  const [score, setScore] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  function start() {
    const randomClr = colors[Math.floor(Math.random() * colors.length)];
    setColorDisplayed(randomClr);
  }

  function handleGuess(color) {
    if (color === colorDisplayed) {
      setStatus("Correct, keep winning.");
      start();
      setScore((score) => score + 1);
      const newTargetColor = colors[Math.floor(Math.random() * colors.length)];
      setColorDisplayed(newTargetColor);
    } else {
      setStatus("Wrong, try again");
      setScore((score) => (score > 0 ? score - 1 : 0));
      setShowOverlay(true);
    }
  }
  useEffect(() => {
    start();
  }, []);

  function reset() {
    setScore(0);
    setStatus("New game, let's go!");
  }
  return (
    <div className="App">
      <Instructions />
      <Score score={score} reset={reset} />
      <Status status={status} />
      <ColorDisplay colorDisplayed={colorDisplayed} />
      <ColorOptions handleGuess={handleGuess} colors={colors} />

      <div
        className={`overlay ${showOverlay ? "active" : ""}`}
        onClick={() => setShowOverlay(false)}
      >
        <div className="overlay-content">
          <p>Try Again!</p>
          <button onClick={() => setShowOverlay(false)}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default App;
