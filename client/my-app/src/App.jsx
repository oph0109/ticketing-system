//Components import
import MainNav from "./Components/MainNav.jsx";
import TicketList from "./Components/TicketList.jsx";

//CSS import
import "./App.css";

//React import
import React from "react";

const HOME_PAGE = "http://localhost:3000";


function App() {
  //OLD --- const [tickets, setTickets] = useState(ticketsFetch);
  return (
    <>
      <MainNav homePage={HOME_PAGE} />

      <TicketList />
    </>
  );
}

export default App;
