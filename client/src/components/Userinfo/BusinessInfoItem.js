import React from "react";
import PropTypes from "prop-types";

const BusinessInfoItem = ({ user }) => {
  const {
    email,
    phone,
    open,
    closed,
    businessName,
    category,
    address,
    logo,
  } = user;
  return (
    <div className="item">
      <div className="card">
        <div className="card-image">
          <img src={logo} alt="Company logo" />
        </div>
        <h3 className="text-primary text-left">{businessName}</h3>
        <ul className="list">
          {open && (
            <li>
              <span>Open</span> |<i className="fas fa-envelope-open"></i> {open}{" "}
              -{closed}
            </li>
          )}
          <li className="divider"></li>
          {category && <li>{category}</li>}
          <li className="divider"></li>
          {email && (
            <li>
              <i className="material-icons">email</i> {email}
            </li>
          )}
          {phone && (
            <li>
              <i className="material-icons">phone</i> {phone}
            </li>
          )}
          <li className="divider"></li>
          {address && (
            <li>
              <span> Location:</span>
              <i className="fas fa-envelope-open"></i> {address}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

BusinessInfoItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default BusinessInfoItem;
