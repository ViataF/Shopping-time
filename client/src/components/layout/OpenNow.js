import React from "react";

import BusinessInfo from "../Userinfo/BusinessInfo";
const OpenNow = () => {
  return (
    <div className="container-openNow">
      <div className="openNow">
        <h2 className="openNow">Open Now</h2>
        <BusinessInfo />
        <a href="/shops">Show more</a>
      </div>
    </div>
  );
};

export default OpenNow;
