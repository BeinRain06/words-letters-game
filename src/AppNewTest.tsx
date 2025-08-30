import React, { useState, useRef, useEffect, useContext } from "react";
import { TemplateCharInput } from "./components/wordsBoard/MyScene";

import TemplateCharacters from "./components/wordsBoard/TemplateCharacters";

import { TemplateWordGame } from "./components/wordsBoard/MyScene";

import {
  EightCharactersWords,
  NineCharactersWords,
  TenCharactersWords,
} from "./dictionnary/LibraryWords.tsx";

import { newGameContextInstance } from "./context/NewGameContext.tsx";

import {
  COBRA,
  HIMITSU,
  HOKUTO,
  HUNTER,
  RANMA,
  HOUSEHUSBAND,
  UNGO,
  PARANOIA,
} from "./assets/images/index.js";

import "./AppNewTest.css";

interface ValueInputObjType {
  id: number;
  char: string;
  statusFlag: string;
}
export const App = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const {
    state: {
      category,
      guessWord,
      levelGame,
      score,
      winOrLoose,
      gameOverText,
      isClickReset,
    },
    handleCategory,
    handleGuessWord,
    handleWinOrLoose,
    handleClickReset,
  } = useContext(newGameContextInstance);

  const childRef = useRef<any>(null);

  const caseRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  /* const miniRowEight = useRef<HTMLDivElement>(null);
  const miniRowNine = useRef<HTMLDivElement>(null);
  const miniRowTen = useRef<HTMLDivElement>(null); */

  const miniRowRef = useRef<HTMLDivElement>(null);

  const warningRef = useRef<HTMLParagraphElement>(null);

  const bntHideRef = useRef<HTMLDivElement>(null);
  const bntLaunchRef = useRef<HTMLDivElement>(null);

  let idTmp: number = 0;
  let newThreeChar: WordsObject[] = [];

  const imageFitting = [
    COBRA,
    HIMITSU,
    HOUSEHUSBAND,
    PARANOIA,
    HOKUTO,
    RANMA,
    HUNTER,
    UNGO,
    HIMITSU,
  ];

  const [currentImg, setCurrentImg] = useState(imageFitting[0]);

  const [template, setTemplate] = useState("9"); // initalized template : 09 characters

  // useEffect pick template Game and choose the picture to showcase
  useEffect(() => {
    currentPicture();
  }, [levelGame]);

  const handleTogglerButton = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    console.log("e Event :", e);
    setOpen(!isOpen);

    if (inputRef.current) {
      inputRef.current.focus();
    }

    if (isOpen) {
      await bntHideRef.current?.classList.add("active_btn");
      await bntLaunchRef.current?.classList.remove("active_btn");
    } else {
      await bntHideRef.current?.classList.remove("active_btn");
      await bntLaunchRef.current?.classList.add("active_btn");
    }
  };

  const triggerResetApp = () => {
    setOpen(false);
    //trigger update in MyScene.tsx
    handleClickReset();
  };

  const showDisplay = (e: React.MouseEvent): void => {
    console.log("target : ", e.target);
    console.log("select select :", imageRef.current);
    console.log("end message game", gameOverText);
    /* console.log(" reset rows rows", resetRows);
    console.log("end beginnin come RESet", comeReset); */
  };

  interface MyHTMLElement {
    caseGame: HTMLDivElement | null;
    wrapImg: HTMLDivElement | null;
    entryWords: HTMLDivElement | null;
  }

  const Screen: MyHTMLElement = {
    caseGame: document.querySelector(".showcase_game"),
    wrapImg: document.querySelector(".wrap_main_img"),
    entryWords: document.querySelector(".insertion_word_wrapper"),
  };

  const currentPicture = (): void => {
    let myCurrentPicture: string = "";

    if (levelGame === 1) {
      myCurrentPicture = imageFitting[0];
    }

    if (levelGame % 2 === 1) {
      myCurrentPicture = imageFitting[levelGame - 1];
    }

    if (levelGame === 9) {
      myCurrentPicture = imageFitting[levelGame - 1];
    }

    setCurrentImg(myCurrentPicture);
  };

  const selectMiniRow = (): Element[] => {
    let miniRowElt;
    let miniSpanArray: Element[] = [];

    // commented because of new CHANGE

    /* if (category === 9)
      miniRowElt = miniRowNine.current?.querySelectorAll(".char_box");
    if (category === 8)
      miniRowElt = miniRowEight.current?.querySelectorAll(".char_box");
    if (category === 10)
      miniRowElt = miniRowTen.current?.querySelectorAll(".char_box");

    if (miniRowElt !== undefined) {
      for (let i = 0; i < miniRowElt.length; i++) {
        miniSpanArray.push(miniRowElt[i]);
      }
    } */

    return miniSpanArray;
  };

  /* const validateInput = (): void => {
    let previousInputWord: string[] = wordEntered;
    let currentRightWord: string[] = rightWordArray;
    const levelUp: number = level + 1;

    let areaWordMoveRecord: any[] = [];
    let newWordTemplate: any[] = [];

    if (previousInputWord.length === currentRightWord.length) {
      for (let i = 0; i < currentRightWord.length; i++) {
        if (currentRightWord[i] === previousInputWord[i]) {
          if (
            threeFirstChar[0].id === i ||
            threeFirstChar[1].id === i ||
            threeFirstChar[2].id === i
          ) {
            newWordTemplate.push({
              id: i,
              val: previousInputWord[i],
              status: "given",
              bg: "yellow",
              rad: "50%",
            });
          } else {
            newWordTemplate.push({
              id: i,
              val: previousInputWord[i],
              status: "match",
              bg: "green",
              rad: "50%",
            });
          }
        } else {
          newWordTemplate.push({
            id: i,
            val: previousInputWord[i],
            status: "unmatch",
            bg: "red",
            rad: "50%",
          });
        }
      }

      handleMatchingChar(newWordTemplate);

      for (let i = 0; i < newWordTemplate.length; i++) {
        areaWordMoveRecord[i] = newWordTemplate[i];
      }

      console.log("framework area", areaWordMoveRecord);

      arraywordPlateRecord.push(areaWordMoveRecord);
      console.log("area area", arraywordPlateRecord);

      console.log("area area 00", arraywordPlateRecord[0]);

      console.log("word entered imc", wordEntered);
      console.log("right word array imc", rightWordArray);

      if (inputRef.current !== null) {
        inputRef.current.value = "";
      }
    } else {
      return;
    }

    changeCount();
    changeBooleanCount();
    updateLevel(levelUp);

    console.log("give me count here", count);

    currentPicture();

    handleWordTemplate(arraywordPlateRecord);
  }; */

  /* const handleExit = (): void => {
    winningOrLooSing();
  }; */

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    console.log("guessword AppNewTest:", guessWord);
    console.log("newValue :", newValue);

    const isMuchChar = newValue.length > guessWord.length ? true : false;

    if (isMuchChar) {
      setTimeout(() => {
        console.log("hirr, Yeah!");
        warningRef.current?.classList.add("standing");
      }, 2400);
      warningRef.current?.classList.remove("standing");
    }

    //  bring word to the limit guessword length in case entry characters exceed
    newValue =
      newValue.length > guessWord.length
        ? newValue.slice(0, guessWord.length)
        : newValue;

    const newValueArr = newValue.split("");

    const newValueArrObj = newValueArr.reduce(
      (acc: ValueInputObjType[], val, index) => {
        if (val) {
          acc = [...acc, { id: index, char: val, statusFlag: "" }];
        }
        return acc;
      },
      []
    );

    if (childRef.current && childRef.current.handleWordEntered) {
      childRef.current.handleWordEntered(newValueArrObj);
    }
  };

  return (
    <div
      id="container_game"
      className={winOrLoose ? "container overlap" : "container"}
      onClick={showDisplay}
    >
      <div
        id="end_game_wrapper"
        style={{ display: winOrLoose ? "block" : "none" }}
        className="end_game_wrapper"
      >
        <div className={winOrLoose ? "end_game add_msg" : "end_game"}>
          <p className="special_msg"> {gameOverText}</p>
          <div className="wrapper_reset">
            <button
              id="rest_game"
              type="button"
              className="btn_special rest_game"
              onClick={triggerResetApp}
            >
              RESTART
            </button>

            <button
              id="exit_game"
              type="button"
              className="btn_special exit_game"
              /* onClick={handleExit} */
            >
              EXIT
            </button>
          </div>
        </div>
      </div>

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
          onChange={(event) => handleCategory(event, { setTemplate })}
        >
          <option value="8">08 characters</option>
          <option value="9">09 characters</option>
          <option value="10">10 characters</option>
        </select>
      </div>
      <div className="showcase_game" data-selection="1" ref={caseRef}>
        {/*  <TemplateCharacters
          category={category}
          threeFirstChar={threeFirstChar}
          wordEntered={wordEntered}
          count={count}
          countBoo={countBoo}
          inputRef={inputRef}
          resetRows={resetRows}
        /> */}

        <TemplateWordGame
          /* category={category} */
          ref={childRef}
        />

        <div className="template_score">
          <p className="current_step">
            move :
            <span className="count_move" data-switch-img="1">
              {levelGame}
            </span>
            / 8
          </p>

          <div className="wrap_main_img" data-selection="1" ref={imageRef}>
            <img src={currentImg} alt="picture missing" className="main_img" />
          </div>

          <div className="score_in">
            <p className="score_content">
              score:
              <span id="score" className="score">
                {score}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="joystick_play_wrapper">
        <div className="insertion_template">
          <div
            className="insertion_word_wrapper"
            data-selection="1"
            ref={wordRef}
          >
            <div
              className="toggler_btn_wrapper"
              onClick={() => {
                console.log("catch caseRef : ", caseRef);
              }}
            >
              <div className="toggler_btn_ct">
                <div
                  id="btn_launch_wrap"
                  className="toggler_word_button active_btn"
                  ref={bntLaunchRef}
                >
                  <button
                    type="button"
                    className="btn_launch"
                    onClick={handleTogglerButton}
                  >
                    Launch
                  </button>
                </div>
                <div
                  id="btn_hide_wrap"
                  className="toggler_word_button "
                  ref={bntHideRef}
                >
                  <button
                    type="button"
                    className="btn_hide"
                    onClick={handleTogglerButton}
                  >
                    Hide
                  </button>
                </div>
              </div>
            </div>
            <div className="insertion_box_controlled">
              <div
                className={
                  isOpen ? `mini_template show_template` : `mini_template`
                }
              >
                <div ref={miniRowRef} className="mini_row active">
                  <TemplateCharInput category={category} />
                </div>

                {/* <div
                  ref={miniRowEight}
                  className={category === 8 ? "mini_row active" : "mini_row"}
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
                </div> */}

                {/* <div
                  ref={miniRowNine}
                  className={category === 9 ? "mini_row active" : "mini_row"}
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
                </div> */}

                {/* <div
                  ref={miniRowTen}
                  className={category === 10 ? "mini_row active" : "mini_row"}
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
                </div> */}
                <div className="structure_confirm">
                  <input
                    type="text"
                    id="word_entry"
                    className="entry_style"
                    ref={inputRef}
                    onChange={handleChangeInputValue}
                    placeholder="enter_word"
                  />

                  <p ref={warningRef} className="warning_characters">
                    maxi characters reached !
                  </p>

                  <div className="confirm_input">
                    <button
                      type="button"
                      id="btn_confirm"
                      className="btn_confirm"
                      /*  onClick={validateInput} */
                    >
                      validate
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={!isOpen ? "empty_board msg_empty" : "empty_board "}
              >
                <p className="text_empty">Words & Letters</p>
              </div>
            </div>
          </div>
        </div>
        <div className="restart_game">
          <div className="add_game">
            {winOrLoose ? (
              <button
                type="button"
                id="btn_play"
                className="btn_play_again"
                onClick={triggerResetApp}
              >
                PLAY AGAIN
              </button>
            ) : (
              <p id="currently_gaming" className="currently_gaming">
                HOOk GAMING
              </p>
            )}
          </div>

          {!winOrLoose && (
            <div className="reset_input">
              <button
                type="button"
                id="btn_reset"
                className="btn_reset_game"
                onClick={triggerResetApp}
              >
                RESET
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
