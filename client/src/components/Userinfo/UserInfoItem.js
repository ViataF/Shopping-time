import React from "react";
import PropTypes from "prop-types";

const UserInfoItem = ({ user }) => {
  const { id, name, email, phone } = user;
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
      </ul>
      <p>
        <button className="btn btn-dark">Edit</button>
        <button className="btn btn-dark">Delete</button>
      </p>
    </div>
  );
};

UserInfoItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserInfoItem;
