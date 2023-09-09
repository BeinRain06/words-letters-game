import React, { useState, useReducer, useRef, useEffect } from "react";
import TemplateCharacters from "./components/wordsBoard/TemplateCharacters";
import { WordsObject } from "./LibraryWords";
import { NineCharactersWords } from "./LibraryWords";
import { INITIAL_STATE, reducer } from "./reducer/WordsReducer";
import { COBRA } from "./assets/images/index.js";
import DOWN from "./chevron-down-solid.svg";
import UP from "./chevron-up-solid.svg";
import "./App.css";

export const App = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const caseRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  let idTmp: number = 0;

  useEffect(() => {
    const category: number = state.category;
    const miniTemplate = (category): void => {
      switch (category) {
        case 8:
          caseRef.current?.setAttribute("data-selection", "0");
          imageRef.current?.setAttribute("data-selection", "0");
          wordRef.current?.setAttribute("data-selection", "0");
          break;
        case 9:
          caseRef.current?.setAttribute("data-selection", "1");
          imageRef.current?.setAttribute("data-selection", "1");
          wordRef.current?.setAttribute("data-selection", "1");
          break;
        case 10:
          caseRef.current?.setAttribute("data-selection", "2");
          imageRef.current?.setAttribute("data-selection", "2");
          wordRef.current?.setAttribute("data-selection", "2");
          break;
      }
    };

    const discloseThreeCharacters = (): void => {
      const category: number = state.category;
      let arrayThreeFirstChar: WordsObject[] = [];
      let arrayFillCharacters: WordsObject[] = [];

      let arrayIndex: number[] = [];
      if (category === 9) {
        for (let i = 0; i < NineCharactersWords.length; i++) {
          arrayIndex[i] = i;
          arrayFillCharacters[i] = { id: i, word: "" };
        }
        let baseWords: WordsObject[] = NineCharactersWords.map((item) => item);

        idTmp = Math.floor(Math.random() * arrayIndex.length);

        //current right Words
        let rightWord: WordsObject = baseWords[idTmp];
        dispatch({ type: "CHANGE_CURRENT", payload: rightWord });

        let rightWordArray = rightWord.word.split(" ");

        // select first character
        let a = arrayIndex[idTmp];
        arrayThreeFirstChar.push({
          id: a,
          word: rightWordArray[a],
        });
        arrayFillCharacters[idTmp].word = rightWordArray[a];
        arrayIndex.splice(idTmp, 1);

        idTmp = Math.floor(Math.random() * arrayIndex.length);
        // select second character
        let b = arrayIndex[idTmp];
        arrayThreeFirstChar.push({
          id: b,
          word: rightWordArray[b],
        });
        arrayFillCharacters[idTmp].word = rightWordArray[b];
        arrayIndex.splice(idTmp, 1);

        idTmp = Math.floor(Math.random() * arrayIndex.length);
        // select third character
        let c = arrayIndex[idTmp];
        arrayThreeFirstChar.push({
          id: c,
          word: rightWordArray[c],
        });
        arrayFillCharacters[idTmp].word = rightWordArray[c];

        //sort array three
        let newThreeChar: WordsObject[] = arrayThreeFirstChar.sort(
          (a, b) => a.id - b.id
        );

        dispatch({ type: "ADD_CHAR", payload: newThreeChar });
        console.log("right word: ", state.rightWords);
        console.log("three first char: ", state.threeFirstChar);
      }
    };

    discloseThreeCharacters();
    miniTemplate(category);
  }, [state.category]);

  const showDisplay = (e: React.MouseEvent): void => {
    console.log("target : ", e.target);
    console.log("select select :", imageRef.current);
  };

  interface MyHTMLElement {
    caseGame: HTMLDivElement | null;
    wrapImg: HTMLDivElement | null;
    entryWords: HTMLDivElement | null;
  }

  const Screen: MyHTMLElement = {
    caseGame: document.querySelector(".showcase_game"),
    wrapImg: document.querySelector(".wrap_main_img"),
    entryWords: document.querySelector(".entry_words"),
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    console.log("value:", e.target.value);
    dispatch({
      type: "CHANGE_CATEGORY",
      field: e.target.name,
      data: e.target.value,
    });
  };

  const handleWordEntered = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("input :", e.target.value);
  };

  const templateProps = {
    category: state.category,
  };

  return (
    <div className="container" onClick={showDisplay}>
      <nav className="game_entitled">
        <p className="gen_title">Words & Letters</p>
      </nav>
      <div className="category_selection">
        <h3 className="title_category">Select Category</h3>
        <select
          name="category"
          id="word_category"
          className="input_category"
          defaultValue="9"
          onChange={handleCategory}
        >
          <option value="8">08 characters</option>
          <option value="9">09 characters</option>
          <option value="10">10 characters</option>
        </select>
      </div>
      <div className="showcase_game" data-selection="1" ref={caseRef}>
        <TemplateCharacters
          category={state.category}
          threeFirstChar={state.threeFirstChar}
        />
        <div className="template_score">
          <p className="current_step">
            move :{" "}
            <span className="count_move" data-switch-img="1">
              1
            </span>
            / 8
          </p>

          <div className="wrap_main_img" data-selection="1" ref={imageRef}>
            <img src={COBRA} alt="picture missing" className="main_img" />
          </div>

          <div className="score_in">
            <p className="score_content">
              {" "}
              score:
              <span id="score" className="score">
                20
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="joystick_play_wrapper">
        <div className="entry_words" data-selection="1" ref={wordRef}>
          <span className="wrapper_open">
            <div
              className="open_content"
              style={{
                visibility: isOpen ? "hidden" : "visible",
                opacity: isOpen ? "0" : "1",
                transition: "all 1s ease-in-out 650ms",
              }}
            >
              <span>word</span>
              <img
                src={DOWN}
                alt=" icon missing"
                width="20"
                height="20"
                onClick={() => {
                  setOpen(true);
                }}
              />
            </div>
          </span>
          <div
            className={isOpen ? `mini_template show_template` : `mini_template`}
          >
            <div
              className={state.category === 8 ? "mini_row active" : "mini_row"}
              data-selection="0"
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
            <div
              className={state.category === 9 ? "mini_row active" : "mini_row"}
              data-selection="1"
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
            <div
              className={state.category === 10 ? "mini_row active" : "mini_row"}
              data-selection="2"
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
            <div className="structure_confirm">
              <input
                type="text"
                id="word_entry"
                className="entry_style"
                value=""
                onChange={handleWordEntered}
                placeholder="your_play"
              />

              <div className="confirm_input">
                <button type="button" id="btn_confirm" className="btn_confirm">
                  validate
                </button>
              </div>
            </div>

            <div className="close_content">
              <img
                src={UP}
                alt=" icon missing"
                width="20"
                height="20"
                onClick={(): void => {
                  setOpen(false);
                }}
              />
            </div>
          </div>
          <div className={!isOpen ? "empty_board msg_empty" : "empty_board "}>
            <p className="text_empty">Words & Letters</p>
          </div>
        </div>
        <div className="restart_game">
          <div className="add_game">
            <button type="button" id="btn_play" className="btn_play_again">
              {" "}
              PLAY AGAIN
            </button>
          </div>

          <div className="reset_input">
            <button type="button" id="btn_reset" className="btn_reset_game">
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
