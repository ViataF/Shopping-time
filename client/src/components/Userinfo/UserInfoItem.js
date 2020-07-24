import React, { useContext } from "react";
import PropTypes from "prop-types";
import UserInfoContext from "../../context/user_info/userInfoContext";

const UserInfoItem = ({ user }) => {
  const userInfoContext = useContext(UserInfoContext);
  const { deleteUser, setCurrent, clearCurrent } = userInfoContext;
  const { id, name, email, phone, category } = user;

  const onDelete = () => {
    deleteUser(id);
    clearCurrent();
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={"badge" + (email ? "badge-success" : "badge")}
        ></span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-envelope-open"></i> {phone}
          </li>
        )}
        {category && (
          <li>
            <i className="fas fa-envelope-open"></i> {category}
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
