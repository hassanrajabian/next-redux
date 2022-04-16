import * as type from "../types";

interface Action {
  type: string;
  payload: string;
}

const initState = {
  name: "guest",
};

const main = (state = initState, action: Action) => {
  switch (action.type) {
    case type.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
      break;

    default:
      return { ...state };
      break;
  }
};

export default main;
