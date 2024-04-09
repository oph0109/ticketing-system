//Styles import 
import "../styles/components.css";
import profileIcon from "../images/profile-icon-favicon.png";

//API import
import {searchForUserByUUID} from "../api/react-users.js";
import {signOutUser, checkSession} from "../index.js";

//Variable import
import {LANDING_PAGE} from "../index.js";

//React import
import {useState, useEffect, useRef} from 'react';

export default function MainNav({ homePage }) {
  const [signedInUser, setSignedInUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userRole = useRef('');

  useEffect(() => {
    checkSession();

    async function getUser() {
      let userInfo = {name: "Guest user"};
  
      if (sessionStorage.getItem("user_id") !== null && sessionStorage.getItem("user_id") !== undefined) {
        userInfo = await searchForUserByUUID(sessionStorage.getItem("user_id"));
      }
  
      setSignedInUser(userInfo);
    }

    getUser();
  }, [])
  
  useEffect(() => {
    console.log('what the fuck is this value ' + sessionStorage.getItem('logged-in'));
    let boolLoggedIn = sessionStorage.getItem('logged-in') === "true";
    console.log(boolLoggedIn);
    setIsLoggedIn(boolLoggedIn);
    console.log('set logged in state to ' + isLoggedIn);
  }, [isLoggedIn])

  useEffect(() => {
    function setUserRole() {
      if (signedInUser.role) {
        userRole.current = signedInUser.role;
      } else {
        userRole.current = 'GUEST';
      }

      console.log('Role: ' + userRole.current);
    }

    setUserRole();
  }, [signedInUser])

  return (
      <div id="main-nav-bar" className="nav flex">
        <div id="main-nav-list" className="flex">
          <a href={homePage}>Home</a>
          <a href={homePage}>Ticket Search</a>
        </div>

        <div id="profile-nav-bar" className="flex">
          <span id="profile-name-span"><i>{isLoggedIn ? signedInUser.name : "Guest user"}</i></span>
          {/* OLD --- <span id="login-redirect"><a href="/#" onClick={() => {isLoggedIn ? signOutUser() : window.location.href = LANDING_PAGE}}>{isLoggedIn ? 'Sign out' : 'Log in'}</a></span> */}
          <span id="login-redirect">
            {console.log("loggedin?" + isLoggedIn)}
            {isLoggedIn ? <button className="login-signup-button" onClick={() => {
              signOutUser()
              setIsLoggedIn(false);
            }}>Sign out</button> : <button className="login-signup-button" onClick={() => window.location.href=LANDING_PAGE}>Log in</button>}
          </span>
          <img src={profileIcon} alt="Profile" width="40px" height="40px" />
        </div>
      </div>
  );
}
