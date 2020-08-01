import React, { useContext, Fragment, useEffect } from "react";
import BusinessInfoItem from "./BusinessInfoItem";
import UserInfoContext from "../../context/user_info/userInfoContext";
import Spinner from "../layout/Spinner";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReactOwlCarousel from "react-owl-carousel";

const BusinessInfo = () => {
  const userInfoContext = useContext(UserInfoContext);

  const { users, filtered, getAllBusinesses, loading } = userInfoContext;

  useEffect(() => {
    getAllBusinesses();
    // eslint-disable-next-line
  }, []);

  if (users !== null && users.length === 0 && !loading) {
    return <h4>Not available</h4>;
  }

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    loop: true,
    autoplay: true,
    // navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1500: {
        items: 5,
      },
    },
  };
  return (
    <Fragment>
      {users !== null && !loading ? (
        <ReactOwlCarousel className="owl-theme" {...options}>
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

export default BusinessInfo;
