//Components import
import MainNav from "./Components/MainNav.jsx";
import TicketList from "./Components/TicketList.jsx";

//CSS import
import "./App.css";

//React import
import React, {useState} from "react";

const HOME_PAGE = "http://localhost:3000";


function App() {
  const [userLoggingIn, setUserLoggingIn] = useState(false);

  function toggleSetUserLoggingIn() {
    setUserLoggingIn(true);
  }

  return (
    <>
      <MainNav homePage={HOME_PAGE} toggleForm={toggleSetUserLoggingIn}/>

      <TicketList />
    </>
  );
}

export default App;
