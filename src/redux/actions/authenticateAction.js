import { authenticateActions } from "../reducers/authenticateReducer";

function login(id, password) {
  return (dispatch, getState) => {
    dispatch(authenticateActions.login(id, password));
  };
}

export const authenticateAction = { login };
