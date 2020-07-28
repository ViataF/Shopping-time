import React from "react";
import PropTypes from "prop-types";

const BusinessInfoItem = ({ user }) => {
  const { name, email, phone, openTimes, category, description } = user;
  return (
    <div className="item">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span className={"badge" + (email ? "badge-success" : "badge")}></span>
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
        {description && (
          <li>
            <i className="fas fa-envelope-open"></i> {description}
          </li>
        )}
        {openTimes && (
          <li>
            <i className="fas fa-envelope-open"></i> {openTimes}
          </li>
        )}
      </ul>
    </div>
  );
};

BusinessInfoItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default BusinessInfoItem;
