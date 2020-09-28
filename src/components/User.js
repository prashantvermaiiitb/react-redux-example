import React from "react";
import "./User.css";

/**
 * Helper function for getting the HTML
 * @param {*} label - type of the information
 * @param {*} value - value of the information
 */
const info = (label, value) => {
  return (
    <div className="info-container">
      <span className="label">{label}:</span>
      <span className="label m-10">{value}</span>
    </div>
  );
};

/**
 * User functional component for showing the user information.
 * @param {*} props - props object passed from the UserList container
 */
const User = ({ user }) => {
  return (
    <React.Fragment>
      {Object.keys(user)
        .filter((key) => key !== "id")
        .map((key) => {
          return info(key, user[key]);
        })}
    </React.Fragment>
  );
};

export default User;
