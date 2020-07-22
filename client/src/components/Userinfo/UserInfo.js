import React, { useContext, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import UserInfoItem from "./UserInfoItem";
import UserInfoContext from "../../context/user_info/userInfoContext";

const UserInfo = () => {
  const userInfoContext = useContext(UserInfoContext);

  const { userInfo, filtered } = userInfoContext;

  if (userInfo.length === 0) {
    return <h4>Please add your business information</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((user) => (
              <CSSTransition key={user.id} timeout={500} classNames="item">
                <UserInfoItem user={user} />
              </CSSTransition>
            ))
          : userInfo.map((user) => (
              <CSSTransition key={user.id} timeout={500} classNames="item">
                <UserInfoItem user={user} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default UserInfo;
