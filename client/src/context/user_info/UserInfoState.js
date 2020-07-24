import React, { useReducer } from "react";
import axios from "axios";
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
  USER_ERROR,
} from "../types";

const UserInfoState = (props) => {
  const initialState = {
    userInfo: [],
    current: null,
    filtered: null,
    error: null,
  };
  const [state, dispatch] = useReducer(userInfoReducer, initialState);

  //  Add info
  const addUserInfo = async (userInfo) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/places", userInfo, config);
      dispatch({
        type: ADD_INFO,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err.response.msg,
      });
    }
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
  const filterInfo = (text, radio) => {
    dispatch({ type: FILTER_INFO, payload: text && radio });
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
        error: state.error,
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
