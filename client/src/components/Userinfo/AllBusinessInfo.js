import React, { useContext, Fragment, useEffect } from "react";
import AllBusinessInfoItem from "./AllBusInfoItem";
import UserInfoContext from "../../context/user_info/userInfoContext";
import Spinner from "../layout/Spinner";

const AllBusinessInfo = () => {
  const userInfoContext = useContext(UserInfoContext);

  const { users, filtered, getAllBusinesses, loading } = userInfoContext;

  useEffect(() => {
    getAllBusinesses();
    // eslint-disable-next-line
  }, []);

  if (users !== null && users.length === 0 && !loading) {
    return <h4>Not available</h4>;
  }

  return (
    <Fragment>
      {users !== null && !loading ? (
        <div className="row">
          {filtered !== null
            ? filtered.map((user) => (
                <AllBusinessInfoItem user={user} key={user._id} />
              ))
            : users
                .sort((a, b) => {
                  let nameA = a.businessName.toUpperCase(); // ignore upper and lowercase
                  let nameB = b.businessName.toUpperCase(); // ignore upper and lowercase
                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }

                  // names must be equal
                  return 0;
                })
                .map((user) => (
                  <AllBusinessInfoItem user={user} key={user._id} />
                ))}
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default AllBusinessInfo;
