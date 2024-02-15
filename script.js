const BASE_API_CALL = "http://localhost:8080";
const REACT_SITE = "http://localhost:3000";

//takes the form data from the submitted HTML form and creates an api call using fetchAPI to Spring server
//formData is a FormData object - must be this way because submitting a form straight from HTMl does not allow for response handling/redirecting
async function signupUser(formData) {
  const signupResult = await fetch(BASE_API_CALL + "/users/insert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  }).then((response) => response.json());

  var signupMessage = document.getElementById("signup-error");

  //here we check the value of the response from the api call - owen returns the string 'Saved' if successful, so we check likeness
  if (response !== "Saved") {
    signupMessage.textContent = "Bad information, try again.";
    signupMessage.style.color = "red";

    // Back out of function, let user try another username
    return;
  } else {
    signupMessage.textContent = "Success! Redirecting...";
    signupMessage.style.color = "green";

    window.setTimeout(function () {
      // Move to a new location or you can do something else
      //Also delays 3 seconds to make it look like its loading nicely
      window.location.href = MAIN_SITE;
    }, 3000);
  }
}

//attaches an eventlistener to the signup button
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();

  signupUser(new FormData(e.target));
});
