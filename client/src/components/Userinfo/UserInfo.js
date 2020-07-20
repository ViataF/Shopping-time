import React, { useContext, Fragment } from "react";
import UserInfoItem from "./UserInfoItem";
import UserInfoContext from "../../context/user_info/userInfoContext";

const UserInfo = () => {
  const userInfoContext = useContext(UserInfoContext);

  const { userInfo } = userInfoContext;

  return (
    <Fragment>
      {userInfo.map((user) => (
        <UserInfoItem key={user.id} user={user} />
      ))}
    </Fragment>
  );
};

export default UserInfo;
