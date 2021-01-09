import { combineReducers } from "redux";
import userList from "./reducer-user-list";
import selectedUser from "./reducer-selected-user";
import bookList from './reducer-selected-book';

/**
 * Combining all the reducers to form 1 big reducer.
 * This will be further used to create the store.
 */
export const allReducers = combineReducers({
  userList,
  selectedUser,
  bookList
});
