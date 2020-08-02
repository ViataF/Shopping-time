import React, { useEffect, useContext } from "react";
import UserForm from "../Userinfo/UserForm";
import UsersInfo from "../Userinfo/UserInfo";
import AuthContext from "../../context/auth/authContext";

import "./Users.css";
const Users = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="users">
      <h3 className="business-card">Your Business Card</h3>
      <UsersInfo />
      <UserForm />
    </div>
  );
};

export default Users;
