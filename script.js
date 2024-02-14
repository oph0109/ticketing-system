const prod = false;

if (!prod) {
  const BASE_API_CALL = "http://localhost:8080";
  const MAIN_SITE = "http://localhost:5502/index.html"
}

//attaches an eventlistener to the signup button 
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();

  signupUser(new FormData(e.target));
});

//takes the form data from the 
async function signupUser(formData) {
  const signupResult = await fetch(BASE_API_CALL + "/users/insert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  }).then((response) => response.json());

  var signupMessage = document.getElementById("signup-error");

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
      window.location.href = MAIN_SITE;
    }, 3000);
  }
}
