import React, { useReducer } from "react";
import { uuid as u4 } from "uuid";
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
        email: "jill@fmail.com",
        phone: "1234-123-123",
      },
    ],
  };
  const [state, dispatch] = useReducer(userInfoReducer, initialState);

  //  Add info

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
      }}
    >
      {props.children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoState;
