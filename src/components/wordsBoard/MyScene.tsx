import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  EightCharactersWords,
  NineCharactersWords,
  TenCharactersWords,
} from "../../dictionnary/LibraryWords";

import { newGameContextInstance } from "../../context/NewGameContext";

import "./MyScene.css";
/* interface MyComponentProps {
    category: string;
}

interface MyComponentState {
    countColumns: {[key: number]: number[]};
    currentArray: number[] | undefined;
}
export class TemplateChataractersInput extends React.Component<MyComponentProps,  MyComponentState> {
  
  state:MyComponentState = {
    countColumns = {
        0: [0, 1, 2, 3, 4, 5, 6, 7],
        1: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        2: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
  
    currentArray = []
    
  }

  componentDidMount() {
    
  }

 

  render() {
    const {category} = this.props;
    const {countColumns, currentArray} = this.state;

    return
   
    
  
} */

export interface TemplateCharInputProps {
  category: number;
}

export interface SpanType {
  arg: (HTMLSpanElement | null)[];
}

export type WordStorageType = {
  id: number;
  char: string;
  statusFlag: string;
};

export const TemplateCharInput = forwardRef(
  ({ category }: { category: number }, ref) => {
    const [countColumns, setCountColumns] = useState({
      0: [0, 1, 2, 3, 4, 5, 6, 7],
      1: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      2: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    });

    const [columnsBox, setColumnsBox] = useState<number[] | undefined>([]);
    const itemsRef = useRef<SpanType["arg"]>([]);

    const handleInputDisplay = (typeAction, newValueArrObj?) => {
      console.log("enter handleInputDisplay");

      const active_index = 0;

      const rowStartIndex = active_index * columnsBox!.length;

      const rowEndIndex = rowStartIndex + columnsBox!.length;

      if (typeAction === "wordTyped") {
        for (let i = 0; i < rowEndIndex; i++) {
          const boxElement = document.getElementById(`mini_input_box_${i}`);

          if (boxElement) {
            boxElement.innerText = newValueArrObj[i]
              ? newValueArrObj[i].char
              : "";
          }
        }
      } else if (typeAction === "validation") {
        for (let i = 0; i < rowEndIndex; i++) {
          const boxElement = document.getElementById(`mini_input_box_${i}`);

          if (boxElement) {
            boxElement.innerText = "";
          }
        }
      }
    };

    //recognize the call of handleWordentered Fn into the parent container
    useImperativeHandle(ref, () => ({
      handleInputDisplay: handleInputDisplay,
    }));

    //useEffect pick mini-template Toggler to display
    useEffect(() => {
      if (category === 8) {
        setColumnsBox(countColumns[0]);
      } else if (category === 9) {
        setColumnsBox(countColumns[1]);
      } else if (category === 10) {
        setColumnsBox(countColumns[2]);
      }
    }, [category]);

    /* const affectStyle = {
    width: "100%",
    height: "100%",
    margin: "0 2px",
    border: " 1px solid #4a4a88",
  }; */

    return (
      <>
        {columnsBox?.map((elt, i) => (
          <span
            key={`mini_input_box_${i}`}
            id={`mini_input_box_${i}`}
            className="char_box_input"
          ></span>
        ))}
      </>
    );
  }
);

