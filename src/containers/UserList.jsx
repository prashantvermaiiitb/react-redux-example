import React, { Component } from "react";
import { connect } from "react-redux";
import User from "../components/User";

/**
 * Class representing the list of users to be shown.
 * This will be fetched from the Store and shown.
 */
class UserList extends Component {
  /**
   * creating users from the UserList passed from the Store
   */
  createUsers() {
    return this.props.users.map((user, index) => {
      return (
        <li key={index}>
          <User user={user} />
        </li>
      );
    });
  }
  /**
   * Render method for the UserList
   */
  render() {
    console.log(this.props);
    return (
      <div>
        <span>User List below</span>
        <ul>{this.createUsers()}</ul>
      </div>
    );
  }
}

/**
 * Since we need the List of the Users present in the store we need a way to
 * inject that in the Props for the component.
 * Method for injecting state in the Props for the UserList.
 * @param {*} store - store getting created / updated with user actions
 */
function getUserListFromStore(store) {
  return {
    users: store.users,
  };
}

/**
 * Since we have to connect the UserList to the store we have to connect() that
 * to the store and this will be a high order function taking UserList component
 * and returning Decorated one, along-with it will take the function where we
 * tell what part of the state to be inserted in the props.
 *
 * (1) point to note is : if we are passing only 1 parameter then dispatch will
 * be there in the props as the method. You can check that by un-commenting the
 * line for console.log() in render method
 */
export default connect(getUserListFromStore)(UserList);
