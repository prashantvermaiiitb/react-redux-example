import React, { Component } from "react";
import UserList from "./UserList.jsx";
import { Provider } from "react-redux";
import { store } from "../store";
import UserDetails from "./UserDetails.jsx";
import BookList from "./BookList.js";
import CommentList from './CommentList';
import './App.css';
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
        <div className="container">
          <div className="left_panel">
            <UserList />
            <UserDetails />
          </div>
          <div className="right_panel">
            <BookList />
            <CommentList />
          </div>
        </div>
      </Provider >
    );
  }
}
