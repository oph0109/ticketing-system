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
  const userRole = useRef('');

  // useEffect(async () => {
  //   if (sessionStorage.getItem("user_id") !== null) {
  //     setSignedInUser(await searchForUserByUUID(sessionStorage.getItem("user_id")).name);
  //   } else {

  //   }
  // }, [])

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
          <span id="profile-name-span"><i>{signedInUser.name}</i></span>
          <span id="login-redirect"><a href="/#" onClick={() => {localStorage.getItem('logged-in') ? signOutUser() : window.location.href = LANDING_PAGE}}>{localStorage.getItem('logged-in') ? 'Sign out' : 'Log in'}</a></span>
          <img src={profileIcon} alt="Profile" width="40px" height="40px" />
        </div>
      </div>
  );
}
