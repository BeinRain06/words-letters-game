import React from "react";
import ReactDOM from "react-dom/client";
import { GameProvider, INITIAL_STATE } from "./context/GameContext";

import { App } from "./App";

/* const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
); */
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(document.getElementById("root"));

const [
  category,
  threeFirstChar,
  wordEntered,
  count,
  countBoo,
  rightWords,
  rightWordArray,
  wordPlate,
  arraywordPlateRecord,
] = [
  INITIAL_STATE.category,
  INITIAL_STATE.threeFirstChar,
  INITIAL_STATE.wordEntered,
  INITIAL_STATE.count,
  INITIAL_STATE.countBoo,
  INITIAL_STATE.rightWords,
  INITIAL_STATE.rightWordArray,
  INITIAL_STATE.wordPlate,
  INITIAL_STATE.arraywordPlateRecord,
];

root.render(
  <React.StrictMode>
    <GameProvider
      category={category}
      threeFirstChar={threeFirstChar}
      wordEntered={wordEntered}
      count={count}
      countBoo={countBoo}
      rightWords={rightWords}
      rightWordArray={rightWordArray}
      wordPlate={wordPlate}
      arraywordPlateRecord={arraywordPlateRecord}
    >
      <App />
    </GameProvider>
  </React.StrictMode>
);
