import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//signup and login page
const LANDING_PAGE = "http://localhost:5502/index.html";

//first, checks session cookie to see if value exists - if value is not null, we have a valid session already going on
//second, checks incoming URL parameters for new user uuid value (meaning user came from signup/login page)
//if either are null, we kick user back to landing page
//if we have a session active, we set a
function checkSession() {
  const USER_UUID = new URLSearchParams(window.location.search).get("uuid");

  if (getCookie("user_id") !== null) {
    console.log("cookie exists");
    sessionStorage.setItem("user_id", getCookie("user_id"));
  } else if (USER_UUID === null) {
    window.location.href = LANDING_PAGE;
  } else {
    console.log("user id found in params");
    setCookie("user_id", USER_UUID, 7);
    sessionStorage.setItem("user_id", USER_UUID);
  }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  // because unescape has been deprecated, replaced with decodeURI
  //return unescape(dc.substring(begin + prefix.length, end));
  return decodeURI(dc.substring(begin + prefix.length, end));
}

//checks for session data
checkSession();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
