import {
  WordsObject,
  ComparisonType,
  WordTPlate,
  NineCharactersWords,
} from "../LibraryWords";

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
  type: "FIRST_CHAR";
  payload: WordsObject[];
};

type InputActionType = {
  type: "CHANGE_INPUT";
  payload: string[];
};

/* type SimilarCharActionType = {
  type: "MATCH_CHAR";
  payload: ComparisonType[];
}; */

type UnlikeCharActionType = {
  type: "UNLIKE_CHAR";
  payload: ComparisonType[];
};

type MatchActionType = {
  type: "MATCH_CHAR";
  payload: WordTPlate[];
};

type ValidateActionType = {
  type: "VALIDATE_CHANGE" | "VALIDATE_BOOLEAN";
};

/* type ValidateBooActionType = {
  type: "VALIDATE_BOOLEAN";
  payload: boolean;
}; */

type RecordWordPlateActionType = {
  type: "RECORD_WORDPLATE";
  payload: WordTPlate[];
};

type ActionType =
  | CategoryActionType
  | CurrentWordActionType
  | FirstCharActionType
  | InputActionType
  | MatchActionType
  | ValidateActionType
  | RecordWordPlateActionType;

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
  wordPlate: [{}],
  arraywordPlateRecord: [],
  count: 0,
  countBoo: false,
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
    case "FIRST_CHAR":
      return {
        ...state,
        threeFirstChar: action.payload,
      };
    case "CHANGE_INPUT":
      return {
        ...state,
        wordEntered: action.payload,
      };

    case "MATCH_CHAR":
      return {
        ...state,
        wordPlate: action.payload,
      };

    case "VALIDATE_CHANGE":
      return {
        ...state,
        count: state.count + 1,
      };

    case "VALIDATE_BOOLEAN":
      return {
        ...state,
        countBoo: !state.countBoo,
      };

    case "RECORD_WORDPLATE":
      return {
        ...state,
        arraywordPlateRecord: state.arraywordPlateRecord.push(action.payload),
      };
  }
};
