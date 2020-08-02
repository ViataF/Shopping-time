import React from "react";
import CategorieFilter from "../Userinfo/CategorieFilter";
import AllBusinessInfo from "../Userinfo/AllBusinessInfo";
import "./Shops.css";

const Shops = () => {
  return (
    <div>
      <CategorieFilter />
      <h3 className="shops">All Shops</h3>
      <AllBusinessInfo />
    </div>
  );
};

export default Shops;
