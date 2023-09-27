import React, { useEffect, useReducer, useRef, useContext } from "react";
import {
  COBRA,
  HIMITSU,
  HOKUTO,
  HUNTER,
  PARANOIA,
  RANMA,
  HOUSEHUSBAND,
  UNGO,
} from "../../assets/images";
import {
  NineCharactersWords,
  EightCharactersWords,
  TenCharactersWords,
} from "../../LibraryWords";
import { INITIAL_STATE, reducer } from "../../reducer/WordsReducer";
import { userGameContext } from "../../context/GameContext";

import "./TemplateCharacters.css";
import { WordsObject } from "../../LibraryWords";

export interface templateProps {
  category: number;
  threeFirstChar: any[];
  wordEntered: string[];
  count: number;
  countBoo: boolean;
  resetRows: number;
  inputRef: React.RefObject<HTMLInputElement>;
  /* threeNewFnChar: () => void; */

  /* triggerEmptySpans: () => string; */
}

{
  /* ref={(el: HTMLDivElement) => rowsRefNine.current.push(el!)} */
}

/* const TemplateCharacters: React.FC<templateProps> = (props) => {...} */

const TemplateCharacters: React.FC<templateProps> = (props) => {
  const {
    state: {
      category,
      count,
      countBoo,
      score,
      comeReset,
      endMsgGame,
      threeFirstChar,
      wordEntered,
      winOrLoose,
      rightWords,
      level,
      rightWordArray,
      wordPlate,
      arraywordPlateRecord,
      resetRows,
      paletteColors,
    },
    handleCategory,
    changeCount,
    changeBooleanCount,
    updateScore,
    updateImage,
    handleFirstChar,
    handleChangeInput,
    handleMatchingChar,
    handleWordTemplate,
    winningOrLooSing,
    endGameMessage,
    resetTemplateRows,
    handleResetRows,
    handleChangeRightWordArray,
  } = useContext(userGameContext);

  /*  const rowsRefEight = useRef<HTMLDivElement>(null); */

  const rowRefEight1 = useRef<HTMLDivElement>(null);
  const rowRefEight2 = useRef<HTMLDivElement>(null);
  const rowRefEight3 = useRef<HTMLDivElement>(null);
  const rowRefEight4 = useRef<HTMLDivElement>(null);
  const rowRefEight5 = useRef<HTMLDivElement>(null);
  const rowRefEight6 = useRef<HTMLDivElement>(null);
  const rowRefEight7 = useRef<HTMLDivElement>(null);
  const rowRefEight8 = useRef<HTMLDivElement>(null);
  const rowRefEight9 = useRef<HTMLDivElement>(null);

  const rowsRefEiGht = [
    rowRefEight1,
    rowRefEight2,
    rowRefEight3,
    rowRefEight4,
    rowRefEight5,
    rowRefEight6,
    rowRefEight7,
    rowRefEight8,
    rowRefEight9,
  ];

  /*  const rowsRefNine = useRef<HTMLDivElement>(null); */

  const rowRefNine1 = useRef<HTMLDivElement>(null);
  const rowRefNine2 = useRef<HTMLDivElement>(null);
  const rowRefNine3 = useRef<HTMLDivElement>(null);
  const rowRefNine4 = useRef<HTMLDivElement>(null);
  const rowRefNine5 = useRef<HTMLDivElement>(null);
  const rowRefNine6 = useRef<HTMLDivElement>(null);
  const rowRefNine7 = useRef<HTMLDivElement>(null);
  const rowRefNine8 = useRef<HTMLDivElement>(null);
  const rowRefNine9 = useRef<HTMLDivElement>(null);

  const rowsRefNiNe = [
    rowRefNine1,
    rowRefNine2,
    rowRefNine3,
    rowRefNine4,
    rowRefNine5,
    rowRefNine6,
    rowRefNine7,
    rowRefNine8,
    rowRefNine9,
    ,
  ];
  /*  const rowsRefNine = useRef<HTMLDivElement>(null); */

  const rowRefTen1 = useRef<HTMLDivElement>(null);
  const rowRefTen2 = useRef<HTMLDivElement>(null);
  const rowRefTen3 = useRef<HTMLDivElement>(null);
  const rowRefTen4 = useRef<HTMLDivElement>(null);
  const rowRefTen5 = useRef<HTMLDivElement>(null);
  const rowRefTen6 = useRef<HTMLDivElement>(null);
  const rowRefTen7 = useRef<HTMLDivElement>(null);
  const rowRefTen8 = useRef<HTMLDivElement>(null);
  const rowRefTen9 = useRef<HTMLDivElement>(null);

  const rowsRefTeN = [
    rowRefTen1,
    rowRefTen2,
    rowRefTen3,
    rowRefTen4,
    rowRefTen5,
    rowRefTen6,
    rowRefTen7,
    rowRefTen8,
    rowRefTen9,
  ];

  /* array laying span tag - Each row */
  let spanArrayCurrentRow: HTMLElement[] = [];

  /*re-render */
  useEffect(() => {
    let n = count;
    let currentRow;
    let countChar: number = 0;

    const createArraySpanRow = (n): HTMLElement[] => {
      console.log("new n appearing", n);
      if (category === 9) {
        if (rowsRefNiNe[n].current === null) {
          arraywordPlateRecord[n - 1].map((item, i) => {
            if (item.val === rightWordArray[i]) {
              countChar++;
            }
          });

          /* if (countChar === rightWordArray.length) {
            endGameMessage("You WIN");
            winningOrLooSing();
          } else if (n === 8) {
            endGameMessage("You LOOSE");
            winningOrLooSing();
          }

          console.log("yeah it is indefined"); */
        }
        currentRow =
          rowsRefNiNe[n].current?.querySelectorAll<HTMLElement>(".char_box");
      } else if (category === 8) {
        if (rowsRefEiGht[n].current === null) {
          arraywordPlateRecord[n - 1].map((item, i) => {
            if (item.val === rightWordArray[i]) {
              countChar++;
            }
          });

          /*  if (countChar === rightWordArray.length) {
            endGameMessage("You WIN");
            winningOrLooSing();
          } else if (n === 8) {
            endGameMessage("You LOOSE");
            winningOrLooSing();
          }

          console.log("yeah it is indefined"); */
        }

        currentRow =
          rowsRefEiGht[n].current?.querySelectorAll<HTMLElement>(".char_box");
      } else if (category === 10) {
        if (rowsRefTeN[n].current === null) {
          arraywordPlateRecord[n - 1].map((item, i) => {
            if (item.val === rightWordArray[i]) {
              countChar++;
            }
          });

          /*  if (countChar === rightWordArray.length) {
            endGameMessage("You WIN");
            winningOrLooSing();
          } else if (n === 8) {
            endGameMessage("You LOOSE");
            winningOrLooSing();
          }

          console.log("yeah it is indefined"); */
        }
        currentRow =
          rowsRefTeN[n].current?.querySelectorAll<HTMLElement>(".char_box");
      }

      console.log(" rowRefNine step", rowsRefNiNe[n].current);

      /*continue selection if word entry doesn't match right word */
      let spanArrayCurrentRow: HTMLElement[] = [];

      for (let i = 0; i < currentRow.length; i++) {
        spanArrayCurrentRow.push(currentRow[i]);
      }
      return spanArrayCurrentRow;
    };

    const validateSpanArrayRow = (n) => {
      let spanArrayCurrentRow: HTMLElement[] = [];
      if (n !== 0) {
        let currentRow;
        if (category === 9) {
          currentRow =
            rowsRefNiNe[n - 1].current?.querySelectorAll<HTMLElement>(
              ".char_box"
            );
        } else if (category === 8) {
          currentRow =
            rowsRefEiGht[n - 1].current?.querySelectorAll<HTMLElement>(
              ".char_box"
            );
        } else if (category === 10) {
          currentRow =
            rowsRefTeN[n - 1].current?.querySelectorAll<HTMLElement>(
              ".char_box"
            );
        }

        for (let i = 0; i < currentRow.length; i++) {
          spanArrayCurrentRow.push(currentRow[i]);
        }
      }

      return spanArrayCurrentRow;
    };

    const CheckWinningorScore = (n, inside): void => {
      if (inside === "win") {
        let numChar: number = 0;
        const endWin: string = "YOU WIN !";
        const endLoose: string = "YOU LOOSE !";
        const indReset: number = 1;

        arraywordPlateRecord[n - 1].map((char, i) => {
          if (char.status === "match" || char.status === "given") {
            numChar = numChar + 1;
          }
        });

        if (numChar !== rightWordArray.length) {
          if (n - 1 === 7) {
            endGameMessage(endLoose);
            resetTemplateRows(indReset);
            winningOrLooSing();
            console.log("reset Rows Index loose", resetRows);
          }
        } else {
          endGameMessage(endWin);
          console.log("end end end ", endMsgGame);
          resetTemplateRows(indReset);
          winningOrLooSing();
          console.log("reset Rows Index win", resetRows);
        }
      } else {
        let levelUpScore: number = 0;

        arraywordPlateRecord[n - 1].map((char, i) => {
          if (char.status === "match") {
            levelUpScore = levelUpScore + 1;
          }
        });

        if (levelUpScore !== 0) {
          const rateScore: number = 15;

          setTimeout(() => {
            updateScore(rateScore);
          }, 100);
        }
      }
    };

    const currentRowMatch = (n, ts1, ts2): void => {
      let spanArrayCurrentRowNext: HTMLElement[] = [];

      spanArrayCurrentRowNext = createArraySpanRow(n);

      for (let i = 0; i < spanArrayCurrentRowNext.length; i++) {
        spanArrayCurrentRowNext[i].innerHTML = "";
      }

      console.log("plate record", arraywordPlateRecord[n - 1]);

      arraywordPlateRecord[n - 1].map((char, index) => {
        setTimeout(() => {}, ts1);
        setTimeout(() => {
          if (char.status === "match" || char.status === "given") {
            spanArrayCurrentRowNext[index].innerHTML = char.val;
          } else if (char.status === "unmatch") {
            if (index === threeFirstChar[0].id) {
              spanArrayCurrentRowNext[index].innerHTML = threeFirstChar[0].word;
            }

            if (index === threeFirstChar[1].id) {
              spanArrayCurrentRowNext[index].innerHTML = threeFirstChar[1].word;
            }

            if (index === threeFirstChar[2].id) {
              spanArrayCurrentRowNext[index].innerHTML = threeFirstChar[2].word;
            }

            if (
              index !== threeFirstChar[2].id ||
              index !== threeFirstChar[1].id ||
              index !== threeFirstChar[0].id
            ) {
              spanArrayCurrentRowNext[index].innerHTML = "";
            }
          }
        }, ts2);
      });
    };

    /*  const pushCountZero = (): number => {
      const tmpCount: number = -count;
      const numbExit: number = 0;
      changeCount(tmpCount);
      return numbExit;
    }; */

    const resetRowsFilledEmpty = (): void => {
      let n: number = count;
      let containerSpanRows: any[] = [];

      console.log("reset Rows Index io", props.resetRows);
      console.log("end msgg msg", endMsgGame);

      if (comeReset) {
        console.log("after if come RESet", comeReset);
        let spanArrayCurrentRow: HTMLElement[] = [];
        const indColor = Math.floor(Math.random() * 4);

        for (let j = 7; j >= 0; j--) {
          spanArrayCurrentRow = createArraySpanRow(j);
          containerSpanRows.push(spanArrayCurrentRow);
        }

        /* if (category === 9) {
          let itemArray: any[] = [];
          let resource: HTMLElement[] = [];

          for (let j = n; j >= 0; j--) {
            resource =
              rowsRefNiNe[j].current?.querySelectorAll<HTMLElement>(
                ".char_box"
              );
            itemArray.push(resource);
          }

          for (let k = 0; k < itemArray.length; k++) {
            let current = itemArray[k];
            for (let i = 0; i < current.length; i++) {
              current[i].innerHTML = "";
              current[i].style.background = "black";
            }
          }
        } */

        console.log("Container span rows", containerSpanRows);

        /*  for (let j = 0; j < arraywordPlateRecord.length; j++) {
          arraywordPlateRecord[j] = [];
        }

          if (arraywordPlateRecord[0] === null) {
          let modifArray = arraywordPlateRecord.splice(0, 1);
          handleWordTemplate(modifArray);
        } */

        for (let j = 0; j < containerSpanRows.length; j++) {
          let current = containerSpanRows[j];
          for (let i = 0; i < current.length; i++) {
            current[i].innerHTML = "";
            current[i].innerText = "";
            current[i].textContent = "";
            /* current[i].style.background = "black"; */
            current[i].style.background = paletteColors[indColor];
          }
        }

        /* let countZero = pushCountZero();
        console.log("new n n n", countZero); */

        /* spanArrayCurrentRow = createArraySpanRow(countZero); */

        console.log(
          "score score array Word Template Record",
          arraywordPlateRecord
        );
        console.log("level level new Count", count);
        console.log("reset orw new word entered", wordEntered);

        /* spanArrayCurrentRow = createArraySpanRow(n); */

        // reinitialize the right random word to play game

        /* let ourNewRightWordsArray = rebuildFirstCharAfterReset();

        handleChangeRightWordArray(ourNewRightWordsArray);

        console.log("reset orw new Right Word array", ourNewRightWordsArray); */

        console.log("props three char New", threeFirstChar);
        console.log("right word Array New", rightWordArray);

        /* spanArrayCurrentRow[1].innerHTML = threeFirstChar[0].word;
        spanArrayCurrentRow[4].innerHTML = threeFirstChar[1].word;
        spanArrayCurrentRow[6].innerHTML = threeFirstChar[2].word; */

        firstThreeChar();

        handleResetRows();
      }
    };

    const validateChange = (): void => {
      let n = count;

      let spanArrayCurrentRow: HTMLElement[] = [];
      console.log("record imd N", count);
      console.log("array wordplate record imd", arraywordPlateRecord);

      spanArrayCurrentRow = validateSpanArrayRow(n);

      /* countBoo && category === 9; */
      if (
        (countBoo && category === 9) ||
        (countBoo && category === 10) ||
        (countBoo && category === 8)
      ) {
        console.log("props count", props.count);

        for (let i = 0; i < spanArrayCurrentRow.length; i++) {
          spanArrayCurrentRow[i].style.visibility = "hidden";
        }

        console.log("array wordPlate", arraywordPlateRecord);

        if (n !== 0) {
          arraywordPlateRecord[n - 1].map((char, index) => {
            setTimeout(() => {}, 5000);
            setTimeout(() => {
              if (char.status === "match") {
                spanArrayCurrentRow[index].style.visibility = "visible";
                spanArrayCurrentRow[index].style.background =
                  "rgb(30, 143, 30)";
              } else if (char.status === "given") {
                spanArrayCurrentRow[index].style.visibility = "visible";
                spanArrayCurrentRow[index].style.background =
                  "rgb(212, 212, 43)";
              } else if (char.status === "unmatch") {
                spanArrayCurrentRow[index].style.visibility = "visible";
                spanArrayCurrentRow[index].style.background = "brown";
              }
            }, 2000);
          });

          currentRowMatch(n, 5000, 2000);
        }

        setTimeout(() => {
          CheckWinningorScore(n, "win");

          CheckWinningorScore(n, "score");
        }, 1500);

        console.log("we came here win", endMsgGame);
        console.log("we came here score", score);

        changeBooleanCount();
      }
    };

    const firstThreeChar = (): void => {
      if (wordEntered.length === 0) {
        spanArrayCurrentRow = createArraySpanRow(n);

        if (n !== 0) {
          currentRowMatch(n, 100, 300);
        } else {
          for (let i = 0; i < spanArrayCurrentRow.length; i++) {
            spanArrayCurrentRow[i].innerHTML = "";
          }
          console.log("props three char", threeFirstChar);

          spanArrayCurrentRow[1].innerHTML = threeFirstChar[0].word;

          spanArrayCurrentRow[4].innerHTML = threeFirstChar[1].word;

          spanArrayCurrentRow[6].innerHTML = threeFirstChar[2].word;
        }
      }
    };

    const displayChar = (): void => {
      spanArrayCurrentRow = createArraySpanRow(n);
      for (let i = 0; i < spanArrayCurrentRow.length; i++) {
        spanArrayCurrentRow[i].innerHTML = "";
      }

      wordEntered.map((char, index) => {
        if (spanArrayCurrentRow[index] !== undefined) {
          spanArrayCurrentRow[index].innerHTML = char;
        }
      });
    };

    displayChar();
    firstThreeChar();

    validateChange();
    resetRowsFilledEmpty();
  }, [wordEntered, countBoo, comeReset, count]);

  return (
    <div className="wrapper_template">
      <div className={category === 8 ? "template_1 current" : "template_1"}>
        <div
          id="0"
          ref={rowRefEight1}
          className="row active_row"
          data-name="eight_char"
        >
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div id="1" ref={rowRefEight2} className="row" data-name="eight_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div id="2" ref={rowRefEight3} className="row" data-name="eight_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div id="3" ref={rowRefEight4} className="row" data-name="eight_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div id="4" ref={rowRefEight5} className="row" data-name="eight_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div id="5" ref={rowRefEight6} className="row" data-name="eight_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div id="6" ref={rowRefEight7} className="row" data-name="eight_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div id="7" ref={rowRefEight8} className="row" data-name="eight_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div
          id="8"
          ref={rowRefEight9}
          className="row"
          data-name="eight_char"
          style={{ display: "none" }}
        >
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
      </div>

      <div className={category === 9 ? "template_2 current" : "template_2"}>
        <div
          id="0"
          ref={rowRefNine1}
          className="row active_row"
          data-name="nine_char"
        >
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
        </div>
        <div id="1" ref={rowRefNine2} className="row" data-name="nine_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
        </div>
        <div id="2" ref={rowRefNine3} className="row" data-name="nine_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
        </div>
        <div id="3" ref={rowRefNine4} className="row" data-name="nine_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
        </div>
        <div id="4" ref={rowRefNine5} className="row" data-name="nine_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
        </div>
        <div id="5" ref={rowRefNine6} className="row" data-name="nine_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
        </div>
        <div id="6" ref={rowRefNine7} className="row" data-name="nine_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
        </div>
        <div id="7" ref={rowRefNine8} className="row" data-name="nine_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
        </div>

        <div
          id="8"
          ref={rowRefNine9}
          className="row"
          data-name="nine_char"
          style={{ display: "none" }}
        >
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
        </div>
      </div>

      <div className={category === 10 ? "template_3 current" : "template_3"}>
        <div
          id="0"
          ref={rowRefTen1}
          className="row active_row"
          data-name="ten_char"
        >
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
          <span id="9" className="char_box"></span>
        </div>
        <div id="1" ref={rowRefTen2} className="row" data-name="ten_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
          <span id="9" className="char_box"></span>
        </div>
        <div id="2" ref={rowRefTen3} className="row" data-name="ten_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
          <span id="9" className="char_box"></span>
        </div>
        <div id="3" ref={rowRefTen4} className="row" data-name="ten_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
          <span id="9" className="char_box"></span>
        </div>
        <div id="4" ref={rowRefTen5} className="row" data-name="ten_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
          <span id="9" className="char_box"></span>
        </div>
        <div id="5" ref={rowRefTen6} className="row" data-name="ten_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
          <span id="9" className="char_box"></span>
        </div>
        <div id="6" ref={rowRefTen7} className="row" data-name="ten_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
          <span id="9" className="char_box"></span>
        </div>
        <div id="7" ref={rowRefTen8} className="row" data-name="ten_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
          <span id="9" className="char_box"></span>
        </div>
        <div
          id="8"
          ref={rowRefTen9}
          className="row"
          data-name="ten_char"
          style={{ display: "none" }}
        >
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
          <span id="9" className="char_box"></span>
        </div>
      </div>
    </div>
  );
};

export default TemplateCharacters;
