import {
  ADD_INFO,
  DELETE_INFO,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_INFO,
  FILTER_INFO,
  CLEAR_FILTER,
  USER_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_INFO:
      return {
        ...state,
        userInfo: [...state.userInfo, action.payload],
      };
    case UPDATE_INFO:
      return {
        ...state,
        userInfo: state.userInfo.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case DELETE_INFO:
      return {
        ...state,
        userInfo: state.userInfo.filter((user) => user.id !== action.payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_INFO:
      return {
        ...state,
        filtered: state.userInfo.filter((user) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            user.name.match(regex) ||
            user.email.match(regex) ||
            user.category.match(regex)
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
