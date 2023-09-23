import React, { ReactElement, createContext, useReducer } from "react";
import { NineCharactersWords } from "../LibraryWords";

export interface WordsObject {
  id: number;
  word: string;
}

export interface ComparisonType {
  id: number;
  val: string;
}

export interface WordTPlate {
  id: number;
  val: string;
  status: string;
  bg: string;
  rad: string;
}

type StateType = {
  category: number;
  rightWords: WordsObject;
  rightWordArray: string[];
  threeFirstChar: any[];
  wordEntered: string[];
  currentImg: string;
  count: number;
  level: number;
  countBoo: boolean;
  score: number;
  wordPlate: any[];
  arraywordPlateRecord: any;
  endMsgGame: string;
  winOrLoose: boolean;
  resetRows: boolean;
};

const enum REDUCER_ACTION_TYPE {
  CHANGE_CATEGORY,
  CHANGE_CURRENT,
  CHANGE_INPUT,
  FIRST_CHAR,
  MATCH_CHAR,
  VALIDATE_CHANGE,
  VALIDATE_BOOLEAN,
  INCREMENT_LEVEL,
  CURRENT_IMG,
  UPDATE_SCORE,
  RECORD_WORDPLATE,
  WIN_LOOSE,
  END_MSG,
  RESET_ROWS,
}

type CategoryActionType = {
  type: REDUCER_ACTION_TYPE.CHANGE_CATEGORY;
  field: string;
  data: string;
};

type CurrentWordActionType = {
  type: REDUCER_ACTION_TYPE.CHANGE_CURRENT;
  payload: WordsObject;
};

type FirstCharActionType = {
  type: REDUCER_ACTION_TYPE.FIRST_CHAR;
  payload: WordsObject[];
};

type InputActionType = {
  type: REDUCER_ACTION_TYPE.CHANGE_INPUT;
  payload: string[];
};

type MatchActionType = {
  type: REDUCER_ACTION_TYPE.MATCH_CHAR;
  payload: WordTPlate[];
};

type ValidateActionType = {
  type:
    | REDUCER_ACTION_TYPE.VALIDATE_CHANGE
    | REDUCER_ACTION_TYPE.VALIDATE_BOOLEAN
    | REDUCER_ACTION_TYPE.INCREMENT_LEVEL
    | REDUCER_ACTION_TYPE.RESET_ROWS;
};

type ScoreActionType = {
  type: REDUCER_ACTION_TYPE.UPDATE_SCORE;
  payload: number;
};

type CurrentImgActionType = {
  type: REDUCER_ACTION_TYPE.CURRENT_IMG;
  payload: string;
};

type RecordWordPlateActionType = {
  type: REDUCER_ACTION_TYPE.RECORD_WORDPLATE;
  payload: any;
};

type SendEndingMsgActionType = {
  type: REDUCER_ACTION_TYPE.END_MSG;
  payload: string;
};

type WinLooseActionType = {
  type: REDUCER_ACTION_TYPE.WIN_LOOSE;
};

type ActionType =
  | CategoryActionType
  | CurrentWordActionType
  | FirstCharActionType
  | InputActionType
  | MatchActionType
  | ValidateActionType
  | ScoreActionType
  | CurrentImgActionType
  | RecordWordPlateActionType
  | SendEndingMsgActionType
  | WinLooseActionType;

// initialize the right random word to play game
const initRightWord: WordsObject =
  NineCharactersWords[Math.floor(Math.random() * NineCharactersWords.length)];

const transformWordArray = (): string[] => {
  let rightWordArray: string[] = [];

  for (let i = 0; i < initRightWord.word.length; i++) {
    rightWordArray[i] = initRightWord.word.charAt(i);
  }

  return rightWordArray;
};

let initRightWordArray: string[] = transformWordArray();

// INITIAL STATE
export const INITIAL_STATE = {
  category: 9,
  rightWords: initRightWord,
  rightWordArray: initRightWordArray,
  threeFirstChar: [
    { id: 1, word: initRightWordArray[1] },
    { id: 4, word: initRightWordArray[4] },
    { id: 6, word: initRightWordArray[6] },
  ],
  wordEntered: [],
  /*  wordPlate: [{ id: 0, val: "c", status: "unmatch", bg: "red", rad: "50%" }], */
  wordPlate: [],
  arraywordPlateRecord: [],
  currentImg: "",
  count: 0,
  countBoo: false,
  level: 1,
  score: 0,
  endMsgGame: "empty",
  winOrLoose: false,
  resetRows: false,
};

