import React, {
  useState,
  useReducer,
  useRef,
  useEffect,
  useContext,
} from "react";
import TemplateCharacters from "./components/wordsBoard/TemplateCharacters";
import { WordsObject, ComparisonType, WordTPlate } from "./LibraryWords";
import {
  NineCharactersWords,
  EightCharactersWords,
  TenCharactersWords,
} from "./LibraryWords";
import { INITIAL_STATE, reducer } from "./reducer/WordsReducer";
import { userGameContext } from "./context/GameContext";
import { GameProvider } from "./context/GameContext";
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
import DOWN from "./chevron-down-solid.svg";
import UP from "./chevron-up-solid.svg";
import "./App.css";

export const App = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const {
    state: {
      category,
      count,
      countBoo,
      level,
      score,
      currentImg,
      comeReset,
      threeFirstChar,
      wordEntered,
      winOrLoose,
      endMsgGame,
      rightWords,
      rightWordArray,
      wordPlate,
      resetRows,
      arraywordPlateRecord,
    },
    handleCategory,
    changeCount,
    handleResetCount,
    changeBooleanCount,
    updateLevel,
    updateScore,
    updateImage,
    handleFirstChar,
    handleChangeInput,
    handleChangeRightWordArray,
    handleMatchingChar,
    handleWordTemplate,
    winningOrLooSing,
    endGameMessage,
    resetTemplateRows,
    handleResetRows,
  } = useContext(userGameContext);

  const caseRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const miniRowEight = useRef<HTMLDivElement>(null);
  const miniRowNine = useRef<HTMLDivElement>(null);
  const miniRowTen = useRef<HTMLDivElement>(null);
  const warningRef = useRef<HTMLParagraphElement>(null);

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

  /* let myCurrentPicture: string = imageFitting[1];
  let pictureIndex: number = -1; */

  useEffect(() => {
    const discloseThreeCharacters = (): void => {
      let arrayThreeFirstChar: WordsObject[] = [];

      if (category === 9) {
        let baseWords: WordsObject[] = [];
        baseWords = NineCharactersWords.map((item) => item);

        console.log("right word abc", rightWords);

        for (let i = 0; i < rightWords.word.length; i++) {
          rightWordArray[i] = rightWords.word.charAt(i);
        }
      } else if (category === 8) {
        let baseWords: WordsObject[] = [];
        baseWords = EightCharactersWords.map((item) => item);

        for (let i = 0; i < rightWords.word.length; i++) {
          rightWordArray[i] = rightWords.word.charAt(i);
        }
      } else if (category === 10) {
        let baseWords: WordsObject[] = [];
        baseWords = TenCharactersWords.map((item) => item);

        for (let i = 0; i < rightWords.word.length; i++) {
          rightWordArray[i] = rightWords.word.charAt(i);
        }
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

      handleFirstChar(newThreeChar);

      console.log("three first: ", newThreeChar);
    };

    discloseThreeCharacters();
  }, []);

  useEffect(() => {
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

    currentPicture();

    miniTemplate(category);
  }, [category, currentImg, score]);

  const showDisplay = (e: React.MouseEvent): void => {
    console.log("target : ", e.target);
    console.log("select select :", imageRef.current);
    console.log("end message game", endMsgGame);
    console.log(" reset rows rows", resetRows);
    console.log("end beginnin come RESet", comeReset);
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

  const currentPicture = (): void => {
    let myCurrentPicture: string = "";
    let n: number = level;
    let m: number = 0;

    if (level > 9 || score === 0) {
      myCurrentPicture = imageFitting[0];
    }

    if (score % 2 === 0) {
      m = score / 15;
      myCurrentPicture = imageFitting[m];
    } else if (score % 2 === 1) {
      myCurrentPicture = imageFitting[n - 2];
    }

    updateImage(myCurrentPicture);
    console.log("my current picture", myCurrentPicture);
  };

  const selectMiniRow = (): Element[] => {
    let miniRowElt;
    let miniSpanArray: Element[] = [];

    if (category === 9)
      miniRowElt = miniRowNine.current?.querySelectorAll(".char_box");
    if (category === 8)
      miniRowElt = miniRowEight.current?.querySelectorAll(".char_box");
    if (category === 10)
      miniRowElt = miniRowTen.current?.querySelectorAll(".char_box");

    if (miniRowElt !== undefined) {
      for (let i = 0; i < miniRowElt.length; i++) {
        miniSpanArray.push(miniRowElt[i]);
      }
    }

    return miniSpanArray;
  };

  const saveAnArrayOfInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ): string[] => {
    let inputConvertArray: string[] = [];

    for (let i = 0; i < e.target.value.length; i++) {
      /* inputConvertArray[i] = e.target.value.charAt(i).toLowerCase(); */
      inputConvertArray[i] = e.target.value.charAt(i);
    }

    if (inputConvertArray.length > category) {
      warningRef.current?.classList.add("standing");
      setTimeout(() => {
        warningRef.current?.classList.remove("standing");
      }, 2200);

      for (let i = 0; i < category; i++) {
        inputConvertArray[i] = e.target.value.charAt(i);
      }

      handleChangeInput(inputConvertArray);
    } else {
      handleChangeInput(inputConvertArray);
    }

    return inputConvertArray;
  };

  const handleWordEntered = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let miniSpanArray: Element[] = selectMiniRow();

    let inputConvertArray: string[] = saveAnArrayOfInput(e);

    //reset mini-template span to empty value
    for (let i = 0; i < miniSpanArray.length; i++) {
      miniSpanArray[i].innerHTML = "";
    }
    // fill mini span array row
    inputConvertArray.map((char, index) => {
      if (miniSpanArray[index] !== undefined) {
        miniSpanArray[index].innerHTML = char;
      }
    });

    console.log("area word template Record in wD", arraywordPlateRecord);
  };

  const validateInput = (): void => {
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
  };

  const rebuildFirstCharAfterReset = (): string[] => {
    let initRightWord: WordsObject;
    let rightWordArray: string[] = [];

    if (category === 9) {
      initRightWord =
        NineCharactersWords[
          Math.floor(Math.random() * NineCharactersWords.length)
        ];

      /* let rightWordArray: string[] = []; */

      for (let i = 0; i < initRightWord.word.length; i++) {
        rightWordArray[i] = initRightWord.word.charAt(i);
      }

      handleFirstChar([
        { id: 1, word: rightWordArray[1] },
        { id: 4, word: rightWordArray[4] },
        { id: 6, word: rightWordArray[6] },
      ]);

      handleChangeRightWordArray(rightWordArray);
    }

    if (category === 8) {
      initRightWord =
        EightCharactersWords[
          Math.floor(Math.random() * EightCharactersWords.length)
        ];

      /* let rightWordArray: string[] = []; */

      for (let i = 0; i < initRightWord.word.length; i++) {
        rightWordArray[i] = initRightWord.word.charAt(i);
      }

      handleFirstChar([
        { id: 1, word: rightWordArray[1] },
        { id: 4, word: rightWordArray[4] },
        { id: 6, word: rightWordArray[6] },
      ]);

      handleChangeRightWordArray(rightWordArray);
    }

    if (category === 10) {
      initRightWord =
        TenCharactersWords[
          Math.floor(Math.random() * TenCharactersWords.length)
        ];

      /* let rightWordArray: string[] = []; */

      for (let i = 0; i < initRightWord.word.length; i++) {
        rightWordArray[i] = initRightWord.word.charAt(i);
      }

      handleFirstChar([
        { id: 1, word: rightWordArray[1] },
        { id: 4, word: rightWordArray[4] },
        { id: 6, word: rightWordArray[6] },
      ]);

      handleChangeRightWordArray(rightWordArray);
    }

    return rightWordArray;
  };

  const handleReset = (): void => {
    const levelSet: number = 1;
    const indReset: number = 2;
    const rateScore: number = -score;
    const countIn: number = 0;
    const newTemplate: any = new Array();
    const newWordEntered: string[] = new Array();
    let miniSpanArray: Element[] = selectMiniRow();

    /* setTimeout(() => {
      window.location.reload();

      if (endMsgGame === undefined) {
        endGameMessage("empty");
      }
    }, 200); */

    for (let i = 0; i < miniSpanArray.length; i++) {
      miniSpanArray[i].innerHTML = "";
    }

    if (winOrLoose) {
      winningOrLooSing();
    }

    if (endMsgGame === "YOU LOOSE !" || "YOU WIN !") {
      endGameMessage("resetting");
    }

    updateScore(rateScore);
    updateLevel(levelSet);

    handleResetCount(countIn);

    resetTemplateRows(indReset);

    handleResetRows();

    handleChangeInput(newWordEntered);

    handleWordTemplate(newTemplate);

    let ourNewRightWordsArray = rebuildFirstCharAfterReset();

    handleChangeRightWordArray(ourNewRightWordsArray);

    console.log("reset orw new Right Word array app.tsx", rightWordArray);

    console.log("reset orw rows comeReset", comeReset);
  };

  const handleExit = (): void => {
    winningOrLooSing();
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
          <p className="special_msg"> {endMsgGame}</p>
          <div className="wrapper_reset">
            <button
              id="rest_game"
              type="button"
              className="btn_special rest_game"
              onClick={handleReset}
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
          defaultValue="9"
          onChange={handleCategory}
        >
          {/* <option value="8">08 characters</option> */}
          <option value="9">09 characters</option>
          {/*  <option value="10">10 characters</option> */}
        </select>
      </div>
      <div className="showcase_game" data-selection="1" ref={caseRef}>
        <TemplateCharacters
          category={category}
          threeFirstChar={threeFirstChar}
          wordEntered={wordEntered}
          count={count}
          countBoo={countBoo}
          inputRef={inputRef}
          resetRows={resetRows}
        />

        <div className="template_score">
          <p className="current_step">
            move :
            <span className="count_move" data-switch-img="1">
              {level}
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
            </div>
            <div
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
            </div>
            <div
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
            {winOrLoose ? (
              <button
                type="button"
                id="btn_play"
                className="btn_play_again"
                onClick={handleReset}
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
                onClick={handleReset}
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
