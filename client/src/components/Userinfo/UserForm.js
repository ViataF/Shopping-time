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
        open: "",
        closed: "",
        address: "",
        businessURL: "",
        logo: "",
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
    open: "",
    closed: "",
    address: "",
    businessURL: "",
    logo: "",
  });

  const {
    name,
    email,
    phone,
    businessName,
    description,
    category,
    open,
    closed,
    address,
    businessURL,
    logo,
  } = userInfo;

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
      <label>Name</label>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />{" "}
      <label>Name</label>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />{" "}
      <label>Name</label>
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />{" "}
      <label>Name</label>
      <input
        type="text"
        placeholder="BusinessName"
        name="businessName"
        value={businessName}
        onChange={onChange}
      />{" "}
      <label>Name</label>
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={description}
        onChange={onChange}
      />{" "}
      <label>Name</label>
      <input
        type="text"
        placeholder="Address"
        name="address"
        value={address}
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
        <option value="Shop">Shop</option>
        <option value="Restaurant">Restaurant</option>
        <option value="Accessories">Accessories</option>
      </select>
      <div name="open" onChange={onChange}>
        <label>Open time</label>
        <input
          type="time"
          id="appt"
          name="open"
          value={open}
          onChange={onChange}
          required
        />
        <label htmlFor="">Close time</label>
        <input
          type="time"
          id="appt"
          name="closed"
          required
          value={closed}
          onChange={onChange}
        />
        <label htmlFor="">Website URL (optional)</label>
        <input
          type="url"
          id="URL"
          name="businessURL"
          required
          value={businessURL}
          onChange={onChange}
        />
        <label htmlFor="">Logo</label>
        <input
          type="url"
          id="logo"
          name="logo"
          required
          value={logo}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type="submit"
          value={current ? "Update Information" : "Add Information"}
          className="btn"
        />
      </div>
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
