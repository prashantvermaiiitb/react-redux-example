import {
    USER_SELECT_ACTION,
    ACTION_TYPE,
    ACTION_PAYLOAD,
} from "../utils/AppConstants";

import { bookDetails } from "./books-details.js";

/**
 * Reducer for setting the selected user in the store.
 * @param {*} state - initial state of the user
 * @param {*} action - action passed to the reducer
 */
export default function (state = null, action) {
    const actionType = action[ACTION_TYPE];

    // console.log(`Action received in the selected user reducer...`, actionType);
    // console.log(`user selected`, action[ACTION_PAYLOAD]);

    if (actionType == USER_SELECT_ACTION) {
        return bookDetails
            .filter((book) => book.userId == action[ACTION_PAYLOAD]);
    }

    return state;
}
