import React from "react";
import PropTypes from "prop-types";

const AllBusinessInfoItem = ({ user }) => {
  const {
    email,
    phone,
    open,
    closed,
    businessName,
    category,
    description,
    address,
    logo,
    businessURL,
  } = user;
  return (
    <div className="col s10 m5 l4">
      <div className="item">
        <div className="card ">
          <div className="card-image">
            <img src={logo} alt="Company logo" />
          </div>
          <h3 className="text-primary text-left">{businessName}</h3>
          <ul className="list">
            {open && (
              <li>
                <span>Open</span> |<i className="fas fa-envelope-open"></i>{" "}
                {open} -{closed}
              </li>
            )}
            <li className="divider"></li>
            {category && <li>{category}</li>}
            <li className="divider"></li>
            {description && (
              <li>
                <i className="fas fa-envelope-open"></i> {description}
              </li>
            )}{" "}
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
                <i className="fas fa-envelope-open"></i> {address}
              </li>
            )}
            <li className="divider"></li>
            {businessURL && (
              <li>
                <a href={businessURL} className="button">
                  See website
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

AllBusinessInfoItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default AllBusinessInfoItem;
