import React, { useContext, useRef, useEffect } from "react";
import UserInfoContext from "../../context/user_info/userInfoContext";
const CategorieFilter = () => {
  const userInfoContext = useContext(UserInfoContext);
  const text = useRef("");
  const option = useRef(null)

  const { filterInfo,filterCategory, clearFilter, filtered } = userInfoContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";

    }
    if (filtered === null) {
      option.current.value = "1"
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterInfo(e.target.value);
    } 
    else if(option.current.value !== null){
      filterCategory(e.target.value)
    }else {
      clearFilter()
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
      <select id="category" ref={option} onChange={onChange}>
        {" "}
        <option >2</option>

      </select>
    </form>
  );
};

export default CategorieFilter;
