//Styles import 
import "../styles/components.css";
import profileIcon from "../images/profile-icon-favicon.png";

//API import
import {searchForUserByUUID} from "../api/react-users.js";
import {signOutUser} from "../index.js";

//Variable import
import {LANDING_PAGE, checkSession} from "../index.js";

//React import
import {useState, useEffect} from 'react';

// checkSession();

// let userInfo = {name: "Guest user"};

// console.log("user id: " + sessionStorage.getItem("user_id"));

// if (sessionStorage.getItem("user_id") !== null && sessionStorage.getItem("user_id") !== undefined) {
//   userInfo = await searchForUserByUUID(sessionStorage.getItem("user_id"));
// }

// console.log("userInfo");
// console.log(userInfo);

export default function MainNav({ homePage }) {
  const [signedInUser, setSignedInUser] = useState({});

  // useEffect(async () => {
  //   if (sessionStorage.getItem("user_id") !== null) {
  //     setSignedInUser(await searchForUserByUUID(sessionStorage.getItem("user_id")).name);
  //   } else {

  //   }
  // }, [])

  useEffect(() => {
    async function getUser() {
      checkSession();

      let userInfo = {name: "Guest user"};
  
      if (sessionStorage.getItem("user_id") !== null && sessionStorage.getItem("user_id") !== undefined) {
        userInfo = await searchForUserByUUID(sessionStorage.getItem("user_id"));
      }
  
      setSignedInUser(userInfo);
    }

    getUser();
    
  }, [])

  return (
      <div id="main-nav-bar" className="nav flex">
        <div id="main-nav-list" className="flex">
          <a href={homePage}>Home</a>
          <a href={homePage}>Ticket Search</a>
        </div>

        <div id="profile-nav-bar" className="flex">
          <span id="profile-name-span"><i>{signedInUser.name}</i></span>
          <span id="login-redirect"><a href="#" onClick={() => {localStorage.getItem('logged-in') ? signOutUser() : window.location.href = LANDING_PAGE}}>{localStorage.getItem('logged-in') ? 'Sign out' : 'Log in'}</a></span>
          <img src={profileIcon} alt="Profile" width="40px" height="40px" />
        </div>
      </div>
  );
}
