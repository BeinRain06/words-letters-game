import React from "react";
import ReactDOM from "react-dom/client";
/* import { GameProvider, INITIAL_STATE } from "./context/GameContext"; */
import {
  NewGameContextProvider,
  INITIAL_STATE,
} from "./context/NewGameContext";

/* import { App } from "./App"; */

/* import { App } from "./AppCopyPhaser"; */

import { App } from "./AppNewTest";

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

// destructuring syntax
const [
  category,
  guessWord,
  levelGame,
  score,
  winOrLoose,
  gameOverText,
  currentIndexActiveRow,
  isClickReset,
  isEndGame,
] = [
  INITIAL_STATE.category,
  INITIAL_STATE.guessWord,
  INITIAL_STATE.levelGame,
  INITIAL_STATE.score,
  INITIAL_STATE.winOrLoose,
  INITIAL_STATE.gameOverText,
  INITIAL_STATE.currentIndexActiveRow,
  INITIAL_STATE.isClickReset,
  INITIAL_STATE.isEndGame,
];

root.render(
  <React.StrictMode>
    <NewGameContextProvider
      category={category}
      guessWord={guessWord}
      levelGame={levelGame}
      score={score}
      winOrLoose={winOrLoose}
      gameOverText={gameOverText}
      currentIndexActiveRow={currentIndexActiveRow}
      isClickReset={isClickReset}
      isEndGame={isEndGame}
    >
      <App />
    </NewGameContextProvider>
  </React.StrictMode>
);

/* const root = ReactDOM.createRoot(document.getElementById("root"));

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
); */
