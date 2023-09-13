import React, { useEffect, useReducer, useRef } from "react";

import { INITIAL_STATE, reducer } from "../../reducer/WordsReducer";

import "./TemplateCharacters.css";

export interface templateProps {
  category: number;
  threeFirstChar: any[];
  wordEntered: string[];
}

const TemplateCharacters: React.FC<templateProps> = (props) => {
  const rowRefEight = useRef<HTMLDivElement>(null);
  const rowRefNine = useRef<HTMLDivElement>(null);
  const rowRefTen = useRef<HTMLDivElement>(null);

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  let spanArrayCurrentRow: Element[] = [];

  useEffect(() => {
    const createArraySpanRow = (): Element[] => {
      let currentRow = rowRefNine.current?.querySelectorAll(".char_box");

      console.log("props three:", props.threeFirstChar);
      let spanArrayCurrentRow: Element[] = [];

      if (currentRow !== undefined) {
        for (let i = 0; i < currentRow.length; i++) {
          spanArrayCurrentRow.push(currentRow[i]);
        }
      }

      return spanArrayCurrentRow;
    };

    const displayThreeChar = (): void => {
      spanArrayCurrentRow = createArraySpanRow();

      for (let i = 0; i < spanArrayCurrentRow.length; i++) {
        spanArrayCurrentRow[i].innerHTML = "";
      }

      console.log("three 3", props.threeFirstChar);

      spanArrayCurrentRow[1].innerHTML = props.threeFirstChar[0].word;

      spanArrayCurrentRow[4].innerHTML = props.threeFirstChar[1].word;

      spanArrayCurrentRow[6].innerHTML = props.threeFirstChar[2].word;

      console.log("span Array Current Row", spanArrayCurrentRow);
    };

    const primarDisplayThreeChar = (): void => {
      spanArrayCurrentRow = createArraySpanRow();

      if (props.wordEntered.length === 1) {
        spanArrayCurrentRow[1].innerHTML = props.threeFirstChar[0].chr;

        spanArrayCurrentRow[4].innerHTML = props.threeFirstChar[1].chr;

        spanArrayCurrentRow[6].innerHTML = props.threeFirstChar[2].chr;
      }
    };

    if (props.wordEntered.length !== 0) {
      let wordEntered = props.wordEntered;

      spanArrayCurrentRow = createArraySpanRow();

      for (let i = 0; i < spanArrayCurrentRow.length; i++) {
        spanArrayCurrentRow[i].innerHTML = "";
      }

      wordEntered.map((char, index) => {
        if (spanArrayCurrentRow[index] !== undefined) {
          spanArrayCurrentRow[index].innerHTML = char;
        }
      });
    } else {
      displayThreeChar();
    }

    primarDisplayThreeChar();
  }, [props.wordEntered]);

  return (
    <div className="wrapper_template">
      <div
        className={props.category === 8 ? "template_1 current" : "template_1"}
      >
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

      <div
        className={props.category === 9 ? "template_2 current" : "template_2"}
      >
        <div
          id="0"
          ref={rowRefNine}
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
        <div id="1" className="row" data-name="nine_char">
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
        <div id="2" className="row" data-name="nine_char">
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
        <div id="3" className="row" data-name="nine_char">
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
        <div id="4" className="row" data-name="nine_char">
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
        <div id="5" className="row" data-name="nine_char">
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
        <div id="6" className="row" data-name="nine_char">
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
        <div id="7" className="row" data-name="nine_char">
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

      <div
        className={props.category === 10 ? "template_3 current" : "template_3"}
      >
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
