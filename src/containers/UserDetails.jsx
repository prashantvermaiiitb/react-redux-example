import React, { Component } from "react";
import { connect } from "react-redux";
import User from "../components/User";
import "./UserDetails.css";

/**
 * User Details component
 */
class UserDetails extends Component {
  /**
   * Render method for the user details
   */
  render() {
    // console.log(`selected user in userDetails..`, this.props.selectedUser);
    return (
      <div className="h50">
        {/* <hr /> */}
        {this.props.selectedUser == null ? (
          <div>
            <div className="error-msg">
              Please select a user to view the details.
            </div>
          </div>
        ) : (
          <User user={this.props.selectedUser} />
        )}
      </div>
    );
  }
}

/**
 * Mapping the selectedUser in the store so that can be used by the component further.
 * @param {*} store
 */
function selectedUserFromStore(store) {
  return {
    selectedUser: store.selectedUser,
  };
}
/**
 * Decorator for connecting store with State & Component
 */
export default connect(selectedUserFromStore)(UserDetails);
