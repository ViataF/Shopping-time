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
        businessName: "",
        description: "",
        category: "",
      });
    }
  }, [userInfoContext, current]);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    description: "",
    category: "",
  });

  const { name, email, phone, businessName, description, category } = userInfo;

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
      <input
        type="text"
        placeholder="BusinessName"
        name="businessName"
        value={businessName}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={description}
        onChange={onChange}
      />
      <h5>Categories</h5>

      <select
        id="category"
        name="category"
        value={category}
        onChange={onChange}
      >
        {" "}
        <option value="catergory">Category</option>
        <option value="1">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div>
        <input
          type="submit"
          value={current ? "Update Information" : "Add Information"}
          className="btn"
        />
      </div>
      <input type="time" id="appt" name="appt" required></input>
      <input type="time" id="appt" name="appt" required></input>
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
