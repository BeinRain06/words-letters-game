import { WordsObject } from "../LibraryWords";

type StateType = {
  category: number;
  rightWords: WordsObject;
  threeFirstChar: any[];
};

type CategoryActionType = {
  type: "CHANGE_CATEGORY";
  field: string;
  data: string;
};

type CurrentWordActionType = {
  type: "CHANGE_CURRENT";
  payload: WordsObject;
};

type FirstCharActionType = {
  type: "ADD_CHAR";
  payload: WordsObject[];
};

type ActionType =
  | CategoryActionType
  | CurrentWordActionType
  | FirstCharActionType;

export const INITIAL_STATE = {
  category: 9,
  rightWords: { id: 7, word: "principle" },
  threeFirstChar: [
    { id: 1, chr: "r" },
    { id: 4, chr: "c" },
    { id: 6, chr: "p" },
  ],
};

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return {
        ...state,
        [action.field]: +action.data,
      };
    case "CHANGE_CURRENT":
      return {
        ...state,
        rightWords: action.payload,
      };
    case "ADD_CHAR":
      return {
        ...state,
        threeFirstChar: action.payload,
      };
  }
};