//define reducer (fn) without importing it

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.CHANGE_CATEGORY:
      return {
        ...state,
        [action.field]: +action.data,
      };
    case REDUCER_ACTION_TYPE.CHANGE_CURRENT:
      return {
        ...state,
        rightWords: action.payload,
      };
    case REDUCER_ACTION_TYPE.FIRST_CHAR:
      return {
        ...state,
        threeFirstChar: action.payload,
      };
    case REDUCER_ACTION_TYPE.CHANGE_INPUT:
      return {
        ...state,
        wordEntered: action.payload,
      };

    case REDUCER_ACTION_TYPE.MATCH_CHAR:
      return {
        ...state,
        wordPlate: action.payload,
      };

    case REDUCER_ACTION_TYPE.VALIDATE_CHANGE:
      return {
        ...state,
        count: state.count + 1,
      };

    case REDUCER_ACTION_TYPE.INCREMENT_LEVEL:
      return {
        ...state,
        level: state.level + 1,
      };

    case REDUCER_ACTION_TYPE.UPDATE_SCORE:
      return {
        ...state,
        score: state.score + action.payload,
      };

    case REDUCER_ACTION_TYPE.CURRENT_IMG:
      return {
        ...state,
        currentImg: action.payload,
      };

    case REDUCER_ACTION_TYPE.VALIDATE_BOOLEAN:
      return {
        ...state,
        countBoo: !state.countBoo,
      };

    case REDUCER_ACTION_TYPE.END_MSG:
      return {
        ...state,
        endMsgGame: action.payload,
      };

    case REDUCER_ACTION_TYPE.WIN_LOOSE:
      return {
        ...state,
        winOrLoose: !state.winOrLoose,
      };

    case REDUCER_ACTION_TYPE.RESET_ROWS:
      return {
        ...state,
        resetRows: !state.resetRows,
      };

    case REDUCER_ACTION_TYPE.RECORD_WORDPLATE:
      return {
        ...state,
        arraywordPlateRecord: action.payload,
      };

    default:
      throw new Error("Something wrong in case type");
  }
};

//bridges Fn duty entire function files
const noteGameContext = (INITIAL_STATE: StateType) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    console.log("value:", e.target.value);
    dispatch({
      type: REDUCER_ACTION_TYPE.CHANGE_CATEGORY,
      field: e.target.name,
      data: e.target.value,
    });
  };

  const changeCount = () =>
    dispatch({
      type: REDUCER_ACTION_TYPE.VALIDATE_CHANGE,
    });

  const changeBooleanCount = () =>
    dispatch({
      type: REDUCER_ACTION_TYPE.VALIDATE_BOOLEAN,
    });

  const updateLevel = () =>
    dispatch({
      type: REDUCER_ACTION_TYPE.INCREMENT_LEVEL,
    });

  const updateScore = (score: number) =>
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_SCORE,
      payload: score,
    });

  const updateImage = (picture: string) =>
    dispatch({
      type: REDUCER_ACTION_TYPE.CURRENT_IMG,
      payload: picture,
    });

  const handleFirstChar = (newChar: WordsObject[]) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.FIRST_CHAR,
      payload: newChar,
    });
  };

  const handleChangeInput = (inputConvertArray: string[]) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.CHANGE_INPUT,
      payload: inputConvertArray,
    });
  };

  const handleMatchingChar = (wordPlate: WordTPlate[]) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.MATCH_CHAR,
      payload: wordPlate,
    });
  };

  const endGameMessage = (endMsgGame: string) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.END_MSG,
      payload: endMsgGame,
    });
  };

  const winningOrLooSing = () => {
    dispatch({
      type: REDUCER_ACTION_TYPE.WIN_LOOSE,
    });
  };

  const resetTemplateRows = () => {
    dispatch({
      type: REDUCER_ACTION_TYPE.RESET_ROWS,
    });
  };

  const handleWordTemplate = (wordPlate1: WordTPlate[]) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.RECORD_WORDPLATE,
      payload: wordPlate1,
    });
  };

  return {
    state,
    handleCategory,
    changeCount,
    changeBooleanCount,
    updateLevel,
    updateScore,
    updateImage,
    handleFirstChar,
    handleChangeInput,
    handleMatchingChar,
    handleWordTemplate,
    winningOrLooSing,
    endGameMessage,
    resetTemplateRows,
  };
};

//type of our context api file
type noteGameContextType = ReturnType<typeof noteGameContext>;

//init state context
const initContextState: noteGameContextType = {
  // initial values
  state: INITIAL_STATE,
  handleCategory: () => {},
  changeCount: () => {},
  changeBooleanCount: () => {},
  updateLevel: () => {},
  updateScore: () => {},
  updateImage: () => {},
  handleFirstChar: () => {},
  handleChangeInput: () => {},
  handleMatchingChar: () => {},
  handleWordTemplate: () => {},
  winningOrLooSing: () => {},
  endGameMessage: () => {},
  resetTemplateRows: () => {},
};

//create Context
export const userGameContext =
  createContext<noteGameContextType>(initContextState);
//provider context fn

//React 18 need type for children
type ChildrenType = {
  children: ReactElement | undefined;
};

export const GameProvider = ({
  children,
  ...INITIAL_STATE
}: ChildrenType & StateType): ReactElement => {
  return (
    <userGameContext.Provider value={noteGameContext(INITIAL_STATE)}>
      {children}
    </userGameContext.Provider>
  );
};
