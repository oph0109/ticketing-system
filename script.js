//main js file for landing page - this will handle

//import functions from users.js file as 'users'
import signupUser from "./api/users.js";

//attaches an eventlistener to the signup button
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();

  signupUser(new FormData(e.target));
});
