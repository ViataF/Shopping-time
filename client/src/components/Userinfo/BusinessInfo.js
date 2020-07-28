import React, { useContext, Fragment, useEffect } from "react";
import BusinessInfoItem from "./BusinessInfoItem";
import UserInfoContext from "../../context/user_info/userInfoContext";
import Spinner from "../layout/Spinner";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReactOwlCarousel from "react-owl-carousel";

const UserInfo = () => {
  const userInfoContext = useContext(UserInfoContext);

  const { users, filtered, getAllBusinesses, loading } = userInfoContext;

  useEffect(() => {
    getAllBusinesses();
    // eslint-disable-next-line
  }, []);

  if (users !== [null] && users.length === 0 && !loading) {
    return <h4>Not available</h4>;
  }

  return (
    <Fragment>
      {users !== [] && !loading ? (
        <ReactOwlCarousel className="owl-theme" nav loop autoplay={true}>
          {filtered !== null
            ? filtered.map((user) => (
                <BusinessInfoItem user={user} key={user._id} />
              ))
            : users.map((user) => (
                <BusinessInfoItem user={user} key={user._id} />
              ))}
        </ReactOwlCarousel>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default UserInfo;
