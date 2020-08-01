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
            <i className="fas fa-envelope-open"></i> {name}
          </li>
        )}
        {email && (
          <li>
            Email:<i className="fas fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            Phone<i className="fas fa-envelope-open"></i> {phone}
          </li>
        )}
        {category && (
          <li>
            category:
            <i className="fas fa-envelope-open"></i> {category}
          </li>
        )}
        {open && (
          <li>
            open:
            <i className="fas fa-envelope-open"></i> {open} - {closed}
          </li>
        )}
        {description && (
          <li>
            description:
            <i className="fas fa-envelope-open"></i> {description}
          </li>
        )}
        {address && (
          <li>
            address:
            <i className="fas fa-envelope-open"></i> {address}
          </li>
        )}
        {businessURL && (
          <li>
            Website URL:
            <i className="fas fa-envelope-open"></i> {businessURL}
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
