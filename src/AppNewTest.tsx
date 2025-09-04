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
      isEndGame,
    },
    handleCategory,
    handleGameOverText,
    handleGuessWord,
    handleWinOrLoose,
    handleClickReset,
    handleIsEndGame,
  } = useContext(newGameContextInstance);

  const childRef = useRef<any>(null);
  const inputChildRef = useRef<any>(null);

  const caseRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const miniRowRef = useRef<HTMLDivElement>(null);

  const bntHideRef = useRef<HTMLDivElement>(null);
  const bntLaunchRef = useRef<HTMLDivElement>(null);
  const btnConfirmRef = useRef<HTMLButtonElement>(null);

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

  const [valueInputObj, setValueInput] = useState<ValueInputObjType[]>([]);

  const [expectedWord, setExpectedWord] = useState("");

  const [warningPop, setWarningPop] = useState(false);

  const [totalScore, setTotalScore] = useState(90);

  //useEffect warning msg
  useEffect(() => {
    if (warningPop) {
      setTimeout(() => {
        btnConfirmRef.current?.classList.add("active_confirm");
        setWarningPop(false);
      }, 1500);
      btnConfirmRef.current?.classList.remove("active_confirm");
    }
  }, [warningPop]);

  // useEffect pick template Game and choose the picture to showcase
  useEffect(() => {
    if (levelGame % 2) {
      currentPicture();
    }
  }, [levelGame]);

  // total score update
  useEffect(() => {
    //to do something may be --- look Fn GAME OVER
    if (score !== 0) {
      /* console.log("update score"); */
    }
  }, [score]);

  // winning or loosing game update

  useEffect(() => {
    if (!winOrLoose) {
      setExpectedWord(guessWord);
    }
  }, [isEndGame]);

  //total score due to category
  useEffect(() => {
    setTotalScore(10 * category);
  }, [category]);

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

  const triggerInitApp = (label: string) => {
    setOpen(false);

    //trigger update in MyScene.tsx
    handleClickReset(true);

    if (label === "restart") handleIsEndGame(false);
  };

  /* const showDisplay = (e: React.MouseEvent): void => {
    console.log("target : ", e.target);
    console.log("select select :", imageRef.current);
    console.log("end message game", gameOverText);
  }; */

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

    myCurrentPicture = imageFitting[levelGame - 1];

    setCurrentImg(myCurrentPicture);
  };

  const handleCategoryUpdate = (event) => {
    //update in NewGameContext.tsx
    handleCategory(event, { setTemplate });
  };

  const handleExit = (): void => {
    //close the browser page
    window.close();
  };

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    console.log("guessword AppNewTest:", guessWord);
    console.log("newValue :", newValue);

    // check warning pop up
    if (newValue.length > guessWord.length) {
      setWarningPop(true);
    } else if (newValue.length === guessWord.length) {
      btnConfirmRef.current?.classList.add("active_confirm");
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

    //record an instance inputValue in the component
    setValueInput(newValueArrObj);

    //continuation triggers of the same Fn in MyScene.tsx component using ForwardRef in <TemPlateGame/> and <TemplateCharInput/> component
    if (childRef.current && childRef.current.handleWordEntered) {
      childRef.current.handleWordEntered(newValueArrObj);
    }

    if (inputChildRef.current && inputChildRef.current.handleInputDisplay) {
      inputChildRef.current.handleInputDisplay("wordTyped", newValueArrObj);
    }
  };

  const triggerValidation = (e: React.MouseEvent<HTMLButtonElement>) => {
    playBtnFocus(e);

    //empty the input html tag
    inputRef.current!.value = "";

    //continuation triggers of the same Fn in MyScene.tsx component using ForwardRef in <TemPlateGame/> and <TemplateCharInput/> component
    if (childRef.current && childRef.current.handleValidateInput) {
      childRef.current.handleValidateInput();
    }

    if (inputChildRef.current && inputChildRef.current.handleInputDisplay) {
      inputChildRef.current.handleInputDisplay("validation");
    }
  };

  const playBtnFocus = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetElt = e.target as HTMLElement;
    setTimeout(() => {
      //add anim
      targetElt.focus();
      btnConfirmRef.current?.classList.add("active_confirm");
    }, 1500);

    //remove anim
    btnConfirmRef.current?.classList.remove("active_confirm");
  };

  return (
    <div
      id="container_game"
      className={isEndGame ? "container overlap" : "container"}
    >
      <div
        id="end_game_wrapper"
        style={{ display: isEndGame ? "block" : "none" }}
        className="end_game_wrapper"
      >
        <div className={isEndGame ? "end_game add_msg" : "end_game"}>
          <div className="special_msg">
            <p className="special_msg_1"> {gameOverText}</p>

            {!winOrLoose && (
              <p className="expected_word">
                <span>answer :</span> <span>{expectedWord}</span>
              </p>
            )}
          </div>

          <div className="wrapper_reset">
            <button
              id="rest_game"
              type="button"
              className="btn_special rest_game"
              onClick={() => triggerInitApp("restart")}
            >
              RESTART
            </button>

            <button
              id="exit_game"
              type="button"
              className="btn_special exit_game"
              onClick={handleExit}
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
          value={template}
          onChange={(event) => handleCategoryUpdate(event)}
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

        <TemplateWordGame /* category={category} */ ref={childRef} />

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
              <span id="score_1" className="score">
                {score}
              </span>
              /
              <span id="score_2" className="score">
                {totalScore}
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
                  <TemplateCharInput category={category} ref={inputChildRef} />
                </div>

                <div className="structure_confirm">
                  <input
                    type="text"
                    id="word_entry"
                    className="entry_style"
                    ref={inputRef}
                    onChange={handleChangeInputValue}
                    placeholder="enter_word"
                  />

                  <p className="warning_characters">
                    {warningPop && <> maxi characters reached !</>}
                  </p>

                  <div className="confirm_input">
                    <button
                      type="button"
                      id="btn_confirm"
                      className="btn_confirm"
                      onClick={triggerValidation}
                      ref={btnConfirmRef}
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
            {isEndGame ? (
              <button
                type="button"
                id="btn_play"
                className="btn_play_again"
                onClick={() => triggerInitApp("reset")}
              >
                PLAY AGAIN
              </button>
            ) : (
              <p id="currently_gaming" className="currently_gaming">
                HOOk GAMING
              </p>
            )}
          </div>

          {!isEndGame && (
            <div className="reset_input">
              <button
                type="button"
                id="btn_reset"
                className="btn_reset_game"
                onClick={() => triggerInitApp("reset")}
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
