import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import UserInfoContext from "./userInfoContext";
import userInfoReducer from "./userInfoReducer";
import {
  ADD_INFO,
  DELETE_INFO,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_INFO,
  FILTER_INFO,
  CLEAR_FILTER,
} from "../types";

const UserInfoState = (props) => {
  const initialState = {
    userInfo: [
      {
        id: 1,
        name: "jack and jill",
        email: "jill@gmail.com",
        phone: "1234-123-123",
      },
      {
        id: 2,
        name: "jack and jill",
        email: "jack@gmail.com",
        phone: "1234-123-123",
      },
    ],
    current: null,
    filtered: null,
  };
  const [state, dispatch] = useReducer(userInfoReducer, initialState);

  //  Add info
  const addUserInfo = (userInfo) => {
    userInfo.id = uuid();
    dispatch({
      type: ADD_INFO,
      payload: userInfo,
    });
  };

  //  Delete info
  const deleteUser = (id) => {
    dispatch({
      type: DELETE_INFO,
      payload: id,
    });
  };

  // Set current
  const setCurrent = (user) => {
    dispatch({
      type: SET_CURRENT,
      payload: user,
    });
  };
  // Clear current info
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };
  // Update info
  const updateInfo = (user) => {
    dispatch({
      type: UPDATE_INFO,
      payload: user,
    });
  };
  // Filter info
  const filterInfo = (text) => {
    dispatch({ type: FILTER_INFO, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  return (
    <UserInfoContext.Provider
      value={{
        userInfo: state.userInfo,
        current: state.current,
        filtered: state.filtered,
        addUserInfo,
        deleteUser,
        setCurrent,
        clearCurrent,
        updateInfo,
        clearFilter,
        filterInfo,
      }}
    >
      {props.children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoState;
