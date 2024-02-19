//API controller js file for getting, creating, editing user information
//ENDPONT: /api/users
const BASE_API_CALL = "http://localhost:8080";

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
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error: " + error);
      return error;
    });

  return signupResult;
}

export async function loginUserWithFormData(formData) {
  const loginResult = await fetch(BASE_API_CALL + "/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error: " + error);
      return error;
    });

  return loginResult;
}
