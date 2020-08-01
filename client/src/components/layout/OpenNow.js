import React from "react";

import BusinessInfo from "../Userinfo/BusinessInfo";
const OpenNow = () => {
  return (
    <div className="container-openNow">
      <h3 className="openNow">Open Now</h3>

      <BusinessInfo />
      <div className="button">
        <a href="/shops" className="waves-effect waves-light btn blue ">
          Show more
        </a>
      </div>
    </div>
  );
};

export default OpenNow;
