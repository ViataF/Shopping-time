import React, { useContext, useRef, useEffect } from "react";
import UserInfoContext from "../../context/user_info/userInfoContext";
const CategorieFilter = () => {
  const userInfoContext = useContext(UserInfoContext);
  const text = useRef("");

  const { filterInfo, clearFilter, filtered } = userInfoContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterInfo(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter info..."
        onChange={onChange}
      />
    </form>
  );
};

export default CategorieFilter;
