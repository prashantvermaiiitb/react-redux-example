import { combineReducers } from "redux";
import defaultUsers from "./reducer-user";

/**
 * Combining all the reducers to form 1 big reducer.
 * This will be further used to create the store.
 */
export const allReducers = combineReducers({
  users: defaultUsers,
});
