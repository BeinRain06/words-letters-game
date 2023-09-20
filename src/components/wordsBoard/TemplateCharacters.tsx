import React, { useEffect, useReducer, useRef, useContext } from "react";

import { INITIAL_STATE, reducer } from "../../reducer/WordsReducer";
import { userGameContext } from "../../context/GameContext";

import "./TemplateCharacters.css";

export interface templateProps {
  category: number;
  threeFirstChar: any[];
  wordEntered: string[];
  count: number;
  countBoo: boolean;
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
      threeFirstChar,
      wordEntered,
      rightWords,
      rightWordArray,
      wordPlate,
      arraywordPlateRecord,
    },
    handleCategory,
    changeCount,
    changeBooleanCount,
    handleFirstChar,
    handleChangeInput,
    handleMatchingChar,
    handleWordTemplate,
  } = useContext(userGameContext);

  const rowRefEight = useRef<HTMLDivElement>(null);
  /*  const rowsRefNine = useRef<HTMLDivElement>(null); */

  const rowRefNine1 = useRef<HTMLDivElement>(null);
  const rowRefNine2 = useRef<HTMLDivElement>(null);
  const rowRefNine3 = useRef<HTMLDivElement>(null);
  const rowRefNine4 = useRef<HTMLDivElement>(null);
  const rowRefNine5 = useRef<HTMLDivElement>(null);
  const rowRefNine6 = useRef<HTMLDivElement>(null);
  const rowRefNine7 = useRef<HTMLDivElement>(null);
  const rowRefNine8 = useRef<HTMLDivElement>(null);

  const rowsRefNiNe = [
    rowRefNine1,
    rowRefNine2,
    rowRefNine3,
    rowRefNine4,
    rowRefNine5,
    rowRefNine6,
    rowRefNine7,
    rowRefNine8,
  ];

  const rowRefTen = useRef<HTMLDivElement>(null);

  /*  const [state, dispatch] = useReducer(reducer, INITIAL_STATE); */

  let spanArrayCurrentRow: HTMLElement[] = [];

  useEffect(() => {
    let n = count;
    let currentRow;

    const createArraySpanRow = (n): HTMLElement[] => {
      currentRow =
        rowsRefNiNe[n].current?.querySelectorAll<HTMLElement>(".char_box");

      console.log(" rowRefNine step", rowsRefNiNe[n].current);

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
        currentRow =
          rowsRefNiNe[n - 1].current?.querySelectorAll<HTMLElement>(
            ".char_box"
          );

        for (let i = 0; i < currentRow.length; i++) {
          spanArrayCurrentRow.push(currentRow[i]);
        }
      }

      return spanArrayCurrentRow;
    };

    const firstThreeChar = (): void => {
      if (wordEntered.length === 0) {
        spanArrayCurrentRow = createArraySpanRow(n);

        for (let i = 0; i < spanArrayCurrentRow.length; i++) {
          spanArrayCurrentRow[i].innerHTML = "";
        }
        console.log("props three char", threeFirstChar);

        spanArrayCurrentRow[1].innerHTML = threeFirstChar[0].word;

        spanArrayCurrentRow[4].innerHTML = threeFirstChar[1].word;

        spanArrayCurrentRow[6].innerHTML = threeFirstChar[2].word;
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

    const validateChange = (): void => {
      let n = count;

      let spanArrayCurrentRow: HTMLElement[] = [];

      spanArrayCurrentRow = validateSpanArrayRow(n);

      console.log("count val", n);
      console.log("countBoo val", countBoo);

      if (countBoo && category === 9) {
        console.log("props count", props.count);

        for (let i = 0; i < spanArrayCurrentRow.length; i++) {
          spanArrayCurrentRow[i].style.visibility = "hidden";
        }

        console.log("entring validate whatever the case");
        console.log("wordplate please", wordPlate);
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

          let spanArrayCurrentRowNext: HTMLElement[] = [];

          spanArrayCurrentRowNext = createArraySpanRow(n);

          for (let i = 0; i < spanArrayCurrentRowNext.length; i++) {
            spanArrayCurrentRowNext[i].innerHTML = "";
          }

          console.log("array span Next", spanArrayCurrentRowNext);

          arraywordPlateRecord[n - 1].map((char, index) => {
            setTimeout(() => {}, 5000);
            setTimeout(() => {
              if (char.status === "match" || char.status === "given") {
                spanArrayCurrentRowNext[index].innerHTML = char.val;
              } else if (char.status === "unmatch") {
                let unmatch;
                let a: boolean = threeFirstChar[0].id === index;
                let b: boolean = threeFirstChar[1].id === index;
                let c: boolean = threeFirstChar[2].id === index;

                switch (unmatch) {
                  case a:
                    spanArrayCurrentRowNext[index].innerHTML =
                      threeFirstChar[0].word;
                    break;

                  case b:
                    spanArrayCurrentRowNext[index].innerHTML =
                      threeFirstChar[1].word;
                    break;

                  case c:
                    spanArrayCurrentRowNext[index].innerHTML =
                      threeFirstChar[2].word;
                    break;
                  default:
                    break;
                }

                if (
                  threeFirstChar[0].id === index ||
                  threeFirstChar[1].id === index ||
                  threeFirstChar[2].id === index
                ) {
                  spanArrayCurrentRowNext[index].innerHTML =
                    rightWords.word.charAt(index);
                } else {
                  spanArrayCurrentRowNext[index].innerHTML = "";
                }
              }
            }, 2000);
          });
        }
        /*   dispatch({ type: "VALIDATE_BOOLEAN" }); */
        changeBooleanCount();
      }
    };

    displayChar();
    firstThreeChar();

    validateChange();
  }, [wordEntered, countBoo]);

  return (
    <div className="wrapper_template">
      <div className={category === 8 ? "template_1 current" : "template_1"}>
        <div
          id="0"
          ref={rowRefEight}
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
        <div id="1" className="row" data-name="eight_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div id="2" className="row" data-name="eight_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div id="3" className="row" data-name="eight_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div id="4" className="row" data-name="eight_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div id="5" className="row" data-name="eight_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div id="6" className="row" data-name="eight_char">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div id="7" className="row" data-name="eight_char">
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
      </div>

      <div className={category === 10 ? "template_3 current" : "template_3"}>
        <div
          id="0"
          ref={rowRefTen}
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
        <div id="1" className="row" data-name="ten_char">
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
        <div id="2" className="row" data-name="ten_char">
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
        <div id="3" className="row" data-name="ten_char">
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
        <div id="4" className="row" data-name="ten_char">
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
        <div id="5" className="row" data-name="ten_char">
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
        <div id="6" className="row" data-name="ten_char">
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
        <div id="7" className="row" data-name="ten_char">
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
