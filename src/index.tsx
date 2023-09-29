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
  level,
  score,
  rightWords,
  rightWordArray,
  wordPlate,
  switchRightWord,
  switchRightWordArr,
  paletteColors,
  endMsgGame,
  currentImg,
  winOrLoose,
  comeReset,
  resetRows,
  arraywordPlateRecord,
] = [
  INITIAL_STATE.category,
  INITIAL_STATE.threeFirstChar,
  INITIAL_STATE.wordEntered,
  INITIAL_STATE.count,
  INITIAL_STATE.countBoo,
  INITIAL_STATE.level,
  INITIAL_STATE.score,
  INITIAL_STATE.rightWords,
  INITIAL_STATE.rightWordArray,
  INITIAL_STATE.wordPlate,
  INITIAL_STATE.switchRightWord,
  INITIAL_STATE.switchRightWordArr,
  INITIAL_STATE.paletteColors,
  INITIAL_STATE.endMsgGame,
  INITIAL_STATE.currentImg,
  INITIAL_STATE.winOrLoose,
  INITIAL_STATE.comeReset,
  INITIAL_STATE.resetRows,
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
      level={level}
      score={score}
      rightWords={rightWords}
      rightWordArray={rightWordArray}
      wordPlate={wordPlate}
      switchRightWord={switchRightWord}
      switchRightWordArr={switchRightWordArr}
      paletteColors={paletteColors}
      endMsgGame={endMsgGame}
      currentImg={currentImg}
      winOrLoose={winOrLoose}
      comeReset={comeReset}
      resetRows={resetRows}
      arraywordPlateRecord={arraywordPlateRecord}
    >
      <App />
    </GameProvider>
  </React.StrictMode>
);
