import {
  ADD_INFO,
  DELETE_INFO,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_INFO,
  FILTER_INFO,
  CLEAR_FILTER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_INFO:
      return {
        ...state,
        userInfo: [...state.userInfo, action.payload],
      };
    default:
      return state;
  }
};
