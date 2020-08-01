import React, { useContext, useRef, useEffect } from "react";
import UserInfoContext from "../../context/user_info/userInfoContext";
const CategorieFilter = () => {
  const userInfoContext = useContext(UserInfoContext);
  const text = useRef("");
  const option = useRef("");

  const { filterInfo, filterCategory, clearFilter, filtered } = userInfoContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
    if (filtered === null) {
      option.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterInfo(e.target.value);
    } else if (option.current.value !== "") {
      filterCategory(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Search..."
        onChange={onChange}
      />
      <select id="category" ref={option} onChange={onChange}>
        <option value="">Select a category</option>
        <option>Shop</option>
        <option>Restaurants</option>
        <option>Accessories</option>
      </select>
    </form>
  );
};

export default CategorieFilter;
