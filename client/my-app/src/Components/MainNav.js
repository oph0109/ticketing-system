import "../styles/components.css";
import profileIcon from "../images/profile-icon-favicon.png";

export default function MainNav({ homePage }) {
  return (
    <>
      <div id="main-nav-bar" className="nav flex">
        <div id="main-nav-list" className="flex">
          <a href={homePage}>Home</a>
          <a href={homePage}>Ticket Search</a>
        </div>

        <div id="profile-nav-bar" className="flex">
          <img src={profileIcon} alt="Profile" width="40px" height="40px" />
        </div>
      </div>
    </>
  );
}
