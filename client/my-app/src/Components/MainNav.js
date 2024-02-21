import "../styles/components.css";

export default function MainNav({ homePage }) {
  return (
    <nav id="main-nav-bar" className="nav">
        <ul id="main-nav-list" className="flex">
            <li><a href={homePage}>Home</a></li>
            <li><a href={homePage}>Ticket Search</a></li>
        </ul>

        <ul id="profile-nav-bar">
            <li><img src="./images/profile-icon.png" alt="Profile" width="40px" height="40px"/></li>
        </ul>
    </nav>
  );
}
