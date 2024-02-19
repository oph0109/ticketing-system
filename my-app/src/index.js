import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { searchForUserByUUID } from "./api/react-users.js";

//signup and login page
const LANDING_PAGE = "http://localhost:5502/index.html";

/* Session Handler Logic
First checks for a query parameter containing a valid uuid - if it finds one, this is prioritized
as it means a user has just signed up or logged in - overwrites any current session data
Second, if uuid is not found in url we check for a valid session cookie. If this is found, we let the user stay
Third statement means user has not logged in or signed up recently so we boot them back to landing page */
function checkSession() {
  const USER_UUID = new URLSearchParams(window.location.search).get("uuid");

  console.log(USER_UUID);

  //SESSION HANDLER LOGIC
  if (USER_UUID !== undefined && USER_UUID !== null) {
    //user just logged in or signed up, create a cookie
    setCookie("user_id", USER_UUID);
    sessionStorage.setItem("user_id", USER_UUID);
  } else if (
    getCookie("user_id") !== null &&
    userExistsInDB(getCookie("user_id"))
  ) {
    console.log("cookie exists!");
    sessionStorage.setItem("user_id", getCookie("user_id"));
  } else {
    window.location.href = LANDING_PAGE;
  }

  //OLD SESSION HANDLER - OUTDATED - WAS SHIT
  /* if (getCookie("user_id") !== undefined && userExistsInDB(USER_UUID)) {
    console.log("cookie exists");
    sessionStorage.setItem("user_id", getCookie("user_id"));
  } else if (USER_UUID !== null) {
    console.log("user id found in params");
    setCookie("user_id", USER_UUID, 7);
    sessionStorage.setItem("user_id", USER_UUID);
  } else {
    window.location.href = LANDING_PAGE;
  } */
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
  var dc = document.cookie;
  console.log(dc);
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
  console.log(decodeURI(dc.substring(begin + prefix.length, end)));
  return decodeURI(dc.substring(begin + prefix.length, end));
}

async function userExistsInDB(uuid) {
  const searchResult = await searchForUserByUUID(uuid);

  console.log(searchResult);

  return searchResult.status === 200 ? true : false;
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
