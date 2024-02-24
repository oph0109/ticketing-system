//API controller js file for getting, creating, editing user information
//ENDPONT: /api/users
const BASE_API_CALL = "http://10.0.0.151:8080";

//returns array of json objects representing users - NOT USED
export default async function getUsers() {
  const users = await fetch(BASE_API_CALL + "/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  return users;
}

//takes the form data from the submitted HTML form and creates an api call using fetchAPI to Spring server
//formData is a FormData object - must be this way because submitting a form straight from HTMl does not allow for response handling/redirecting
export async function signupUserWithFormData(formData) {
  const signupResult = await fetch(BASE_API_CALL + "/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("Error!");
      return { status: 502 };
    });

  return signupResult;
}

/**
 * basically a copy of the above signup call, except we see if user exists with the given credentials
 *  returns a json with status 200 if good, otherwise json with status 400 for bad request for some reason
 */

export async function loginUserWithFormData(formData) {
  console.log("flow");
  const loginResult = await fetch(BASE_API_CALL + "/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
  .catch((error) => {
    return {status: 502};
  });
  // .then((response) => {
  //   return response.json();
  // });
  if (loginResult.status === 200) {
    return loginResult.json();
  }

  return loginResult;
}
