// users-api.js

// this is the base path of the Express route we'll define
const BASE_URL = "/api/users";

export async function signUp(userData) {
  // fetch uses an options object as a second argument to make requests
  // other than basic GET requests, include data, headers, etc.
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // fetch requires data payloads to be "stringified"
    // and assigned to a body property on the options object
    body: JSON.stringify(userData),
  });
  // check if request was successful
  if (res.ok) {
    // res.json() will resolve to JWT
    return res.json();
  } else {
    throw new Error("Invalid Sign Up");
  }
}
