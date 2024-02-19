//main js file for landing page - this will handle
const REACT_SITE = "http://localhost:3000";

//import functions from users.js file as 'users'
import signupSingleUserWithFormData from "./api/users.js";

//attaches an eventlistener to the signup button
// document.getElementById("signup-form").addEventListener("submit", (e) => {
//   e.preventDefault();

//   signupUser(new FormData(e.target));
// });

async function signupUser(formData) {
  const signupResult = await signupSingleUserWithFormData(formData);
  var signupMessage = document.getElementById("signup-error");

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

    console.log(signupResult.uuid);

    window.setTimeout(function () {
      // Move to a new location or you can do something else
      //Also delays 3 seconds to make it look like its loading nicely
      window.location.href = "http://localhost:3000/?uuid=" + signupResult.uuid;
    }, 3000);
  }
}

// Get the modal
const modal = document.getElementById('signup-modal');

// Get the button that opens the modal
const btn = document.getElementById("signup-btn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


