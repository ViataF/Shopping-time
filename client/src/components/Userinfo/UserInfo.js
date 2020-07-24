import React, { useContext, Fragment, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import UserInfoItem from "./UserInfoItem";
import UserInfoContext from "../../context/user_info/userInfoContext";
import Spinner from "../layout/Spinner";

const UserInfo = () => {
  const userInfoContext = useContext(UserInfoContext);

  const { userInfo, filtered, getUserInfo, loading } = userInfoContext;

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  if (userInfo !== null && userInfo.length === 0 && !loading) {
    return <h4>Please add your business information</h4>;
  }

  return (
    <Fragment>
      {userInfo !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((user) => (
                <CSSTransition key={user._id} timeout={500} classNames="item">
                  <UserInfoItem user={user} />
                </CSSTransition>
              ))
            : userInfo.map((user) => (
                <CSSTransition key={user._id} timeout={500} classNames="item">
                  <UserInfoItem user={user} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default UserInfo;
