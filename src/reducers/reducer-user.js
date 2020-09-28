/**
 * Reducer that's returning the starting state for the project. These will be
 * called by the "combinereducers()" method for consolidating the json to form
 * the store.
 */
export default function () {
  return [
    {
      id: 1,
      firstname: "Shiv",
      lastname: "Shankar",
      address: "Greater Kailash, New-Delhi",
    },
    {
      id: 2,
      firstname: "Ram",
      lastname: "Kumar",
      address: "Ayodhya, Uttar Pradesh",
    },
    {
      id: 3,
      firstname: "Indra",
      lastname: "Dev",
      address: "Indrapuri, Madhya Pradesh",
    },
  ];
}
