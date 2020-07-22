import React, { useState, useContext, useEffect } from "react";

import UserInfoContext from "../../context/user_info/userInfoContext";

const UserForm = () => {
  const userInfoContext = useContext(UserInfoContext);

  const { addUserInfo, updateInfo, clearCurrent, current } = userInfoContext;

  useEffect(() => {
    if (current !== null) {
      setUserInfo(current);
    } else {
      setUserInfo({
        name: "",
        email: "",
        phone: "",
      });
    }
  }, [userInfoContext, current]);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = userInfo;

  const onChange = (e) =>
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addUserInfo(userInfo);
    } else {
      updateInfo(userInfo);
    }
    clearAll();
  };
  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="white-text">
        {current ? "Edit Information" : "Add Information"}
      </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Categories</h5>
      <input
        type="radio"
        name="Categories"
        value="clothing"
        // checked={type === "clothing"}
      />
      categorie{" "}
      <input
        type="radio"
        name="Categories"
        value="retaurant"
        // checked={type === "shopping"}
      />
      categorie{" "}
      <div>
        <input
          type="submit"
          value={current ? "Update Information" : "Add Information"}
          className="btn"
        />
      </div>
      <select id="categorie">
        {" "}
        <option value="1">Shopping</option>
        <option value="2">2</option>
        <option value="3">three</option>
        <option value="4">four</option>
      </select>
      {current && (
        <div>
          <button className="btn" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default UserForm;
