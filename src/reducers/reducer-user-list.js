/**
 * Reducer that's returning the starting state for the project. These will be
 * called by the "combinereducers()" method for consolidating the json to form
 * the store. this will be returning the list of Ids only as the details are
 * being present in another file.
 */
export default function () {
  return [1, 2, 3];
}
