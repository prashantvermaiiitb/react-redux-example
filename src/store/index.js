import { createStore } from "redux";
import { allReducers } from "../reducers";

/**
 * Creating the store using the allReducers and exporting that to the App.
 * This will be used by the <Provider> to be passed on to the remaining part
 * of the applications
 */
export const store = createStore(allReducers);
