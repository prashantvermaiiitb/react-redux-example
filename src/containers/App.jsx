import React, { Component } from "react";
import UserList from "./UserList.jsx";
import { Provider } from "react-redux";
import { store } from "../store";
import UserDetails from "./UserDetails.jsx";
/**
 * Main container for getting the Store and percolating that data across other
 * components.
 */
export default class App extends Component {
  /**
   * Render method for the App component.
   */
  render() {
    return (
      <Provider store={store}>
        <UserList />
        <UserDetails />
      </Provider>
    );
  }
}
