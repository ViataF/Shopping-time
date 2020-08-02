import React, { useContext } from "react";
import PropTypes from "prop-types";
import UserInfoContext from "../../context/user_info/userInfoContext";

const UserInfoItem = ({ user }) => {
  const userInfoContext = useContext(UserInfoContext);
  const { deleteUser, setCurrent, clearCurrent } = userInfoContext;
  const {
    _id,
    name,
    email,
    phone,
    category,
    open,
    closed,
    description,
    businessName,
    address,
    logo,
    businessURL,
  } = user;

  const onDelete = () => {
    deleteUser(_id);
    clearCurrent();
  };
  return (
    <div className="card ">
      <div className="card-image">
        <img src={`${logo}`} alt="logo" />
      </div>
      <h3 className="text-primary text-left">
        {businessName}{" "}
        <span
          style={{ float: "right" }}
          className={"badge" + (email ? "badge-success" : "badge")}
        ></span>
      </h3>
      <ul className="list">
        {name && (
          <li>
            {" "}
            Name:
            {name}
          </li>
        )}
        {email && (
          <li>
            Email:
            {email}
          </li>
        )}
        {phone && <li>Phone: {phone}</li>}
        {category && (
          <li>
            category:
            {category}
          </li>
        )}
        {open && (
          <li>
            open:
            {open} - {closed}
          </li>
        )}
        {description && (
          <li>
            description:
            {description}
          </li>
        )}
        {address && (
          <li>
            address:
            {address}
          </li>
        )}
        {businessURL && (
          <li>
            <a href={businessURL}> Website URL</a>
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark" onClick={() => setCurrent(user)}>
          Edit
        </button>
        <button className="btn btn-dark" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

UserInfoItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserInfoItem;
