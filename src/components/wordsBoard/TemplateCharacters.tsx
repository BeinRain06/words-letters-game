import React, { useEffect, useReducer, useRef } from "react";

import { INITIAL_STATE, reducer } from "../../reducer/WordsReducer";

import "./TemplateCharacters.css";

export interface templateProps {
  category: number;
  threeFirstChar: any[];
  wordEntered: string[];
  count: number;
}

const TemplateCharacters: React.FC<templateProps> = (props) => {
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

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  /* let currentRow: any; */
  let spanArrayCurrentRow: HTMLElement[] = [];

  useEffect(() => {
    /* let spanArrayCurrentRow: HTMLElement[] = []; */
    const createArraySpanRow = (): HTMLElement[] => {
      let currentRow =
        rowsRefNiNe[0].current?.querySelectorAll<HTMLElement>(".char_box");

      let spanArrayCurrentRow: HTMLElement[] = [];

      for (let i = 0; i < currentRow.length; i++) {
        spanArrayCurrentRow.push(currentRow[i]);
      }
      console.log("a b c d", spanArrayCurrentRow);
      return spanArrayCurrentRow;
    };

    const firstThreeChar = (): void => {
      if (props.wordEntered.length === 1) {
        spanArrayCurrentRow = createArraySpanRow();

        for (let i = 0; i < spanArrayCurrentRow.length; i++) {
          spanArrayCurrentRow[i].innerHTML = "";
        }
        console.log("props three char", props.threeFirstChar);

        spanArrayCurrentRow[1].innerHTML = props.threeFirstChar[0].word;

        console.log("akat suki ball", spanArrayCurrentRow[1].innerHTML);

        spanArrayCurrentRow[4].innerHTML = props.threeFirstChar[1].word;

        spanArrayCurrentRow[6].innerHTML = props.threeFirstChar[2].word;
      }
    };

    const displayChar = (): void => {
      spanArrayCurrentRow = createArraySpanRow();
      for (let i = 0; i < spanArrayCurrentRow.length; i++) {
        spanArrayCurrentRow[i].innerHTML = "";
      }
      let wordEntered = props.wordEntered;

      wordEntered.map((char, index) => {
        if (spanArrayCurrentRow[index] !== undefined) {
          spanArrayCurrentRow[index].innerHTML = char;
        }
      });
    };

    if (props.wordEntered.length > 1) {
      console.log("props word Entered length", props.wordEntered.length);
      displayChar();
    }

    firstThreeChar();
  }, [props.wordEntered, props.count]);

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
        {/*  {templateSpanRow.map((item, i) => (
          <div
            id={i.toString()}
            ref={(el) => (rowsRefNine.current[i] = el)}
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
        ))} */}
        {/* ref={(el: HTMLDivElement) => rowsRefNine.current.push(el!)} */}
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
