import React, { Component } from "react";
import { connect } from "react-redux";
import User from "../components/User";
import selectUser from "../actions/user-select";
import "./UserList.css";
/**
 * Class representing the list of users to be shown.
 * This will be fetched from the Store and shown.
 */
class UserList extends Component {
  /**
   * creating users from the UserList passed from the Store
   * To re-iterate we have not passed the 'matchDispatchToProps' in the
   * connect() method so will be using Props.dispatch for putting the action
   * generated in the redux life-cycle.
   */
  createUsers() {
    return this.props.userList.map((userId, index) => {
      return (
        <li key={index} onClick={() => this.props.dispatch(selectUser(userId))}>
          <User userId={userId} />
        </li>
      );
    });
  }
  /**
   * Render method for the UserList1
   */
  render() {
    // console.log(this.props);
    return (
      <div className="main-container">
        <span style={{ textDecoration: "underline" }}>User List below</span>
        <ul style={{ listStyle: "none", padding: 0 }}>{this.createUsers()}</ul>
      </div>
    );
  }
}

/**
 * Since we need the List of the Users present in the store we need a way to
 * inject that in the Props for the component.
 * Method for injecting state in the Props for the UserList.
 * mapStateToProps(state, [ownProps]) => stateProps
 * This argument is a function that returns either a plain object or another function.
 * @param {*} store - store getting created / updated with user actions
 */
function getUserListFromStore(store, ownProps) {
  // console.log('ownProps : ',ownProps)
  return {
    userList: store.userList,
  };
}

/**
 * Since we have to connect the UserList to the store we used connect() and this
 * will be a high order function taking UserList component and returning
 * Decorated one, along-with it will take the function where we tell what part
 * of the state to be inserted in the props.
 *
 * (1) point to note is : if we are passing only 1 parameter then dispatch will
 * be there in the props as the method. You can check that by un-commenting the
 * line for console.log() in render() method
 *
 * (2) Check how the dispatch(<action-method>) is being used for passing on the
 * data to the store. connect([mapStateToProps], [mapDispatchToProps],
 * [mergeProps],[options])
 *
 * (3) mapDispatchToProps(dispatch, [ownProps]) => dispatchProps 
 * 3.1 passing nothing -> dispatch will be put in props 
 * 3.2 passing Object -> dispatch will treat each function in object as action creator and 
 * wrap each of the functions in the Object. 
 * 3.3 passing function -> this will be using bindActionCreator()
 * 3.4 
 */
export default connect(getUserListFromStore)(UserList);
