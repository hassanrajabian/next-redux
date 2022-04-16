import * as type from "../types";

export const setInfo = (name: string) => (dispatch: any) => {
  dispatch({
    type: type.SET_NAME,
    payload: name,
  });
};
