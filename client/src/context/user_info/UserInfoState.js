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

  // Set current

  // Clear current info

  // Update info

  // Filter info

  // Clear Filter

  return (
    <UserInfoContext.Provider
      value={{
        userInfo: state.userInfo,
        addUserInfo,
      }}
    >
      {props.children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoState;
