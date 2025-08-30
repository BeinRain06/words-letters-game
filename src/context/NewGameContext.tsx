import React, {
  ReactElement,
  useState,
  useReducer,
  createContext,
} from "react";

// bunch of Type Anntotations

export type STATE_TYPE = {
  category: number;
  guessWord: string;
  winOrLoose: boolean;
  gameOverText: string;
  currentIndexActiveRow: number;
  isClickReset: boolean;
  isInputChange: boolean;
  levelGame: number;
  score: number;
};

// type of each element of STATE
type CATEGORY_ACTION_TYPE = {
  type: TABLE_ACTION_TYPE.CATEGORY;
  payload: number;
};

type GUESSWORD_ACTION_TYPE = {
  type: TABLE_ACTION_TYPE.GUESSWORD;
  payload: string;
};

type LEVEL_GAME_ACTION_TYPE = {
  type: TABLE_ACTION_TYPE.LEVEL_GAME;
  payload: number;
};

type SCORE_GAME_ACTION_TYPE = {
  type: TABLE_ACTION_TYPE.SCORE_GAME;
  payload: number;
};

type WINLOOSE_ACTION_TYPE = {
  type: TABLE_ACTION_TYPE.WIN_LOOSE;
};

type GAME_OVER_TEXT_ACTION_TYPE = {
  type: TABLE_ACTION_TYPE.GAME_OVER_TEXT;
  payload: string;
};

type CURRENT_INDEX_ACTIVE_ROW_ACTION_TYPE = {
  type: TABLE_ACTION_TYPE.INDEX_ACTIVE_ROW;
  payload: number;
};

type CLICK_RESET_ACTION_TYPE = {
  type: TABLE_ACTION_TYPE.CLICK_RESET;
};

// entire ACTION_TYPE

export type REDUCER_ACTION_TYPE =
  | CATEGORY_ACTION_TYPE
  | GUESSWORD_ACTION_TYPE
  | LEVEL_GAME_ACTION_TYPE
  | SCORE_GAME_ACTION_TYPE
  | WINLOOSE_ACTION_TYPE
  | GAME_OVER_TEXT_ACTION_TYPE
  | CURRENT_INDEX_ACTIVE_ROW_ACTION_TYPE
  | CLICK_RESET_ACTION_TYPE;

// Initialize State
export const INITIAL_STATE: STATE_TYPE = {
  category: 9,
  guessWord: "",
  winOrLoose: false,
  gameOverText: "",
  currentIndexActiveRow: 0,
  isClickReset: false,
  isInputChange: false,
  levelGame: 1,
  score: 0,
};

// define **reducer** fn for useReducer custom Hook

export const enum TABLE_ACTION_TYPE {
  CATEGORY,
  GUESSWORD,
  LEVEL_GAME,
  SCORE_GAME,
  WIN_LOOSE,
  GAME_OVER_TEXT,
  INDEX_ACTIVE_ROW,
  CLICK_RESET,
  INPUT_CHANGE,
}

const reducer = (state: STATE_TYPE, action: REDUCER_ACTION_TYPE) => {
  switch (action.type) {
    case TABLE_ACTION_TYPE.CATEGORY:
      //do something;
      return {
        ...state,
        category: action.payload,
      };

    case TABLE_ACTION_TYPE.GUESSWORD:
      //do something;
      return {
        ...state,
        guessWord: action.payload,
      };
    case TABLE_ACTION_TYPE.LEVEL_GAME:
      //do something;
      return {
        ...state,
        levelGame: action.payload,
      };
    case TABLE_ACTION_TYPE.SCORE_GAME:
      //do something;
      return {
        ...state,
        score: action.payload,
      };
    case TABLE_ACTION_TYPE.WIN_LOOSE:
      //do something;
      return {
        ...state,
        winOrLoose: !state.winOrLoose,
      };
    case TABLE_ACTION_TYPE.GAME_OVER_TEXT:
      //do something;
      return {
        ...state,
        gameOverText: action.payload,
      };
    case TABLE_ACTION_TYPE.INDEX_ACTIVE_ROW:
      //do something;
      return {
        ...state,
        currentIndexActiveRow: action.payload,
      };
    case TABLE_ACTION_TYPE.CLICK_RESET:
      //do something;
      return {
        ...state,
        isClickReset: !state.isClickReset,
      };
    default:
      throw new Error("Error reducer NewGameContext");
  }
};

// create a Custom Hook
type NewGameContextHookType = ReturnType<typeof NewGameContextHook>;

const NewGameContextHook = (INITIAL_STATE: STATE_TYPE) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  /*  const { category, guessWord } = INITIAL_STATE; */

  const handleCategory = (
    e: React.ChangeEvent<HTMLSelectElement>,
    { setTemplate }
  ) => {
    const newValue = e.target.value;

    // change template useState in App.tsx
    setTemplate(newValue);

    // affect new value to state: **category**
    dispatch({ type: TABLE_ACTION_TYPE.CATEGORY, payload: +newValue });
  };

  const handleGuessWord = (elt: string) =>
    dispatch({
      type: TABLE_ACTION_TYPE.GUESSWORD,
      payload: elt,
    });

  const handleLevelGame = (elt: number) =>
    dispatch({
      type: TABLE_ACTION_TYPE.LEVEL_GAME,
      payload: elt,
    });

  const handleScoreGame = (elt: number) =>
    dispatch({
      type: TABLE_ACTION_TYPE.SCORE_GAME,
      payload: elt,
    });

  const handleWinOrLoose = () =>
    dispatch({ type: TABLE_ACTION_TYPE.WIN_LOOSE });

  const handleGameOverText = (elt: string) =>
    dispatch({
      type: TABLE_ACTION_TYPE.GAME_OVER_TEXT,
      payload: elt,
    });

  const handleCurrentActiveRow = (elt: number) =>
    dispatch({
      type: TABLE_ACTION_TYPE.INDEX_ACTIVE_ROW,
      payload: elt,
    });

  const handleClickReset = () =>
    dispatch({
      type: TABLE_ACTION_TYPE.CLICK_RESET,
    });

  return {
    state,
    handleCategory,
    handleGuessWord,
    handleLevelGame,
    handleScoreGame,
    handleWinOrLoose,
    handleGameOverText,
    handleCurrentActiveRow,
    handleClickReset,
  };
};

//** create a Context ** //
// initialized default context value
const initContextState: NewGameContextHookType = {
  state: INITIAL_STATE,
  handleCategory: () => {},
  handleGuessWord: () => {},
  handleLevelGame: () => {},
  handleScoreGame: () => {},
  handleWinOrLoose: () => {},
  handleGameOverText: () => {},
  handleCurrentActiveRow: () => {},
  handleClickReset: () => {},
};

//Context  creation
export const newGameContextInstance =
  createContext<NewGameContextHookType>(initContextState);

// Context Provider

type ChildrenType = {
  children: ReactElement | undefined;
};

export const NewGameContextProvider = ({
  children,
  ...INITIAL_STATE
}: ChildrenType & STATE_TYPE): ReactElement => {
  return (
    <newGameContextInstance.Provider value={NewGameContextHook(INITIAL_STATE)}>
      {children}
    </newGameContextInstance.Provider>
  );
};
