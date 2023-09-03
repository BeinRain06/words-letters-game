type StateType = {
  category: number;
};

type CategoryActionType = {
  type: "CHANGE_CATEGORY";
  field: string;
  data: string;
};

type ActionType = CategoryActionType;

export const INITIAL_STATE = {
  category: 9,
};

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return {
        ...state,
        [action.field]: +action.data,
      };
  }
};
