import React from "react";
import "./User.css";

/**
 * Helper function for getting the HTML
 * @param {*} label - type of the information
 * @param {*} value - value of the information
 */
const printUserDetail = (index, label, value) => {
  return (
    <div key={index} className="info-container">
      {label === "img" ? (
        <img style={{ width: "100%" }} src={value} />
      ) : (
        <>
          <span className="label">{label}:</span>
          <span className="label m-10">{value}</span>
        </>
      )}
    </div>
  );
};

/**
 * Generating the user information
 * @param {*} user - user data
 */
const getUsers = (user) => {
  return (
    <React.Fragment>
      {Object.keys(user)
        .filter((key) => key !== "id")
        .map((key, index) => {
          return printUserDetail(index, key, user[key]);
        })}
    </React.Fragment>
  );
};

/**
 * User functional component for showing the user information.
 * @param {*} props - props object passed from the UserList container
 */
const User = ({ user, userId }) => {
  return typeof userId !== "undefined" ? (
    <span>User{userId}</span>
  ) : (
    getUsers(user)
  );
};

export default User;
