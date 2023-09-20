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
  count: number;
  countBoo: boolean;
  wordPlate: any[];
  arraywordPlateRecord: any;
};

const enum REDUCER_ACTION_TYPE {
  CHANGE_CATEGORY,
  CHANGE_CURRENT,
  CHANGE_INPUT,
  FIRST_CHAR,
  MATCH_CHAR,
  VALIDATE_CHANGE,
  VALIDATE_BOOLEAN,
  RECORD_WORDPLATE,
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
    | REDUCER_ACTION_TYPE.VALIDATE_BOOLEAN;
};

/* type RecordWordPlateActionType = {
  type: REDUCER_ACTION_TYPE.RECORD_WORDPLATE;
  payload: WordTPlate[];
}; */

type RecordWordPlateActionType = {
  type: REDUCER_ACTION_TYPE.RECORD_WORDPLATE;
  payload: any;
};

type ActionType =
  | CategoryActionType
  | CurrentWordActionType
  | FirstCharActionType
  | InputActionType
  | MatchActionType
  | ValidateActionType
  | RecordWordPlateActionType;

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
  count: 0,
  countBoo: false,
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

    case REDUCER_ACTION_TYPE.VALIDATE_BOOLEAN:
      return {
        ...state,
        countBoo: !state.countBoo,
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
    handleFirstChar,
    handleChangeInput,
    handleMatchingChar,
    handleWordTemplate,
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
  handleFirstChar: () => {},
  handleChangeInput: () => {},
  handleMatchingChar: () => {},
  handleWordTemplate: () => {},
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
