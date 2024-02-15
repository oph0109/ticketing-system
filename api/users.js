//API controller js file for getting, creating, editing user information
//ENDPONT: /api/users
const BASE_API_CALL = "http://localhost:8080";
const REACT_SITE = "http://localhost:3000";

//returns array of json objects representing users - NOT USED
export async function getUsers() {
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
export default async function signupUser(formData) {
  var signupMessage = document.getElementById("signup-error");

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
      signupMessage.textContent = "Server error. Please try again later.";
      signupMessage.style.color = "red";
      return;
    });

  console.log(signupResult);

  //here we check the value of the response from the api call - User object is returned, otherwise we get 500 response
  if (signupResult.status === 500) {
    signupMessage.textContent = "User already exists.";
    signupMessage.style.color = "red";

    // Back out of function, let user try another username
    return;
  } else {
    signupMessage.textContent = "Success! Redirecting...";
    signupMessage.style.color = "green";

    window.setTimeout(function () {
      // Move to a new location or you can do something else
      //Also delays 3 seconds to make it look like its loading nicely
      window.location.href = REACT_SITE;
    }, 3000);
  }
}
