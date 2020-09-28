import {
  USER_SELECT_ACTION,
  ACTION_TYPE,
  ACTION_PAYLOAD,
} from "../utils/AppConstants";

/**
 * Action to denote the user selection, will add the type and wrap the selected
 * user in action object.
 * @param {*} user
 */
export default function selectUser(user) {
  //   console.log(`selected user `, user);
  return {
    [ACTION_TYPE]: USER_SELECT_ACTION,
    [ACTION_PAYLOAD]: user,
  };
}