export const TemplateWordGame1 = ({ category }: { category: number }) => {
  const wordsContainRef = useRef<HTMLDivElement>(null);

  const itemsRef_1 = useRef<SpanType["arg"]>([]);
  const itemsRef_2 = useRef<SpanType["arg"]>([]);
  const itemsRef_3 = useRef<SpanType["arg"]>([]);
  const itemsRef_4 = useRef<SpanType["arg"]>([]);
  const itemsRef_5 = useRef<SpanType["arg"]>([]);
  const itemsRef_6 = useRef<SpanType["arg"]>([]);
  const itemsRef_7 = useRef<SpanType["arg"]>([]);
  const itemsRef_8 = useRef<SpanType["arg"]>([]);
  const itemsRef_9 = useRef<SpanType["arg"]>([]);

  const [countColumns, setCountColumns] = useState({
    0: [0, 1, 2, 3, 4, 5, 6, 7],
    1: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    2: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });

  const [columnsBox, setColumnsBox] = useState<number[] | undefined>([]);

  const [wordTypedObj, setWordTypedObj] = useState<WordStorageType[]>([]);

  const [guessWordObj, setGuessWordObj] = useState<WordStorageType[]>([]);

  const {
    state: { guessWord, currentIndexActiveRow, isClickReset },
    handleGuessWord,
    handleLevelGame,
    handleScoreGame,
    handleCurrentActiveRow,
    handleWinOrLoose,
  } = useContext(newGameContextInstance);

  //useEffect pick mini-template Toggler to display

  useEffect((): any => {
    // execute and fill three char in the first row of the game
    pickThreeChar();

    return () => (itemsRef_1.current = []);
  }, [category]);

  useEffect(() => {
    if (isClickReset) {
      // reset all boxes between index 0 and current index active row
      emptyColumnsBoxes();

      //empty words obj store
      setWordTypedObj([]);
      setGuessWordObj([]);

      //reset some state var in NewGameContext.tsx
      handleCurrentActiveRow(0);
      handleWinOrLoose(false);
      handleLevelGame(1);
      handleScoreGame(0);
    }
  }, [isClickReset]);

  useEffect((): any => {
    // execute and fill three char in the first row of the game
    pickThreeChar();

    return () => (itemsRef_1.current = []);
  }, []);

  // (RESET) empty the canvas box
  const emptyColumnsBoxes = () => {
    for (let i = 0; i <= currentIndexActiveRow; i++) {
      const rowStartIndex = i * columnsBox!.length;
      const rowEndIndex = rowStartIndex + columnsBox!.length;

      for (let j = rowStartIndex; j < rowEndIndex; j++) {
        const boxElement = document.getElementById(`input_box_${j}`);
        if (boxElement) {
          boxElement.innerText = "";
          boxElement.style.backgroundColor = ""; // reset background color
        }
      }
    }
  };

  // pick three char
  const pickThreeChar = () => {
    let arrSelect;
    let lastRandomNumber: number = -1;

    switch (category) {
      case 8:
        arrSelect = EightCharactersWords;
        break;
      case 9:
        arrSelect = NineCharactersWords;
        break;
      case 10:
        arrSelect = TenCharactersWords;
        break;
      default:
        throw new Error(
          "03 chars selection miss arrSelect between 8 to 10 characters"
        );
    }

    // set value guess word

    const randomWordIndex: number = Math.floor(
      Math.random() * (arrSelect.length - 0)
    );

    const wordGuessSelection = arrSelect[randomWordIndex];

    handleGuessWord(wordGuessSelection);

    if (wordTypedObj.length === 0) {
      //initialize string Obj in ObjStore
      for (let i = 0; i < wordGuessSelection.length; i++) {
        const itemObjTyped: WordStorageType = {
          id: i,
          char: "",
          statusFlag: "",
        };

        const itemObjGuess: WordStorageType = {
          id: i,
          char: wordGuessSelection[i],
          statusFlag: "",
        };

        // preset word Object
        setWordTypedObj([...wordTypedObj, itemObjTyped]);
        setGuessWordObj([...guessWordObj, itemObjGuess]);
      }

      // pick 03 random characters and fill string Obj;

      let j = 0;
      while (j <= 2) {
        // choose a random number between 0 and arr.length --[3]-times
        const randomNumber = Math.floor(
          Math.random() * (wordGuessSelection.length - 0)
        );

        if (randomNumber !== lastRandomNumber) {
          setWordTypedObj([
            {
              id: randomNumber,
              char: wordGuessSelection[randomNumber],
              statusFlag: "",
            },
            ...wordTypedObj.filter((elt) => elt.id !== randomNumber),
          ]);
          lastRandomNumber = randomNumber;
          j++;
        }
      }

      // fill the three column boxes of the first row of the game;
      itemsRef_1.current.forEach((elt, i) => {
        if (elt) {
          elt.innerText = wordTypedObj[i].char;
        }
      });
    }
  };

  return (
    <>
      <div className="words_container" ref={wordsContainRef}>
        <div className="word_row_1 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              id={`input_box_${i}`}
              className="char_box"
              ref={(el) => (itemsRef_1.current[i] = el)}
            ></span>
          ))}
        </div>
        <div className="word_row_2 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              id={`input_box_${i + columnsBox.length}`}
              className="char_box"
              ref={(el) => (itemsRef_2.current[i] = el)}
            ></span>
          ))}
        </div>
        <div className="word_row_3 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              id={`input_box_${i + 2 * columnsBox.length}`}
              className="char_box"
              ref={(el) => (itemsRef_3.current[i] = el)}
            ></span>
          ))}
        </div>
        <div className="word_row_4 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              id={`input_box_${i + 3 * columnsBox.length}`}
              className="char_box"
              ref={(el) => (itemsRef_4.current[i] = el)}
            ></span>
          ))}
        </div>
        <div className="word_row_5 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              id={`input_box_${i + 4 * columnsBox.length}`}
              className="char_box"
              ref={(el) => (itemsRef_5.current[i] = el)}
            ></span>
          ))}
        </div>
        <div className="word_row_6 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              id={`input_box_${i + 5 * columnsBox.length}`}
              className="char_box"
              ref={(el) => (itemsRef_6.current[i] = el)}
            ></span>
          ))}
        </div>
        <div className="word_row_7 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              id={`input_box_${i + 6 * columnsBox.length}`}
              className="char_box"
              ref={(el) => (itemsRef_7.current[i] = el)}
            ></span>
          ))}
        </div>
        <div className="word_row_8 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              id={`input_box_${i + 7 * columnsBox.length}`}
              className="char_box"
              ref={(el) => (itemsRef_8.current[i] = el)}
            ></span>
          ))}
        </div>
        <div className="word_row_9 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              id={`input_box_${i + 8 * columnsBox.length}`}
              className="char_box"
              ref={(el) => (itemsRef_9.current[i] = el)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export const TemplateWordGame = forwardRef((props, ref): any => {
  const wordsContainRef = useRef<HTMLDivElement>(null);

  const itemsRef_1 = useRef<SpanType["arg"]>([]);
  const itemsRef_2 = useRef<SpanType["arg"]>([]);
  const itemsRef_3 = useRef<SpanType["arg"]>([]);
  const itemsRef_4 = useRef<SpanType["arg"]>([]);
  const itemsRef_5 = useRef<SpanType["arg"]>([]);
  const itemsRef_6 = useRef<SpanType["arg"]>([]);
  const itemsRef_7 = useRef<SpanType["arg"]>([]);
  const itemsRef_8 = useRef<SpanType["arg"]>([]);
  const itemsRef_9 = useRef<SpanType["arg"]>([]);

  const [countColumns, setCountColumns] = useState({
    0: [0, 1, 2, 3, 4, 5, 6, 7],
    1: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    2: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });

  const [columnsBox, setColumnsBox] = useState<number[] | undefined>([]);

  const [wordTypedObj, setWordTypedObj] = useState<WordStorageType[]>([]);

  const [arrListWordTypedObj, setArrListWordTypedObj] = useState<
    WordStorageType[][]
  >([]);

  const [goodCharTypedObj, setGoodCharTypedObj] = useState<WordStorageType[]>(
    []
  );

  const [guessWordObj, setGuessWordObj] = useState<WordStorageType[]>([]);

  const {
    state: {
      guessWord,
      levelGame,
      gameOverText,
      winOrLoose,
      category,
      currentIndexActiveRow,
      isClickReset,
    },
    handleGuessWord,
    handleLevelGame,
    handleScoreGame,
    handleCurrentActiveRow,
    handleWinOrLoose,
    handleGameOverText,
    handleClickReset,
    handleIsEndGame,
  } = useContext(newGameContextInstance);

  //recognize the call of handleWordentered Fn into the parent container
  useImperativeHandle(ref, () => ({
    handleWordEntered: handleWordEntered,
    handleValidateInput: handleValidateInput,
  }));

  //useEffect pick mini-template Toggler to display
  useEffect((): any => {
    //select Game Word to Guess
    callWordToGuess();

    async function callWordToGuess() {
      const wordToGuess = await selectWordToGuess();

      console.log("wordToGuess useEffect:", wordToGuess);

      pickThreeChar(wordToGuess);
    }

    return () => (itemsRef_1.current = []);
  }, [category, columnsBox, isClickReset]);

  useEffect(() => {
    if (isClickReset) {
      // reset all boxes between index 0 and current index active row
      emptyColumnsBoxes();

      //empty words obj store
      setWordTypedObj([]);
      setGuessWordObj([]);

      //reset some state var in NewGameContext.tsx
      handleCurrentActiveRow(0);
      handleWinOrLoose(false);
      handleLevelGame(1);
      handleScoreGame(0);
      handleClickReset(false);
      handleGameOverText("");

      //select Game Word to Guess
      selectWordToGuess();
    }
  }, [isClickReset, columnsBox]);

  // state indicating if the GAME is OVER
  useEffect(() => {
    if (gameOverText === "YOU LOOSE!") {
      /*  handleGameOverText("YOU LOOSE!"); */

      console.log("YOU LOOSE!");
      handleIsEndGame(true);
    } else if (gameOverText === "YOU WIN!") {
      /*  handleGameOverText("YOU WIN!"); */

      console.log("YOU WIN!");
      handleIsEndGame(true);
    }
  }, [gameOverText]);

  // (RESET) empty the canvas box
  const emptyColumnsBoxes = () => {
    for (let i = 0; i <= currentIndexActiveRow; i++) {
      const rowStartIndex = i * columnsBox!.length;
      const rowEndIndex = rowStartIndex + columnsBox!.length;

      for (let j = rowStartIndex; j < rowEndIndex; j++) {
        const boxElement = document.getElementById(`input_box_${j}`);
        if (boxElement) {
          boxElement.innerText = "";
          boxElement.style.backgroundColor = ""; // reset background color
        }
      }
    }
  };

  //pick three char

  const pickThreeChar = (wordToGuess: { id: number; word: string }) => {
    let tempWordTypedHolderObj: WordStorageType[] = [];
    let tempGuessWordHolderObj: WordStorageType[] = [];

    let lastRandomNumber: number = -1;

    console.log("wordTypedObj :", wordTypedObj);

    const wordTypedPresentChar = wordTypedObj.filter(
      (item, i) => item.char !== ""
    );

    //initialize string Obj in ObjStore
    console.log("wordToGuess:", wordToGuess);
    const grabInnerWordToGuess = wordToGuess.word;

    for (let i = 0; i < grabInnerWordToGuess.length; i++) {
      const itemObjTyped: WordStorageType = {
        id: i,
        char: "",
        statusFlag: "",
      };

      const itemObjGuess: WordStorageType = {
        id: i,
        char: grabInnerWordToGuess[i],
        statusFlag: "",
      };

      // preset word Object

      tempWordTypedHolderObj = [...tempWordTypedHolderObj, itemObjTyped];

      tempGuessWordHolderObj = [...tempGuessWordHolderObj, itemObjGuess];
    }

    setTimeout(() => {
      setWordTypedObj(tempWordTypedHolderObj);
      setGuessWordObj(tempGuessWordHolderObj);
    }, 3000);

    // pick 03 random characters and fill string Obj;

    let j = 0;
    while (j <= 2) {
      // choose a random number between 0 and arr.length --[3]-times
      const randomNumber = Math.floor(
        Math.random() * (grabInnerWordToGuess.length - 0)
      );

      if (randomNumber !== lastRandomNumber) {
        tempWordTypedHolderObj = [
          {
            id: randomNumber,
            char: grabInnerWordToGuess[randomNumber],
            statusFlag: "",
          },
          ...tempWordTypedHolderObj.filter((elt) => elt.id !== randomNumber),
        ];

        lastRandomNumber = randomNumber;
        j++;
      }
    }

    setTimeout(() => {
      setWordTypedObj(tempWordTypedHolderObj);
    }, 3000);

    //sort items by ascending order (--id reference-- )
    tempWordTypedHolderObj.sort((itemA, itemB) => itemA.id - itemB.id);

    console.log("tempWordTypedHolderObj:", tempWordTypedHolderObj);

    // record an instance of three char
    setGoodCharTypedObj(tempWordTypedHolderObj);

    const active_index = currentIndexActiveRow;

    const rowStartIndex = active_index * columnsBox!.length;

    const rowEndIndex = rowStartIndex + columnsBox!.length;

    console.log("rowStartIndex :", rowStartIndex);

    console.log("rowEndIndex :", rowEndIndex);

    //init the first row boxes with three char
    for (let j = rowStartIndex; j < rowEndIndex; j++) {
      const boxElement = document.getElementById(`input_box_${j}`);

      if (boxElement) {
        /*  const charRetrieve = tempWordTypedHolderObj[j - rowStartIndex].char; */

        console.log(
          `tempWordTypedHolderObj[${j}] :`,
          tempWordTypedHolderObj[j]
        );

        /* const charRetrieve = tempWordTypedHolderObj[j].char; */

        let charRetrieve: string = "";
        if (tempWordTypedHolderObj[j] === undefined) {
          charRetrieve = "";
        } else {
          charRetrieve = tempWordTypedHolderObj[j].char;
        }

        boxElement.innerText = charRetrieve.toUpperCase();
      }

      console.log("boxElement in three Char :", boxElement);
    }
  };

  // select word to guess

  const selectWordToGuess = async () => {
    let arrSelect;

    switch (category) {
      case 8:
        arrSelect = EightCharactersWords;
        await setColumnsBox(countColumns[0]);
        break;
      case 9:
        arrSelect = NineCharactersWords;
        await setColumnsBox(countColumns[1]);
        break;
      case 10:
        arrSelect = TenCharactersWords;
        await setColumnsBox(countColumns[2]);
        break;
      default:
        throw new Error(
          "03 chars selection miss arrSelect between 8 to 10 characters"
        );
    }

    console.log("arrSelect:", arrSelect);

    // set value guess word

    const randomWordIndex: number = Math.floor(
      Math.random() * (arrSelect.length - 0)
    );

    const wordGuessSelection = arrSelect[randomWordIndex];

    console.log("wordGuessSelection in selectWordToGuess:", wordGuessSelection);

    handleGuessWord(wordGuessSelection.word);

    return wordGuessSelection;
  };

  const fillBgColorBoxesRowByDefault = (hexColorValue) => {
    if (currentIndexActiveRow < 9) {
      const i = currentIndexActiveRow;

      const rowStartIndex = i * columnsBox!.length;

      const rowEndIndex = rowStartIndex + columnsBox!.length;
      for (let j = rowStartIndex; j < rowEndIndex; j++) {
        const boxElement = document.getElementById(`input_box_${j}`);
        boxElement!.style.backgroundColor = hexColorValue;
        setTimeout(() => {
          boxElement!.style.opacity = "0.85";
        }, 650);
        boxElement!.style.opacity = "1";
      }
    }
  };

  const checkAndCompareWords = (occurence: string) => {
    const i = currentIndexActiveRow;

    const rowStartIndex = i * columnsBox!.length;

    const rowEndIndex = rowStartIndex + columnsBox!.length;

    console.log("guessWordObj --check-compare-- :", guessWordObj);
    console.log("wordTypedObj --check-compare-- :", wordTypedObj);

    let newWordTypedObj = wordTypedObj;

    // check proper length
    newWordTypedObj =
      newWordTypedObj.length > guessWordObj.length
        ? newWordTypedObj.slice(0, guessWordObj.length)
        : newWordTypedObj;

    if (occurence === "first time") {
      //compare wordTypedObj and guessWordObj
      guessWordObj.map((item, i) => {
        // update statusFlag
        if (item.char === newWordTypedObj[i].char) {
          /* newWordTypedObj = handleWordTypedStatusFlag(
            newWordTypedObj,
            "green",
            i
          ); */

          newWordTypedObj[i].statusFlag = "green";
        } else {
          /* newWordTypedObj = handleWordTypedStatusFlag(
            newWordTypedObj,
            "red",
            i
          ); */

          newWordTypedObj[i].statusFlag = "red";
        }
      });
    } else if (occurence === "n times") {
      //compare wordTypedObj with each word in arrListWordObj
      for (let k = 0; k < arrListWordTypedObj.length; k++) {
        const previousWord = arrListWordTypedObj[k];

        console.log("previousWord n times:", previousWord);

        previousWord.map((item, i) => {
          // update statusFlag
          if (
            item.char === newWordTypedObj[i].char &&
            item.statusFlag !== "green"
          ) {
            /* newWordTypedObj = handleWordTypedStatusFlag(
              newWordTypedObj,
              "yellow",
              i
            ); */
            newWordTypedObj[i].statusFlag = "yellow";
          }
        });
      }

      //compare wordTypedObj and guessWordObj
      guessWordObj.map((item, i) => {
        // update statusFlag
        if (item.char === newWordTypedObj[i].char) {
          /* newWordTypedObj = handleWordTypedStatusFlag(
            newWordTypedObj,
            "green",
            i
          ); */

          newWordTypedObj[i].statusFlag = "green";
        } else if (newWordTypedObj[i].statusFlag !== "yellow") {
          /* newWordTypedObj = handleWordTypedStatusFlag(
            newWordTypedObj,
            "red",
            i
          ); */

          newWordTypedObj[i].statusFlag = "red";
        }
      });

      console.log(
        "--newWordTypedObj after n times 3 -- -check&compare- :",
        newWordTypedObj
      );
    }

    return newWordTypedObj;
  };

  const playColorChar = (wordTypedObj: WordStorageType[]) => {
    const i = currentIndexActiveRow;

    const rowStartIndex = i * columnsBox!.length;

    const rowEndIndex = rowStartIndex + columnsBox!.length;

    let recordGreenChar: WordStorageType[] = [];

    let countGreenChar: number = 0;

    /*  console.log("rowStartIndex --playColorChar-- :", rowStartIndex);

    console.log("rowEndIndex --playColorChar-- :", rowEndIndex); */

    for (let j = rowStartIndex; j < rowEndIndex; j++) {
      const boxElement = document.getElementById(`input_box_${j}`);

      /* console.log("wordTypedObj --playColorChar-- :", wordTypedObj); */

      const color = wordTypedObj[j - rowStartIndex].statusFlag;

      if (boxElement) {
        if (color === "green") {
          setTimeout(() => {
            //await little times
          }, 2000);

          boxElement.style.backgroundColor = "green";
          countGreenChar++;
        } else if (color === "yellow") {
          setTimeout(() => {
            //await little times
          }, 2000);

          boxElement.style.backgroundColor = "yellow";
        } else if (color === "red") {
          setTimeout(() => {
            //await little times
          }, 2000);

          boxElement.style.backgroundColor = "red";
        }
      }
    }

    wordTypedObj.map((item, k) => {
      if (item.statusFlag === "green") {
        recordGreenChar.push({
          id: item.id,
          char: item.char,
          statusFlag: item.statusFlag,
        });
      } else {
        recordGreenChar.push({
          id: item.id,
          char: "",
          statusFlag: "",
        });
      }
    });

    recordGreenChar = recordGreenChar.sort(
      (itemA, itemB) => itemA.id - itemB.id
    );

    return { recordGreenChar, countGreenChar };
  };

  const initiateNewRowEntry = (recordGreenChar, newIndexActive) => {
    // do something;
    const i = newIndexActive;

    const rowStartIndex = i * columnsBox!.length;

    const rowEndIndex = rowStartIndex + columnsBox!.length;

    for (let j = rowStartIndex; j < rowEndIndex; j++) {
      const boxElement = document.getElementById(`input_box_${j}`);
      const charRecord = recordGreenChar[j - rowStartIndex].char;

      boxElement!.innerText = charRecord.toUpperCase();
    }
  };

  //handle WorD ENTERED
  const handleWordEntered = (eltObj) => {
    //catch wordTypedObj
    setWordTypedObj(eltObj);

    /*  console.log("guessWordObj :", guessWordObj);
      console.log("eltObj :", eltObj); */

    // fill char in the specific row
    if (currentIndexActiveRow < 9) {
      const i = currentIndexActiveRow;

      const rowStartIndex = i * columnsBox!.length;

      const rowEndIndex = rowStartIndex + columnsBox!.length;

      for (let j = rowStartIndex; j < rowEndIndex; j++) {
        const boxElement = document.getElementById(`input_box_${j}`);
        const k = j - rowStartIndex;

        if (eltObj.length === 0) {
          if (boxElement && goodCharTypedObj[k]) {
            /*  console.log(`goodCharTypedObj[${k}]`, goodCharTypedObj[k]); */

            const charRetrieve = goodCharTypedObj[k].char;

            boxElement!.innerText = charRetrieve.toUpperCase();
          }
        } else {
          if (boxElement) {
            const isPosElt = eltObj[k] ? true : false;

            if (isPosElt) {
              const charRetrieve = eltObj[k].char;
              boxElement!.innerText = charRetrieve.toUpperCase();
            } else {
              boxElement!.innerText = "";
            }
          }
        }
      }
    }
  };

  //handle VaLiDate InPuT
  const handleValidateInput = () => {
    //first state blue color wave
    fillBgColorBoxesRowByDefault("#12496e");

    const isList = arrListWordTypedObj.length !== 0 ? true : false;

    let wordToAnime: WordStorageType[];

    if (!isList) {
      wordToAnime = checkAndCompareWords("first time");
    } else {
      wordToAnime = checkAndCompareWords("n times");
    }

    wordToAnime = wordToAnime.sort((itemA, itemB) => itemA.id - itemB.id);

    console.log("--word-to-anime :", wordToAnime);

    //play columns boxes bg-color
    const greenCharPackObj = playColorChar(wordToAnime);

    const selectedGreenCharObj = greenCharPackObj.recordGreenChar;

    /*   console.log("greenCharPackObj --+-- :", greenCharPackObj); */

    //save green char obj
    setGoodCharTypedObj(selectedGreenCharObj);

    //update score
    const countGreenChar = greenCharPackObj.countGreenChar;

    const newScore: number = 10 * countGreenChar;

    handleScoreGame(newScore);

    // add word displayed to array words list typed
    setArrListWordTypedObj([...arrListWordTypedObj, wordToAnime]);

    //index row active update
    const isGameContinuing = currentIndexActiveRow < 9 ? true : false;

    if (isGameContinuing) {
      //check winning or loosing Game
      const arrStatGreen = selectedGreenCharObj.filter(
        (item) => item.statusFlag === "green"
      );

      if (arrStatGreen.length === guessWord.length) {
        handleWinOrLoose(true);
        handleGameOverText("YOU WIN!");
        return;
      } else if (
        arrStatGreen.length !== guessWord.length &&
        currentIndexActiveRow === 8
      ) {
        handleWinOrLoose(false);
        handleGameOverText("YOU LOOSE!");
        return;
      }

      //update level game
      handleLevelGame(levelGame + 1);
      //update current active row
      const newIndexActive = currentIndexActiveRow + 1;

      handleCurrentActiveRow(newIndexActive);

      // ==> NEXT : HERE WRITE --INITIATE NEXT ROW ENTRY FN

      initiateNewRowEntry(selectedGreenCharObj, newIndexActive);
    } else {
      handleIsEndGame(true);
    }
  };

  return (
    <>
      <div className="words_container" ref={wordsContainRef}>
        <div className="word_row_1 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              key={`input_box_${i}`}
              id={`input_box_${i}`}
              className="char_box"
              ref={(el) => (itemsRef_1.current[i] = el)}
            ></span>
          ))}
        </div>
        <div className="word_row_2 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              key={`input_box_${i + columnsBox.length}`}
              id={`input_box_${i + columnsBox.length}`}
              className="char_box"
              ref={(el) => (itemsRef_2.current[i] = el)}
            ></span>
          ))}
        </div>
        <div className="word_row_3 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              key={`input_box_${i + 2 * columnsBox.length}`}
              id={`input_box_${i + 2 * columnsBox.length}`}
              className="char_box"
              ref={(el) => (itemsRef_3.current[i] = el)}
            ></span>
          ))}
        </div>
        <div className="word_row_4 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              key={`input_box_${i + 3 * columnsBox.length}`}
              id={`input_box_${i + 3 * columnsBox.length}`}
              className="char_box"
              ref={(el) => (itemsRef_4.current[i] = el)}
            ></span>
          ))}
        </div>
        <div className="word_row_5 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              key={`input_box_${i + 4 * columnsBox.length}`}
              id={`input_box_${i + 4 * columnsBox.length}`}
              className="char_box"
              ref={(el) => (itemsRef_5.current[i] = el)}
            ></span>
          ))}
        </div>
        <div className="word_row_6 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              key={`input_box_${i + 5 * columnsBox.length}`}
              id={`input_box_${i + 5 * columnsBox.length}`}
              className="char_box"
              ref={(el) => (itemsRef_6.current[i] = el)}
            ></span>
          ))}
        </div>
        <div className="word_row_7 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              key={`input_box_${i + 6 * columnsBox.length}`}
              id={`input_box_${i + 6 * columnsBox.length}`}
              className="char_box"
              ref={(el) => (itemsRef_7.current[i] = el)}
            ></span>
          ))}
        </div>
        <div className="word_row_8 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              key={`input_box_${i + 7 * columnsBox.length}`}
              id={`input_box_${i + 7 * columnsBox.length}`}
              className="char_box"
              ref={(el) => (itemsRef_8.current[i] = el)}
            ></span>
          ))}
        </div>
        <div className="word_row_9 word_row">
          {columnsBox?.map((elt, i) => (
            <span
              key={`input_box_${i + 8 * columnsBox.length}`}
              id={`input_box_${i + 8 * columnsBox.length}`}
              className="char_box"
              ref={(el) => (itemsRef_9.current[i] = el)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
});
