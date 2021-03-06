import React, { useReducer } from "react";
import axios from "axios";
import UserInfoContext from "./userInfoContext";
import userInfoReducer from "./userInfoReducer";
import {
  ADD_INFO,
  GET_USER_INFO,
  DELETE_INFO,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_INFO,
  FILTER_INFO,
  CLEAR_USER_INFO,
  CLEAR_FILTER,
  USER_ERROR,
  FILTER_CATEGORY,
  GET_ALL_BUSINESSES,
} from "../types";

const UserInfoState = (props) => {
  const initialState = {
    userInfo: null,
    current: null,
    filtered: null,
    error: null,
    users: null,
  };
  const [state, dispatch] = useReducer(userInfoReducer, initialState);

  //  Get user info
  const getUserInfo = async () => {
    try {
      const res = await axios.get("/api/places");
      dispatch({
        type: GET_USER_INFO,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err.response.msg,
      });
    }
  };
  //  Get info
  const getAllBusinesses = async () => {
    try {
      const res = await axios.get("/api/places/all");
      dispatch({
        type: GET_ALL_BUSINESSES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err.response.msg,
      });
    }
  };

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
  // Update info
  const updateInfo = async (user) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(`/api/places/${user._id}`, user, config);
      dispatch({
        type: UPDATE_INFO,
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
  const deleteUser = async (id) => {
    try {
      await axios.delete(`/api/places/${id}`);
      dispatch({
        type: DELETE_INFO,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Clear UserInfo
  const clearUserInfo = () => {
    dispatch({
      type: CLEAR_USER_INFO,
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

  // Filter info
  const filterInfo = (text) => {
    dispatch({ type: FILTER_INFO, payload: text });
  };
  // Filter categories
  const filterCategory = (option) => {
    dispatch({
      type: FILTER_CATEGORY,
      payload: option,
    });
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
        users: state.users,
        addUserInfo,
        deleteUser,
        setCurrent,
        clearCurrent,
        updateInfo,
        clearFilter,
        filterInfo,
        getUserInfo,
        getAllBusinesses,
        clearUserInfo,
        filterCategory,
      }}
    >
      {props.children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoState;
