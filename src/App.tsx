import React, { useState, useReducer, useRef, useEffect } from "react";
import TemplateCharacters from "./components/wordsBoard/TemplateCharacters";
import { WordsObject, ComparisonType, WordTPlate } from "./LibraryWords";
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
  const inputRef = useRef<HTMLInputElement>(null);
  const miniRowEight = useRef<HTMLDivElement>(null);
  const miniRowNine = useRef<HTMLDivElement>(null);
  const miniRowTen = useRef<HTMLDivElement>(null);
  const warningRef = useRef<HTMLParagraphElement>(null);
  let idTmp: number = 0;
  /* let inputConvertArray: string[] = [];
  let miniSpanArray: Element[] = []; */
  let newThreeChar: WordsObject[] = [];
  let similarChar: ComparisonType[] = [];
  let unlikeChar: ComparisonType[] = [];

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

      if (category === 9) {
        let baseWords: WordsObject[] = NineCharactersWords.map((item) => item);

        idTmp = Math.floor(Math.random() * baseWords.length);

        let rightWord: WordsObject = state.rightWords;

        console.log("right word abc", rightWord);

        let rightWordArray: string[] = [];

        for (let i = 0; i < rightWord.word.length; i++) {
          rightWordArray[i] = rightWord.word.charAt(i);
        }

        idTmp = 1;
        // select first character
        let a = idTmp;
        arrayThreeFirstChar.push({
          id: a,
          word: rightWordArray[a],
        });

        idTmp = 4;
        // select second character
        let b = idTmp;
        arrayThreeFirstChar.push({
          id: b,
          word: rightWordArray[b],
        });

        idTmp = 6;
        // select third character
        let c = idTmp;
        arrayThreeFirstChar.push({
          id: c,
          word: rightWordArray[c],
        });

        //sort array three
        newThreeChar = arrayThreeFirstChar.sort((a, b) => a.id - b.id);

        dispatch({ type: "FIRST_CHAR", payload: newThreeChar });
        console.log("three first: ", newThreeChar);
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
    let miniRowElt = miniRowNine.current?.querySelectorAll(".char_box");
    let miniSpanArray: Element[] = [];

    let inputConvertArray: string[] = [];

    for (let i = 0; i < e.target.value.length; i++) {
      inputConvertArray[i] = e.target.value.charAt(i);
    }

    console.log("input Array :", inputConvertArray);

    if (miniRowElt !== undefined) {
      for (let i = 0; i < miniRowElt.length; i++) {
        miniSpanArray.push(miniRowElt[i]);
      }
    }

    console.log("input :", e.target.value);

    if (inputConvertArray.length > state.category) {
      warningRef.current?.classList.add("standing");
      setTimeout(() => {
        warningRef.current?.classList.remove("standing");
      }, 2200);

      for (let i = 0; i < state.category; i++) {
        inputConvertArray[i] = e.target.value.charAt(i);
      }

      dispatch({
        type: "CHANGE_INPUT",

        payload: inputConvertArray,
      });
    } else {
      dispatch({
        type: "CHANGE_INPUT",
        payload: inputConvertArray,
      });
    }

    //reset mini-template span to empty value
    for (let i = 0; i < miniSpanArray.length; i++) {
      miniSpanArray[i].innerHTML = "";
    }

    inputConvertArray.map((char, index) => {
      if (miniSpanArray[index] !== undefined) {
        miniSpanArray[index].innerHTML = char;
      }
    });
  };

  const validateInput = (): void => {
    let previousInputWord: string[] = state.wordEntered;
    let currentRightWord: string[] = state.rightWordArray;
    let threeFirstChar: any[] = state.threeFirstChar;
    let wordPlate: WordTPlate[] = [];

    if (previousInputWord.length === currentRightWord.length) {
      for (let i = 0; i < currentRightWord.length; i++) {
        if (currentRightWord[i] === previousInputWord[i]) {
          if (
            threeFirstChar[0].id === i ||
            threeFirstChar[1].id === i ||
            threeFirstChar[2].id === i
          ) {
            wordPlate.push({
              id: i,
              val: previousInputWord[i],
              status: "given",
              bg: "yellow",
              rad: "50%",
            });
          } else {
            wordPlate.push({
              id: i,
              val: previousInputWord[i],
              status: "match",
              bg: "green",
              rad: "50%",
            });
          }
        } else {
          wordPlate.push({
            id: i,
            val: previousInputWord[i],
            status: "unmatch",
            bg: "red",
            rad: "50%",
          });
        }
      }
    } else {
      return;
    }

    dispatch({ type: "MATCH_CHAR", payload: wordPlate });

    dispatch({ type: "VALIDATE_CHANGE" });

    dispatch({ type: "RECORD_WORDPLATE", payload: wordPlate });

    console.log("board word T:", state.arraywordPlateRecord);
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
          wordEntered={state.wordEntered}
          count={state.count}
        />
        <div className="template_score">
          <p className="current_step">
            move :
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
              ref={miniRowEight}
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
              ref={miniRowNine}
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
              ref={miniRowTen}
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
                ref={inputRef}
                onChange={handleWordEntered}
                placeholder="enter_word"
              />

              <p ref={warningRef} className="warning_characters">
                maxi characters exceeded !
              </p>

              <div className="confirm_input">
                <button
                  type="button"
                  id="btn_confirm"
                  className="btn_confirm"
                  onClick={validateInput}
                >
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
